/* =============================================================
   THEME TEMPLATE — clone this file for each new gaming customer.
   -------------------------------------------------------------
   Steps:
     1. Copy this file to themes/<customer-slug>.js  (e.g. themes/king.js)
     2. Replace every value below with the customer's brand
     3. Open  index.html?theme=<customer-slug>  in the browser
     4. Tweak the CSS variables under :root in index.html if you
        need shape-level changes beyond colour / font swaps

   Every key below is REQUIRED unless marked optional. Missing keys
   will fall back to questkeep.js defaults but break the demo polish.
   ============================================================= */
window.THEME_CONFIG = {
  /* meta — used in OneSignal env tags + page title */
  meta: {
    slug:     "REPLACE_ME_SLUG",        // e.g. "king"
    customer: "REPLACE_ME_CUSTOMER",    // e.g. "King Digital"
    vertical: "gaming"                   // keep as "gaming" for this template
  },

  /* colors — every value maps 1:1 to a --color-* CSS variable.
     Keep all keys present; substitute hex / rgba values. */
  colors: {
    bg:           "#FFFAF3",
    bgGrad:       "linear-gradient(180deg, #F1E6FE 0%, #FFFAF3 60%)",
    surface:      "#FFFFFF",
    surfaceSoft:  "#F6EEFF",
    primary:      "#6B3FBE",   // main CTA / brand colour
    primaryDark:  "#3F2680",
    primaryLight: "#F1E6FE",
    accent:       "#F5A623",   // currency / highlights
    accentDark:   "#D88716",
    secondary:    "#28B3D6",   // secondary CTA
    secondaryDark:"#1E8FAD",
    strawberry:   "#E58FCC",   // event / faerie accent (optional reuse)
    text:         "#2A2342",
    textMuted:    "#6B6383",
    success:      "#4FD568",
    danger:       "#E63946",
    slate100:     "#F2F2F2",
    slate400:     "#BABABA",
    slate700:     "#6B6B6B",
    cardShadow:   "0 6px 18px rgba(63, 38, 128, 0.10)",
    popShadow:    "0 12px 32px rgba(63, 38, 128, 0.18)"
  },

  radii:  { pill: "28px", card: "16px", inset: "12px" },

  fonts: {
    display:        '"Fredoka", system-ui, sans-serif',
    body:           '"Nunito", system-ui, sans-serif',
    googleFontHref: "https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@400;500;600;700;800&display=swap"
  },

  /* brand — visible across nav, hero, modals, document title */
  brand: {
    name:           "REPLACE_ME_BRAND",   // full brand name, e.g. "King Digital"
    shortName:      "REPLACE_ME_BRAND",   // shorter form for tight UI, e.g. "King"
    initial:        "R",                  // single letter for avatar fallback / wordmark
    tagline:        "Daily quests. Loyal heroes.",
    wordmarkSuffix: "",                   // optional accent suffix, e.g. ".io"
    favicon:        "https://example.com/favicon.png"  // OR a data:image/svg+xml URI
  },

  /* currency — the in-game economy displayed on home + claim flows */
  currency: {
    primary: { name: "Coins", symbol: "★", code: "CN", balance: "2500" },
    premium: { name: "Gems",  symbol: "✦", code: "GM", balance: "150"  }
  },

  /* copy — every visible string in the UI. Use {name} as a placeholder
     for the logged-in user's name where supported (heroSubAuthed). */
  copy: {
    pageTitle:           "REPLACE_ME — gaming demo",
    pageDescription:     "REPLACE_ME web companion demo, synced via OneSignal.",

    navHomeLabel:        "Home",
    navGameLabel:        "Play",
    navRewardsLabel:     "Rewards",
    navAccountLabel:     "My Account",

    signInRegisterCta:   "Sign In / Join",
    registerCta:         "Join",
    signInCta:           "Sign in",
    accountChipPrefix:   "Hi,",

    heroEyebrow:         "REPLACE_ME hero eyebrow",
    heroTitle:           "REPLACE_ME hero title",
    heroSubAnon:         "Sign in to start earning rewards.",
    heroSubAuthed:       "Welcome back, {name}!",
    heroPushCta:         "Get reward alerts",

    statsStreakLabel:    "Daily streak",
    statsStreakAnon:     "Sign in to claim daily",
    statsTierLabel:      "Loyalty tier",
    statsTierAnon:       "Sign in to view tier",
    statsBalanceLabel:   "Coins",

    streakTitle:         "Daily reward",
    streakSubAnon:       "Sign in to start your streak.",
    streakSubAuthed:     "Log in every day to grow your streak.",
    streakSubClaimed:    "You've claimed today.",
    claimDailyCta:       "Claim today",

    rewardsTitle:        "Rewards Hub",
    rewardsSub:          "Spend coins on tier-locked rewards.",

    gamesTitle:          "Featured games",
    gamesSub:            "Play any title to earn coins.",

    gameScreenTitle:     "Play Level 1",
    gameScreenSub:       "Beat the level to earn rewards.",
    gameStartCta:        "Start level",
    gameCompleteCta:     "Complete level",
    gameRetryCta:        "Try again",

    accountTitle:        "My Account",
    accountSub:          "Update your contact channels and tags.",
    accountEmailLabel:   "Email",
    accountEmailHint:    "Saving calls OneSignal.User.addEmail().",
    accountPhoneLabel:   "Mobile (E.164)",
    accountPhoneHint:    "Saving calls OneSignal.User.addSms().",
    accountTagLabel:     "Custom tag",
    accountTagHint:      "Saving calls OneSignal.User.addTags({ key: value }).",
    logoutCta:           "Log out",

    upgradePremiumCta:   "Upgrade to Premium",
    upgradePremiumHint:  "Updates account_type tag from 'free' to 'premium'.",
    premiumActiveLabel:  "Premium hero — thank you!",

    questPanelTitle:     "Quest",
    questPanelSub:       "Complete the quest to fire the quest_completed event.",
    questCompleteCta:    "Complete quest",
    questCompletedNote:  "Quest complete — fired the quest_completed event.",

    footerNote:          "REPLACE_ME footer note.",
    stitchBanner:        "Anonymous session stitched to your authenticated identity."
  },

  /* loyalty progression — bronze → silver → gold → platinum is standard.
     Adjust thresholds (in days) to taste. */
  loyaltyTiers: ["bronze", "silver", "gold", "platinum"],
  loyaltyTierThresholds: { bronze: 0, silver: 7, gold: 14, platinum: 30 },

  /* 7-day streak rewards — index 0 = day 1 */
  streakRewards: [
    { day: 1, label: "100 CN",      amount: 100,  type: "coins"      },
    { day: 2, label: "150 CN",      amount: 150,  type: "coins"      },
    { day: 3, label: "Mystery Box", amount: 250,  type: "mystery_box"},
    { day: 4, label: "300 CN",      amount: 300,  type: "coins"      },
    { day: 5, label: "400 CN",      amount: 400,  type: "coins"      },
    { day: 6, label: "500 CN",      amount: 500,  type: "coins"      },
    { day: 7, label: "Big reward",  amount: 1000, type: "premium"    }
  ],

  /* loyalty rewards — tier-locked items in the Rewards Hub */
  loyaltyRewards: [
    { id: "small_pack",      name: "Small reward",      desc: "A small bonus.",         points: 500,  tier: "bronze",   icon: "★" },
    { id: "medium_pack",     name: "Medium reward",     desc: "A medium-tier perk.",    points: 1500, tier: "silver",   icon: "🎨" },
    { id: "big_pack",        name: "Big reward",        desc: "A juicy gold-tier item.",points: 2200, tier: "gold",     icon: "✨" },
    { id: "platinum_avatar", name: "Platinum exclusive",desc: "Platinum-only reward.",  points: 4500, tier: "platinum", icon: "👑" }
  ],

  /* game tile grid on the home screen */
  games: [
    { name: "Game 1", genre: "Casual",   players: "2M players",   thumb: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=600&h=450&fit=crop" },
    { name: "Game 2", genre: "Match-3",  players: "1.4M players", thumb: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=600&h=450&fit=crop" },
    { name: "Game 3", genre: "Puzzle",   players: "890K players", thumb: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=600&h=450&fit=crop" },
    { name: "Game 4", genre: "Strategy", players: "640K players", thumb: "https://images.unsplash.com/photo-1556438064-2d7646166914?w=600&h=450&fit=crop" }
  ],

  /* play / game screen — the "first meaningful interaction" surface
     used for firing the gaming-vertical custom event */
  playScreen: {
    levelNumber:   1,
    levelName:     "Level 1",
    targetScore:   500,
    rewardAmount:  250,                  // points_earned + currency delta on game_session_completed
    rewardSymbol:  "★",
    heroImage:     "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=900&h=500&fit=crop"
  },

  /* questPanel — drives quest_completed event (quest_name, reward_name,
     difficulty, items_sacrificed). sacrificeItems is the array of items
     the user collects/sacrifices before the event fires. */
  questPanel: {
    questName:        "Quest 1",
    rewardName:       "Reward Item",
    difficulty:       "easy",            // easy | medium | hard
    sacrificeItems:   ["Item A", "Item B", "Item C"],
    rewardCurrency:   400
  },

  /* economy — initial balance + threshold for the low_currency In-App trigger */
  economy: {
    initialBalance:        2500,
    lowCurrencyThreshold:  500,
    primaryCurrencyType:   "primary"
  },

  /* images — REAL URLs only. If a customer image is missing, leave a
     comment indicating the missing source. Do NOT substitute with emojis. */
  images: {
    heroBg:        "https://example.com/hero.jpg",
    accountAvatar: "" /* optional; leave empty to use first letter of name */
  }
};
