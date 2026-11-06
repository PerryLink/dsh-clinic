#!/usr/bin/env python3
"""README visuals for dsh-clinic (docs/assets/), derived from the shipped code.

Outputs (idempotent overwrite):
  dsh-clinic-hero-{zh,en}-{light,dark}.webp   1440x576 hero banner (Pillow)
  dsh-clinic-flow-v5-{light,dark}.svg         1100x660 structure figure (hand SVG)

What the drawings are derived from (read before writing, never invented):

  doctor.mjs              --repo <path> -> package.json must exist -> build the
                          Doctor, register groups in this order: R (package
                          structure), K (cordis contract), X (host contract),
                          CC (listing checks), D (sandbox smoke, unless
                          --no-smoke). --only resolves ASCII aliases; one
                          unmatched alias exits 2 before any check runs.
  lib/framework.mjs       every check returns one of five states
                          pass / warn / skip / fail / error; skipped checks are
                          not passes; verdict worst = error > fail > warn >
                          skip > pass.
  doctor.mjs exitCodeFor  fail/error -> 1, or 4/3/5 when every bad result
                          shares the category unsupported-host / infrastructure
                          / unstable; then degraded requested group (all skip)
                          -> 6 unless --allow-degraded; else 0. Usage errors
                          are 2. The host half (plugin_doctor / /doctor) has no
                          exit code at all: the report is the whole answer.
  checks-*.mjs            the real evidence each group reads:
                            R0-R8    committed tree: package.json,
                                     cordis.patch.yml, npm pack --dry-run
                            K1-K9    src/** scan with a lib/** fallback
                                     (K10-K14 are warn-level heuristics)
                            D0-D3,D9 npm pack -> tarball -> one-shot
                                     %TEMP%\\doctor-* headless profile ->
                                     keyless boot, expecting exit 1 +
                                     dsh: MISSING_CREDENTIAL
                            CC1-CC5  certification spec v1, adp-list,
                                     dsh-catalog, omdsh, dsh-plugin-kit,
                                     compared against the workspace
                            X1-X5    the installed host surface; the whole
                                     group degrades when it is unreadable.

Design notes
------------
* Hero: a clinic intake sheet. Left column is prose (kicker / title / two value
  lines / subtitle / one meta line / footer). Right column is the tool's own
  report: a package.json specimen, the four gated measurement lanes with the
  exact evidence each one reads (plus X as a degrading supplementary line), and
  the verdict band carrying the five states and the exit-code range. No run
  result is asserted; only the contract is drawn.
* Flow: grammar = FUNNEL. A five-lane hopper (R / K / D / CC / X) sits over one
  cone: a sieve classifies every check into exactly one of five states, the
  cone computes worst-status, and the spout feeds a seven-slot exit manifold
  (0/1/2/3/4/5/6) with the real meanings. Deliberately not a row of nodes with
  arrows. The flow is token-only English, so one light/dark pair serves all
  five README languages.

Every label is measured with the same TTF that draws it (or with the Windows
fallback Chrome uses); a label that would leave its box aborts the run instead
of shipping clipped text.

Run once:  python scripts/gen-readme-assets.py
Requires:  Pillow, and Windows fonts msyh.ttc / msyhbd.ttc / consola.ttf /
           segoeui.ttf / segoeuib.ttf.
"""
from __future__ import annotations

import os
import sys

from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "docs", "assets")

HERO_W, HERO_H = 1440, 576
FLOW_W, FLOW_H = 1100, 660

FONT_CJK = r"C:\Windows\Fonts\msyh.ttc"
FONT_CJK_BOLD = r"C:\Windows\Fonts\msyhbd.ttc"
FONT_MONO = r"C:\Windows\Fonts\consola.ttf"
FONT_EN = r"C:\Windows\Fonts\segoeui.ttf"
FONT_EN_BOLD = r"C:\Windows\Fonts\segoeuib.ttf"
for _p in (FONT_CJK, FONT_CJK_BOLD, FONT_MONO, FONT_EN, FONT_EN_BOLD):
    if not os.path.exists(_p):
        sys.exit(f"FATAL: font missing: {_p}")

