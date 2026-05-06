/* =============================================================
   QuestKeep — gaming demo theme (Neopets-inspired aesthetic)
   -------------------------------------------------------------
   Loaded by index.html when ?theme=questkeep (or no ?theme= param,
   since this is the default).

   To clone for a new gaming customer:
     1. Copy this file to themes/<new-slug>.js
     2. Tweak colors / fonts / brand / copy / images
     3. Open  index.html?theme=<new-slug>
   See themes/_template.js for the schema reference + comments.
   ============================================================= */
window.THEME_CONFIG = {
  meta: {
    slug:     "questkeep",
    customer: "QuestKeep",
    vertical: "gaming"
  },

  colors: {
    bg:           "#FFFAF3",
    bgGrad:       "linear-gradient(180deg, #F1E6FE 0%, #FFFAF3 60%)",
    surface:      "#FFFFFF",
    surfaceSoft:  "#F6EEFF",
    primary:      "#6B3FBE",
    primaryDark:  "#3F2680",
    primaryLight: "#F1E6FE",
    accent:       "#F5A623",
    accentDark:   "#D88716",
    secondary:    "#28B3D6",
    secondaryDark:"#1E8FAD",
    strawberry:   "#E58FCC",
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

  radii: {
    pill:  "28px",
    card:  "16px",
    inset: "12px"
  },

  fonts: {
    display:        '"Fredoka", "SF Pro Rounded", system-ui, sans-serif',
    body:           '"Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    googleFontHref: "https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@400;500;600;700;800&display=swap"
  },

  brand: {
    name:           "QuestKeep",
    shortName:      "QuestKeep",
    initial:        "Q",
    tagline:        "Daily quests. Loyal heroes.",
    wordmarkSuffix: "Keep",
    favicon:        "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20rx%3D%2216%22%20fill%3D%22%236B3FBE%22%2F%3E%3Ctext%20x%3D%2232%22%20y%3D%2244%22%20font-family%3D%22Fredoka%2C%20sans-serif%22%20font-size%3D%2236%22%20font-weight%3D%22700%22%20fill%3D%22%23F5A623%22%20text-anchor%3D%22middle%22%3EQ%3C%2Ftext%3E%3C%2Fsvg%3E"
  },

  currency: {
    primary: { name: "Quest Gold",   symbol: "★", code: "QG", balance: "2500" },
    premium: { name: "Faerie Coins", symbol: "✦", code: "FC", balance: "150"  }
  },

  copy: {
    pageTitle:           "QuestKeep — Daily quests, loyal heroes",
    pageDescription:     "QuestKeep web companion demo — daily rewards, loyalty perks, and Quest Gold, synced across devices via OneSignal.",

    navHomeLabel:        "Home",
    navGameLabel:        "Quest Trials",
    navRewardsLabel:     "Loyalty Vault",
    navAccountLabel:     "My Account",

    signInRegisterCta:   "Sign In / Join QuestKeep",
    registerCta:         "Join QuestKeep",
    signInCta:           "Sign in",
    accountChipPrefix:   "Hi,",

    heroEyebrow:         "Welcome to QuestKeep",
    heroTitle:           "The realm awaits.",
    heroSubAnon:         "Sign in to start earning Quest Gold, claim daily rewards, and unlock loyalty perks.",
    heroSubAuthed:       "Welcome back, {name}! Your daily reward is waiting.",
    heroPushCta:         "Get reward alerts",

    statsStreakLabel:    "Daily Hearth streak",
    statsStreakAnon:     "Sign in to claim daily",
    statsTierLabel:      "Loyalty tier",
    statsTierAnon:       "Sign in to view tier",
    statsBalanceLabel:   "Quest Gold",

    streakTitle:         "Daily Hearth",
    streakSubAnon:       "Sign in to start your streak.",
    streakSubAuthed:     "Log in every day to grow your streak and earn more Quest Gold.",
    streakSubClaimed:    "You've claimed today. Come back tomorrow to keep your streak alive!",
    claimDailyCta:       "Claim today's reward",

    rewardsTitle:        "Loyalty Vault",
    rewardsSub:          "Earn loyalty tiers and unlock exclusive items.",

    gamesTitle:          "Featured quests",
    gamesSub:            "Play any quest to earn Quest Gold.",

    gameScreenTitle:     "Quest Trials",
    gameScreenSub:       "Beat the trial to earn 250 Quest Gold and unlock your first achievement.",
    gameStartCta:        "Start trial",
    gameCompleteCta:     "Complete trial",
    gameRetryCta:        "Try again",

    accountTitle:        "My Account",
    accountSub:          "Update your contact channels and tags. All changes fire OneSignal SDK calls live.",
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

    questPanelTitle:     "Faerie Quest",
    questPanelSub:       "Sacrifice 3 trinkets to complete the quest and earn the Faerie Wand.",
    questCompleteCta:    "Complete quest",
    questCompletedNote:  "Quest complete — fired the quest_completed event.",

    neopetTitle:         "My Companion",
    neopetHint:          "Saving fires OneSignal.User.addTags({ neopet_name: \"...\" }).",
    neopetEmptyOption:   "— None selected —",

    footerNote:          "QuestKeep is a fictional demo brand built for OneSignal walkthroughs.",
    stitchBanner:        "Anonymous session stitched to your authenticated identity. All previously collected tags now belong to your QuestKeep user."
  },

  loyaltyTiers: ["bronze", "silver", "gold", "platinum"],

  loyaltyTierThresholds: {
    bronze:   0,
    silver:   7,
    gold:     14,
    platinum: 30
  },

  streakRewards: [
    { day: 1, label: "100 QG",      amount: 100,  type: "gold"        },
    { day: 2, label: "150 QG",      amount: 150,  type: "gold"        },
    { day: 3, label: "Mystery Box", amount: 250,  type: "mystery_box" },
    { day: 4, label: "300 QG",      amount: 300,  type: "gold"        },
    { day: 5, label: "400 QG",      amount: 400,  type: "gold"        },
    { day: 6, label: "500 QG",      amount: 500,  type: "gold"        },
    { day: 7, label: "Faerie Item", amount: 1000, type: "faerie_item" }
  ],

  loyaltyRewards: [
    { id: "qg_500_pack",     name: "500 QG Bonus",     desc: "A small Quest Gold boost.",                      points: 500,  tier: "bronze",   icon: "★" },
    { id: "rare_paintbrush", name: "Rare Paintbrush",  desc: "Repaint one of your companions in a rare hue.",  points: 1500, tier: "silver",   icon: "🎨" },
    { id: "faerie_quest",    name: "Faerie Quest Pack",desc: "Three faerie quests on the house.",              points: 2200, tier: "gold",     icon: "✨" },
    { id: "platinum_avatar", name: "Platinum Avatar",  desc: "Exclusive avatar for platinum heroes only.",     points: 4500, tier: "platinum", icon: "👑" }
  ],

  games: [
    { name: "Match Mania",    genre: "Match-3",  players: "2.1M heroes", thumb: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=600&h=450&fit=crop" },
    { name: "Bubble Burst",   genre: "Casual",   players: "890K heroes", thumb: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=600&h=450&fit=crop" },
    { name: "Word Quest",     genre: "Puzzle",   players: "1.4M heroes", thumb: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=600&h=450&fit=crop" },
    { name: "Tower Tactics",  genre: "Strategy", players: "640K heroes", thumb: "https://images.unsplash.com/photo-1556438064-2d7646166914?w=600&h=450&fit=crop" }
  ],

  playScreen: {
    levelNumber:   1,
    levelName:     "The Whispering Glade",
    targetScore:   500,
    rewardAmount:  250,                     // points_earned + currency_balance delta on completion
    rewardSymbol:  "★",
    heroImage:     "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=900&h=500&fit=crop"
  },

  /* questPanel — drives the quest_completed event. items_sacrificed is
     the property the customer asked for, so the demo collects 3 small
     trinket items to "sacrifice" before completing. */
  questPanel: {
    questName:        "The Lost Faerie Wand",
    rewardName:       "Faerie Wand",
    difficulty:       "easy",
    sacrificeItems:   ["Acorn Charm", "Silver Bell", "Moon Pebble"],
    rewardCurrency:   400
  },

  /* companions — preset list for the neopet_name tag dropdown.
     Each entry becomes both the displayed label AND the value sent
     to OneSignal as the neopet_name tag. */
  companions: [
    "Faerie Wisp",
    "Cloud Sprite",
    "Royal Lupin",
    "Plushie Otter",
    "Shadow Korbat",
    "Glowing Kiko"
  ],

  /* economy — initial balances + low-currency trigger threshold */
  economy: {
    initialBalance:        2500,
    lowCurrencyThreshold:  500,             // addTrigger("low_currency","true") fires when balance < this
    primaryCurrencyType:   "primary"        // matches currency.primary above; used in item_purchased
  },

  images: {
    heroBg:        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1400&h=600&fit=crop",
    accountAvatar: "" /* leave empty — UI falls back to first letter of name */
  }
};
