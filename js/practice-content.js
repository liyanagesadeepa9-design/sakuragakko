// js/learn-kana.js
const hiragana = {
    basic: [
        { character: "あ", romaji: "a", sinhala: "අ" },
        { character: "い", romaji: "i", sinhala: "ඉ" },
        { character: "う", romaji: "u", sinhala: "උ" },
        { character: "え", romaji: "e", sinhala: "එ" },
        { character: "お", romaji: "o", sinhala: "ඔ" },
        { character: "か", romaji: "ka", sinhala: "ක" },
        { character: "き", romaji: "ki", sinhala: "කි" },
        { character: "く", romaji: "ku", sinhala: "කු" },
        { character: "け", romaji: "ke", sinhala: "කෙ" },
        { character: "こ", romaji: "ko", sinhala: "කො" },
        { character: "さ", romaji: "sa", sinhala: "ස" },
        { character: "し", romaji: "shi", sinhala: "ෂි" },
        { character: "す", romaji: "su", sinhala: "සු" },
        { character: "せ", romaji: "se", sinhala: "සෙ" },
        { character: "そ", romaji: "so", sinhala: "සො" },
        { character: "た", romaji: "ta", sinhala: "ට" },
        { character: "ち", romaji: "chi", sinhala: "චි" },
        { character: "つ", romaji: "tsu", sinhala: "චු" },
        { character: "て", romaji: "te", sinhala: "ටෙ" },
        { character: "と", romaji: "to", sinhala: "ටො" },
        { character: "な", romaji: "na", sinhala: "න" },
        { character: "に", romaji: "ni", sinhala: "නි" },
        { character: "ぬ", romaji: "nu", sinhala: "නු" },
        { character: "ね", romaji: "ne", sinhala: "නෙ" },
        { character: "の", romaji: "no", sinhala: "නො" },
        { character: "は", romaji: "ha", sinhala: "හ" },
        { character: "ひ", romaji: "hi", sinhala: "හි" },
        { character: "ふ", romaji: "fu", sinhala: "ෆු" },
        { character: "へ", romaji: "he", sinhala: "හෙ" },
        { character: "ほ", romaji: "ho", sinhala: "හො" },
        { character: "ま", romaji: "ma", sinhala: "ම" },
        { character: "み", romaji: "mi", sinhala: "මි" },
        { character: "む", romaji: "mu", sinhala: "මු" },
        { character: "め", romaji: "me", sinhala: "මෙ" },
        { character: "も", romaji: "mo", sinhala: "මො" },
        { character: "や", romaji: "ya", sinhala: "ය" },
        { character: "", romaji: "", sinhala: "" },
        { character: "ゆ", romaji: "yu", sinhala: "යු" },
        { character: "", romaji: "", sinhala: "" },
        { character: "よ", romaji: "yo", sinhala: "යො" },
        { character: "ら", romaji: "ra", sinhala: "ර" },
        { character: "り", romaji: "ri", sinhala: "රි" },
        { character: "る", romaji: "ru", sinhala: "රු" },
        { character: "れ", romaji: "re", sinhala: "රෙ" },
        { character: "ろ", romaji: "ro", sinhala: "රො" },
        { character: "わ", romaji: "wa", sinhala: "ව" },
        { character: "", romaji: "", sinhala: "" },
        { character: "", romaji: "", sinhala: "" },
        { character: "", romaji: "", sinhala: "" },
        { character: "を", romaji: "wo", sinhala: "ඔ" },
        { character: "ん", romaji: "n", sinhala: "න්" }
    ],
    additional1: [
        { character: "が", romaji: "ga", sinhala: "ග" },
        { character: "ぎ", romaji: "gi", sinhala: "ගි" },
        { character: "ぐ", romaji: "gu", sinhala: "ගු" },
        { character: "げ", romaji: "ge", sinhala: "ගෙ" },
        { character: "ご", romaji: "go", sinhala: "ගො" },
        { character: "ざ", romaji: "za", sinhala: "ඟ" },
        { character: "じ", romaji: "ji", sinhala: "ජි" },
        { character: "ず", romaji: "zu", sinhala: "ඟු" },
        { character: "ぜ", romaji: "ze", sinhala: "ඟෙ" },
        { character: "ぞ", romaji: "zo", sinhala: "ඟො" },
        { character: "だ", romaji: "da", sinhala: "ඩ" },
        { character: "ぢ", romaji: "ji", sinhala: "ජි" },
        { character: "づ", romaji: "zu", sinhala: "ඟු" },
        { character: "で", romaji: "de", sinhala: "ඩෙ" },
        { character: "ど", romaji: "do", sinhala: "ඩො" },
        { character: "ば", romaji: "ba", sinhala: "බ" },
        { character: "び", romaji: "bi", sinhala: "බි" },
        { character: "ぶ", romaji: "bu", sinhala: "බු" },
        { character: "べ", romaji: "be", sinhala: "බෙ" },
        { character: "ぼ", romaji: "bo", sinhala: "බො" },
        { character: "ぱ", romaji: "pa", sinhala: "ප" },
        { character: "ぴ", romaji: "pi", sinhala: "පි" },
        { character: "ぷ", romaji: "pu", sinhala: "පු" },
        { character: "ぺ", romaji: "pe", sinhala: "පෙ" },
        { character: "ぽ", romaji: "po", sinhala: "පො" }
    ],
    additional2: [
        { character: "きゃ", romaji: "kya", sinhala: "ක්ය" },
        { character: "きゅ", romaji: "kyu", sinhala: "ක්යු" },
        { character: "きょ", romaji: "kyo", sinhala: "ක්යො" },
        { character: "しゃ", romaji: "sha", sinhala: "ෂ්ය" },
        { character: "しゅ", romaji: "shu", sinhala: "ෂ්යු" },
        { character: "しょ", romaji: "sho", sinhala: "ෂ්යො" },
        { character: "ちゃ", romaji: "cha", sinhala: "ච්ය" },
        { character: "ちゅ", romaji: "chu", sinhala: "ච්යු" },
        { character: "ちょ", romaji: "cho", sinhala: "ච්යො" },
        { character: "にゃ", romaji: "nya", sinhala: "න්ය" },
        { character: "にゅ", romaji: "nyu", sinhala: "න්යු" },
        { character: "にょ", romaji: "nyo", sinhala: "න්යො" },
        { character: "ひゃ", romaji: "hya", sinhala: "හ්ය" },
        { character: "ひゅ", romaji: "hyu", sinhala: "හ්යු" },
        { character: "ひょ", romaji: "hyo", sinhala: "හ්යො" },
        { character: "みゃ", romaji: "mya", sinhala: "ම්ය" },
        { character: "みゅ", romaji: "myu", sinhala: "ම්යු" },
        { character: "みょ", romaji: "myo", sinhala: "ම්යො" },
        { character: "りゃ", romaji: "rya", sinhala: "ර්ය" },
        { character: "りゅ", romaji: "ryu", sinhala: "ර්යු" },
        { character: "りょ", romaji: "ryo", sinhala: "ර්යො" },
        { character: "ぎゃ", romaji: "gya", sinhala: "ග්ය" },
        { character: "ぎゅ", romaji: "gyu", sinhala: "ග්යු" },
        { character: "ぎょ", romaji: "gyo", sinhala: "ග්යො" },
        { character: "じゃ", romaji: "ja", sinhala: "ජ්ය" },
        { character: "じゅ", romaji: "ju", sinhala: "ජ්යු" },
        { character: "じょ", romaji: "jo", sinhala: "ජ්යො" },
        { character: "びゃ", romaji: "bya", sinhala: "බ්ය" },
        { character: "びゅ", romaji: "byu", sinhala: "බ්යු" },
        { character: "びょ", romaji: "byo", sinhala: "බ්යො" },
        { character: "ぴゃ", romaji: "pya", sinhala: "ප්ය" },
        { character: "ぴゅ", romaji: "pyu", sinhala: "ප්යු" },
        { character: "ぴょ", romaji: "pyo", sinhala: "ප්යො" }
    ]
};