# Family palette + the page backgrounds fixed by the task.
SKIN = {
    "light": dict(bg_from="#f9f6fd", bg_to="#e4eaf8", card="#ffffff",
                  zone="#f5f2fc", edge="#e2dff0", text="#141419",
                  sub="#4d5261", faint="#8f94a4", accent="#4B67B4",
                  accent2="#16a34a", pill="#ece7f9", grid="#e7e4f0",
                  red="#dc2626", amber="#d97706", slate="#64748b",
                  shadow=(32, 26, 64)),
    "dark": dict(bg_from="#131a2a", bg_to="#0c1016", card="#1b2231",
                 zone="#171e2d", edge="#2e374b", text="#f0f3f9",
                 sub="#a8b1c4", faint="#737b8d", accent="#8496f5",
                 accent2="#3fb950", pill="#242d42", grid="#1e2636",
                 red="#f87171", amber="#fbbf24", slate="#94a3b8",
                 shadow=(0, 0, 0)),
}

_KINDS = {
    "cjk": FONT_CJK, "cjk_bold": FONT_CJK_BOLD, "mono": FONT_MONO,
    "en": FONT_EN, "en_bold": FONT_EN_BOLD,
}
_MEASURE = ImageDraw.Draw(Image.new("RGB", (1, 1)))


def font(size, kind="cjk_bold"):
    return ImageFont.truetype(_KINDS[kind], size)


def width(text, size, kind):
    return _MEASURE.textlength(text, font=font(size, kind))


def hx(value):
    value = value.lstrip("#")
    return tuple(int(value[i:i + 2], 16) for i in (0, 2, 4))


def ink(skin, key):
    return hx(SKIN[skin][key])


def fit_size(text, size, kind, maxw, floor):
    while size > floor and width(text, size, kind) > maxw:
        size -= 1
    return size


def must_fit(text, size, kind, maxw, where):
    w = width(text, size, kind)
    if w > maxw:
        sys.exit(f"FATAL: {where}: {text!r} needs {w:.0f}px at {size}px, "
                 f"the box allows {maxw:.0f}px. Shorten it or widen the box.")
    return w


def gradient(w, h, c1, c2):
    img = Image.new("RGB", (w, h))
    d = ImageDraw.Draw(img)
    a, b = hx(c1), hx(c2)
    for y in range(h):
        t = 0.16 * (y / h) + 0.84 * (y / h) ** 1.35
        d.line([(0, y), (w, y)],
               fill=tuple(int(p + (q - p) * t) for p, q in zip(a, b)))
    return img


