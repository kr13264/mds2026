#!/usr/bin/env python3
"""
validate_tokens.py
──────────────────
BON UI 컬러 토큰 사용 검증 스크립트

사용법:
  python scripts/validate_tokens.py
  python scripts/validate_tokens.py --fix      # 하드코딩 색상 경고
  python scripts/validate_tokens.py --verbose  # 상세 출력
"""

import re
import sys
import os
import argparse
from pathlib import Path
from typing import NamedTuple

# ── 설정 ─────────────────────────────────────────────────────────────────────

SCAN_DIRS = ["src"]
SCAN_EXTENSIONS = [".tsx", ".ts", ".css", ".mdx"]

# 하드코딩 색상 감지 패턴
HARDCODED_HEX_PATTERN = re.compile(
    r'(?<![a-zA-Z-])#([0-9a-fA-F]{3}){1,2}\b',
)
HARDCODED_RGB_PATTERN = re.compile(
    r'rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+'
)
INLINE_STYLE_COLOR_PATTERN = re.compile(
    r'style=\{\{[^}]*color\s*:\s*["\']#[0-9a-fA-F]{3,6}["\']'
)

# 허용 목록 (Storybook 스와치, 그라디언트 등 의도적 하드코딩)
ALLOWLIST_FILES = {
    "src/stories/foundation/BonUIColors.stories.tsx",
    "src/stories/foundation/Style.stories.tsx",
    "src/stories/Home.mdx",
    "src/index.css",
}

ALLOWLIST_PATTERNS = [
    re.compile(r'//\s*ok:\s*hardcoded', re.IGNORECASE),  # // ok: hardcoded
    re.compile(r'/\*\s*bon-token-ok\s*\*/'),              # /* bon-token-ok */
]

# BON UI CSS 변수 목록 (tailwind.config.js 기준)
BON_TOKEN_PREFIXES = [
    "--neutral-",
    "--primary-",
    "--secondary-",
    "--function-",
]


# ── 데이터 클래스 ──────────────────────────────────────────────────────────────

class Violation(NamedTuple):
    file: str
    line: int
    col: int
    kind: str
    snippet: str


# ── 유틸 ──────────────────────────────────────────────────────────────────────

def is_allowlisted(filepath: str, line_content: str) -> bool:
    rel = filepath.replace("\\", "/")
    if any(rel.endswith(f) for f in ALLOWLIST_FILES):
        return True
    return any(p.search(line_content) for p in ALLOWLIST_PATTERNS)


def scan_file(filepath: Path) -> list[Violation]:
    violations = []
    rel = str(filepath).replace("\\", "/")
    lines = filepath.read_text(encoding="utf-8", errors="ignore").splitlines()

    for i, line in enumerate(lines, 1):
        if is_allowlisted(rel, line):
            continue

        # HEX 색상 체크
        for m in HARDCODED_HEX_PATTERN.finditer(line):
            violations.append(Violation(
                file=rel, line=i, col=m.start(),
                kind="hardcoded-hex",
                snippet=line.strip()[:80],
            ))

        # RGB 색상 체크
        for m in HARDCODED_RGB_PATTERN.finditer(line):
            violations.append(Violation(
                file=rel, line=i, col=m.start(),
                kind="hardcoded-rgb",
                snippet=line.strip()[:80],
            ))

        # inline style color 체크
        for m in INLINE_STYLE_COLOR_PATTERN.finditer(line):
            violations.append(Violation(
                file=rel, line=i, col=m.start(),
                kind="inline-style-color",
                snippet=line.strip()[:80],
            ))

    return violations


def check_tokens_defined(css_file: Path) -> list[str]:
    """theme.css 또는 index.css에서 정의된 CSS 변수 확인"""
    if not css_file.exists():
        return []
    content = css_file.read_text(encoding="utf-8", errors="ignore")
    undefined = []
    for prefix in BON_TOKEN_PREFIXES:
        pattern = re.compile(rf'var\({re.escape(prefix)}[a-z0-9-]+\)')
        vars_used = pattern.findall(content)
        for var in vars_used:
            token = var[4:-1]  # var(--xxx) → --xxx
            if token not in content:
                undefined.append(token)
    return undefined


# ── 메인 ──────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(description="BON UI 토큰 사용 검증")
    parser.add_argument("--fix", action="store_true", help="수정 가이드 출력")
    parser.add_argument("--verbose", action="store_true", help="상세 출력")
    parser.add_argument("--dir", default=".", help="프로젝트 루트 경로")
    args = parser.parse_args()

    root = Path(args.dir)
    all_violations: list[Violation] = []

    print("🔍 BON UI 토큰 검증 시작...")
    print(f"   루트: {root.resolve()}\n")

    for scan_dir in SCAN_DIRS:
        target = root / scan_dir
        if not target.exists():
            print(f"  ⚠️  디렉토리 없음: {target}")
            continue

        for ext in SCAN_EXTENSIONS:
            for fp in target.rglob(f"*{ext}"):
                viols = scan_file(fp)
                if viols:
                    all_violations.extend(viols)
                    if args.verbose:
                        print(f"  ⚠️  {fp.relative_to(root)} — {len(viols)}개 위반")

    # ── 결과 출력 ────────────────────────────────────────────────────────────
    if not all_violations:
        print("✅ 모든 파일이 BON UI 토큰 규칙을 준수합니다!")
        return 0

    print(f"❌ 총 {len(all_violations)}개 위반 사항 발견\n")

    by_file: dict[str, list[Violation]] = {}
    for v in all_violations:
        by_file.setdefault(v.file, []).append(v)

    for file, viols in sorted(by_file.items()):
        print(f"📄 {file}")
        for v in viols:
            print(f"   L{v.line}:{v.col} [{v.kind}] {v.snippet}")
        print()

    if args.fix:
        print("💡 수정 가이드:")
        print("   하드코딩 색상 → BON UI CSS 변수 또는 Tailwind 토큰 클래스로 교체")
        print("   예) #6366F1 → var(--primary-background-default)")
        print("       또는 Tailwind: bg-primary-background-default")
        print()
        print("   의도적 하드코딩이면 줄 끝에 // ok: hardcoded 주석 추가")

    return 1


if __name__ == "__main__":
    sys.exit(main())