const katakana = {
    basic: [
        { character: "ア", romaji: "a", sinhala: "අ" },
        { character: "イ", romaji: "i", sinhala: "ඉ" },
        { character: "ウ", romaji: "u", sinhala: "උ" },
        { character: "エ", romaji: "e", sinhala: "එ" },
        { character: "オ", romaji: "o", sinhala: "ඔ" },
        { character: "カ", romaji: "ka", sinhala: "ක" },
        { character: "キ", romaji: "ki", sinhala: "කි" },
        { character: "ク", romaji: "ku", sinhala: "කු" },
        { character: "ケ", romaji: "ke", sinhala: "කෙ" },
        { character: "コ", romaji: "ko", sinhala: "කො" },
        { character: "サ", romaji: "sa", sinhala: "ස" },
        { character: "シ", romaji: "shi", sinhala: "ෂි" },
        { character: "ス", romaji: "su", sinhala: "සු" },
        { character: "セ", romaji: "se", sinhala: "සෙ" },
        { character: "ソ", romaji: "so", sinhala: "සො" },
        { character: "タ", romaji: "ta", sinhala: "ට" },
        { character: "チ", romaji: "chi", sinhala: "චි" },
        { character: "ツ", romaji: "tsu", sinhala: "චු" },
        { character: "テ", romaji: "te", sinhala: "ටෙ" },
        { character: "ト", romaji: "to", sinhala: "ටො" },
        { character: "ナ", romaji: "na", sinhala: "න" },
        { character: "ニ", romaji: "ni", sinhala: "නි" },
        { character: "ヌ", romaji: "nu", sinhala: "නු" },
        { character: "ネ", romaji: "ne", sinhala: "නෙ" },
        { character: "ノ", romaji: "no", sinhala: "නො" },
        { character: "ハ", romaji: "ha", sinhala: "හ" },
        { character: "ヒ", romaji: "hi", sinhala: "හි" },
        { character: "フ", romaji: "fu", sinhala: "ෆු" },
        { character: "ヘ", romaji: "he", sinhala: "හෙ" },
        { character: "ホ", romaji: "ho", sinhala: "හො" },
        { character: "マ", romaji: "ma", sinhala: "ම" },
        { character: "ミ", romaji: "mi", sinhala: "මි" },
        { character: "ム", romaji: "mu", sinhala: "මු" },
        { character: "メ", romaji: "me", sinhala: "මෙ" },
        { character: "モ", romaji: "mo", sinhala: "මො" },
        { character: "ヤ", romaji: "ya", sinhala: "ය" },
        { character: "ユ", romaji: "yu", sinhala: "යු" },
        { character: "ヨ", romaji: "yo", sinhala: "යො" },
        { character: "ラ", romaji: "ra", sinhala: "ර" },
        { character: "リ", romaji: "ri", sinhala: "රි" },
        { character: "ル", romaji: "ru", sinhala: "රු" },
        { character: "レ", romaji: "re", sinhala: "රෙ" },
        { character: "ロ", romaji: "ro", sinhala: "රො" },
        { character: "ワ", romaji: "wa", sinhala: "ව" },
        { character: "ヲ", romaji: "wo", sinhala: "ඔ" },
        { character: "ン", romaji: "n", sinhala: "න්" }
    ],
    additional1: [
        { character: "ガ", romaji: "ga", sinhala: "ග" },
        { character: "ギ", romaji: "gi", sinhala: "ගි" },
        { character: "グ", romaji: "gu", sinhala: "ගු" },
        { character: "ゲ", romaji: "ge", sinhala: "ගෙ" },
        { character: "ゴ", romaji: "go", sinhala: "ගො" },
        { character: "ザ", romaji: "za", sinhala: "ඟ" },
        { character: "ジ", romaji: "ji", sinhala: "ජි" },
        { character: "ズ", romaji: "zu", sinhala: "ඟු" },
        { character: "ゼ", romaji: "ze", sinhala: "ඟෙ" },
        { character: "ゾ", romaji: "zo", sinhala: "ඟො" },
        { character: "ダ", romaji: "da", sinhala: "ඩ" },
        { character: "ヂ", romaji: "ji", sinhala: "ජි" },
        { character: "ヅ", romaji: "zu", sinhala: "ඟු" },
        { character: "デ", romaji: "de", sinhala: "ඩෙ" },
        { character: "ド", romaji: "do", sinhala: "ඩො" },
        { character: "バ", romaji: "ba", sinhala: "බ" },
        { character: "ビ", romaji: "bi", sinhala: "බි" },
        { character: "ブ", romaji: "bu", sinhala: "බු" },
        { character: "ベ", romaji: "be", sinhala: "බෙ" },
        { character: "ボ", romaji: "bo", sinhala: "බො" },
        { character: "パ", romaji: "pa", sinhala: "ප" },
        { character: "ピ", romaji: "pi", sinhala: "පි" },
        { character: "プ", romaji: "pu", sinhala: "පු" },
        { character: "ペ", romaji: "pe", sinhala: "පෙ" },
        { character: "ポ", romaji: "po", sinhala: "පො" }
    ],
    additional2: [
        { character: "キャ", romaji: "kya", sinhala: "ක්ය" },
        { character: "キュ", romaji: "kyu", sinhala: "ක්යු" },
        { character: "キョ", romaji: "kyo", sinhala: "ක්යො" },
        { character: "シャ", romaji: "sha", sinhala: "ෂ්ය" },
        { character: "シュ", romaji: "shu", sinhala: "ෂ්යු" },
        { character: "ショ", romaji: "sho", sinhala: "ෂ්යො" },
        { character: "チャ", romaji: "cha", sinhala: "ච්ය" },
        { character: "チュ", romaji: "chu", sinhala: "ච්යු" },
        { character: "チョ", romaji: "cho", sinhala: "ච්යො" },
        { character: "ニャ", romaji: "nya", sinhala: "න්ය" },
        { character: "ニュ", romaji: "nyu", sinhala: "න්යු" },
        { character: "ニョ", romaji: "nyo", sinhala: "න්යො" },
        { character: "ヒャ", romaji: "hya", sinhala: "හ්ය" },
        { character: "ヒュ", romaji: "hyu", sinhala: "හ්යු" },
        { character: "ヒョ", romaji: "hyo", sinhala: "හ්යො" },
        { character: "ミャ", romaji: "mya", sinhala: "ම්ය" },
        { character: "ミュ", romaji: "myu", sinhala: "ම්යු" },
        { character: "ミョ", romaji: "myo", sinhala: "ම්යො" },
        { character: "リャ", romaji: "rya", sinhala: "ර්ය" },
        { character: "リュ", romaji: "ryu", sinhala: "ර්යු" },
        { character: "リョ", romaji: "ryo", sinhala: "ර්යො" },
        { character: "ギャ", romaji: "gya", sinhala: "ග්ය" },
        { character: "ギュ", romaji: "gyu", sinhala: "ග්යු" },
        { character: "ギョ", romaji: "gyo", sinhala: "ග්යො" },
        { character: "ジャ", romaji: "ja", sinhala: "ජ්ය" },
        { character: "ジュ", romaji: "ju", sinhala: "ජ්යු" },
        { character: "ジョ", romaji: "jo", sinhala: "ජ්යො" },
        { character: "ビャ", romaji: "bya", sinhala: "බ්ය" },
        { character: "ビュ", romaji: "byu", sinhala: "බ්යු" },
        { character: "ビョ", romaji: "byo", sinhala: "බ්යො" },
        { character: "ピャ", romaji: "pya", sinhala: "ප්ය" },
        { character: "ピュ", romaji: "pyu", sinhala: "ප්යු" },
        { character: "ピョ", romaji: "pyo", sinhala: "ප්යො" }
    ]
};