def glow(img, cx, cy, radius, color, alpha):
    layer = Image.new("RGBA", img.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    steps = 11
    for i in range(steps, 0, -1):
        rr = radius * i / steps
        d.ellipse([cx - rr, cy - rr, cx + rr, cy + rr],
                  fill=color + (int(alpha * (1 - i / (steps + 1))),))
    return Image.alpha_composite(img.convert("RGBA"), layer).convert("RGB")


def shadow_card(img, box, skin, radius=22, spread=26, fill_key="card",
                outline_key="edge", outline_width=2):
    x0, y0, x1, y1 = box
    sh = Image.new("RGBA", img.size, (0, 0, 0, 0))
    sd = ImageDraw.Draw(sh)
    for i in range(spread, 0, -3):
        sd.rounded_rectangle([x0 - i // 6, y0 + i // 2, x1 + i // 6, y1 + i],
                             radius=radius + i // 6,
                             fill=SKIN[skin]["shadow"] + (int(10 * (1 - i / spread)),))
    base = Image.alpha_composite(img.convert("RGBA"),
                                 sh.filter(ImageFilter.GaussianBlur(11)))
    d = ImageDraw.Draw(base)
    d.rounded_rectangle(box, radius=radius, fill=ink(skin, fill_key),
                        outline=ink(skin, outline_key), width=outline_width)
    return base.convert("RGB")


def pill(img, xy, text, skin, size=16, kind="cjk_bold", fg="accent",
         bg="pill", pad=17):
    d = ImageDraw.Draw(img)
    f = font(size, kind)
    tw = d.textlength(text, font=f)
    x, y = xy
    h = size + 18
    d.rounded_rectangle([x, y, x + tw + pad * 2, y + h], radius=h // 2,
                        fill=ink(skin, bg))
    d.text((x + pad, y + h // 2), text, font=f, fill=ink(skin, fg),
           anchor="lm")


def tx(d, xy, text, size, kind, color, anchor="ls"):
    d.text(xy, text, font=font(size, kind), fill=color, anchor=anchor)


def page_icon(d, x, y, skin):
    accent = ink(skin, "accent")
    pillbg = ink(skin, "pill")
    d.rounded_rectangle([x, y, x + 24, y + 30], radius=5, fill=pillbg,
                        outline=accent, width=2)
    d.line([(x + 7, y + 12), (x + 17, y + 12)], fill=accent, width=2)
    d.line([(x + 7, y + 18), (x + 17, y + 18)], fill=accent, width=2)
    d.line([(x + 7, y + 24), (x + 13, y + 24)], fill=accent, width=2)


# ---------------------------------------------------------------------------
# Hero copy (zh / en). The hero is localized; all five READMEs share the same
# figure *layout*, and the structure SVG below is language-neutral.
# ---------------------------------------------------------------------------
HERO = {
    "zh": dict(
        kicker="DSH 插件检测器 · 零依赖",
        title="dsh-clinic",
        value=["能不能装、能不能起、", "进目录站会不会被拒？"],
        sub="一次运行，五态结论，七个退出码。",
        meta="R0–R8 · K1–K9 · D0–D3,D9 · CC1–CC5 · X1–X5",
        foot="Apache-2.0 · github.com/PerryLink/dsh-clinic · Node ≥24.9",
        sheet="DETECTION SHEET",
        sheet_meta="5 STATES · EXIT 0–6",
        spec_name="package.json",
        spec_pill="dsh.bundle.patch",
        spec_sub="--repo <tree | installed pkg | tarball>",
        rows=[
            dict(letter="R", name="包结构", range="R0–R8",
                 reads="package.json · patch", reads_kind="mono"),
            dict(letter="K", name="cordis 契约", range="K1–K9",
                 reads="src/** · lib/** 兜底", reads_kind="cjk"),
            dict(letter="D", name="沙箱冒烟", range="D0–D3,D9",
                 reads="tarball -> %TEMP%\\doctor-*", reads_kind="mono"),
            dict(letter="CC", name="集合站清单", range="CC1–CC5",
                 reads="5 处清单 · workspace", reads_kind="cjk"),
        ],
        x_note="宿主契约 X1–X5：读不到宿主时整组降级，不冒充通过",
        verdict="五态判定",
        verdict_exit="exit 0–6",
        verdict_note="skip 永不写成 pass",
        verdict_states=["pass", "warn", "skip", "fail", "error"],
    ),
    "en": dict(
        kicker="DSH PLUGIN DETECTOR · ZERO DEPS",
        title="dsh-clinic",
        value=["Will it install? Will it boot?", "Will the listings accept it?"],
        sub="One run, five states, seven exit codes.",
        meta="R0–R8 · K1–K9 · D0–D3,D9 · CC1–CC5 · X1–X5",
        foot="Apache-2.0 · github.com/PerryLink/dsh-clinic · Node ≥24.9",
        sheet="DETECTION SHEET",
        sheet_meta="5 STATES · EXIT 0–6",
        spec_name="package.json",
        spec_pill="dsh.bundle.patch",
        spec_sub="--repo <tree | installed pkg | tarball>",
        rows=[
            dict(letter="R", name="package", range="R0–R8",
                 reads="package.json · patch", reads_kind="mono"),
            dict(letter="K", name="cordis", range="K1–K9",
                 reads="src/** · lib/** fallback", reads_kind="mono"),
            dict(letter="D", name="sandbox", range="D0–D3,D9",
                 reads="tarball -> %TEMP%\\doctor-*", reads_kind="mono"),
            dict(letter="CC", name="listings", range="CC1–CC5",
                 reads="5 listings · workspace", reads_kind="mono"),
        ],
        x_note="host contract X1–X5: the whole group degrades when the host is unreadable",
        verdict="VERDICT",
        verdict_exit="exit 0–6",
        verdict_note="skip is never written as pass",
        verdict_states=["pass", "warn", "skip", "fail", "error"],
    ),
}
STATE_COLORS = {
    "pass": "accent2", "warn": "amber", "skip": "slate",
    "fail": "red", "error": "red",
}


def hero(lang, skin):
    s = SKIN[skin]
    H = HERO[lang]
    zh = lang == "zh"
    img = gradient(HERO_W, HERO_H, s["bg_from"], s["bg_to"])
    img = glow(img, 1190, 40, 380, ink(skin, "accent"),
               26 if skin == "light" else 40)
    img = glow(img, 120, 540, 260, ink(skin, "accent2"),
               9 if skin == "light" else 15)

    # ---- left column: kicker / title / two value lines / sub / meta / foot ----
    m, colw = 60, 580
    must_fit(H["kicker"], 17, "cjk_bold" if zh else "en_bold", colw - 40,
             "hero kicker")
    pill(img, (m, 54), H["kicker"], skin, size=17,
         kind="cjk_bold" if zh else "en_bold")

    d = ImageDraw.Draw(img)
    tsize = fit_size(H["title"], 86, "mono", colw, 44)
    if tsize < 78:
        sys.exit(f"FATAL: hero title shrank to {tsize}px (48px display floor "
                 f"at 880px width needs >=78px source)")
    d.text((m - 2, 190), H["title"], font=font(tsize, "mono"),
           fill=ink(skin, "text"), anchor="ls")

    vkind = "cjk_bold" if zh else "en_bold"
    vbase = 34 if zh else 32
    vmax = max(width(line, vbase, vkind) for line in H["value"])
    vsize = fit_size(max(H["value"], key=lambda t: width(t, vbase, vkind)),
                     vbase, vkind, colw, 28)
    if vmax > colw:
        sys.exit(f"FATAL: hero value sentence overflows: {vmax:.0f}px > {colw}px")
    vy = 276
    for line in H["value"]:
        d.text((m, vy), line, font=font(vsize, vkind), fill=ink(skin, "text"),
               anchor="ls")
        vy += int(vsize * 1.32)

    sub_kind = "cjk" if zh else "en"
    must_fit(H["sub"], 26, sub_kind, colw, "hero subtitle")
    tx(d, (m, vy + 48), H["sub"], 26, sub_kind, ink(skin, "sub"))

    must_fit(H["meta"], 20, "mono", colw, "hero meta")
    tx(d, (m, vy + 90), H["meta"], 20, "mono", ink(skin, "faint"))

    d.line([m, 492, m + colw, 492], fill=ink(skin, "grid"), width=2)
    must_fit(H["foot"], 17, "en", colw, "hero footer")
    tx(d, (m, 514), H["foot"], 17, "en", ink(skin, "faint"))

    # ---- right column: the detection sheet ----
    px0, px1, py0, py1 = 660, 1380, 52, 524
    img = shadow_card(img, (px0, py0, px1, py1), skin, radius=22)
    d = ImageDraw.Draw(img)
    ix0, ix1 = px0 + 26, px1 - 26

    tx(d, (ix0, 76), H["sheet"], 12.5, "mono", ink(skin, "accent"))
    tx(d, (ix1, 76), H["sheet_meta"], 12, "mono", ink(skin, "faint"),
       anchor="rs")

    # specimen: one package.json, the only required input
    d.rounded_rectangle([ix0, 88, ix1, 160], radius=16, fill=ink(skin, "grid"),
                        outline=ink(skin, "edge"), width=1)
    page_icon(d, ix0 + 18, 106, skin)
    tx(d, (ix0 + 58, 128), H["spec_name"], 16, "mono", ink(skin, "text"))
    pw = width(H["spec_pill"], 12.5, "mono") + 26
    d.rounded_rectangle([ix1 - 14 - pw, 100, ix1 - 14, 124], radius=12,
                        fill=ink(skin, "pill"))
    tx(d, (ix1 - 14 - pw + 13, 112), H["spec_pill"], 12.5, "mono",
       ink(skin, "accent"), anchor="lm")
    tx(d, (ix0 + 58, 148), H["spec_sub"], 12.5, "mono", ink(skin, "faint"))

    # four gated lanes: the exact evidence each group reads
    row_top, row_h = 174, 52
    for i, row in enumerate(H["rows"]):
        y = row_top + i * row_h
        if i:
            d.line([ix0, y, ix1, y], fill=ink(skin, "grid"), width=1)
        d.rounded_rectangle([ix0, y + 9, ix0 + 30, y + 39], radius=9,
                            fill=ink(skin, "pill"))
        tx(d, (ix0 + 15, y + 24), row["letter"], 15, "mono",
           ink(skin, "accent"), anchor="mm")
        name_kind = "cjk_bold" if zh else "en_bold"
        tx(d, (ix0 + 42, y + 24), row["name"], 20, name_kind,
           ink(skin, "text"), anchor="ls")
        nw = width(row["name"], 20, name_kind)
        tx(d, (ix0 + 42 + nw + 10, y + 24), row["range"], 14, "mono",
           ink(skin, "accent"), anchor="ls")
        avail = ix1 - (ix0 + 42 + nw + 10 + width(row["range"], 14, "mono") + 24)
        must_fit(row["reads"], 13.5, row["reads_kind"], avail,
                 f"hero row {row['letter']} reads")
        tx(d, (ix1, y + 24), row["reads"], 13.5, row["reads_kind"],
           ink(skin, "faint"), anchor="rs")

    # X: supplementary, allowed to degrade — drawn as a note, not a fifth lane
    tx(d, (ix0, 400), "X", 13, "mono", ink(skin, "accent"))
    tx(d, (ix0 + 20, 400), H["x_note"], 13.5, "cjk" if zh else "en",
       ink(skin, "faint"))

    # verdict band: five states, seven exit codes (the contract, not a result)
    d.rounded_rectangle([ix0, 414, ix1, 508], radius=18, fill=ink(skin, "pill"),
                        outline=ink(skin, "accent"), width=2)
    tx(d, (ix0 + 20, 438), H["verdict"], 12, "cjk_bold" if zh else "en_bold",
       ink(skin, "accent"))
    tx(d, (ix1 - 20, 438), H["verdict_exit"], 13, "mono", ink(skin, "faint"),
       anchor="rs")
    cx, cw = ix0 + 20, 120
    for name in H["verdict_states"]:
        d.rounded_rectangle([cx, 448, cx + cw, 478], radius=15,
                            fill=ink(skin, "card"), outline=ink(skin, "edge"),
                            width=1)
        d.ellipse([cx + 13, 459, cx + 21, 467],
                  fill=ink(skin, STATE_COLORS[name]))
        tx(d, (cx + 28, 463), name, 13, "mono", ink(skin, "text"), anchor="lm")
        cx += cw + 8
    tx(d, (ix0 + 20, 498), H["verdict_note"], 13,
       "cjk" if zh else "en", ink(skin, "sub"))

    name = f"dsh-clinic-hero-{lang}-{skin}.webp"
    img.save(os.path.join(OUT, name), "WEBP", quality=92, method=6)
    print(name)


# ---------------------------------------------------------------------------
# Structure figure (1100x660): a funnel. Five evidence lanes -> one cone ->
# seven exit codes. Hand-written SVG, token-only English, shared by five langs.
# ---------------------------------------------------------------------------
FLOW = {
    "light": dict(bg_from="#f9f6fd", bg_to="#e4eaf8", body="#ffffff",
                  cone="#f4f1fb", card="#ffffff", edge="#ddd9ea",
                  text="#14161d", sub="#4e5364", faint="#8b90a2",
                  accent="#4B67B4", accent2="#16a34a", grid="#e6e2f0",
                  pill="#ece7f9", red="#dc2626", amber="#d97706",
                  slate="#64748b", shadow="0.10"),
    "dark": dict(bg_from="#131a2a", bg_to="#0c1016", body="#1b2231",
                 cone="#161d2b", card="#1c2434", edge="#2e374b",
                 text="#f0f3f9", sub="#a8b1c4", faint="#737b8d",
                 accent="#8496f5", accent2="#3fb950", grid="#243046",
                 pill="#242d42", red="#f87171", amber="#fbbf24",
                 slate="#94a3b8", shadow="0.55"),
}

LANES = [
    dict(letter="R", range="R0–R8", title="package structure",
         tokens=["package.json", "cordis.patch.yml", "npm pack --dry-run"],
         tag="read-only · offline"),
    dict(letter="K", range="K1–K9", title="cordis contract",
         tokens=["src/** · lib/**", "mode: src | fallback", "K10–K14 warn"],
         tag="read-only · offline"),
    dict(letter="D", range="D0–D3,D9", title="sandbox smoke",
         tokens=["npm pack -> tarball", "%TEMP%\\doctor-*", "keyless boot"],
         tag="the only writes"),
    dict(letter="CC", range="CC1–CC5", title="listing checks",
         tokens=["certification v1", "adp-list · catalog", "omdsh · kit"],
         tag="read-only · workspace"),
    dict(letter="X", range="X1–X5", title="host contract",
         tokens=["host install", "host surface", "may degrade"],
         tag="read-only · host"),
]

STATES = [
    ("pass", "accent2"), ("warn", "amber"), ("skip", "slate"),
    ("fail", "red"), ("error", "red"),
]

EXITS = [
    ("0", "no fail/error", "warn · skip ok", "ok"),
    ("1", "fail or error", "plugin defect", "bad"),
    ("2", "usage error", "unknown group", "neutral"),
    ("3", "infra missing", "npm / pnpm", "neutral"),
    ("4", "host version", "unsupported", "neutral"),
    ("5", "unstable", "timeout / signal", "neutral"),
    ("6", "degraded", "group all-skip", "degraded"),
]

FLOW_TEXT = {
    "title": "dsh-clinic",
    "sub": "one plugin in · one verdict out — five feeds, one funnel, seven exit codes",
    "meta": "doctor.mjs · plugin_doctor · /doctor",
    "classify": "CLASSIFY · one state per check",
    "classify_note": "each check → exactly one state · skip is never a pass",
    "verdict": "VERDICT · worst status wins",
    "formula": "worst = error > fail > warn > skip > pass",
    "verdict_line2": "fail/error → 1 · one category → 3/4/5",
    "verdict_line3": "all-skip group → 6 · clean → 0",
    "neck": "exitCodeFor()",
    "tray": "EXIT CODE · SEVEN WAYS OUT",
    "foot1": "--only selects the feeds · unknown group → 2 before any check · all-skip → 6 unless --allow-degraded",
    "foot2": "the host half (plugin_doctor / /doctor) has no exit code — the report is the whole answer · --format check: skip → WARN",
}

SANS = "cjk"      # Chrome falls back to Microsoft YaHei on Windows
MONO = "mono"


def svg_fit(text, size, maxw, mono, where):
    w = width(text, int(round(size)), MONO if mono else SANS)
    if w > maxw:
        sys.exit(f"FATAL: {where}: {text!r} needs {w:.0f}px at {size:g}px, "
                 f"box {maxw:.0f}px.")


def esc(text):
    return (text.replace("&", "&amp;").replace("<", "&lt;")
            .replace(">", "&gt;"))


def flow_svg(skin):
    s = FLOW[skin]
    T = FLOW_TEXT
    W, H = FLOW_W, FLOW_H
    sans = ('font-family="Microsoft YaHei, Segoe UI, ui-sans-serif, system-ui, '
            'sans-serif"')
    mono = ('font-family="Consolas, ui-monospace, SFMono-Regular, Menlo, '
            'monospace"')
    p = []
    a = p.append

    a(f'''<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}" role="img" aria-labelledby="clinicT clinicD">
<title id="clinicT">dsh-clinic structure: five evidence feeds pour into one funnel, every check is classified into one of five states, the worst state sets the verdict, and the spout feeds seven exit codes</title>
<desc id="clinicD">A hopper with five lanes: R reads the committed package.json, cordis.patch.yml and npm pack --dry-run; K scans src with a lib fallback; D packs a tarball and boots a throwaway keyless profile; CC compares five listing registries against the workspace; X reads the installed host surface and may degrade. The cone classifies each check as pass, warn, skip, fail or error — skip is never a pass — then computes the worst status. The verdict resolves to exit code 0 (no fail/error), 1 (fail/error), 2 (usage), 3 (infrastructure), 4 (unsupported host), 5 (unstable) or 6 (a requested group ran as all-skip, i.e. degraded).</desc>
<defs>
  <linearGradient id="clinicBg" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="{s['bg_from']}"/>
    <stop offset="1" stop-color="{s['bg_to']}"/>
  </linearGradient>
  <filter id="clinicSoft" x="-30%" y="-30%" width="160%" height="180%">
    <feDropShadow dx="0" dy="7" stdDeviation="9" flood-color="#1b1735" flood-opacity="{s['shadow']}"/>
  </filter>
  <pattern id="clinicDots" width="26" height="26" patternUnits="userSpaceOnUse">
    <circle cx="1.2" cy="1.2" r="1.2" fill="{s['grid']}"/>
  </pattern>
</defs>
<rect width="{W}" height="{H}" fill="url(#clinicBg)"/>
<rect width="{W}" height="{H}" fill="url(#clinicDots)" opacity=".5"/>
<text x="44" y="54" fill="{s['text']}" {mono} font-size="30" font-weight="700">{T['title']}</text>
<text x="44" y="84" fill="{s['sub']}" {sans} font-size="15.5">{T['sub']}</text>
<text x="1056" y="52" text-anchor="end" fill="{s['faint']}" {mono} font-size="14">{T['meta']}</text>
''')

    # --- funnel silhouette: a five-lane hopper over one cone -----------------
    a(f'<g filter="url(#clinicSoft)">')
    a(f'<path d="M64 100 H1036 Q1056 100 1056 120 V274 H44 V120 Q44 100 64 100 Z" '
      f'fill="{s["body"]}" stroke="{s["edge"]}" stroke-width="1.6"/>')
    a(f'<path d="M44 274 H1056 L670 478 H430 Z" fill="{s["cone"]}" '
      f'stroke="{s["edge"]}" stroke-width="1.6"/>')
    a('</g>')

    # lane dividers in the hopper
    for i in range(1, 5):
        x = 44 + i * 202.4
        a(f'<line x1="{x:.1f}" y1="108" x2="{x:.1f}" y2="268" '
          f'stroke="{s["grid"]}" stroke-width="1.4"/>')

    # the sieve: hopper bottom doubles as the intake seam
    a(f'<line x1="56" y1="274" x2="1044" y2="274" stroke="{s["accent"]}" '
      f'stroke-width="1.4" stroke-dasharray="7 6" opacity=".55"/>')

    # lane content
    for i, lane in enumerate(LANES):
        lx = 44 + i * 202.4
        left = lx + 16
        a(f'<text x="{left:.1f}" y="130" fill="{s["accent"]}" {mono} '
          f'font-size="26" font-weight="700">{lane["letter"]}</text>')
        svg_fit(lane["range"], 14, 202 - 34 - 16, True, "lane range")
        a(f'<text x="{left + 34:.1f}" y="131" fill="{s["sub"]}" {mono} '
          f'font-size="14">{lane["range"]}</text>')
        svg_fit(lane["title"], 17, 202 - 32, False, "lane title")
        a(f'<text x="{left:.1f}" y="158" fill="{s["text"]}" {sans} '
          f'font-size="17" font-weight="700">{lane["title"]}</text>')
        for j, token in enumerate(lane["tokens"]):
            svg_fit(token, 14, 202 - 32, True, "lane token")
            a(f'<text x="{left:.1f}" y="{182 + j * 22}" fill="{s["sub"]}" '
              f'{mono} font-size="14">{esc(token)}</text>')
        svg_fit(lane["tag"], 14, 202 - 32, True, "lane tag")
        a(f'<text x="{left:.1f}" y="256" fill="{s["faint"]}" {mono} '
          f'font-size="14">{esc(lane["tag"])}</text>')

    # --- classify: the sieve emits exactly one state per check --------------
    svg_fit(T["classify"], 14, 820, True, "classify label")
    a(f'<text x="140" y="296" fill="{s["accent"]}" {mono} font-size="14" '
      f'font-weight="700" letter-spacing="1.1">{T["classify"]}</text>')
    chip_w, gap, count = 124, 12, len(STATES)
    total = chip_w * count + gap * (count - 1)
    x = (W - total) / 2
    for name, color in STATES:
        a(f'<rect x="{x:.1f}" y="310" width="{chip_w}" height="42" rx="14" '
          f'fill="{s["card"]}" stroke="{s["edge"]}" stroke-width="1.4"/>')
        a(f'<circle cx="{x + 17:.1f}" cy="331" r="4.4" fill="{s[color]}"/>')
        a(f'<text x="{x + 30:.1f}" y="338" fill="{s["text"]}" {mono} '
          f'font-size="17" font-weight="700">{name}</text>')
        x += chip_w + gap

    svg_fit(T["classify_note"], 14, 600, False, "classify note")
    a(f'<text x="{W / 2}" y="372" text-anchor="middle" fill="{s["sub"]}" '
      f'{sans} font-size="14">{T["classify_note"]}</text>')

    # --- verdict: worst status, then the category/degradation rules ---------
    a(f'<text x="300" y="396" fill="{s["accent"]}" {mono} font-size="14" '
      f'font-weight="700" letter-spacing="1.1">{T["verdict"]}</text>')
    svg_fit(T["formula"], 15, 430, True, "verdict formula")
    a(f'<text x="{W / 2}" y="420" text-anchor="middle" fill="{s["text"]}" '
      f'{mono} font-size="15" font-weight="700">{T["formula"]}</text>')
    svg_fit(T["verdict_line2"], 14, 350, False, "verdict line 2")
    a(f'<text x="{W / 2}" y="442" text-anchor="middle" fill="{s["sub"]}" '
      f'{sans} font-size="14">{T["verdict_line2"]}</text>')
    svg_fit(T["verdict_line3"], 14, 280, False, "verdict line 3")
    a(f'<text x="{W / 2}" y="462" text-anchor="middle" fill="{s["sub"]}" '
      f'{sans} font-size="14">{T["verdict_line3"]}</text>')

    # --- spout --------------------------------------------------------------
    a(f'<path d="M430 478 H670 V500 Q670 512 658 512 H442 Q430 512 430 500 Z" '
      f'fill="{s["pill"]}" stroke="{s["accent"]}" stroke-width="1.8"/>')
    a(f'<text x="550" y="500" text-anchor="middle" fill="{s["accent"]}" '
      f'{mono} font-size="14" font-weight="700">{T["neck"]}</text>')

    # --- exit manifold: seven codes, the only machine contract --------------
    svg_fit(T["tray"], 14, 500, True, "tray label")
    a(f'<text x="44" y="526" fill="{s["accent"]}" {mono} font-size="14" '
      f'font-weight="700" letter-spacing="1.1">{T["tray"]}</text>')
    cell_w, cell_gap, top, height = 136, 10, 534, 72
    for i, (code, line1, line2, tone) in enumerate(EXITS):
        cx = 44 + i * (cell_w + cell_gap)
        stroke = {"ok": s["accent2"], "bad": s["red"],
                  "degraded": s["amber"]}.get(tone, s["edge"])
        dash = ' stroke-dasharray="6 4"' if tone == "degraded" else ""
        a(f'<rect x="{cx}" y="{top}" width="{cell_w}" height="{height}" '
          f'rx="14" fill="{s["card"]}" stroke="{stroke}" stroke-width="1.8"'
          f'{dash}/>')
        code_color = {"ok": s["accent2"], "bad": s["red"],
                      "degraded": s["amber"]}.get(tone, s["sub"])
        a(f'<text x="{cx + cell_w / 2}" y="{top + 30}" text-anchor="middle" '
          f'fill="{code_color}" {mono} font-size="26" font-weight="700">'
          f'{code}</text>')
        svg_fit(line1, 14, cell_w - 16, False, "exit meaning")
        a(f'<text x="{cx + cell_w / 2}" y="{top + 48}" text-anchor="middle" '
          f'fill="{s["text"]}" {sans} font-size="14">{line1}</text>')
        svg_fit(line2, 14, cell_w - 16, False, "exit detail")
        a(f'<text x="{cx + cell_w / 2}" y="{top + 66}" text-anchor="middle" '
          f'fill="{s["faint"]}" {sans} font-size="14">{line2}</text>')

    # --- footer -------------------------------------------------------------
    svg_fit(T["foot1"], 14, 1012, False, "footer 1")
    a(f'<text x="44" y="628" fill="{s["sub"]}" {sans} font-size="14">'
      f'{esc(T["foot1"])}</text>')
    svg_fit(T["foot2"], 14, 1012, False, "footer 2")
    a(f'<text x="44" y="644" fill="{s["faint"]}" {sans} font-size="14">'
      f'{esc(T["foot2"])}</text>')
    a("</svg>")
    return "\n".join(p) + "\n"


def main():
    os.makedirs(OUT, exist_ok=True)
    for lang in ("zh", "en"):
        for skin in ("light", "dark"):
            hero(lang, skin)
    for skin in ("light", "dark"):
        name = f"dsh-clinic-flow-v5-{skin}.svg"
        with open(os.path.join(OUT, name), "w", encoding="utf-8",
                  newline="\n") as fh:
            fh.write(flow_svg(skin))
        print(name)


if __name__ == "__main__":
    main()
