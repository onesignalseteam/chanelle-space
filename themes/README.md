# Themes

This folder holds one JS file per gaming customer. Each file assigns a
`THEME_CONFIG` object onto `window`. The main `index.html` reads that object
at boot and rewrites every CSS variable, document title, brand string, image
URL, and copy block in the UI.

## How `index.html` picks a theme

`index.html` reads the `?theme=` query string param.

| URL | Loads |
|---|---|
| `index.html` (no param) | `themes/questkeep.js` (default) |
| `index.html?theme=questkeep` | `themes/questkeep.js` |
| `index.html?theme=king` | `themes/king.js` |

If the file 404s, the page falls back to the default theme.

## Adding a new gaming customer

1. Copy `_template.js` to `<slug>.js` (e.g. `king.js`)
2. Replace every `REPLACE_ME` value with the customer's brand
3. Tweak `colors`, `fonts`, `brand`, `copy`, `games`, `images` to match
4. Open `index.html?theme=<slug>` in your browser
5. Iterate on the file — the browser reload picks up changes

## Theme contract

See `_template.js` for the schema. Required top-level keys:

- `meta` — `slug`, `customer`, `vertical` (used in OneSignal env tags)
- `colors` — palette mapped to `--color-*` CSS vars
- `radii` + `shadows` — shape + depth tokens
- `fonts` — `display`, `body`, `googleFontHref`
- `brand` — `name`, `initial`, `tagline`, `favicon`
- `currency` — `primary` + `premium` (each `name`, `symbol`, `code`, `balance`)
- `copy` — every visible string in the UI
- `loyaltyTiers` + `loyaltyTierThresholds`
- `streakRewards` — 7-day grid
- `loyaltyRewards` — tier-locked items
- `games` — home screen tile grid
- `playScreen` — the Game / Play surface
- `images` — real URLs (no emoji substitutes)

## Available themes

- **`questkeep.js`** — fictional fantasy realm, Neopets-inspired palette
  (royal grape primary, quest-gold accent, faerie-blue secondary). Uses the
  daily-streak / loyalty-tier / Rewards Hub mechanic.
