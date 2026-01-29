const VOCAB_DB = {
    // --- LEVEL 1: 基礎單字 (簡單熱身) ---
    "L1": [
        { en: "cat", ch: "貓", sent: "The cat is sleeping on the sofa." },
        { en: "dog", ch: "狗", sent: "I have a pet dog named Max." },
        { en: "bus", ch: "巴士", sent: "We take the bus to school every day." }
    ],

    // --- LEVEL 2: 日常生活 (4-5個字母) ---
    "L2": [
        { en: "book", ch: "書本", sent: "She is reading a book in the library." },
        { en: "desk", ch: "書桌", sent: "Please put your homework on the desk." },
        { en: "fish", ch: "魚", sent: "Can you see the fish swimming in the water?" }
    ],

    // --- LEVEL 3: 同音字地獄 (測試 Listening 辨識力) ---
    "L3": [
        { en: "sea", ch: "大海", sent: "We swim in the sea every summer." }, // 同音: See
        { en: "see", ch: "看見", sent: "I can see the mountains from here." }, // 同音: Sea
        { en: "air-conditioner", ch: "冷氣機", sent: "I want to buy an air-conditioner." },
        { en: "low-quality", ch: "低質素", sent: "This is a low-quality hotel" },
        { en: "write", ch: "寫", sent: "Please write your name on the paper." } // 同音: Right
    ],

    // --- LEVEL 4: 連字符測試 (測試橙色 Hyphen) ---
    // 玩家只需輸入: highquality, icecream, parttime
    "L4": [
        { en: "high-quality", ch: "高品質", sent: "This shop sells high-quality goods." },
        { en: "ice-cream", ch: "雪糕", sent: "I want to eat chocolate ice-cream." },
        { en: "part-time", ch: "兼職", sent: "He has a part-time job at a cafe." }
    ],

    // --- LEVEL 5: 空格詞組測試 (測試空格處理) ---
    // 玩家只需輸入: cupoftea, livingroom, wakeup
    "L5": [
        { en: "cup of tea", ch: "一杯茶", sent: "Would you like a cup of tea?" },
        { en: "living room", ch: "客廳", sent: "We watch TV in the living room." },
        { en: "wake up", ch: "起床", sent: "I usually wake up at 7 am." }
    ],
    
    // --- LEVEL 5*: BOSS 級 (遊戲專屬) ---
    "L5_STAR": [
        { en: "battleship", ch: "戰艦", sent: "The battleship fired its main cannons." },
        { en: "surrender", ch: "投降", sent: "The enemy was forced to surrender." },
        { en: "victory", ch: "勝利", sent: "We celebrated our victory after the match." }
    ]
};