// js/learn-kanji.js
const kanji = [
    { 
        kanji: "日", 
        on: "ニチ, ジツ", 
        kun: "ひ, か", 
        meanEn: "sun, day", 
        meanSi: "හිරු, දිනය", 
        example: [
            {kanji:"日曜日", kana:"にちようび", eng:"Sunday", sin:"ඉරිදා"}, 
            {kanji:"今日", kana:"きょう", eng:"today", sin:"අද"},
            {kanji:"日本", kana:"にほん", eng:"Japan", sin:"ජපානය"}
        ] 
    },
    { 
        kanji: "月", 
        on: "ゲツ, ガツ", 
        kun: "つき", 
        meanEn: "moon, month", 
        meanSi: "හඳ, මාසය", 
        example: [
            {kanji:"月曜日", kana:"げつようび", eng:"Monday", sin:"සඳුදා"}, 
            {kanji:"一月", kana:"いちがつ", eng:"January", sin:"ජනවාරි"},
            {kanji:"今月", kana:"こんげつ", eng:"this month", sin:"මෙම මාසය"}
        ] 
    },
    { 
        kanji: "火", 
        on: "カ", 
        kun: "ひ", 
        meanEn: "fire", 
        meanSi: "ගින්න", 
        example: [
            {kanji:"火曜日", kana:"かようび", eng:"Tuesday", sin:"අඟහරුවාදා"}, 
            {kanji:"火事", kana:"かじ", eng:"fire", sin:"ගින්න"},
            {kanji:"花火", kana:"はなび", eng:"fireworks", sin:"පිපිරුම්"}
        ] 
    },
    { 
        kanji: "水", 
        on: "スイ", 
        kun: "みず", 
        meanEn: "water", 
        meanSi: "ජලය", 
        example: [
            {kanji:"水曜日", kana:"すいようび", eng:"Wednesday", sin:"බදාදා"}, 
            {kanji:"水", kana:"みず", eng:"water", sin:"ජලය"},
            {kanji:"水泳", kana:"すいえい", eng:"swimming", sin:"පිහිනුම"}
        ] 
    },
    { 
        kanji: "木", 
        on: "モク, ボク", 
        kun: "き, こ", 
        meanEn: "tree, wood", 
        meanSi: "ගස, ලී", 
        example: [
            {kanji:"木曜日", kana:"もくようび", eng:"Thursday", sin:"බ්‍රහස්පතින්දා"}, 
            {kanji:"木", kana:"き", eng:"tree", sin:"ගස"},
            {kanji:"木材", kana:"もくざい", eng:"lumber", sin:"ලී ද්‍රව්‍ය"}
        ] 
    },
    { 
        kanji: "金", 
        on: "キン, コン", 
        kun: "かね, かな", 
        meanEn: "gold, money", 
        meanSi: "රන්, මුදල්", 
        example: [
            {kanji:"金曜日", kana:"きんようび", eng:"Friday", sin:"සිකුරාදා"}, 
            {kanji:"金", kana:"きん", eng:"gold", sin:"රන්"},
            {kanji:"お金", kana:"おかね", eng:"money", sin:"මුදල්"}
        ] 
    },
    { 
        kanji: "土", 
        on: "ド, ト", 
        kun: "つち", 
        meanEn: "soil, earth", 
        meanSi: "මඩ, පස", 
        example: [
            {kanji:"土曜日", kana:"どようび", eng:"Saturday", sin:"සෙනසුරාදා"}, 
            {kanji:"土", kana:"つち", eng:"soil", sin:"මඩ"},
            {kanji:"土地", kana:"とち", eng:"land", sin:"ඉඩම"}
        ] 
    },
    { 
        kanji: "人", 
        on: "ジン, ニン", 
        kun: "ひと", 
        meanEn: "person", 
        meanSi: "පුද්ගලයා", 
        example: [
            {kanji:"日本人", kana:"にほんじん", eng:"Japanese person", sin:"ජපන් ජාතිකයා"}, 
            {kanji:"人", kana:"ひと", eng:"person", sin:"පුද්ගලයා"},
            {kanji:"三人", kana:"さんにん", eng:"three people", sin:"පුද්ගලයන් තිදෙනෙක්"}
        ] 
    },
    { 
        kanji: "男", 
        on: "ダン, ナン", 
        kun: "おとこ", 
        meanEn: "man, male", 
        meanSi: "පිරිමි", 
        example: [
            {kanji:"男の人", kana:"おとこのひと", eng:"man", sin:"පිරිමියා"}, 
            {kanji:"男子", kana:"だんし", eng:"boy", sin:"බාලයා"},
            {kanji:"男女", kana:"だんじょ", eng:"men and women", sin:"පිරිමි සහ ගැහැණු"}
        ] 
    },
    { 
        kanji: "女", 
        on: "ジョ, ニョ, ニョウ", 
        kun: "おんな, め", 
        meanEn: "woman, female", 
        meanSi: "ගැහැණු", 
        example: [
            {kanji:"女の人", kana:"おんなのひと", eng:"woman", sin:"ගැහැණු"}, 
            {kanji:"女子", kana:"じょし", eng:"girl", sin:"ගැහැණු ළමයා"},
            {kanji:"女性", kana:"じょせい", eng:"female", sin:"ගැහැණු ලිංගය"}
        ] 
    },
    { 
        kanji: "子", 
        on: "シ, ス", 
        kun: "こ", 
        meanEn: "child", 
        meanSi: "ළමයා", 
        example: [
            {kanji:"子供", kana:"こども", eng:"child", sin:"ළමයා"}, 
            {kanji:"男子", kana:"だんし", eng:"boy", sin:"පිරිමි ළමයා"},
            {kanji:"女子", kana:"じょし", eng:"girl", sin:"ගැහැණු ළමයා"}
        ] 
    },
    { 
        kanji: "父", 
        on: "フ", 
        kun: "ちち", 
        meanEn: "father", 
        meanSi: "පියා", 
        example: [
            {kanji:"父", kana:"ちち", eng:"father", sin:"පියා"}, 
            {kanji:"お父さん", kana:"おとうさん", eng:"father", sin:"පියා"},
            {kanji:"父母", kana:"ふぼ", eng:"parents", sin:"පියාවරු"}
        ] 
    },
    { 
        kanji: "母", 
        on: "ボ", 
        kun: "はは", 
        meanEn: "mother", 
        meanSi: "මව", 
        example: [
            {kanji:"母", kana:"はは", eng:"mother", sin:"මව"}, 
            {kanji:"お母さん", kana:"おかあさん", eng:"mother", sin:"මව"},
            {kanji:"父母", kana:"ふぼ", eng:"parents", sin:"මව්පියන්"}
        ] 
    },
    { 
        kanji: "友", 
        on: "ユウ", 
        kun: "とも", 
        meanEn: "friend", 
        meanSi: "මිතුරා", 
        example: [
            {kanji:"友達", kana:"ともだち", eng:"friend", sin:"මිතුරා"}, 
            {kanji:"友人", kana:"ゆうじん", eng:"friend", sin:"මිතුරා"},
            {kanji:"友好", kana:"ゆうこう", eng:"friendship", sin:"මිත්‍රත්වය"}
        ] 
    },
    { 
        kanji: "先生", 
        on: "センセイ", 
        kun: "", 
        meanEn: "teacher", 
        meanSi: "ගුරුවරයා", 
        example: [
            {kanji:"先生", kana:"せんせい", eng:"teacher", sin:"ගුරුවරයා"}, 
            {kanji:"教師", kana:"きょうし", eng:"instructor", sin:"උපදේශක"},
            {kanji:"医者", kana:"いしゃ", eng:"doctor", sin:"වෛද්‍යවරයා"}
        ] 
    },
    { 
        kanji: "学", 
        on: "ガク", 
        kun: "まな.ぶ", 
        meanEn: "study, learning", 
        meanSi: "ඉගෙනීම", 
        example: [
            {kanji:"学生", kana:"がくせい", eng:"student", sin:"ශිෂ්‍යයා"}, 
            {kanji:"学校", kana:"がっこう", eng:"school", sin:"පාසල"},
            {kanji:"数学", kana:"すうがく", eng:"mathematics", sin:"ගණිතය"}
        ] 
    },
    { 
        kanji: "生", 
        on: "セイ, ショウ", 
        kun: "い.きる, う.まれる", 
        meanEn: "life, birth", 
        meanSi: "ජීවිතය, උපත", 
        example: [
            {kanji:"学生", kana:"がくせい", eng:"student", sin:"ශිෂ්‍යයා"}, 
            {kanji:"先生", kana:"せんせい", eng:"teacher", sin:"ගුරුවරයා"},
            {kanji:"生活", kana:"せいかつ", eng:"life, living", sin:"ජීවිතය"}
        ] 
    },
    { 
        kanji: "年", 
        on: "ネン", 
        kun: "とし", 
        meanEn: "year", 
        meanSi: "වසර", 
        example: [
            {kanji:"一年", kana:"いちねん", eng:"one year", sin:"එක් වසරක්"}, 
            {kanji:"今年", kana:"ことし", eng:"this year", sin:"මෙම වසර"},
            {kanji:"去年", kana:"きょねん", eng:"last year", sin:"පසුගිය වසර"}
        ] 
    },
    { 
        kanji: "校", 
        on: "コウ", 
        kun: "", 
        meanEn: "school", 
        meanSi: "පාසල", 
        example: [
            {kanji:"学校", kana:"がっこう", eng:"school", sin:"පාසල"}, 
            {kanji:"高校", kana:"こうこう", eng:"high school", sin:"උසස් පාසල"},
            {kanji:"小学校", kana:"しょうがっこう", eng:"elementary school", sin:"ප්‍රාථමික පාසල"}
        ] 
    },
    { 
        kanji: "一", 
        on: "イチ, イツ", 
        kun: "ひと, ひと.つ", 
        meanEn: "one", 
        meanSi: "එක", 
        example: [
            {kanji:"一人", kana:"ひとり", eng:"one person", sin:"එක් පුද්ගලයෙක්"}, 
            {kanji:"一日", kana:"いちにち", eng:"one day", sin:"එක් දිනක්"},
            {kanji:"一つ", kana:"ひとつ", eng:"one thing", sin:"එක් දෙයක්"}
        ] 
    },
    { 
        kanji: "二", 
        on: "ニ", 
        kun: "ふた, ふた.つ", 
        meanEn: "two", 
        meanSi: "දෙක", 
        example: [
            {kanji:"二人", kana:"ふたり", eng:"two people", sin:"පුද්ගලයන් දෙදෙනෙක්"}, 
            {kanji:"二日", kana:"ふつか", eng:"two days", sin:"දින දෙක"},
            {kanji:"二つ", kana:"ふたつ", eng:"two things", sin:"දෙවරක්"}
        ] 
    },
    { 
        kanji: "三", 
        on: "サン", 
        kun: "み, み.つ", 
        meanEn: "three", 
        meanSi: "තුන", 
        example: [
            {kanji:"三人", kana:"さんにん", eng:"three people", sin:"පුද්ගලයන් තිදෙනෙක්"}, 
            {kanji:"三日", kana:"みっか", eng:"three days", sin:"දින තුන"},
            {kanji:"三つ", kana:"みっつ", eng:"three things", sin:"තුන්වරක්"}
        ] 
    },
    { 
        kanji: "四", 
        on: "シ", 
        kun: "よん, よ, よ.つ", 
        meanEn: "four", 
        meanSi: "හතර", 
        example: [
            {kanji:"四人", kana:"よにん", eng:"four people", sin:"පුද්ගලයන් හතර දෙනෙක්"}, 
            {kanji:"四日", kana:"よっか", eng:"four days", sin:"දින හතර"},
            {kanji:"四つ", kana:"よっつ", eng:"four things", sin:"හතරවරක්"}
        ] 
    },
    { 
        kanji: "五", 
        on: "ゴ", 
        kun: "いつ, いつ.つ", 
        meanEn: "five", 
        meanSi: "පහ", 
        example: [
            {kanji:"五人", kana:"ごにん", eng:"five people", sin:"පුද්ගලයන් පස් දෙනෙක්"}, 
            {kanji:"五日", kana:"いつか", eng:"five days", sin:"දින පහ"},
            {kanji:"五つ", kana:"いつつ", eng:"five things", sin:"පහවරක්"}
        ] 
    },
    { 
        kanji: "六", 
        on: "ロク", 
        kun: "む, む.つ", 
        meanEn: "six", 
        meanSi: "හය", 
        example: [
            {kanji:"六人", kana:"ろくにん", eng:"six people", sin:"පුද්ගලයන් හය දෙනෙක්"}, 
            {kanji:"六日", kana:"むいか", eng:"six days", sin:"දින හය"},
            {kanji:"六つ", kana:"むっつ", eng:"six things", sin:"හයවරක්"}
        ] 
    },
    { 
        kanji: "七", 
        on: "シチ", 
        kun: "なな, なな.つ", 
        meanEn: "seven", 
        meanSi: "හත", 
        example: [
            {kanji:"七人", kana:"しちにん/ななにん", eng:"seven people", sin:"පුද්ගලයන් හත දෙනෙක්"}, 
            {kanji:"七日", kana:"なのか", eng:"seven days", sin:"දින හත"},
            {kanji:"七つ", kana:"ななつ", eng:"seven things", sin:"හතවරක්"}
        ] 
    },
    { 
        kanji: "八", 
        on: "ハチ", 
        kun: "や, や.つ", 
        meanEn: "eight", 
        meanSi: "අට", 
        example: [
            {kanji:"八人", kana:"はちにん", eng:"eight people", sin:"පුද්ගලයන් අට දෙනෙක්"}, 
            {kanji:"八日", kana:"ようか", eng:"eight days", sin:"දින අට"},
            {kanji:"八つ", kana:"やっつ", eng:"eight things", sin:"අටවරක්"}
        ] 
    },
    { 
        kanji: "九", 
        on: "キュウ, ク", 
        kun: "ここの, ここの.つ", 
        meanEn: "nine", 
        meanSi: "නමය", 
        example: [
            {kanji:"九人", kana:"きゅうにん", eng:"nine people", sin:"පුද්ගලයන් නමය දෙනෙක්"}, 
            {kanji:"九日", kana:"ここのか", eng:"nine days", sin:"දින නමය"},
            {kanji:"九つ", kana:"ここのつ", eng:"nine things", sin:"නමයවරක්"}
        ] 
    },
    { 
        kanji: "十", 
        on: "ジュウ, ジッ", 
        kun: "とお, と", 
        meanEn: "ten", 
        meanSi: "දහය", 
        example: [
            {kanji:"十人", kana:"じゅうにん", eng:"ten people", sin:"පුද්ගලයන් දහය දෙනෙක්"}, 
            {kanji:"十日", kana:"とおか", eng:"ten days", sin:"දින දහය"},
            {kanji:"十歳", kana:"じゅっさい", eng:"ten years old", sin:"වයස අවුරුදු දහය"}
        ] 
    },
    { 
        kanji: "百", 
        on: "ヒャク", 
        kun: "", 
        meanEn: "hundred", 
        meanSi: "සියය", 
        example: [
            {kanji:"百円", kana:"ひゃくえん", eng:"100 yen", sin:"යෙන් 100"}, 
            {kanji:"三百", kana:"さんびゃく", eng:"three hundred", sin:"තුන්සියය"},
            {kanji:"百貨店", kana:"ひゃっかてん", eng:"department store", sin:"බඩුසැල"}
        ] 
    },
    { 
        kanji: "千", 
        on: "セン", 
        kun: "ち", 
        meanEn: "thousand", 
        meanSi: "දහස", 
        example: [
            {kanji:"千円", kana:"せんえん", eng:"1000 yen", sin:"යෙන් 1000"}, 
            {kanji:"三千", kana:"さんぜん", eng:"three thousand", sin:"තුන්දහස"},
            {kanji:"千葉", kana:"ちば", eng:"Chiba", sin:"චිබා"}
        ] 
    },
    { 
        kanji: "万", 
        on: "マン, バン", 
        kun: "", 
        meanEn: "ten thousand", 
        meanSi: "දස දහස", 
        example: [
            {kanji:"一万円", kana:"いちまんえん", eng:"10,000 yen", sin:"යෙන් 10,000"}, 
            {kanji:"万円", kana:"まんえん", eng:"ten thousand yen", sin:"යෙන් දස දහස"},
            {kanji:"万一", kana:"まんいち", eng:"by any chance", sin:"ඇතැම්විට"}
        ] 
    },
    { 
        kanji: "円", 
        on: "エン", 
        kun: "まる.い", 
        meanEn: "yen, circle", 
        meanSi: "යෙන්, වටකුරු", 
        example: [
            {kanji:"百円", kana:"ひゃくえん", eng:"100 yen", sin:"යෙන් 100"}, 
            {kanji:"円い", kana:"まるい", eng:"round", sin:"වටකුරු"},
            {kanji:"千円", kana:"せんえん", eng:"1000 yen", sin:"යෙන් 1000"}
        ] 
    },
    { 
        kanji: "時", 
        on: "ジ", 
        kun: "とき", 
        meanEn: "time, hour", 
        meanSi: "වේලාව, පැය", 
        example: [
            {kanji:"時間", kana:"じかん", eng:"time", sin:"වේලාව"}, 
            {kanji:"一時", kana:"いちじ", eng:"1 o'clock", sin:"පැය 1"},
            {kanji:"時々", kana:"ときどき", eng:"sometimes", sin:"මහාමහා"}
        ] 
    },
    { 
        kanji: "間", 
        on: "カン, ケン", 
        kun: "あいだ, ま", 
        meanEn: "interval, space", 
        meanSi: "විරාමය, අවකාශය", 
        example: [
            {kanji:"時間", kana:"じかん", eng:"time", sin:"වේලාව"}, 
            {kanji:"人間", kana:"にんげん", eng:"human", sin:"මනුෂ්‍ය"},
            {kanji:"間違い", kana:"まちがい", eng:"mistake", sin:"දෝෂය"}
        ] 
    },
    { 
        kanji: "分", 
        on: "ブン, フン, ブ", 
        kun: "わ.ける", 
        meanEn: "minute, part", 
        meanSi: "මිනිත්තුව, කොටස", 
        example: [
            {kanji:"五分", kana:"ごふん", eng:"five minutes", sin:"මිනිත්තු පහ"}, 
            {kanji:"分かる", kana:"わかる", eng:"to understand", sin:"තේරුම් ගැනීම"},
            {kanji:"十分", kana:"じゅうぶん", eng:"enough", sin:"ප්‍රමාණවත්"}
        ] 
    },
    { 
        kanji: "今", 
        on: "コン, キン", 
        kun: "いま", 
        meanEn: "now", 
        meanSi: "දැන්", 
        example: [
            {kanji:"今日", kana:"きょう", eng:"today", sin:"අද"}, 
            {kanji:"今月", kana:"こんげつ", eng:"this month", sin:"මෙම මාසය"},
            {kanji:"今", kana:"いま", eng:"now", sin:"දැන්"}
        ] 
    },
    { 
        kanji: "先", 
        on: "セン", 
        kun: "さき", 
        meanEn: "ahead, previous", 
        meanSi: "මුලින්, පෙර", 
        example: [
            {kanji:"先生", kana:"せんせい", eng:"teacher", sin:"ගුරුවරයා"}, 
            {kanji:"先月", kana:"せんげつ", eng:"last month", sin:"පසුගිය මාසය"},
            {kanji:"先週", kana:"せんしゅう", eng:"last week", sin:"පසුගිය සතිය"}
        ] 
    },
    { 
        kanji: "来", 
        on: "ライ", 
        kun: "く.る", 
        meanEn: "come", 
        meanSi: "එනවා", 
        example: [
            {kanji:"来月", kana:"らいげつ", eng:"next month", sin:"ඊළඟ මාසය"}, 
            {kanji:"来年", kana:"らいねん", eng:"next year", sin:"ඊළඟ වසර"},
            {kanji:"来る", kana:"くる", eng:"to come", sin:"එන්න"}
        ] 
    },
    { 
        kanji: "前", 
        on: "ゼン", 
        kun: "まえ", 
        meanEn: "front, before", 
        meanSi: "ඉදිරියේ, කලින්", 
        example: [
            {kanji:"名前", kana:"なまえ", eng:"name", sin:"නම"}, 
            {kanji:"前", kana:"まえ", eng:"front", sin:"ඉදිරියේ"},
            {kanji:"午前", kana:"ごぜん", eng:"morning", sin:"උදේ"}
        ] 
    },
    { 
        kanji: "後", 
        on: "ゴ, コウ", 
        kun: "あと, うし.ろ", 
        meanEn: "behind, after", 
        meanSi: "පසුපස, පසුව", 
        example: [
            {kanji:"後ろ", kana:"うしろ", eng:"behind", sin:"පසුපස"}, 
            {kanji:"午後", kana:"ごご", eng:"afternoon", sin:"දවල්"},
            {kanji:"後で", kana:"あとで", eng:"later", sin:"පසුව"}
        ] 
    },
    { 
        kanji: "午", 
        on: "ゴ", 
        kun: "", 
        meanEn: "noon", 
        meanSi: "මධ්‍යාහ්න", 
        example: [
            {kanji:"午前", kana:"ごぜん", eng:"morning", sin:"උදේ"}, 
            {kanji:"午後", kana:"ごご", eng:"afternoon", sin:"දවල්"},
            {kanji:"正午", kana:"しょうご", eng:"noon", sin:"මධ්‍යාහ්න"}
        ] 
    },
    { 
        kanji: "語", 
        on: "ゴ", 
        kun: "かた.る", 
        meanEn: "language, word", 
        meanSi: "භාෂාව, වචන", 
        example: [
            {kanji:"日本語", kana:"にほんご", eng:"Japanese language", sin:"ජපන් භාෂාව"}, 
            {kanji:"英語", kana:"えいご", eng:"English", sin:"ඉංග්‍රීසි"},
            {kanji:"語る", kana:"かたる", eng:"to talk", sin:"කතා කිරීම"}
        ] 
    },
    { 
        kanji: "国", 
        on: "コク", 
        kun: "くに", 
        meanEn: "country", 
        meanSi: "රට", 
        example: [
            {kanji:"日本国", kana:"にほんこく", eng:"Japan", sin:"ජපානය"}, 
            {kanji:"中国", kana:"ちゅうごく", eng:"China", sin:"චීනය"},
            {kanji:"国語", kana:"こくご", eng:"national language", sin:"ජාතික භාෂාව"}
        ] 
    },
    { 
        kanji: "中", 
        on: "チュウ", 
        kun: "なか", 
        meanEn: "middle, inside", 
        meanSi: "මැද, ඇතුළත", 
        example: [
            {kanji:"中国", kana:"ちゅうごく", eng:"China", sin:"චීනය"}, 
            {kanji:"中", kana:"なか", eng:"inside", sin:"ඇතුළත"},
            {kanji:"一日中", kana:"いちにちじゅう", eng:"all day", sin:"දවස පුරාම"}
        ] 
    },
    { 
        kanji: "大", 
        on: "ダイ, タイ", 
        kun: "おお, おお.きい", 
        meanEn: "big, large", 
        meanSi: "විශාල", 
        example: [
            {kanji:"大学", kana:"だいがく", eng:"university", sin:"විශ්ව විද්‍යාලය"}, 
            {kanji:"大きい", kana:"おおきい", eng:"big", sin:"විශාල"},
            {kanji:"大好き", kana:"だいすき", eng:"love", sin:"අතිශයින්ම ආදරය"}
        ] 
    },
    { 
        kanji: "小", 
        on: "ショウ", 
        kun: "ちい.さい, こ, お", 
        meanEn: "small, little", 
        meanSi: "කුඩා", 
        example: [
            {kanji:"小さい", kana:"ちいさい", eng:"small", sin:"කුඩා"}, 
            {kanji:"小学校", kana:"しょうがっこう", eng:"elementary school", sin:"ප්‍රාථමික පාසල"},
            {kanji:"小説", kana:"しょうせつ", eng:"novel", sin:"නවකතාව"}
        ] 
    },
    { 
        kanji: "上", 
        on: "ジョウ, ショウ", 
        kun: "うえ, あ.がる", 
        meanEn: "up, above", 
        meanSi: "ඉහළ, ඉහල", 
        example: [
            {kanji:"上", kana:"うえ", eng:"up, above", sin:"ඉහළ"}, 
            {kanji:"上手", kana:"じょうず", eng:"skilled", sin:"පුහුණු"},
            {kanji:"上がる", kana:"あがる", eng:"to rise", sin:"ඉහළ යාම"}
        ] 
    },
    { 
        kanji: "下", 
        on: "カ, ゲ", 
        kun: "した, さ.がる", 
        meanEn: "down, below", 
        meanSi: "පහළ, යට", 
        example: [
            {kanji:"下", kana:"した", eng:"down, below", sin:"පහළ"}, 
            {kanji:"下手", kana:"へた", eng:"unskilled", sin:"නුපුහුණු"},
            {kanji:"下がる", kana:"さがる", eng:"to lower", sin:"පහළ වීම"}
        ] 
    },
    { 
        kanji: "右", 
        on: "ウ, ユウ", 
        kun: "みぎ", 
        meanEn: "right", 
        meanSi: "දකුණ", 
        example: [
            {kanji:"右", kana:"みぎ", eng:"right", sin:"දකුණ"}, 
            {kanji:"右側", kana:"みぎがわ", eng:"right side", sin:"දකුණු පැත්ත"},
            {kanji:"左右", kana:"さゆう", eng:"left and right", sin:"වම-දකුණ"}
        ] 
    },
    { 
        kanji: "左", 
        on: "サ", 
        kun: "ひだり", 
        meanEn: "left", 
        meanSi: "වම", 
        example: [
            {kanji:"左", kana:"ひだり", eng:"left", sin:"වම"}, 
            {kanji:"左側", kana:"ひだりがわ", eng:"left side", sin:"වම් පැත්ත"},
            {kanji:"左右", kana:"さゆう", eng:"left and right", sin:"වම-දකුණ"}
        ] 
    },
    { 
        kanji: "東", 
        on: "トウ", 
        kun: "ひがし", 
        meanEn: "east", 
        meanSi: "නැගෙනහිර", 
        example: [
            {kanji:"東京", kana:"とうきょう", eng:"Tokyo", sin:"ටෝකියෝ"}, 
            {kanji:"東", kana:"ひがし", eng:"east", sin:"නැගෙනහිර"},
            {kanji:"東口", kana:"ひがしぐち", eng:"east exit", sin:"නැගෙනහිර පිවිසුම"}
        ] 
    },
    { 
        kanji: "西", 
        on: "セイ, サイ", 
        kun: "にし", 
        meanEn: "west", 
        meanSi: "බටහිර", 
        example: [
            {kanji:"西", kana:"にし", eng:"west", sin:"බටහිර"}, 
            {kanji:"関西", kana:"かんさい", eng:"Kansai region", sin:"කන්සායි කලාපය"},
            {kanji:"西洋", kana:"せいよう", eng:"Western countries", sin:"බටහිර රටවල්"}
        ] 
    },
    { 
        kanji: "南", 
        on: "ナン", 
        kun: "みなみ", 
        meanEn: "south", 
        meanSi: "දකුණ", 
        example: [
            {kanji:"南", kana:"みなみ", eng:"south", sin:"දකුණ"}, 
            {kanji:"東南", kana:"とうなん", eng:"southeast", sin:"නැගෙනහිර දකුණ"},
            {kanji:"南口", kana:"みなみぐち", eng:"south exit", sin:"දකුණු පිවිසුම"}
        ] 
    },
    { 
        kanji: "北", 
        on: "ホク", 
        kun: "きた", 
        meanEn: "north", 
        meanSi: "උතුර", 
        example: [
            {kanji:"北", kana:"きた", eng:"north", sin:"උතුර"}, 
            {kanji:"東北", kana:"とうほく", eng:"northeast", sin:"නැගෙනහිර උතුර"},
            {kanji:"北口", kana:"きたぐち", eng:"north exit", sin:"උතුරු පිවිසුම"}
        ] 
    },
    { 
        kanji: "口", 
        on: "コウ, ク", 
        kun: "くち", 
        meanEn: "mouth, opening", 
        meanSi: "කට", 
        example: [
            {kanji:"出口", kana:"でぐち", eng:"exit", sin:"පිටවීම"}, 
            {kanji:"入口", kana:"いりぐち", eng:"entrance", sin:"ඇතුල් වීම"},
            {kanji:"口", kana:"くち", eng:"mouth", sin:"කට"}
        ] 
    },
    { 
        kanji: "出", 
        on: "シュツ, スイ", 
        kun: "で.る, だ.す", 
        meanEn: "exit, go out", 
        meanSi: "පිටවීම, එළියට යාම", 
        example: [
            {kanji:"出口", kana:"でぐち", eng:"exit", sin:"පිටවීම"}, 
            {kanji:"出る", kana:"でる", eng:"to go out", sin:"පිටව යාම"},
            {kanji:"出す", kana:"だす", eng:"to take out", sin:"එළියට ගැනීම"}
        ] 
    },
    { 
        kanji: "入", 
        on: "ニュウ", 
        kun: "はい.る, い.れる", 
        meanEn: "enter, insert", 
        meanSi: "ඇතුල් වීම, ඇතුල් කිරීම", 
        example: [
            {kanji:"入口", kana:"いりぐち", eng:"entrance", sin:"ඇතුල් වීම"}, 
            {kanji:"入る", kana:"はいる", eng:"to enter", sin:"ඇතුල් වීම"},
            {kanji:"入学", kana:"にゅうがく", eng:"school admission", sin:"පාසල් ඇතුල් වීම"}
        ] 
    },
    { 
        kanji: "目", 
        on: "モク, ボク", 
        kun: "め", 
        meanEn: "eye", 
        meanSi: "ඇස", 
        example: [
            {kanji:"目", kana:"め", eng:"eye", sin:"ඇස"}, 
            {kanji:"目的", kana:"もくてき", eng:"purpose", sin:"අරමුණ"},
            {kanji:"目次", kana:"もくじ", eng:"table of contents", sin:"පටුන"}
        ] 
    },
    { 
        kanji: "耳", 
        on: "ジ", 
        kun: "みみ", 
        meanEn: "ear", 
        meanSi: "කන", 
        example: [
            {kanji:"耳", kana:"みみ", eng:"ear", sin:"කන"}, 
            {kanji:"耳鼻科", kana:"じびか", eng:"ENT department", sin:"කන-නාසය-ගෙල දෙපාර්තමේන්තුව"},
            {kanji:"耳元", kana:"みみもと", eng:"close to the ear", sin:"කන අසල"}
        ] 
    },
    { 
        kanji: "手", 
        on: "シュ", 
        kun: "て", 
        meanEn: "hand", 
        meanSi: "අත", 
        example: [
            {kanji:"手", kana:"て", eng:"hand", sin:"අත"}, 
            {kanji:"手紙", kana:"てがみ", eng:"letter", sin:"ලිපිය"},
            {kanji:"上手", kana:"じょうず", eng:"skilled", sin:"පුහුණු"}
        ] 
    },
    { 
        kanji: "足", 
        on: "ソク", 
        kun: "あし, た.りる", 
        meanEn: "foot, leg", 
        meanSi: "පය, කකුල", 
        example: [
            {kanji:"足", kana:"あし", eng:"foot, leg", sin:"පය, කකුල"}, 
            {kanji:"足りる", kana:"たりる", eng:"to be enough", sin:"ප්‍රමාණවත් වීම"},
            {kanji:"足音", kana:"あしおと", eng:"footsteps", sin:"පයෝධර"}
        ] 
    },
    { 
        kanji: "見", 
        on: "ケン", 
        kun: "み.る", 
        meanEn: "see, look", 
        meanSi: "දැක්ම, බැලීම", 
        example: [
            {kanji:"見る", kana:"みる", eng:"to see", sin:"බැලීම"}, 
            {kanji:"見本", kana:"みほん", eng:"sample", sin:"නිදර්ශනය"},
            {kanji:"見物", kana:"けんぶつ", eng:"sightseeing", sin:"සංචාරක කටයුතු"}
        ] 
    },
    { 
        kanji: "聞", 
        on: "ブン, モン", 
        kun: "き.く", 
        meanEn: "hear, ask", 
        meanSi: "ඇසීම, අසනවා", 
        example: [
            {kanji:"聞く", kana:"きく", eng:"to hear", sin:"ඇසීම"}, 
            {kanji:"新聞", kana:"しんぶん", eng:"newspaper", sin:"පත්තරය"},
            {kanji:"聞き取り", kana:"ききとり", eng:"listening", sin:"ඇසීම"}
        ] 
    },
    { 
        kanji: "言", 
        on: "ゲン, ゴン", 
        kun: "い.う", 
        meanEn: "say, word", 
        meanSi: "කියනවා, වචන", 
        example: [
            {kanji:"言う", kana:"いう", eng:"to say", sin:"කියනවා"}, 
            {kanji:"言葉", kana:"ことば", eng:"word", sin:"වචන"},
            {kanji:"言語", kana:"げんご", eng:"language", sin:"භාෂාව"}
        ] 
    },
    { 
        kanji: "話", 
        on: "ワ", 
        kun: "はな.す", 
        meanEn: "talk, story", 
        meanSi: "කතාව, කතා කිරීම", 
        example: [
            {kanji:"話す", kana:"はなす", eng:"to speak", sin:"කතා කිරීම"}, 
            {kanji:"電話", kana:"でんわ", eng:"telephone", sin:"දුරකථනය"},
            {kanji:"会話", kana:"かいわ", eng:"conversation", sin:"සංවාදය"}
        ] 
    },
    { 
        kanji: "読", 
        on: "ドク, トク, トウ", 
        kun: "よ.む", 
        meanEn: "read", 
        meanSi: "කියවනවා", 
        example: [
            {kanji:"読む", kana:"よむ", eng:"to read", sin:"කියවනවා"}, 
            {kanji:"読書", kana:"どくしょ", eng:"reading", sin:"කියවීම"},
            {kanji:"読者", kana:"どくしゃ", eng:"reader", sin:"කියවන්නා"}
        ] 
    },
    { 
        kanji: "書", 
        on: "ショ", 
        kun: "か.く", 
        meanEn: "write", 
        meanSi: "ලියනවා", 
        example: [
            {kanji:"書く", kana:"かく", eng:"to write", sin:"ලියනවා"}, 
            {kanji:"辞書", kana:"じしょ", eng:"dictionary", sin:"ශබ්ද කෝෂය"},
            {kanji:"読書", kana:"どくしょ", eng:"reading", sin:"කියවීම"}
        ] 
    },
    { 
        kanji: "食", 
        on: "ショク, ジキ", 
        kun: "た.べる, く.う", 
        meanEn: "eat, food", 
        meanSi: "කනවා, ආහාර", 
        example: [
            {kanji:"食べる", kana:"たべる", eng:"to eat", sin:"කනවා"}, 
            {kanji:"食事", kana:"しょくじ", eng:"meal", sin:"ආහාර"},
            {kanji:"食堂", kana:"しょくどう", eng:"dining room", sin:"ආහාර ශාලාව"}
        ] 
    },
    { 
        kanji: "飲", 
        on: "イン", 
        kun: "の.む", 
        meanEn: "drink", 
        meanSi: "බොනවා", 
        example: [
            {kanji:"飲む", kana:"のむ", eng:"to drink", sin:"බොනවා"}, 
            {kanji:"飲み物", kana:"のみもの", eng:"drink", sin:"පානය"},
            {kanji:"飲食店", kana:"いんしょくてん", eng:"restaurant", sin:"අවන්හල"}
        ] 
    },
    { 
        kanji: "行", 
        on: "コウ, ギョウ", 
        kun: "い.く, ゆ.く", 
        meanEn: "go, conduct", 
        meanSi: "යනවා, පැවැත්වීම", 
        example: [
            {kanji:"行く", kana:"いく", eng:"to go", sin:"යනවා"}, 
            {kanji:"旅行", kana:"りょこう", eng:"travel", sin:"සංචාරය"},
            {kanji:"銀行", kana:"ぎんこう", eng:"bank", sin:"බැංකුව"}
        ] 
    },
    { 
        kanji: "来", 
        on: "ライ", 
        kun: "く.る", 
        meanEn: "come", 
        meanSi: "එනවා", 
        example: [
            {kanji:"来る", kana:"くる", eng:"to come", sin:"එනවා"}, 
            {kanji:"来月", kana:"らいげつ", eng:"next month", sin:"ඊළඟ මාසය"},
            {kanji:"来年", kana:"らいねん", eng:"next year", sin:"ඊළඟ වසර"}
        ] 
    },
    { 
        kanji: "帰", 
        on: "キ", 
        kun: "かえ.る", 
        meanEn: "return home", 
        meanSi: "නිවසට ආපසු එනවා", 
        example: [
            {kanji:"帰る", kana:"かえる", eng:"to return home", sin:"නිවසට ආපසු එනවා"}, 
            {kanji:"帰国", kana:"きこく", eng:"return to home country", sin:"මව් රටට ආපසු යාම"},
            {kanji:"帰宅", kana:"きたく", eng:"return home", sin:"නිවසට ආපසු එනවා"}
        ] 
    },
    { 
        kanji: "買", 
        on: "バイ", 
        kun: "か.う", 
        meanEn: "buy", 
        meanSi: "කනවා", 
        example: [
            {kanji:"買う", kana:"かう", eng:"to buy", sin:"කනවා"}, 
            {kanji:"買い物", kana:"かいもの", eng:"shopping", sin:"සාප්පු යාම"},
            {kanji:"売買", kana:"ばいばい", eng:"buying and selling", sin:"කොල්ලකම් කිරීම"}
        ] 
    },
    { 
        kanji: "休", 
        on: "キュウ", 
        kun: "やす.む", 
        meanEn: "rest, holiday", 
        meanSi: "විවේකය, නිවාඩු", 
        example: [
            {kanji:"休む", kana:"やすむ", eng:"to rest", sin:"විවේක ගන්නවා"}, 
            {kanji:"休日", kana:"きゅうじつ", eng:"holiday", sin:"නිවාඩු දිනය"},
            {kanji:"夏休み", kana:"なつやすみ", eng:"summer vacation", sin:"ගිම්හාන නිවාඩු"}
        ] 
    },
    { 
        kanji: "会", 
        on: "カイ, エ", 
        kun: "あ.う", 
        meanEn: "meeting, meet", 
        meanSi: "සම්මුලය, හමුවීම", 
        example: [
            {kanji:"会う", kana:"あう", eng:"to meet", sin:"හමුවීම"}, 
            {kanji:"会社", kana:"かいしゃ", eng:"company", sin:"සමාගම"},
            {kanji:"会話", kana:"かいわ", eng:"conversation", sin:"සංවාදය"}
        ] 
    },
    { 
        kanji: "駅", 
        on: "エキ", 
        kun: "", 
        meanEn: "station", 
        meanSi: "දුම්රිය ස්ථානය", 
        example: [
            {kanji:"駅", kana:"えき", eng:"station", sin:"දුම්රිය ස්ථානය"}, 
            {kanji:"駅前", kana:"えきまえ", eng:"in front of the station", sin:"දුම්රිය ස්ථානය ඉදිරියේ"},
            {kanji:"駅員", kana:"えきいん", eng:"station staff", sin:"දුම්රිය ස්ථාන සේවක"}
        ] 
    },
    { 
        kanji: "車", 
        on: "シャ", 
        kun: "くるま", 
        meanEn: "car, vehicle", 
        meanSi: "මෝටර් රථය, වාහනය", 
        example: [
            {kanji:"車", kana:"くるま", eng:"car", sin:"මෝටර් රථය"}, 
            {kanji:"自動車", kana:"じどうしゃ", eng:"automobile", sin:"ස්වයංක්‍රීය වාහනය"},
            {kanji:"電車", kana:"でんしゃ", eng:"train", sin:"දුම්රිය"}
        ] 
    },
    { 
        kanji: "電", 
        on: "デン", 
        kun: "", 
        meanEn: "electricity", 
        meanSi: "විදුලිය", 
        example: [
            {kanji:"電気", kana:"でんき", eng:"electricity", sin:"විදුලිය"}, 
            {kanji:"電車", kana:"でんしゃ", eng:"train", sin:"දුම්රිය"},
            {kanji:"電話", kana:"でんわ", eng:"telephone", sin:"දුරකථනය"}
        ] 
    },
    { 
        kanji: "気", 
        on: "キ, ケ", 
        kun: "", 
        meanEn: "spirit, mood", 
        meanSi: "ආත්මය, මනෝභාවය", 
        example: [
            {kanji:"気", kana:"き", eng:"spirit", sin:"ආත්මය"}, 
            {kanji:"天気", kana:"てんき", eng:"weather", sin:"කාලගුණය"},
            {kanji:"元気", kana:"げんき", eng:"healthy, energetic", sin:"සෞඛ්‍ය සම්පන්න"}
        ] 
    },
    { 
        kanji: "天", 
        on: "テン", 
        kun: "あま", 
        meanEn: "heaven, sky", 
        meanSi: "ස්වර්ගය, අහස", 
        example: [
            {kanji:"天気", kana:"てんき", eng:"weather", sin:"කාලගුණය"}, 
            {kanji:"天", kana:"てん", eng:"heaven", sin:"ස්වර්ගය"},
            {kanji:"天井", kana:"てんじょう", eng:"ceiling", sin:"සිවිලිම"}
        ] 
    },
    { 
        kanji: "雨", 
        on: "ウ", 
        kun: "あめ", 
        meanEn: "rain", 
        meanSi: "වර්ෂාව", 
        example: [
            {kanji:"雨", kana:"あめ", eng:"rain", sin:"වර්ෂාව"}, 
            {kanji:"大雨", kana:"おおあめ", eng:"heavy rain", sin:"තද වර්ෂාව"},
            {kanji:"雨天", kana:"うてん", eng:"rainy weather", sin:"වැසි කාලගුණය"}
        ] 
    },
    { 
        kanji: "山", 
        on: "サン", 
        kun: "やま", 
        meanEn: "mountain", 
        meanSi: "ගල්කන්ද", 
        example: [
            {kanji:"山", kana:"やま", eng:"mountain", sin:"ගල්කන්ද"}, 
            {kanji:"富士山", kana:"ふじさん", eng:"Mount Fuji", sin:"ෆුජි කන්ද"},
            {kanji:"火山", kana:"かざん", eng:"volcano", sin:"ගිනිකඳු"}
        ] 
    },
    { 
        kanji: "川", 
        on: "セン", 
        kun: "かわ", 
        meanEn: "river", 
        meanSi: "ගංගාව", 
        example: [
            {kanji:"川", kana:"かわ", eng:"river", sin:"ගංගාව"}, 
            {kanji:"川口", kana:"かわぐち", eng:"river mouth", sin:"ගංගා මුඛය"},
            {kanji:"小川", kana:"おがわ", eng:"stream", sin:"දහරාව"}
        ] 
    },
    { 
        kanji: "田", 
        on: "デン", 
        kun: "た", 
        meanEn: "rice field", 
        meanSi: "වී කෙත්", 
        example: [
            {kanji:"田", kana:"た", eng:"rice field", sin:"වී කෙත්"}, 
            {kanji:"田舎", kana:"いなか", eng:"countryside", sin:"ගම්බද"},
            {kanji:"田中", kana:"たなか", eng:"Tanaka", sin:"ටනකා"}
        ] 
    },
    { 
        kanji: "道", 
        on: "ドウ", 
        kun: "みち", 
        meanEn: "road, way", 
        meanSi: "මාර්ගය, මාවත", 
        example: [
            {kanji:"道", kana:"みち", eng:"road", sin:"මාර්ගය"}, 
            {kanji:"道路", kana:"どうろ", eng:"road", sin:"මාර්ගය"},
            {kanji:"北海道", kana:"ほっかいどう", eng:"Hokkaido", sin:"හොක්කයිඩෝ"}
        ] 
    },
    { 
        kanji: "店", 
        on: "テン", 
        kun: "みせ", 
        meanEn: "shop, store", 
        meanSi: "ගබඩාව, කඩය", 
        example: [
            {kanji:"店", kana:"みせ", eng:"shop", sin:"ගබඩාව"}, 
            {kanji:"本屋", kana:"ほんや", eng:"bookstore", sin:"පොත් ගබඩාව"},
            {kanji:"喫茶店", kana:"きっさてん", eng:"coffee shop", sin:"කෝපි ගබඩාව"}
        ] 
    },
    { 
        kanji: "社", 
        on: "シャ", 
        kun: "やしろ", 
        meanEn: "company, shrine", 
        meanSi: "සමාගම, දේවාලය", 
        example: [
            {kanji:"会社", kana:"かいしゃ", eng:"company", sin:"සමාගම"}, 
            {kanji:"社長", kana:"しゃちょう", eng:"company president", sin:"සමාගම් අධිපති"},
            {kanji:"神社", kana:"じんじゃ", eng:"Shinto shrine", sin:"ෂින්ටෝ දේවාලය"}
        ] 
    },
    { 
        kanji: "名", 
        on: "メイ, ミョウ", 
        kun: "な", 
        meanEn: "name", 
        meanSi: "නම", 
        example: [
            {kanji:"名前", kana:"なまえ", eng:"name", sin:"නම"}, 
            {kanji:"名字", kana:"みょうじ", eng:"surname", sin:"උපන් නම"},
            {kanji:"有名", kana:"ゆうめい", eng:"famous", sin:"ප්‍රසිද්ධ"}
        ] 
    },
    { 
        kanji: "高", 
        on: "コウ", 
        kun: "たか.い", 
        meanEn: "tall, high", 
        meanSi: "උස්, ඉහළ", 
        example: [
            {kanji:"高い", kana:"たかい", eng:"tall, expensive", sin:"උස්, මිල අධික"}, 
            {kanji:"高校", kana:"こうこう", eng:"high school", sin:"උසස් පාසල"},
            {kanji:"高橋", kana:"たかはし", eng:"Takahashi", sin:"ටකහෂි"}
        ] 
    },
    { 
        kanji: "安", 
        on: "アン", 
        kun: "やす.い", 
        meanEn: "cheap, peaceful", 
        meanSi: "සුලභ, සාමකාමී", 
        example: [
            {kanji:"安い", kana:"やすい", eng:"cheap", sin:"සුලභ"}, 
            {kanji:"安心", kana:"あんしん", eng:"relief", sin:"සැනසීම"},
            {kanji:"安全", kana:"あんぜん", eng:"safety", sin:"සුරක්ෂිතතාව"}
        ] 
    },
    { 
        kanji: "新", 
        on: "シン", 
        kun: "あたら.しい, あら.た", 
        meanEn: "new", 
        meanSi: "අලුත්", 
        example: [
            {kanji:"新しい", kana:"あたらしい", eng:"new", sin:"අලුත්"}, 
            {kanji:"新聞", kana:"しんぶん", eng:"newspaper", sin:"පත්තරය"},
            {kanji:"新年", kana:"しんねん", eng:"New Year", sin:"අලුත් අවුරුද්ද"}
        ] 
    },
    { 
        kanji: "古", 
        on: "コ", 
        kun: "ふる.い", 
        meanEn: "old", 
        meanSi: "පැරණි", 
        example: [
            {kanji:"古い", kana:"ふるい", eng:"old", sin:"පැරණි"}, 
            {kanji:"中古", kana:"ちゅうこ", eng:"used", sin:"පැරණි භාවිතා කළ"},
            {kanji:"古代", kana:"こだい", eng:"ancient times", sin:"පුරාතන යුගය"}
        ] 
    },
    { 
        kanji: "長", 
        on: "チョウ", 
        kun: "なが.い", 
        meanEn: "long, leader", 
        meanSi: "දිගු, නායක", 
        example: [
            {kanji:"長い", kana:"ながい", eng:"long", sin:"දිගු"}, 
            {kanji:"校長", kana:"こうちょう", eng:"principal", sin:"ප්‍රධාන ගුරු"},
            {kanji:"社長", kana:"しゃちょう", eng:"company president", sin:"සමාගම් අධිපති"}
        ] 
    },
    { 
        kanji: "白", 
        on: "ハク, ビャク", 
        kun: "しろ, しろ.い", 
        meanEn: "white", 
        meanSi: "සුදු", 
        example: [
            {kanji:"白い", kana:"しろい", eng:"white", sin:"සුදු"}, 
            {kanji:"白黒", kana:"しろくろ", eng:"black and white", sin:"කලු සුදු"},
            {kanji:"白人", kana:"はくじん", eng:"white person", sin:"සුදු මනුෂ්‍ය"}
        ] 
    },
    { 
        kanji: "黒", 
        on: "コク", 
        kun: "くろ, くろ.い", 
        meanEn: "black", 
        meanSi: "කලු", 
        example: [
            {kanji:"黒い", kana:"くろい", eng:"black", sin:"කලු"}, 
            {kanji:"黒板", kana:"こくばん", eng:"blackboard", sin:"කළු පුවරුව"},
            {kanji:"黒白", kana:"くろしろ", eng:"black and white", sin:"කලු සුදු"}
        ] 
    },
    { 
        kanji: "赤", 
        on: "セキ, シャク", 
        kun: "あか, あか.い", 
        meanEn: "red", 
        meanSi: "රතු", 
        example: [
            {kanji:"赤い", kana:"あかい", eng:"red", sin:"රතු"}, 
            {kanji:"赤ちゃん", kana:"あかちゃん", eng:"baby", sin:"ළදරුවා"},
            {kanji:"赤道", kana:"せきどう", eng:"equator", sin:"සමකය"}
        ] 
    },
    { 
        kanji: "青", 
        on: "セイ, ショウ", 
        kun: "あお, あお.い", 
        meanEn: "blue, green", 
        meanSi: "නිල්, කොළ", 
        example: [
            {kanji:"青い", kana:"あおい", eng:"blue, green", sin:"නිල්, කොළ"}, 
            {kanji:"青空", kana:"あおぞら", eng:"blue sky", sin:"නිල් අහස"},
            {kanji:"青年", kana:"せいねん", eng:"youth", sin:"තරුණයා"}
        ] 
    },
    { 
        kanji: "色", 
        on: "ショク, シキ", 
        kun: "いろ", 
        meanEn: "color", 
        meanSi: "වර්ණ", 
        example: [
            {kanji:"色", kana:"いろ", eng:"color", sin:"වර්ණ"}, 
            {kanji:"黄色", kana:"きいろ", eng:"yellow", sin:"කහ"},
            {kanji:"特色", kana:"とくしょく", eng:"characteristic", sin:"විශේෂාංග"}
        ] 
    },
    { 
        kanji: "好", 
        on: "コウ", 
        kun: "す.き, この.む", 
        meanEn: "like, fond", 
        meanSi: "ආදරය, කැමති", 
        example: [
            {kanji:"好き", kana:"すき", eng:"like", sin:"කැමති"}, 
            {kanji:"大好き", kana:"だいすき", eng:"love", sin:"අතිශයින්ම ආදරය"},
            {kanji:"友好", kana:"ゆうこう", eng:"friendship", sin:"මිත්‍රත්වය"}
        ] 
    },
    { 
        kanji: "多", 
        on: "タ", 
        kun: "おお.い", 
        meanEn: "many, much", 
        meanSi: "බොහෝ", 
        example: [
            {kanji:"多い", kana:"おおい", eng:"many", sin:"බොහෝ"}, 
            {kanji:"多分", kana:"たぶん", eng:"probably", sin:"බොහෝ විට"},
            {kanji:"多様", kana:"たよう", eng:"diverse", sin:"විවිධාකාර"}
        ] 
    },
    { 
        kanji: "少", 
        on: "ショウ", 
        kun: "すく.ない, すこ.し", 
        meanEn: "few, little", 
        meanSi: "ස්වල්ප, ටිකක්", 
        example: [
            {kanji:"少ない", kana:"すくない", eng:"few", sin:"ස්වල්ප"}, 
            {kanji:"少し", kana:"すこし", eng:"a little", sin:"ටිකක්"},
            {kanji:"少女", kana:"しょうじょ", eng:"young girl", sin:"තරුණ කාන්තාව"}
        ] 
    },
    { 
        kanji: "半", 
        on: "ハン", 
        kun: "なか.ば", 
        meanEn: "half", 
        meanSi: "අඩක්", 
        example: [
            {kanji:"半分", kana:"はんぶん", eng:"half", sin:"අඩක්"}, 
            {kanji:"半島", kana:"はんとう", eng:"peninsula", sin:"අර්ධද්වීපය"},
            {kanji:"前半", kana:"ぜんはん", eng:"first half", sin:"පළමු අඩක්"}
        ] 
    },
    { 
        kanji: "毎", 
        on: "マイ", 
        kun: "", 
        meanEn: "every", 
        meanSi: "සෑම", 
        example: [
            {kanji:"毎日", kana:"まいにち", eng:"every day", sin:"සෑම දිනකම"}, 
            {kanji:"毎週", kana:"まいしゅう", eng:"every week", sin:"සෑම සතියකම"},
            {kanji:"毎年", kana:"まいとし", eng:"every year", sin:"සෑම වසරකම"}
        ] 
    },
    { 
        kanji: "週", 
        on: "シュウ", 
        kun: "", 
        meanEn: "week", 
        meanSi: "සතිය", 
        example: [
            {kanji:"一週間", kana:"いっしゅうかん", eng:"one week", sin:"සතියක්"}, 
            {kanji:"今週", kana:"こんしゅう", eng:"this week", sin:"මෙම සතිය"},
            {kanji:"週末", kana:"しゅうまつ", eng:"weekend", sin:"සති අන්තය"}
        ] 
    },
    { 
        kanji: "本", 
        on: "ホン", 
        kun: "もと", 
        meanEn: "book, main", 
        meanSi: "පොත, ප්‍රධාන", 
        example: [
            {kanji:"本", kana:"ほん", eng:"book", sin:"පොත"}, 
            {kanji:"日本", kana:"にほん", eng:"Japan", sin:"ජපානය"},
            {kanji:"本当", kana:"ほんとう", eng:"truth", sin:"සත්‍යය"}
        ] 
    },
    { 
        kanji: "毎", 
        on: "マイ", 
        kun: "", 
        meanEn: "every", 
        meanSi: "සෑම", 
        example: [
            {kanji:"毎日", kana:"まいにち", eng:"every day", sin:"සෑම දිනකම"}, 
            {kanji:"毎週", kana:"まいしゅう", eng:"every week", sin:"සෑම සතියකම"},
            {kanji:"毎年", kana:"まいとし", eng:"every year", sin:"සෑම වසරකම"}
        ] 
    }
];