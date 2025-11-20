
import { KanjiEntry } from './types';

export const KANJI_DATA: KanjiEntry[] = [
  {
    id: 1,
    kanji: "住",
    kunReading: "す(む)",
    onReading: "じゅう",
    compounds: [
      { word: "住む", reading: "すむ", meaningMM: "နေထိုင်သည်" },
      { word: "住民", reading: "じゅうみん", meaningMM: "ပြည်သူ" }
    ]
  },
  {
    id: 2,
    kanji: "所",
    kunReading: "ところ / -どころ",
    onReading: "しょ / じょ",
    compounds: [
      { word: "所", reading: "ところ", meaningMM: "နေရာ" },
      { word: "住所", reading: "じゅうしょ", meaningMM: "လိပ်စာ" },
      { word: "台所", reading: "だいどころ", meaningMM: "မီးဖိုချောင်" },
      { word: "場所", reading: "ばしょ", meaningMM: "နေရာ" }
    ]
  },
  {
    id: 3,
    kanji: "京",
    kunReading: "-",
    onReading: "きょう",
    compounds: [
      { word: "東京", reading: "とうきょう", meaningMM: "တိုကျို" }
    ]
  },
  {
    id: 4,
    kanji: "都",
    kunReading: "みやこ",
    onReading: "と、つ",
    compounds: [
      { word: "東京都", reading: "とうきょうと", meaningMM: "တိုကျိုမြို့" },
      { word: "首都", reading: "しゅと", meaningMM: "မြို့တော်" },
      { word: "都合がいい", reading: "つごうがいい", meaningMM: "အဆင်ပြေသော" }
    ]
  },
  {
    id: 5,
    kanji: "府",
    kunReading: "-",
    onReading: "ふ",
    compounds: [
      { word: "京都府", reading: "きょうとふ", meaningMM: "Kyoto" },
      { word: "大阪府", reading: "おおさかふ", meaningMM: "Oosaka" },
      { word: "政府", reading: "せいふ", meaningMM: "အစိုးရ" }
    ]
  },
  {
    id: 6,
    kanji: "県",
    kunReading: "-",
    onReading: "けん",
    compounds: [
      { word: "山口県", reading: "やまぐちけん", meaningMM: "Yamaguchi ခရိုင်" },
      { word: "県知事", reading: "けんちじ", meaningMM: "စာရင်စုအုပ်ချုပ်ရေး" }
    ]
  },
  {
    id: 7,
    kanji: "市",
    kunReading: "いち",
    onReading: "し",
    compounds: [
      { word: "京都市", reading: "きょうとし", meaningMM: "Kyoto" },
      { word: "市長", reading: "しちょう", meaningMM: "မြို့တော်ဝန်" },
      { word: "市場", reading: "いちば", meaningMM: "ဈေး" }
    ]
  },
  {
    id: 8,
    kanji: "区",
    kunReading: "-",
    onReading: "く",
    compounds: [
      { word: "北区", reading: "きたく", meaningMM: "Kitaku (place name)" },
      { word: "区長", reading: "くちょう", meaningMM: "ရပ်ကွက်လူကြီး" },
      { word: "文京区", reading: "ぶんきょうく", meaningMM: "Bunkyouku" }
    ]
  },
  {
    id: 9,
    kanji: "町",
    kunReading: "まち",
    onReading: "ちょう",
    compounds: [
      { word: "町", reading: "まち", meaningMM: "မြို့" },
      { word: "下町", reading: "したまち", meaningMM: "ဆင်ခြေဖုံး" },
      { word: "町長", reading: "ちょうちょう", meaningMM: "မြို့သူကြီး" }
    ]
  },
  {
    id: 10,
    kanji: "村",
    kunReading: "むら",
    onReading: "そん",
    compounds: [
      { word: "村", reading: "むら", meaningMM: "ရွာ" },
      { word: "村人", reading: "むらびと", meaningMM: "ရွာသူရွာသား" },
      { word: "村長", reading: "そんちょう", meaningMM: "ရွာသူကြီး" }
    ]
  },
  {
    id: 11,
    kanji: "明",
    kunReading: "あか(るい)",
    onReading: "めい",
    compounds: [
      { word: "明るい", reading: "あかるい", meaningMM: "လင်းလက်သော" },
      { word: "明日", reading: "あした / あす", meaningMM: "မနက်ဖြန်" },
      { word: "説明", reading: "せつめい", meaningMM: "ရှင်းလင်းချက်" },
      { word: "発明", reading: "はつめい", meaningMM: "တီထွင်သည်" }
    ]
  },
  {
    id: 12,
    kanji: "暗",
    kunReading: "くら(い)",
    onReading: "あん",
    compounds: [
      { word: "暗い", reading: "くらい", meaningMM: "မှောင်သော" },
      { word: "暗号", reading: "あんごう", meaningMM: "လျှို့ဝှက်နံပါတ်" }
    ]
  },
  {
    id: 13,
    kanji: "遠",
    kunReading: "とお(い)",
    onReading: "えん",
    compounds: [
      { word: "遠い", reading: "とおい", meaningMM: "ဝေးသော" },
      { word: "遠足", reading: "えんそく", meaningMM: "လေ့လာရေးခရီး" }
    ]
  },
  {
    id: 14,
    kanji: "近",
    kunReading: "ちか(い)",
    onReading: "きん",
    compounds: [
      { word: "近い", reading: "ちかい", meaningMM: "နီးသော" },
      { word: "近所", reading: "きんじょ", meaningMM: "အနီးအနား" },
      { word: "最近", reading: "さいきん", meaningMM: "လတ်တလော" }
    ]
  },
  {
    id: 15,
    kanji: "強",
    kunReading: "つよ(い)",
    onReading: "きょう",
    compounds: [
      { word: "強い", reading: "つよい", meaningMM: "အားကောင်းသော" },
      { word: "勉強する", reading: "べんきょうする", meaningMM: "စာလေ့လာသည်" },
      { word: "強風", reading: "きょうふう", meaningMM: "လေပြင်း" }
    ]
  },
  {
    id: 16,
    kanji: "弱",
    kunReading: "よわ(い)",
    onReading: "じゃく",
    compounds: [
      { word: "弱い", reading: "よわい", meaningMM: "အားနည်းသော" },
      { word: "強弱", reading: "きょうじゃく", meaningMM: "strong & weak" }
    ]
  },
  {
    id: 17,
    kanji: "重",
    kunReading: "おも(い)",
    onReading: "じゅう",
    compounds: [
      { word: "重い", reading: "おもい", meaningMM: "လေးသော" },
      { word: "重大な", reading: "じゅうだいな", meaningMM: "အရေးပါသော" },
      { word: "体重", reading: "たいじゅう", meaningMM: "ကိုယ်အလေးချိန်" }
    ]
  },
  {
    id: 18,
    kanji: "軽",
    kunReading: "かる(い)",
    onReading: "けい",
    compounds: [
      { word: "軽い", reading: "かるい", meaningMM: "ပေါ့ပါးသော" },
      { word: "軽食", reading: "けいしょく", meaningMM: "အဆာပြေ (snack)" }
    ]
  },
  {
    id: 19,
    kanji: "太",
    kunReading: "ふと(い)",
    onReading: "たい",
    compounds: [
      { word: "太い", reading: "ふとい", meaningMM: "ဝသော" },
      { word: "太陽", reading: "たいよう", meaningMM: "နေမင်းကြီး" }
    ]
  },
  {
    id: 20,
    kanji: "細",
    kunReading: "ほそ(い)、こま(かい)",
    onReading: "さい",
    compounds: [
      { word: "細い", reading: "ほそい", meaningMM: "ပိန်သော" },
      { word: "細かい", reading: "こまかい", meaningMM: "သေးနုတ်သော" },
      { word: "細工", reading: "さいく", meaningMM: "လက်မှုအတတ်ပညာ" }
    ]
  },
  {
    id: 21,
    kanji: "特",
    kunReading: "-",
    onReading: "とく、とっ",
    compounds: [
      { word: "特に", reading: "とくに", meaningMM: "အထူးသဖြင့်" },
      { word: "特別な", reading: "とくべつな", meaningMM: "ထူးခြားသော" },
      { word: "特急", reading: "とっきゅう", meaningMM: "အထူးအမြန် (ရထား)" }
    ]
  },
  {
    id: 22,
    kanji: "別",
    kunReading: "わか(れる)",
    onReading: "べつ",
    compounds: [
      { word: "別れる", reading: "わかれる", meaningMM: "ကွဲကွာသည်" },
      { word: "別々に", reading: "べつべつに", meaningMM: "သက်သက်စီ" },
      { word: "区別する", reading: "くべつする", meaningMM: "ခွဲခြားစိတ်ဖြာသည် (classification)" },
      { word: "分別する", reading: "ぶんべつする", meaningMM: "အမျိုးအစားခွဲခြားသည် (division)" }
    ]
  },
  {
    id: 23,
    kanji: "有",
    kunReading: "あ(る)",
    onReading: "ゆう",
    compounds: [
      { word: "有る", reading: "ある", meaningMM: "ရှိသည်" },
      { word: "有名な", reading: "ゆうめいな", meaningMM: "နာမည်ကြီးသော" },
      { word: "有料", reading: "ゆうりょう", meaningMM: "အခကြေးငွေလိုသော" }
    ]
  },
  {
    id: 24,
    kanji: "便",
    kunReading: "たよ(り)",
    onReading: "べん / びん",
    compounds: [
      { word: "便り", reading: "たより", meaningMM: "စာ (letter)" },
      { word: "郵便局", reading: "ゆうびんきょく", meaningMM: "စာတိုက်" },
      { word: "船便", reading: "ふなびん", meaningMM: "ရေကြောင်းစာ" }
    ]
  },
  {
    id: 25,
    kanji: "利",
    kunReading: "-",
    onReading: "り",
    compounds: [
      { word: "便利な", reading: "べんりな", meaningMM: "အဆင်ပြေသော" },
      { word: "利用する", reading: "りようする", meaningMM: "အသုံးပြုသည်" },
      { word: "利子", reading: "りし", meaningMM: "အတိုး" },
      { word: "有利な", reading: "ゆうりな", meaningMM: "အကျိုးရှိသော" }
    ]
  },
  {
    id: 26,
    kanji: "不",
    kunReading: "-",
    onReading: "ふ、ぶ",
    compounds: [
      { word: "不便な", reading: "ふべんな", meaningMM: "အဆင်မပြေသော" },
      { word: "不足", reading: "ふそく", meaningMM: "မလုံလောက်သော" },
      { word: "不安な", reading: "ふあんな", meaningMM: "မလုံခြုံသော" },
      { word: "不運な", reading: "ふうんな", meaningMM: "ကံမကောင်းသော" }
    ]
  },
  {
    id: 27,
    kanji: "切",
    kunReading: "き(る)",
    onReading: "せつ",
    compounds: [
      { word: "切る", reading: "きる", meaningMM: "လှီးဖြတ်သည်" },
      { word: "切手", reading: "きって", meaningMM: "တံဆိပ်ခေါင်း" },
      { word: "大切な", reading: "たいせつな", meaningMM: "အရေးပါသော" },
      { word: "親切な", reading: "しんせつな", meaningMM: "သဘောကောင်းသော" }
    ]
  },
  {
    id: 28,
    kanji: "元",
    kunReading: "もと",
    onReading: "げん、がん",
    compounds: [
      { word: "元気な", reading: "げんきな", meaningMM: "ကျန်းမာသော" },
      { word: "元日", reading: "がんじつ", meaningMM: "နှစ်ဆန်း ၁ ရက်နေ့" },
      { word: "紀元前", reading: "きげんぜん", meaningMM: "ခရစ်တော်မပေါ်မီ" }
    ]
  },
  {
    id: 29,
    kanji: "好",
    kunReading: "す(き)",
    onReading: "こう",
    compounds: [
      { word: "好きな", reading: "すきな", meaningMM: "ကြိုက်သော" },
      { word: "好意", reading: "こうい", meaningMM: "ကြင်နာသော" },
      { word: "好物", reading: "こうぶつ", meaningMM: "အကြိုက်ဆုံးအစားအစာ" }
    ]
  },
  {
    id: 30,
    kanji: "急",
    kunReading: "いそ(ぐ)",
    onReading: "きゅう",
    compounds: [
      { word: "急ぐ", reading: "いそぐ", meaningMM: "အလျင်လိုသည်" },
      { word: "急に", reading: "きゅうに", meaningMM: "ရုတ်တရက်" },
      { word: "特急", reading: "とっきゅう", meaningMM: "အထူးအမြန် (ရထား)" },
      { word: "急用", reading: "きゅうよう", meaningMM: "အရေးပေါ်ကိစ္စ" }
    ]
  },
  {
    id: 31,
    kanji: "低",
    kunReading: "ひく(い)",
    onReading: "てい",
    compounds: [
      { word: "低い", reading: "ひくい", meaningMM: "နိမ့်သော" },
      { word: "低下する", reading: "ていかする", meaningMM: "ကျဆင်းသည်" },
      { word: "低気圧", reading: "ていきあつ", meaningMM: "လေဖိအားနည်း" }
    ]
  },
  {
    id: 32,
    kanji: "広",
    kunReading: "ひろ(い)",
    onReading: "こう",
    compounds: [
      { word: "広い", reading: "ひろい", meaningMM: "ကျယ်သော" },
      { word: "広場", reading: "ひろば", meaningMM: "ကွင်းပြင်ကျယ်" },
      { word: "広大な", reading: "こうだいな", meaningMM: "ကြီးမားကျယ်ပြန့်သော" }
    ]
  },
  {
    id: 33,
    kanji: "短",
    kunReading: "みじか(い)",
    onReading: "たん",
    compounds: [
      { word: "短い", reading: "みじかい", meaningMM: "တိုသော" },
      { word: "短時間", reading: "たんじかん", meaningMM: "အချိန်တို" }
    ]
  },
  {
    id: 34,
    kanji: "良",
    kunReading: "よ(い)",
    onReading: "りょう",
    compounds: [
      { word: "良い", reading: "よい", meaningMM: "ကောင်းသော" },
      { word: "良心", reading: "りょうしん", meaningMM: "ကောင်းကျိုးဆိုးကျိုးခွဲခြားသိမြင်တတ်သော" }
    ]
  },
  {
    id: 35,
    kanji: "悪",
    kunReading: "わる(い)",
    onReading: "あく",
    compounds: [
      { word: "悪い", reading: "わるい", meaningMM: "ဆိုးသော" },
      { word: "悪人", reading: "あくにん", meaningMM: "လူဆိုး" }
    ]
  },
  {
    id: 36,
    kanji: "正",
    kunReading: "ただ(しい)",
    onReading: "せい、しょう",
    compounds: [
      { word: "正しい", reading: "ただしい", meaningMM: "မှန်ကန်သော" },
      { word: "正月", reading: "しょうがつ", meaningMM: "နှစ်သစ်ကူး" },
      { word: "正門", reading: "せいもん", meaningMM: "ပင်မဂိတ်ပေါက်" }
    ]
  },
  {
    id: 37,
    kanji: "変",
    kunReading: "かわ(る)、かえ(る)",
    onReading: "へん",
    compounds: [
      { word: "変わる", reading: "かわる", meaningMM: "ပြောင်းလဲသွားသည်" },
      { word: "変える", reading: "かえる", meaningMM: "ပြောင်းလဲသည်" },
      { word: "大変な", reading: "たいへんな", meaningMM: "ပင်ပန်းသော" },
      { word: "変化する", reading: "へんかする", meaningMM: "ပြောင်းလဲသည်" }
    ]
  },
  {
    id: 38,
    kanji: "赤",
    kunReading: "あか(い)",
    onReading: "せき",
    compounds: [
      { word: "赤い", reading: "あかい", meaningMM: "နီသော" },
      { word: "赤ちゃん", reading: "あかちゃん", meaningMM: "မွေးကင်းစကလေး" },
      { word: "赤信号", reading: "あかしんごう", meaningMM: "မီးနီ" },
      { word: "赤道", reading: "せきどう", meaningMM: "အီကွေတာ" }
    ]
  },
  {
    id: 39,
    kanji: "青",
    kunReading: "あお(い)",
    onReading: "せい",
    compounds: [
      { word: "青い", reading: "あおい", meaningMM: "ပြာသော" },
      { word: "青空", reading: "あおぞら", meaningMM: "အပြာရောင်ကောင်းကင်" },
      { word: "青春", reading: "せいしゅん", meaningMM: "ဆယ်ကျော်သက်" }
    ]
  },
  {
    id: 40,
    kanji: "黒",
    kunReading: "くろ(い)",
    onReading: "こく",
    compounds: [
      { word: "黒い", reading: "くろい", meaningMM: "မည်းသော" },
      { word: "真っ黒", reading: "まっくろ", meaningMM: "မည်းနက်သော" }
    ]
  },
  {
    id: 41,
    kanji: "映",
    kunReading: "うつ(す)",
    onReading: "えい",
    compounds: [
      { word: "映す", reading: "うつす", meaningMM: "ပုံရိပ်ထင်သည်" },
      { word: "映画", reading: "えいが", meaningMM: "ရုပ်ရှင်" },
      { word: "映画館", reading: "えいがかん", meaningMM: "ရုပ်ရှင်ရုံ" }
    ]
  },
  {
    id: 42,
    kanji: "画",
    kunReading: "-",
    onReading: "が、かく",
    compounds: [
      { word: "計画", reading: "けいかく", meaningMM: "အစီအစဉ်" },
      { word: "画家", reading: "がか", meaningMM: "ပန်းချီဆရာ" },
      { word: "日本画", reading: "にほんが", meaningMM: "Japanese painting" }
    ]
  },
  {
    id: 43,
    kanji: "音",
    kunReading: "おと",
    onReading: "おん",
    compounds: [
      { word: "音", reading: "おと", meaningMM: "အသံ (သက်မဲ့)" },
      { word: "発音", reading: "はつおん", meaningMM: "အသံထွက်" },
      { word: "高音", reading: "こうおん", meaningMM: "အသံမြင့်" }
    ]
  },
  {
    id: 44,
    kanji: "楽",
    kunReading: "たの(しい)",
    onReading: "がく、らく",
    compounds: [
      { word: "楽しい", reading: "たのしい", meaningMM: "ပျော်စရာကောင်းသော" },
      { word: "音楽", reading: "おんがく", meaningMM: "တေးဂီတ" },
      { word: "楽な", reading: "らくな", meaningMM: "သက်သောင့်သက်သာဖြစ်သော" }
    ]
  },
  {
    id: 45,
    kanji: "歌",
    kunReading: "うた、うた(う)",
    onReading: "か",
    compounds: [
      { word: "歌", reading: "うた", meaningMM: "သီချင်း" },
      { word: "歌う", reading: "うたう", meaningMM: "သီချင်းဆိုသည်" },
      { word: "歌手", reading: "かしゅ", meaningMM: "အဆိုတော်" }
    ]
  },
  {
    id: 46,
    kanji: "写",
    kunReading: "うつ(す)",
    onReading: "しゃ",
    compounds: [
      { word: "写真", reading: "しゃしん", meaningMM: "ဓာတ်ပုံ" },
      { word: "写す", reading: "うつす", meaningMM: "ရိုက်ကူးသည်" }
    ]
  },
  {
    id: 47,
    kanji: "真",
    kunReading: "ま",
    onReading: "しん",
    compounds: [
      { word: "真ん中", reading: "まんなか", meaningMM: "အလယ်တည့်တည့်" },
      { word: "真っ白", reading: "まっしろ", meaningMM: "အဖြူစွတ်စွတ်" },
      { word: "真実", reading: "しんじつ", meaningMM: "အမှန်တရား" }
    ]
  },
  {
    id: 48,
    kanji: "旅",
    kunReading: "たび",
    onReading: "りょ",
    compounds: [
      { word: "旅", reading: "たび", meaningMM: "ခရီး" },
      { word: "旅行する", reading: "りょこうする", meaningMM: "ခရီးထွက်သည်" },
      { word: "旅館", reading: "りょかん", meaningMM: "ဂျပန်စတိုင်တည်းခိုခန်း" }
    ]
  },
  {
    id: 49,
    kanji: "世",
    kunReading: "よ",
    onReading: "せ、せい",
    compounds: [
      { word: "世話をする", reading: "せわをする", meaningMM: "ပြုစုစောင့်ရှောက်သည်" },
      { word: "世の中", reading: "よのなか", meaningMM: "လောကကြီး" },
      { word: "２１世紀", reading: "２１せいき", meaningMM: "၂၁ ရာစု" }
    ]
  },
  {
    id: 50,
    kanji: "界",
    kunReading: "-",
    onReading: "かい",
    compounds: [
      { word: "世界", reading: "せかい", meaningMM: "ကမ္ဘာကြီး" },
      { word: "政界", reading: "せいかい", meaningMM: "နိုင်ငံရေးလောက" }
    ]
  },
  {
    id: 51,
    kanji: "仕",
    kunReading: "-",
    onReading: "し",
    compounds: [
      { word: "仕事", reading: "しごと", meaningMM: "အလုပ်" },
      { word: "仕方がない", reading: "しかたがない", meaningMM: "မတတ်နိုင်ဘူး" }
    ]
  },
  {
    id: 52,
    kanji: "事",
    kunReading: "こと",
    onReading: "じ",
    compounds: [
      { word: "火事", reading: "かじ", meaningMM: "မီးလောင်မှု" },
      { word: "用事", reading: "ようじ", meaningMM: "အလုပ်ကိစ္စ" },
      { word: "大事な", reading: "だいじな", meaningMM: "အရေးပါသော" },
      { word: "事", reading: "こと", meaningMM: "အကြောင်းအရာ" }
    ]
  },
  {
    id: 53,
    kanji: "銀",
    kunReading: "-",
    onReading: "ぎん",
    compounds: [
      { word: "銀", reading: "ぎん", meaningMM: "ငွေ" },
      { word: "銀行", reading: "ぎんこう", meaningMM: "ဘဏ်" },
      { word: "銀座", reading: "ぎんざ", meaningMM: "Ginza (place name)" }
    ]
  },
  {
    id: 54,
    kanji: "員",
    kunReading: "-",
    onReading: "いん",
    compounds: [
      { word: "会社員", reading: "かいしゃいん", meaningMM: "ကုမ္ပဏီဝန်ထမ်း" },
      { word: "銀行員", reading: "ぎんこういん", meaningMM: "ဘဏ်ဝန်ထမ်း" },
      { word: "店員", reading: "てんいん", meaningMM: "ဆိုင်ဝန်ထမ်း" },
      { word: "会員", reading: "かいいん", meaningMM: "အသင်းဝင်" }
    ]
  },
  {
    id: 55,
    kanji: "医",
    kunReading: "-",
    onReading: "い",
    compounds: [
      { word: "医者", reading: "いしゃ", meaningMM: "ဆရာဝန်" },
      { word: "医学", reading: "いがく", meaningMM: "ဆေးပညာ" },
      { word: "医院", reading: "いいん", meaningMM: "ဆေးခန်း" }
    ]
  },
  {
    id: 56,
    kanji: "者",
    kunReading: "もの",
    onReading: "しゃ",
    compounds: [
      { word: "者", reading: "もの", meaningMM: "လူ" },
      { word: "歯医者", reading: "はいしゃ", meaningMM: "သွားဆရာဝန်" },
      { word: "学者", reading: "がくしゃ", meaningMM: "လေ့လာနေသူ" },
      { word: "作者", reading: "さくしゃ", meaningMM: "လက်ရာပစ္စည်း" }
    ]
  },
  {
    id: 57,
    kanji: "働",
    kunReading: "はたら(く)",
    onReading: "どう",
    compounds: [
      { word: "働く", reading: "はたらく", meaningMM: "အလုပ်လုပ်သည်" },
      { word: "労働者", reading: "ろうどうしゃ", meaningMM: "အလုပ်သမား" }
    ]
  },
  {
    id: 58,
    kanji: "屋",
    kunReading: "や",
    onReading: "おく",
    compounds: [
      { word: "本屋", reading: "ほんや", meaningMM: "စာအုပ်ဆိုင်" },
      { word: "屋上", reading: "おくじょう", meaningMM: "ခေါင်မိုးထပ်" },
      { word: "八百屋", reading: "やおや", meaningMM: "ဟင်းသီးဟင်းရွက်ဆိုင်" },
      { word: "部屋", reading: "へや", meaningMM: "အခန်း" }
    ]
  },
  {
    id: 59,
    kanji: "産",
    kunReading: "う(む)",
    onReading: "さん",
    compounds: [
      { word: "産む", reading: "うむ", meaningMM: "မွေးဖွားသည်" },
      { word: "生産する", reading: "せいさんする", meaningMM: "ထုတ်လုပ်သည်" },
      { word: "財産", reading: "ざいさん", meaningMM: "အမွေ (ပစ္စည်း၊ ဥစ္စာ)" }
    ]
  },
  {
    id: 60,
    kanji: "業",
    kunReading: "-",
    onReading: "ぎょう",
    compounds: [
      { word: "産業", reading: "さんぎょう", meaningMM: "ကုန်ထုတ်လုပ်ငန်း" },
      { word: "工業", reading: "こうぎょう", meaningMM: "စက်ရုံလုပ်ငန်း" },
      { word: "授業", reading: "じゅぎょう", meaningMM: "lecture" },
      { word: "本日休業", reading: "ほんじつきゅうぎょう", meaningMM: "ယနေ့ဆိုင်ပိတ်သည်" }
    ]
  },
  {
    id: 61,
    kanji: "林",
    kunReading: "はやし",
    onReading: "りん",
    compounds: [
      { word: "林", reading: "はやし", meaningMM: "တော" },
      { word: "小林さん", reading: "こばやしさん", meaningMM: "Kobayashi san" },
      { word: "林道", reading: "りんどう", meaningMM: "တောလမ်း" }
    ]
  },
  {
    id: 62,
    kanji: "森",
    kunReading: "もり",
    onReading: "しん",
    compounds: [
      { word: "森", reading: "もり", meaningMM: "တောအုပ်" },
      { word: "森さん", reading: "もりさん", meaningMM: "Mori san" },
      { word: "森林", reading: "しんりん", meaningMM: "တောအုပ်" }
    ]
  },
  {
    id: 63,
    kanji: "地",
    kunReading: "-",
    onReading: "ち、じ",
    compounds: [
      { word: "地図", reading: "ちず", meaningMM: "မြေပုံ" },
      { word: "地下鉄", reading: "ちかてつ", meaningMM: "မြေအောက်ရထား" },
      { word: "土地", reading: "とち", meaningMM: "ကုန်းမြေ" },
      { word: "地震", reading: "じしん", meaningMM: "ငလျင်" }
    ]
  },
  {
    id: 64,
    kanji: "池",
    kunReading: "いけ",
    onReading: "ち",
    compounds: [
      { word: "池", reading: "いけ", meaningMM: "ရေကန်" },
      { word: "電池", reading: "でんち", meaningMM: "ဓာတ်ခဲ" }
    ]
  },
  {
    id: 65,
    kanji: "海",
    kunReading: "うみ",
    onReading: "かい",
    compounds: [
      { word: "海", reading: "うみ", meaningMM: "ပင်လယ်" },
      { word: "海外", reading: "かいがい", meaningMM: "နိုင်ငံခြား" },
      { word: "北海道", reading: "ほっかいどう", meaningMM: "Hokaido" }
    ]
  },
  {
    id: 66,
    kanji: "洋",
    kunReading: "-",
    onReading: "よう",
    compounds: [
      { word: "西洋", reading: "せいよう", meaningMM: "အနောက်တိုင်း" },
      { word: "東洋", reading: "とうよう", meaningMM: "အရှေ့တိုင်း" },
      { word: "洋服", reading: "ようふく", meaningMM: "အနောက်တိုင်းဝတ်စုံ" },
      { word: "大西洋", reading: "たいせいよう", meaningMM: "Atlantic Ocean" }
    ]
  },
  {
    id: 67,
    kanji: "雪",
    kunReading: "ゆき",
    onReading: "せつ",
    compounds: [
      { word: "雪", reading: "ゆき", meaningMM: "နှင်း" },
      { word: "大雪", reading: "おおゆき", meaningMM: "heavy snow" },
      { word: "新雪", reading: "しんせつ", meaningMM: "fresh snow" }
    ]
  },
  {
    id: 68,
    kanji: "光",
    kunReading: "ひかり、ひか(る)",
    onReading: "こう",
    compounds: [
      { word: "光", reading: "ひかり", meaningMM: "အလင်းရောင်" },
      { word: "光る", reading: "ひかる", meaningMM: "လင်းလက်သည်" },
      { word: "日光", reading: "にっこう", meaningMM: "နေရောင်ခြည်" },
      { word: "観光", reading: "かんこう", meaningMM: "လည်ပတ်သည်" }
    ]
  },
  {
    id: 69,
    kanji: "台",
    kunReading: "-",
    onReading: "だい、たい",
    compounds: [
      { word: "～台", reading: "～だい", meaningMM: "စီး (စက်ပစ္စည်း)" },
      { word: "台所", reading: "だいどころ", meaningMM: "မီးဖိုချောင်" },
      { word: "土台", reading: "どだい", meaningMM: "စတိတ်စင်" }
    ]
  },
  {
    id: 70,
    kanji: "風",
    kunReading: "かぜ",
    onReading: "ふう",
    compounds: [
      { word: "風", reading: "かぜ", meaningMM: "လေ" },
      { word: "台風", reading: "たいふう", meaningMM: "လေမုန်တိုင်း" },
      { word: "洋風", reading: "ようふう", meaningMM: "အနောက်တိုင်းစတိုင်" },
      { word: "風景", reading: "ふうけい", meaningMM: "ရှုခင်း" }
    ]
  },
  {
    id: 71,
    kanji: "季",
    kunReading: "-",
    onReading: "き",
    compounds: [
      { word: "四季", reading: "しき", meaningMM: "four seasons" }
    ]
  },
  {
    id: 72,
    kanji: "節",
    kunReading: "-",
    onReading: "せつ",
    compounds: [
      { word: "季節", reading: "きせつ", meaningMM: "ရာသီဥတု" },
      { word: "節分", reading: "せつぶん", meaningMM: "last day of winter" }
    ]
  },
  {
    id: 73,
    kanji: "春",
    kunReading: "はる",
    onReading: "しゅん",
    compounds: [
      { word: "春", reading: "はる", meaningMM: "နွေဦး" },
      { word: "青春", reading: "せいしゅん", meaningMM: "ဆယ်ကျော်သက်" }
    ]
  },
  {
    id: 74,
    kanji: "夏",
    kunReading: "なつ",
    onReading: "か",
    compounds: [
      { word: "夏", reading: "なつ", meaningMM: "နွေရာသီ" },
      { word: "夏休み", reading: "なつやすみ", meaningMM: "နွေရာသီပိတ်ရက်" },
      { word: "夏まつり", reading: "なつまつり", meaningMM: "နွေရာသီပွဲတော်" },
      { word: "夏服", reading: "なつふく", meaningMM: "နွေရာသီဝတ်အင်္ကျီ" }
    ]
  },
  {
    id: 75,
    kanji: "秋",
    kunReading: "あき",
    onReading: "しゅう",
    compounds: [
      { word: "秋", reading: "あき", meaningMM: "ဆောင်းဦး" },
      { word: "秋田県", reading: "あきたけん", meaningMM: "Akita" },
      { word: "秋分の日", reading: "しゅうぶんのひ", meaningMM: "Autumnal Equinox Day" }
    ]
  },
  {
    id: 76,
    kanji: "冬",
    kunReading: "ふゆ",
    onReading: "とう",
    compounds: [
      { word: "冬", reading: "ふゆ", meaningMM: "ဆောင်းရာသီ" },
      { word: "冬休み", reading: "ふゆやすみ", meaningMM: "ဆောင်းရာသီအားလပ်ရက်" },
      { word: "春夏秋冬", reading: "しゅんかしゅうとう", meaningMM: "နွေဦး၊ နွေ၊ ဆောင်းဦး၊ ဆောင်း" }
    ]
  },
  {
    id: 77,
    kanji: "暑",
    kunReading: "あつ(い)",
    onReading: "しょ",
    compounds: [
      { word: "暑い", reading: "あつい", meaningMM: "ပူသော" },
      { word: "残暑", reading: "ざんしょ", meaningMM: "late summer heat" }
    ]
  },
  {
    id: 78,
    kanji: "寒",
    kunReading: "さむ(い)",
    onReading: "かん",
    compounds: [
      { word: "寒い", reading: "さむい", meaningMM: "အေးသော" },
      { word: "寒波", reading: "かんぱ", meaningMM: "အအေးလှိုင်း" }
    ]
  },
  {
    id: 79,
    kanji: "暖",
    kunReading: "あたた(かい)",
    onReading: "だん",
    compounds: [
      { word: "暖かい", reading: "あたたかい", meaningMM: "နွေးထွေးသော" },
      { word: "暖冬", reading: "だんとう", meaningMM: "သိပ်မအေးသောဆောင်းရာသီ" },
      { word: "暖房", reading: "だんぼう", meaningMM: "အပူပေးစက် (heater)" },
      { word: "温暖化", reading: "おんだんか", meaningMM: "ပူနွေးလာခြင်း" }
    ]
  },
  {
    id: 80,
    kanji: "涼",
    kunReading: "すず(しい)",
    onReading: "りょう",
    compounds: [
      { word: "涼しい", reading: "すずしい", meaningMM: "အေးမြသော" },
      { word: "涼風", reading: "りょうふう", meaningMM: "လေအေးအေး" }
    ]
  },
  {
    id: 81,
    kanji: "体",
    kunReading: "からだ",
    onReading: "たい",
    compounds: [
      { word: "体", reading: "からだ", meaningMM: "ခန္ဓာကိုယ်" },
      { word: "体力", reading: "たいりょく", meaningMM: "ကိုယ်အား" },
      { word: "体重", reading: "たいじゅう", meaningMM: "ကိုယ်အလေးချိန်" }
    ]
  },
  {
    id: 82,
    kanji: "頭",
    kunReading: "あたま",
    onReading: "ず",
    compounds: [
      { word: "頭", reading: "あたま", meaningMM: "ခေါင်း" },
      { word: "頭がいい", reading: "あたまがいい", meaningMM: "ဉာဏ်ကောင်းသော" },
      { word: "頭痛", reading: "ずつう", meaningMM: "ခေါင်းကိုက်သော" }
    ]
  },
  {
    id: 83,
    kanji: "顔",
    kunReading: "かお",
    onReading: "-",
    compounds: [
      { word: "顔", reading: "かお", meaningMM: "မျက်နှာ" },
      { word: "顔色", reading: "かおいろ", meaningMM: "မျက်နှာအမူအရာ" }
    ]
  },
  {
    id: 84,
    kanji: "首",
    kunReading: "くび",
    onReading: "しゅ",
    compounds: [
      { word: "首", reading: "くび", meaningMM: "လည်ပင်း" },
      { word: "首都", reading: "しゅと", meaningMM: "မြို့တော်" },
      { word: "手首", reading: "てくび", meaningMM: "လက်ကောက်ဝတ်" },
      { word: "首相", reading: "しゅしょう", meaningMM: "ဝန်ကြီးချုပ်" }
    ]
  },
  {
    id: 85,
    kanji: "心",
    kunReading: "こころ",
    onReading: "しん",
    compounds: [
      { word: "心", reading: "こころ", meaningMM: "စိတ်" },
      { word: "安心する", reading: "あんしんする", meaningMM: "လုံခြုံစိတ်ချသည်" },
      { word: "心配する", reading: "しんぱいする", meaningMM: "စိတ်ပူသည်" },
      { word: "中心", reading: "ちゅうしん", meaningMM: "အလယ်ဗဟို" }
    ]
  },
  {
    id: 86,
    kanji: "声",
    kunReading: "こえ",
    onReading: "せい",
    compounds: [
      { word: "声", reading: "こえ", meaningMM: "အသံ (သက်ရှိ)" },
      { word: "大声", reading: "おおごえ", meaningMM: "အသံကျယ်" }
    ]
  },
  {
    id: 87,
    kanji: "病",
    kunReading: "-",
    onReading: "びょう",
    compounds: [
      { word: "病気", reading: "びょうき", meaningMM: "နေမကောင်း" },
      { word: "病院", reading: "びょういん", meaningMM: "ဆေးရုံ" },
      { word: "病人", reading: "びょうにん", meaningMM: "လူနာ" },
      { word: "急病", reading: "きゅうびょう", meaningMM: "ရုတ်တရက်နေမကောင်းခြင်း" }
    ]
  },
  {
    id: 88,
    kanji: "薬",
    kunReading: "くすり",
    onReading: "やく",
    compounds: [
      { word: "薬", reading: "くすり", meaningMM: "ဆေး" },
      { word: "目薬", reading: "めぐすり", meaningMM: "မျက်စဉ်းဆေး" },
      { word: "薬品", reading: "やくひん", meaningMM: "ဆေးဆိုင်" }
    ]
  },
  {
    id: 89,
    kanji: "科",
    kunReading: "-",
    onReading: "か",
    compounds: [
      { word: "科学", reading: "かがく", meaningMM: "သိပ္ပံ" },
      { word: "教科書", reading: "きょうかしょ", meaningMM: "ပြဌာန်းစာအုပ်" },
      { word: "外科", reading: "げか", meaningMM: "ခွဲစိတ်ကုသခြင်း" }
    ]
  },
  {
    id: 90,
    kanji: "内",
    kunReading: "うち",
    onReading: "ない",
    compounds: [
      { word: "内側", reading: "うちがわ", meaningMM: "အတွင်းဘက်" },
      { word: "車内", reading: "しゃない", meaningMM: "ကားအတွင်း" },
      { word: "案内する", reading: "あんないする", meaningMM: "လမ်းညွှန်သည်" },
      { word: "内科", reading: "ないか", meaningMM: "internal medicine" }
    ]
  },
  {
    id: 91,
    kanji: "朝",
    kunReading: "あさ",
    onReading: "ちょう",
    compounds: [
      { word: "朝", reading: "あさ", meaningMM: "မနက်" },
      { word: "今朝", reading: "けさ", meaningMM: "ဒီမနက်" },
      { word: "朝日", reading: "あさひ", meaningMM: "မနက်နေ" },
      { word: "朝食", reading: "ちょうしょく", meaningMM: "မနက်စာ" }
    ]
  },
  {
    id: 92,
    kanji: "昼",
    kunReading: "ひる",
    onReading: "ちゅう",
    compounds: [
      { word: "昼", reading: "ひる", meaningMM: "နေ့လယ်" },
      { word: "昼休み", reading: "ひるやすみ", meaningMM: "နေ့လယ်နားချိန်" },
      { word: "昼ごはん", reading: "ひるごはん", meaningMM: "နေ့လယ်စာ" },
      { word: "昼食", reading: "ちゅうしょく", meaningMM: "နေ့လယ်စာ" }
    ]
  },
  {
    id: 93,
    kanji: "夜",
    kunReading: "よる、よ",
    onReading: "や",
    compounds: [
      { word: "夜", reading: "よる", meaningMM: "ည" },
      { word: "今夜", reading: "こんや", meaningMM: "ဒီည" },
      { word: "夜店", reading: "よみせ", meaningMM: "ညဈေးတန်း" },
      { word: "夜食", reading: "やしょく", meaningMM: "bedtime snack" }
    ]
  },
  {
    id: 94,
    kanji: "夕",
    kunReading: "ゆう",
    onReading: "-",
    compounds: [
      { word: "夕日", reading: "ゆうひ", meaningMM: "နေဝင်ဆည်းဆာ" },
      { word: "夕食", reading: "ゆうしょく", meaningMM: "ညစာ" },
      { word: "七夕", reading: "たなばた", meaningMM: "Star Festival" }
    ]
  },
  {
    id: 95,
    kanji: "方",
    kunReading: "かた",
    onReading: "ほう",
    compounds: [
      { word: "読み方", reading: "よみかた", meaningMM: "ဖတ်ပုံဖတ်နည်း" },
      { word: "夕方", reading: "ゆうがた", meaningMM: "ညနေနေဝင်ချိန်" },
      { word: "あの方", reading: "あのかた", meaningMM: "အဲ့ဒီလူ" },
      { word: "方法", reading: "ほうほう", meaningMM: "နည်းလမ်း" }
    ]
  },
  {
    id: 96,
    kanji: "晩",
    kunReading: "-",
    onReading: "ばん",
    compounds: [
      { word: "今晩", reading: "こんばん", meaningMM: "ဒီည" },
      { word: "毎晩", reading: "まいばん", meaningMM: "ညတိုင်း" },
      { word: "晩ごはん", reading: "ばんごはん", meaningMM: "ညစာ" }
    ]
  },
  {
    id: 97,
    kanji: "計",
    kunReading: "はか(る)",
    onReading: "けい",
    compounds: [
      { word: "計る", reading: "はかる", meaningMM: "တိုင်းတာသည်" },
      { word: "計画", reading: "けいかく", meaningMM: "အစီအစဉ်" },
      { word: "時計", reading: "とけい", meaningMM: "နာရီ" },
      { word: "合計", reading: "ごうけい", meaningMM: "စုစုပေါင်း" }
    ]
  },
  {
    id: 98,
    kanji: "曜",
    kunReading: "-",
    onReading: "よう",
    compounds: [
      { word: "日曜日", reading: "にちようび", meaningMM: "တနင်္ဂနွေနေ့" },
      { word: "水曜日", reading: "すいようび", meaningMM: "ဗုဒ္ဓဟူးနေ့" },
      { word: "何曜日", reading: "なんようび", meaningMM: "ဘယ်နေ့လဲ" }
    ]
  },
  {
    id: 99,
    kanji: "以",
    kunReading: "-",
    onReading: "い",
    compounds: [
      { word: "以上", reading: "いじょう", meaningMM: "အထက်" },
      { word: "以下", reading: "いか", meaningMM: "အောက်" },
      { word: "以外", reading: "いがい", meaningMM: "အတွင်း" },
      { word: "以前", reading: "いぜん", meaningMM: "အရင်ကတည်းက" }
    ]
  },
  {
    id: 100,
    kanji: "度",
    kunReading: "-",
    onReading: "ど",
    compounds: [
      { word: "一度", reading: "いちど", meaningMM: "တစ်ကြိမ်" },
      { word: "今度", reading: "こんど", meaningMM: "နောက်တစ်ကြိမ်" },
      { word: "２５度", reading: "２５ど", meaningMM: "၂၅ ဒီဂရီ" },
      { word: "温度", reading: "おんど", meaningMM: "အပူချိန်" }
    ]
  },
  {
    id: 101,
    kanji: "止",
    kunReading: "と(まる)",
    onReading: "し",
    compounds: [
      { word: "止まる", reading: "とまる", meaningMM: "ရပ်တန့်သည်" },
      { word: "中止する", reading: "ちゅうしする", meaningMM: "ဆိုင်းငံ့သည်" },
      { word: "一時停止", reading: "いちじていし", meaningMM: "ယာယီရပ်ဆိုင်းသည်" }
    ]
  },
  {
    id: 102,
    kanji: "歩",
    kunReading: "ある(く)",
    onReading: "ほ、ぽ",
    compounds: [
      { word: "歩く", reading: "あるく", meaningMM: "လမ်းလျှောက်သည်" },
      { word: "散歩する", reading: "さんぽする", meaningMM: "လမ်းလျှောက်ထွက်သည်" },
      { word: "進歩する", reading: "しんぽする", meaningMM: "တိုးတက်သည်" },
      { word: "横断歩道", reading: "おうだんほどう", meaningMM: "လူကူးမျဉ်းကြား" }
    ]
  },
  {
    id: 103,
    kanji: "走",
    kunReading: "はし(る)",
    onReading: "そう",
    compounds: [
      { word: "走る", reading: "はしる", meaningMM: "ပြေးသည်" },
      { word: "力走する", reading: "りきそうする", meaningMM: "အားစိုက်ပြေးသည်" }
    ]
  },
  {
    id: 104,
    kanji: "起",
    kunReading: "お(きる)、お(こす)",
    onReading: "き",
    compounds: [
      { word: "起きる", reading: "おきる", meaningMM: "အိပ်ရာထသည်" },
      { word: "早起き", reading: "はやおき", meaningMM: "စောစောထသည်" },
      { word: "起業家", reading: "きぎょうか", meaningMM: "စီးပွားရေးလုပ်ငန်းရှင်" }
    ]
  },
  {
    id: 105,
    kanji: "持",
    kunReading: "も(つ)",
    onReading: "じ",
    compounds: [
      { word: "持つ", reading: "もつ", meaningMM: "ပိုင်ဆိုင်သည်" },
      { word: "気持ち", reading: "きもち", meaningMM: "စိတ်ခံစားချက်" },
      { word: "持ち物", reading: "もちもの", meaningMM: "ပိုင်ဆိုင်တဲ့ပစ္စည်း" },
      { word: "支持する", reading: "しじする", meaningMM: "ထောက်ခံသည်" }
    ]
  },
  {
    id: 106,
    kanji: "待",
    kunReading: "ま(つ)",
    onReading: "たい",
    compounds: [
      { word: "待つ", reading: "まつ", meaningMM: "စောင့်သည်" },
      { word: "待ち合わせ", reading: "まちあわせ", meaningMM: "တွေ့ဆုံသည်" },
      { word: "招待する", reading: "しょうたいする", meaningMM: "ဖိတ်ကြားသည်" },
      { word: "期待する", reading: "きたいする", meaningMM: "မျှော်လင့်သည်" }
    ]
  },
  {
    id: 107,
    kanji: "借",
    kunReading: "か(りる)",
    onReading: "しゃく",
    compounds: [
      { word: "借りる", reading: "かりる", meaningMM: "ငှားယူသည်" },
      { word: "借金", reading: "しゃっきん", meaningMM: "ချေးငွေ" }
    ]
  },
  {
    id: 108,
    kanji: "貸",
    kunReading: "か(す)",
    onReading: "たい",
    compounds: [
      { word: "貸す", reading: "かす", meaningMM: "ငှားပေးသည်" },
      { word: "貸家", reading: "かしや", meaningMM: "အိမ်ငှား" },
      { word: "賃貸マンション", reading: "ちんたいマンション", meaningMM: "အငှားတိုက်ခန်း" }
    ]
  },
  {
    id: 109,
    kanji: "始",
    kunReading: "はじ(まる)、はじ(める)",
    onReading: "し",
    compounds: [
      { word: "始める", reading: "はじめる", meaningMM: "စတင်သည်" },
      { word: "開始する", reading: "かいしする", meaningMM: "စသည်" },
      { word: "始発", reading: "しはつ", meaningMM: "ပထမဆုံးထွက်မယ့်ရထား" }
    ]
  },
  {
    id: 110,
    kanji: "終",
    kunReading: "お(わる)",
    onReading: "しゅう",
    compounds: [
      { word: "終わる", reading: "おわる", meaningMM: "ပြီးဆုံးသည်" },
      { word: "終電", reading: "しゅうでん", meaningMM: "နောက်ဆုံးရထား" },
      { word: "最終回", reading: "さいしゅうかい", meaningMM: "final episode" }
    ]
  },
  {
    id: 111,
    kanji: "家",
    kunReading: "いえ、や",
    onReading: "か、け",
    compounds: [
      { word: "家", reading: "いえ", meaningMM: "အိမ်" },
      { word: "画家", reading: "がか", meaningMM: "ပန်းချီဆရာ" },
      { word: "家内", reading: "かない", meaningMM: "အမျိုးသမီး (wife)" },
      { word: "家庭", reading: "かてい", meaningMM: "အိမ်ထောင်စု" }
    ]
  },
  {
    id: 112,
    kanji: "族",
    kunReading: "-",
    onReading: "ぞく",
    compounds: [
      { word: "家族", reading: "かぞく", meaningMM: "မိသားစု" },
      { word: "民族", reading: "みんぞく", meaningMM: "လူမျိုး" },
      { word: "水族館", reading: "すいぞくかん", meaningMM: "ငါးပြတိုက်" }
    ]
  },
  {
    id: 113,
    kanji: "私",
    kunReading: "わたし、わたくし",
    onReading: "し",
    compounds: [
      { word: "私", reading: "わたし", meaningMM: "ကျွန်တော်/ကျွန်မ" },
      { word: "私立大学", reading: "しりつだいがく", meaningMM: "ပုဂ္ဂလိကတက္ကသိုလ်" },
      { word: "私生活", reading: "しせいかつ", meaningMM: "private life" }
    ]
  },
  {
    id: 114,
    kanji: "自",
    kunReading: "みずか(ら)",
    onReading: "し、じ",
    compounds: [
      { word: "自分", reading: "じぶん", meaningMM: "ကိုယ်တိုင်" },
      { word: "自動ドア", reading: "じどうドア", meaningMM: "auto တံခါး" },
      { word: "自由", reading: "じゆう", meaningMM: "လွတ်လွတ်လပ်လပ်" },
      { word: "自然", reading: "しぜん", meaningMM: "သဘာဝ" }
    ]
  },
  {
    id: 115,
    kanji: "親",
    kunReading: "おや、した(しい)",
    onReading: "しん",
    compounds: [
      { word: "親", reading: "おや", meaningMM: "မိဘ" },
      { word: "母親", reading: "ははおや", meaningMM: "မိခင်၊ အမေ" },
      { word: "親切な", reading: "しんせつな", meaningMM: "သဘောကောင်းသော" },
      { word: "親しい", reading: "したしい", meaningMM: "ရင်းနှီးသော" }
    ]
  },
  {
    id: 116,
    kanji: "両",
    kunReading: "-",
    onReading: "りょう",
    compounds: [
      { word: "両親", reading: "りょうしん", meaningMM: "မိဘ" },
      { word: "両方", reading: "りょうほう", meaningMM: "နှစ်ဖက်" },
      { word: "両手", reading: "りょうて", meaningMM: "လက်နှစ်ဖက်" },
      { word: "両替え", reading: "りょうがえ", meaningMM: "ငွေလဲလှယ်သည်" }
    ]
  },
  {
    id: 117,
    kanji: "兄",
    kunReading: "あに",
    onReading: "けい、きょう",
    compounds: [
      { word: "兄", reading: "あに", meaningMM: "အစ်ကို" },
      { word: "お兄さん", reading: "おにいさん", meaningMM: "အစ်ကို" }
    ]
  },
  {
    id: 118,
    kanji: "弟",
    kunReading: "おとうと",
    onReading: "だい",
    compounds: [
      { word: "弟", reading: "おとうと", meaningMM: "ညီလေး၊ မောင်လေး" },
      { word: "兄弟", reading: "きょうだい", meaningMM: "ညီအစ်ကိုမောင်နှမ" }
    ]
  },
  {
    id: 119,
    kanji: "姉",
    kunReading: "あね",
    onReading: "し",
    compounds: [
      { word: "姉", reading: "あね", meaningMM: "အစ်မ" },
      { word: "お姉さん", reading: "おねえさん", meaningMM: "အစ်မ" }
    ]
  },
  {
    id: 120,
    kanji: "妹",
    kunReading: "いもうと",
    onReading: "まい",
    compounds: [
      { word: "妹", reading: "いもうと", meaningMM: "ညီမလေး" },
      { word: "姉妹", reading: "しまい", meaningMM: "ညီအစ်မ" },
      { word: "姉妹都市", reading: "しまいとし", meaningMM: "Sister city" }
    ]
  },
  {
    id: 121,
    kanji: "活",
    kunReading: "-",
    onReading: "かつ",
    compounds: [
      { word: "生活", reading: "せいかつ", meaningMM: "နေထိုင်မှုဘဝ" },
      { word: "活動", reading: "かつどう", meaningMM: "ပါဝင်လှုပ်ရှားမှု (activity)" },
      { word: "活発な", reading: "かっぱつな", meaningMM: "တက်ကြွသော" }
    ]
  },
  {
    id: 122,
    kanji: "回",
    kunReading: "まわ(す)、まわ(る)",
    onReading: "かい",
    compounds: [
      { word: "回す", reading: "まわす", meaningMM: "လှည့်သည်" },
      { word: "一回", reading: "いっかい", meaningMM: "တစ်ကြိမ်" },
      { word: "前回", reading: "ぜんかい", meaningMM: "ရှေ့တစ်ခေါက်က" },
      { word: "回転ずし", reading: "かいてんずし", meaningMM: "conveyor-belt sushi" }
    ]
  },
  {
    id: 123,
    kanji: "主",
    kunReading: "おも(な)、ぬし",
    onReading: "しゅ",
    compounds: [
      { word: "主な", reading: "おもな", meaningMM: "အဓိကဖြစ်သော" },
      { word: "主人", reading: "しゅじん", meaningMM: "မိမြတ်ခွန်း" },
      { word: "主食", reading: "しゅしょく", meaningMM: "အဓိကအစားအစာ" },
      { word: "持ち主", reading: "もちぬし", meaningMM: "ပိုင်ရှင်" }
    ]
  },
  {
    id: 124,
    kanji: "色",
    kunReading: "いろ",
    onReading: "しょく、しき",
    compounds: [
      { word: "色", reading: "いろ", meaningMM: "အရောင်" },
      { word: "茶色", reading: "ちゃいろ", meaningMM: "အညိုရောင်" },
      { word: "特色", reading: "とくしょく", meaningMM: "ထူးခြားချက်" },
      { word: "景色", reading: "けしき", meaningMM: "ရှုခင်း" }
    ]
  },
  {
    id: 125,
    kanji: "形",
    kunReading: "かたち",
    onReading: "けい、ぎょう",
    compounds: [
      { word: "形", reading: "かたち", meaningMM: "ပုံစံ" },
      { word: "人形", reading: "にんぎょう", meaningMM: "လူရုပ်" },
      { word: "正方形", reading: "せいほうけい", meaningMM: "စတုရန်း" },
      { word: "図形", reading: "ずけい", meaningMM: "ပုံ (figure)" }
    ]
  },
  {
    id: 126,
    kanji: "品",
    kunReading: "しな",
    onReading: "ひん",
    compounds: [
      { word: "品物", reading: "しなもの", meaningMM: "ပစ္စည်း" },
      { word: "電気製品", reading: "でんきせいひん", meaningMM: "လျှပ်စစ်ပစ္စည်း" },
      { word: "作品", reading: "さくひん", meaningMM: "လက်ရာပစ္စည်း" },
      { word: "食料品", reading: "しょくりょうひん", meaningMM: "စားသောက်ကုန်" }
    ]
  },
  {
    id: 127,
    kanji: "民",
    kunReading: "-",
    onReading: "みん",
    compounds: [
      { word: "国民", reading: "こくみん", meaningMM: "တိုင်းသူပြည်သား" },
      { word: "市民", reading: "しみん", meaningMM: "မြို့သူမြို့သား" },
      { word: "民族", reading: "みんぞく", meaningMM: "လူမျိုး" },
      { word: "民主主義", reading: "みんしゅしゅぎ", meaningMM: "ဒီမိုကရေစီ" }
    ]
  },
  {
    id: 128,
    kanji: "服",
    kunReading: "-",
    onReading: "ふく",
    compounds: [
      { word: "服", reading: "ふく", meaningMM: "အဝတ်အစား" },
      { word: "洋服", reading: "ようふく", meaningMM: "အနောက်တိုင်းဝတ်စုံ" },
      { word: "和服", reading: "わふく", meaningMM: "ဂျပန်ဝတ်စုံ" },
      { word: "制服", reading: "せいふく", meaningMM: "တူညီဝတ်စုံ" }
    ]
  },
  {
    id: 129,
    kanji: "犬",
    kunReading: "いぬ",
    onReading: "けん",
    compounds: [
      { word: "犬", reading: "いぬ", meaningMM: "ခွေး" },
      { word: "子犬", reading: "こいぬ", meaningMM: "ခွေးပေါက်လေး" },
      { word: "日本犬", reading: "にほんけん", meaningMM: "Japanese dog breed" }
    ]
  },
  {
    id: 130,
    kanji: "同",
    kunReading: "おな(じ)",
    onReading: "どう",
    compounds: [
      { word: "同じ", reading: "おなじ", meaningMM: "အတူတူ" },
      { word: "同時に", reading: "どうじに", meaningMM: "တစ်ချိန်တည်းမှာ" },
      { word: "同級生", reading: "どうきゅうせい", meaningMM: "ကျောင်းနေဖက်" }
    ]
  },
  {
    id: 131,
    kanji: "米",
    kunReading: "こめ",
    onReading: "まい、べい",
    compounds: [
      { word: "米", reading: "こめ", meaningMM: "ဆန်" },
      { word: "米国", reading: "べいこく", meaningMM: "အမေရိကား" },
      { word: "白米", reading: "はくまい", meaningMM: "white rice" }
    ]
  },
  {
    id: 132,
    kanji: "料",
    kunReading: "-",
    onReading: "りょう",
    compounds: [
      { word: "料金", reading: "りょうきん", meaningMM: "ငွေကြေး" },
      { word: "資料", reading: "しりょう", meaningMM: "စာရွက်စာတမ်း" },
      { word: "材料", reading: "ざいりょう", meaningMM: "ကုန်ကြမ်း၊ ပါဝင်ပစ္စည်း" },
      { word: "食料品", reading: "しょくりょうひん", meaningMM: "စားသောက်ကုန်" }
    ]
  },
  {
    id: 133,
    kanji: "理",
    kunReading: "-",
    onReading: "り",
    compounds: [
      { word: "料理", reading: "りょうり", meaningMM: "ဟင်းလျာ" },
      { word: "地理", reading: "ちり", meaningMM: "ပထဝီ" },
      { word: "無理な", reading: "むりな", meaningMM: "အလဟဿဖြစ်သော" },
      { word: "理由", reading: "りゆう", meaningMM: "အကြောင်းပြချက်" }
    ]
  },
  {
    id: 134,
    kanji: "肉",
    kunReading: "-",
    onReading: "にく",
    compounds: [
      { word: "肉", reading: "にく", meaningMM: "အသား" },
      { word: "牛肉", reading: "ぎゅうにく", meaningMM: "အမဲသား" },
      { word: "肉屋", reading: "にくや", meaningMM: "အသားဆိုင်" },
      { word: "筋肉", reading: "きんにく", meaningMM: "ကြွက်သား" }
    ]
  },
  {
    id: 135,
    kanji: "鳥",
    kunReading: "とり",
    onReading: "ちょう",
    compounds: [
      { word: "鳥", reading: "とり", meaningMM: "ငှက်" },
      { word: "小鳥", reading: "ことり", meaningMM: "ငှက်ပေါက်လေး" },
      { word: "白鳥", reading: "はくちょう", meaningMM: "ငန်းဖြူ" }
    ]
  },
  {
    id: 136,
    kanji: "野",
    kunReading: "の",
    onReading: "や",
    compounds: [
      { word: "野原", reading: "のはら", meaningMM: "ကွင်းပြင်" },
      { word: "野鳥", reading: "やちょう", meaningMM: "သားရဲငှက်" },
      { word: "分野", reading: "ぶんや", meaningMM: "နယ်ပယ်" }
    ]
  },
  {
    id: 137,
    kanji: "菜",
    kunReading: "な",
    onReading: "さい",
    compounds: [
      { word: "野菜", reading: "やさい", meaningMM: "ဟင်းရွက်" },
      { word: "採食", reading: "さいしょく", meaningMM: "သက်သက်လွတ်စားခြင်း" },
      { word: "青菜", reading: "あおな", meaningMM: "ဟင်းရွက်စိမ်း" }
    ]
  },
  {
    id: 138,
    kanji: "茶",
    kunReading: "-",
    onReading: "ちゃ、さ",
    compounds: [
      { word: "お茶", reading: "おちゃ", meaningMM: "ရေနွေးကြမ်း" },
      { word: "茶色", reading: "ちゃいろ", meaningMM: "အညိုရောင်" },
      { word: "喫茶店", reading: "きっさてん", meaningMM: "လက်ဖက်ရည်ဆိုင်" },
      { word: "紅茶", reading: "こうちゃ", meaningMM: "လက်ဖက်ရည်" }
    ]
  },
  {
    id: 139,
    kanji: "飯",
    kunReading: "めし",
    onReading: "はん",
    compounds: [
      { word: "ご飯", reading: "ごはん", meaningMM: "ထမင်း" },
      { word: "夕飯", reading: "ゆうはん", meaningMM: "ညစာ (supper)" },
      { word: "晩ご飯", reading: "ばんごはん", meaningMM: "ညစာ" },
      { word: "昼飯", reading: "ひるめし", meaningMM: "နေ့လယ်စာ" }
    ]
  },
  {
    id: 140,
    kanji: "味",
    kunReading: "あじ",
    onReading: "み",
    compounds: [
      { word: "味", reading: "あじ", meaningMM: "အရသာ" },
      { word: "意味", reading: "いみ", meaningMM: "အဓိပ္ပါယ်" },
      { word: "趣味", reading: "しゅみ", meaningMM: "ဝါသနာ" },
      { word: "興味", reading: "きょうみ", meaningMM: "စိတ်ပါဝင်စားခြင်း" }
    ]
  },
  {
    id: 141,
    kanji: "代",
    kunReading: "か(わる)、か(える)",
    onReading: "だい、たい",
    compounds: [
      { word: "代わる", reading: "かわる", meaningMM: "လှဲသည်" },
      { word: "代わりに", reading: "かわりに", meaningMM: "ကိုယ်စား" },
      { word: "時代", reading: "じだい", meaningMM: "ခေတ်၊ အချိန်" },
      { word: "ガス代", reading: "ガスだい", meaningMM: "gas ဖိုး" }
    ]
  },
  {
    id: 142,
    kanji: "使",
    kunReading: "つか(う)",
    onReading: "し",
    compounds: [
      { word: "使う", reading: "つかう", meaningMM: "အသုံးပြုသည်" },
      { word: "大使館", reading: "たいしかん", meaningMM: "သံရုံး" },
      { word: "使用中", reading: "しようちゅう", meaningMM: "အသုံးပြုနေဆဲ" }
    ]
  },
  {
    id: 143,
    kanji: "作",
    kunReading: "つく(る)",
    onReading: "さく、さっ、さ",
    compounds: [
      { word: "作る", reading: "つくる", meaningMM: "ပြုလုပ်သည်" },
      { word: "作文", reading: "さくぶん", meaningMM: "စာစီစာကုံး" },
      { word: "作家", reading: "さっか", meaningMM: "စာရေးသူ" }
    ]
  },
  {
    id: 144,
    kanji: "化",
    kunReading: "-",
    onReading: "か、け",
    compounds: [
      { word: "変化する", reading: "へんかする", meaningMM: "ပြောင်းလဲသည်" },
      { word: "文化", reading: "ぶんか", meaningMM: "ယဉ်ကျေးမှု" },
      { word: "化学", reading: "かがく", meaningMM: "ဓာတုဗေဒ" },
      { word: "映画化", reading: "えいがか", meaningMM: "ရုပ်ရှင်အဖြစ်ပြောင်းလဲ" }
    ]
  },
  {
    id: 145,
    kanji: "信",
    kunReading: "-",
    onReading: "しん",
    compounds: [
      { word: "信じる", reading: "しんじる", meaningMM: "ယုံကြည်သည်" },
      { word: "信号", reading: "しんごう", meaningMM: "မီးပွိုင့်" },
      { word: "自信", reading: "じしん", meaningMM: "ကိုယ့်ကိုယ်ကိုယ်ယုံကြည်မှု" },
      { word: "通信", reading: "つうしん", meaningMM: "စာအဆက်အသွယ်" }
    ]
  },
  {
    id: 146,
    kanji: "進",
    kunReading: "すす(む)、すす(める)",
    onReading: "しん",
    compounds: [
      { word: "進む", reading: "すすむ", meaningMM: "ရှေ့ဆက်သွားသည်" },
      { word: "進歩", reading: "しんぽ", meaningMM: "တိုးတက်သည်" },
      { word: "先進国", reading: "せんしんこく", meaningMM: "တိုးတက်ဖွံ့ဖြိုးပြီးနိုင်ငံ" }
    ]
  },
  {
    id: 147,
    kanji: "送",
    kunReading: "おく(る)",
    onReading: "そう",
    compounds: [
      { word: "送る", reading: "おくる", meaningMM: "ပေးပို့သည်" },
      { word: "送金", reading: "そうきん", meaningMM: "ငွေပို့သည်" },
      { word: "放送", reading: "ほうそう", meaningMM: "အသံထုတ်လွှင့်ပြသသည်" },
      { word: "送信", reading: "そうしん", meaningMM: "ပေးပို့သည် (email)" }
    ]
  },
  {
    id: 148,
    kanji: "返",
    kunReading: "かえ(す)",
    onReading: "へん",
    compounds: [
      { word: "返す", reading: "かえす", meaningMM: "ပြန်ပေးသည်" },
      { word: "返事", reading: "へんじ", meaningMM: "အကြောင်းပြန်သည်" },
      { word: "返信", reading: "へんしん", meaningMM: "စာပြန်သည်" },
      { word: "繰り返す", reading: "くりかえす", meaningMM: "ထပ်ခါထပ်ခါလုပ်သည်" }
    ]
  },
  {
    id: 149,
    kanji: "洗",
    kunReading: "あら(う)",
    onReading: "せん",
    compounds: [
      { word: "洗う", reading: "あらう", meaningMM: "ဆေးကြောသည်" },
      { word: "手洗い", reading: "てあらい", meaningMM: "လက်ဆေးသည်" },
      { word: "お手洗い", reading: "おてあらい", meaningMM: "အိမ်သာ" },
      { word: "選択", reading: "せんたく", meaningMM: "အဝတ်လျှော်သည်" }
    ]
  },
  {
    id: 150,
    kanji: "注",
    kunReading: "そそ(ぐ)",
    onReading: "ちゅう",
    compounds: [
      { word: "注意する", reading: "ちゅういする", meaningMM: "သတိထားသည်" },
      { word: "注文する", reading: "ちゅうもんする", meaningMM: "အော်ဒါမှာသည်" },
      { word: "注射", reading: "ちゅうしゃ", meaningMM: "ဆေးထိုးသည်" }
    ]
  },
  {
    id: 151,
    kanji: "場",
    kunReading: "ば",
    onReading: "じょう",
    compounds: [
      { word: "場所", reading: "ばしょ", meaningMM: "နေရာ" },
      { word: "工場", reading: "こうじょう", meaningMM: "စက်ရုံ" },
      { word: "広場", reading: "ひろば", meaningMM: "ကွင်းပြင်" },
      { word: "運動場", reading: "うんどうじょう", meaningMM: "အားကစားခန်းမ" }
    ]
  },
  {
    id: 152,
    kanji: "建",
    kunReading: "た(てる)",
    onReading: "けん",
    compounds: [
      { word: "建てる", reading: "たてる", meaningMM: "တည်ဆောက်သည်" },
      { word: "建物", reading: "たてもの", meaningMM: "အဆောက်အဦ" },
      { word: "建築", reading: "けんちく", meaningMM: "အဆောက်အဦ" }
    ]
  },
  {
    id: 153,
    kanji: "物",
    kunReading: "もの",
    onReading: "ぶつ、もつ",
    compounds: [
      { word: "物", reading: "もの", meaningMM: "ပစ္စည်း" },
      { word: "買い物", reading: "かいもの", meaningMM: "ဈေးဝယ်ထွက်သည်" },
      { word: "動物", reading: "どうぶつ", meaningMM: "တိရစ္ဆာန်" },
      { word: "荷物", reading: "にもつ", meaningMM: "အထုပ်အပိုး၊ ပစ္စည်း" }
    ]
  },
  {
    id: 154,
    kanji: "院",
    kunReading: "-",
    onReading: "いん",
    compounds: [
      { word: "病院", reading: "びょういん", meaningMM: "ဆေးရုံ" },
      { word: "入院する", reading: "にゅういんする", meaningMM: "ဆေးရုံတက်သည်" },
      { word: "大学院", reading: "だいがくいん", meaningMM: "ဘွဲ့လွန်" }
    ]
  },
  {
    id: 155,
    kanji: "館",
    kunReading: "-",
    onReading: "かん",
    compounds: [
      { word: "映画館", reading: "えいがかん", meaningMM: "ရုပ်ရှင်ရုံ" },
      { word: "大使館", reading: "たいしかん", meaningMM: "သံရုံး" },
      { word: "旅館", reading: "りょかん", meaningMM: "ဂျပန်စတိုင်တည်းခိုခန်း" },
      { word: "美術館", reading: "びじゅつかん", meaningMM: "အနုပညာပြတိုက်" }
    ]
  },
  {
    id: 156,
    kanji: "堂",
    kunReading: "-",
    onReading: "どう",
    compounds: [
      { word: "食堂", reading: "しょくどう", meaningMM: "ထမင်းစားခန်း" },
      { word: "講堂", reading: "こうどう", meaningMM: "စာသင်ခန်းမ" }
    ]
  },
  {
    id: 157,
    kanji: "室",
    kunReading: "-",
    onReading: "しつ",
    compounds: [
      { word: "教室", reading: "きょうしつ", meaningMM: "စာသင်ခန်း" },
      { word: "地下鉄", reading: "ちかてつ", meaningMM: "မြေအောက်ရထား" },
      { word: "待合室", reading: "まちあいしつ", meaningMM: "ဧည့်ခန်း" },
      { word: "事務室", reading: "じむしつ", meaningMM: "ရုံးခန်း" }
    ]
  },
  {
    id: 158,
    kanji: "工",
    kunReading: "-",
    onReading: "こう",
    compounds: [
      { word: "工場", reading: "こうじょう", meaningMM: "စက်ရုံ" },
      { word: "工事", reading: "こうじ", meaningMM: "ဆောက်လုပ်ရေး" },
      { word: "工業", reading: "こうぎょう", meaningMM: "စက်ရုံလုပ်ငန်း" },
      { word: "工作", reading: "こうさく", meaningMM: "လက်မှုပညာ" }
    ]
  },
  {
    id: 159,
    kanji: "図",
    kunReading: "-",
    onReading: "ず、と",
    compounds: [
      { word: "図", reading: "ず", meaningMM: "ပုံ (figure)" },
      { word: "地図", reading: "ちず", meaningMM: "မြေပုံ" },
      { word: "図書館", reading: "としょかん", meaningMM: "စာကြည့်တိုက်" }
    ]
  },
  {
    id: 160,
    kanji: "号",
    kunReading: "-",
    onReading: "ごう",
    compounds: [
      { word: "信号", reading: "しんごう", meaningMM: "မီးပွိုင့်" },
      { word: "電話番号", reading: "でんわばんごう", meaningMM: "ဖုန်းနံပါတ်" },
      { word: "３号室", reading: "さんごうしつ", meaningMM: "အခန်းနံပါတ် ၃" },
      { word: "号令", reading: "ごうれい", meaningMM: "နံပါတ်စဉ်" }
    ]
  },
  {
    id: 161,
    kanji: "交",
    kunReading: "まじ(わる)",
    onReading: "こう",
    compounds: [
      { word: "交わる", reading: "まじわる", meaningMM: "ရောနှောသည်" },
      { word: "交通", reading: "こうつう", meaningMM: "လမ်းပန်းဆက်သွယ်ရေး" },
      { word: "交差点", reading: "こうさてん", meaningMM: "လမ်းဆုံလမ်းခွ" },
      { word: "交番", reading: "こうばん", meaningMM: "ရဲကင်း" },
      { word: "交代", reading: "こうたい", meaningMM: "တလှည့်စီဖြစ်ပေါ်ပြောင်းလဲ" }
    ]
  },
  {
    id: 162,
    kanji: "通",
    kunReading: "とお(る)、かよ(う)",
    onReading: "つう",
    compounds: [
      { word: "通る", reading: "とおる", meaningMM: "ဖြတ်ကျော်သည်" },
      { word: "通う", reading: "かよう", meaningMM: "အသွားအပြန်လုပ်သည်" },
      { word: "通学", reading: "つうがく", meaningMM: "ကျောင်းတက်သည်" },
      { word: "大通り", reading: "おおどおり", meaningMM: "လမ်းမကြီး" }
    ]
  },
  {
    id: 163,
    kanji: "動",
    kunReading: "うご(く)",
    onReading: "どう",
    compounds: [
      { word: "動く", reading: "うごく", meaningMM: "ရွေ့လျားသည်" },
      { word: "運動", reading: "うんどう", meaningMM: "အားကစား" },
      { word: "自動車", reading: "じどうしゃ", meaningMM: "ကား" },
      { word: "動物", reading: "どうぶつ", meaningMM: "တိရစ္ဆာန်" }
    ]
  },
  {
    id: 164,
    kanji: "乗",
    kunReading: "の(る)",
    onReading: "じょう",
    compounds: [
      { word: "乗る", reading: "のる", meaningMM: "စီးသည်" },
      { word: "タクシー乗り場", reading: "タクシーのりば", meaningMM: "တက္ကစီစီးတဲ့နေရာ" },
      { word: "乗車券", reading: "じょうしゃけん", meaningMM: "ယာဉ်စီးလက်မှတ်" }
    ]
  },
  {
    id: 165,
    kanji: "降",
    kunReading: "お(りる)、ふ(る)",
    onReading: "こう",
    compounds: [
      { word: "降りる", reading: "おりる", meaningMM: "ဆင်းသည်" },
      { word: "雨が降る", reading: "あめがふる", meaningMM: "မိုးရွာသည်" },
      { word: "乗り降り", reading: "のりおり", meaningMM: "အဆင်းအတက်" },
      { word: "降雨量", reading: "こううりょう", meaningMM: "မိုးရေချိန်" }
    ]
  },
  {
    id: 166,
    kanji: "運",
    kunReading: "はこ(ぶ)",
    onReading: "うん",
    compounds: [
      { word: "運ぶ", reading: "はこぶ", meaningMM: "သယ်ဆောင်သည်" },
      { word: "運動", reading: "うんどう", meaningMM: "အားကစား" },
      { word: "運がいい", reading: "うんがいい", meaningMM: "ကံကောင်းသော" },
      { word: "運賃", reading: "うんちん", meaningMM: "ယာဉ်စီးခ၊ ကားခ" }
    ]
  },
  {
    id: 167,
    kanji: "転",
    kunReading: "-",
    onReading: "てん",
    compounds: [
      { word: "運転する", reading: "うんてんする", meaningMM: "ကားမောင်းသည်" },
      { word: "自転車", reading: "じてんしゃ", meaningMM: "စက်ဘီး" },
      { word: "回転", reading: "かいてん", meaningMM: "လှည့်ပတ်သည်" },
      { word: "転勤", reading: "てんきん", meaningMM: "အလုပ်ပြောင်း" }
    ]
  },
  {
    id: 168,
    kanji: "帰",
    kunReading: "かえ(る)",
    onReading: "き",
    compounds: [
      { word: "帰る", reading: "かえる", meaningMM: "အိမ်ပြန်သည်" },
      { word: "帰国する", reading: "きこくする", meaningMM: "တိုင်းပြည်ပြန်သည်" },
      { word: "お帰りなさい", reading: "おかえりなさい", meaningMM: "welcome home" }
    ]
  },
  {
    id: 169,
    kanji: "発",
    kunReading: "-",
    onReading: "はつ",
    compounds: [
      { word: "出発する", reading: "しゅっぱつする", meaningMM: "ထွက်ခွာသည်" },
      { word: "発見", reading: "はっけん", meaningMM: "စတင်တွေ့ရှိမှု" },
      { word: "発明", reading: "はつめい", meaningMM: "စတင်တီထွင်မှု" },
      { word: "発車", reading: "はっしゃ", meaningMM: "အထွက်" }
    ]
  },
  {
    id: 170,
    kanji: "着",
    kunReading: "き(る)、つ(く)",
    onReading: "ちゃく",
    compounds: [
      { word: "着る", reading: "きる", meaningMM: "ဝတ်ဆင်သည်" },
      { word: "着く", reading: "つく", meaningMM: "ရောက်ရှိသည်" },
      { word: "着物", reading: "きもの", meaningMM: "ကီမိုနို" },
      { word: "着信メール", reading: "ちゃくしんメール", meaningMM: "mail ရောက်သည်" }
    ]
  },
  {
    id: 171,
    kanji: "漢",
    kunReading: "-",
    onReading: "かん",
    compounds: [
      { word: "漢字", reading: "かんじ", meaningMM: "kanji" },
      { word: "漢方薬", reading: "かんぽうやく", meaningMM: "တရုတ်တိုင်းရင်းဆေး" }
    ]
  },
  {
    id: 172,
    kanji: "字",
    kunReading: "-",
    onReading: "じ",
    compounds: [
      { word: "字", reading: "じ", meaningMM: "စာလုံး" },
      { word: "漢字", reading: "かんじ", meaningMM: "kanji" },
      { word: "活字", reading: "かつじ", meaningMM: "printing type" },
      { word: "習字", reading: "しゅうじ", meaningMM: "လက်ရေးလှရေးခြင်း" }
    ]
  },
  {
    id: 173,
    kanji: "文",
    kunReading: "ふみ",
    onReading: "ぶん、もん",
    compounds: [
      { word: "文", reading: "ぶん", meaningMM: "စာကြောင်း" },
      { word: "文学", reading: "ぶんがく", meaningMM: "စာပေ" },
      { word: "文字", reading: "もじ", meaningMM: "စကားလုံး" },
      { word: "注文する", reading: "ちゅうもんする", meaningMM: "အော်ဒါမှာသည်" }
    ]
  },
  {
    id: 174,
    kanji: "教",
    kunReading: "おし(える)",
    onReading: "きょう",
    compounds: [
      { word: "教える", reading: "おしえる", meaningMM: "သင်ကြားသည်" },
      { word: "教室", reading: "きょうしつ", meaningMM: "စာသင်ခန်း" },
      { word: "教科書", reading: "きょうかしょ", meaningMM: "ပြဌာန်းစာအုပ်" },
      { word: "教会", reading: "きょうかい", meaningMM: "ဘုရားကျောင်း" }
    ]
  },
  {
    id: 175,
    kanji: "勉",
    kunReading: "-",
    onReading: "べん",
    compounds: [
      { word: "勉強する", reading: "べんきょうする", meaningMM: "စာလေ့လာသည်" }
    ]
  },
  {
    id: 176,
    kanji: "習",
    kunReading: "なら(う)",
    onReading: "しゅう",
    compounds: [
      { word: "習う", reading: "ならう", meaningMM: "သင်ယူသည်" },
      { word: "練習", reading: "れんしゅう", meaningMM: "လေ့ကျင့်ခန်း" },
      { word: "習慣", reading: "しゅうかん", meaningMM: "ဓလေ့စရိုက်" },
      { word: "復習する", reading: "ふくしゅうする", meaningMM: "ပြန်လှန်လေ့ကျင့်သည်" }
    ]
  },
  {
    id: 177,
    kanji: "英",
    kunReading: "-",
    onReading: "えい",
    compounds: [
      { word: "英語", reading: "えいご", meaningMM: "အင်္ဂလိပ်စာ" },
      { word: "英国", reading: "えいこく", meaningMM: "အင်္ဂလန်" },
      { word: "英雄", reading: "えいゆう", meaningMM: "သူရဲကောင်း" }
    ]
  },
  {
    id: 178,
    kanji: "考",
    kunReading: "かんが(える)",
    onReading: "こう",
    compounds: [
      { word: "考える", reading: "かんがえる", meaningMM: "စဉ်းစားသည်" },
      { word: "参考書", reading: "さんこうしょ", meaningMM: "ကိုးကားစာအုပ်" },
      { word: "考古学", reading: "こうこがく", meaningMM: "ရှေးဟောင်းသုတေသနပညာရပ်" }
    ]
  },
  {
    id: 179,
    kanji: "研",
    kunReading: "-",
    onReading: "けん",
    compounds: [
      { word: "研究する", reading: "けんきゅうする", meaningMM: "သုတေသနလုပ်သည်" }
    ]
  },
  {
    id: 180,
    kanji: "究",
    kunReading: "-",
    onReading: "きゅう",
    compounds: [
      { word: "研究者", reading: "けんきゅうしゃ", meaningMM: "သုတေသနပညာရှင်" },
      { word: "研究室", reading: "けんきゅうしつ", meaningMM: "သုတေသနခန်း" }
    ]
  },
  {
    id: 181,
    kanji: "問",
    kunReading: "と(う)、とい",
    onReading: "もん",
    compounds: [
      { word: "問", reading: "とい", meaningMM: "အမေး" },
      { word: "問題", reading: "もんだい", meaningMM: "မေးခွန်း" },
      { word: "質問する", reading: "しつもんする", meaningMM: "မေးမြန်းသည်" }
    ]
  },
  {
    id: 182,
    kanji: "題",
    kunReading: "-",
    onReading: "だい",
    compounds: [
      { word: "題名", reading: "だいめい", meaningMM: "ခေါင်းစဉ်" },
      { word: "問題", reading: "もんだい", meaningMM: "မေးခွန်း" },
      { word: "宿題", reading: "しゅくだい", meaningMM: "အိမ်စာ" },
      { word: "話題", reading: "わだい", meaningMM: "ရေပန်းစားနေသောအကြောင်းအရာ" }
    ]
  },
  {
    id: 183,
    kanji: "試",
    kunReading: "ため(す)",
    onReading: "し",
    compounds: [
      { word: "試す", reading: "ためす", meaningMM: "စမ်းသပ်သည်" },
      { word: "入試", reading: "にゅうし", meaningMM: "ဝင်ခွင့်စာမေးပွဲ" },
      { word: "試合", reading: "しあい", meaningMM: "ပြိုင်ပွဲ" }
    ]
  },
  {
    id: 184,
    kanji: "験",
    kunReading: "-",
    onReading: "けん",
    compounds: [
      { word: "試験", reading: "しけん", meaningMM: "စာမေးပွဲ" },
      { word: "実験", reading: "じっけん", meaningMM: "လက်တွေ့စမ်းသပ်ချက်" },
      { word: "経験", reading: "けいけん", meaningMM: "အတွေ့အကြုံ" },
      { word: "受験する", reading: "じゅけんする", meaningMM: "စာမေးပွဲဖြေသည်" }
    ]
  },
  {
    id: 185,
    kanji: "質",
    kunReading: "-",
    onReading: "しつ",
    compounds: [
      { word: "質問する", reading: "しつもんする", meaningMM: "မေးမြန်းသည်" },
      { word: "品質", reading: "ひんしつ", meaningMM: "ပစ္စည်းအရည်အသွေး" }
    ]
  },
  {
    id: 186,
    kanji: "合",
    kunReading: "あ(う)",
    onReading: "ごう、がっ",
    compounds: [
      { word: "間に合う", reading: "まにあう", meaningMM: "အချိန်မီသည်" },
      { word: "試合", reading: "しあい", meaningMM: "ပြိုင်ပွဲ" },
      { word: "場合", reading: "ばあい", meaningMM: "အခြေအနေ" },
      { word: "都合がいい", reading: "つごうがいい", meaningMM: "အဆင်ပြေသော" }
    ]
  },
  {
    id: 187,
    kanji: "答",
    kunReading: "こた(える)",
    onReading: "とう",
    compounds: [
      { word: "答える", reading: "こたえる", meaningMM: "ဖြေကြားသည်" },
      { word: "答え", reading: "こたえ", meaningMM: "အဖြေ" },
      { word: "解答", reading: "かいとう", meaningMM: "အဖြေ" }
    ]
  },
  {
    id: 188,
    kanji: "用",
    kunReading: "もち(いる)",
    onReading: "よう",
    compounds: [
      { word: "用事", reading: "ようじ", meaningMM: "အလုပ်ကိစ္စ" },
      { word: "利用する", reading: "りようする", meaningMM: "အသုံးပြုသည်" },
      { word: "使用禁止", reading: "しようきんし", meaningMM: "အသုံးပြုမရ" },
      { word: "子ども用", reading: "こどもよう", meaningMM: "ကလေးများအတွက်" }
    ]
  },
  {
    id: 189,
    kanji: "紙",
    kunReading: "かみ",
    onReading: "し",
    compounds: [
      { word: "紙", reading: "かみ", meaningMM: "စာရွက်" },
      { word: "手紙", reading: "てがみ", meaningMM: "စာ (letter)" },
      { word: "コピー用紙", reading: "コピーようし", meaningMM: "မိတ္တူကူးစက္ကူ" },
      { word: "新聞紙", reading: "しんぶんし", meaningMM: "သတင်းစာစာရွက်" }
    ]
  },
  {
    id: 190,
    kanji: "意",
    kunReading: "-",
    onReading: "い",
    compounds: [
      { word: "意味", reading: "いみ", meaningMM: "အဓိပ္ပါယ်" },
      { word: "注意する", reading: "ちゅういする", meaningMM: "သတိထားသည်" },
      { word: "用意する", reading: "よういする", meaningMM: "အသုံးပြုသည်" },
      { word: "意見", reading: "いけん", meaningMM: "ထင်မြင်ယူဆချက်" }
    ]
  },
  {
    id: 191,
    kanji: "引",
    kunReading: "ひ(く)",
    onReading: "いん",
    compounds: [
      { word: "引く", reading: "ひく", meaningMM: "တီးသည်" },
      { word: "引き出し", reading: "ひきだし", meaningMM: "အံဆွဲ" },
      { word: "引力", reading: "いんりょく", meaningMM: "ကမ္ဘာမြေဆွဲအား" }
    ]
  },
  {
    id: 192,
    kanji: "開",
    kunReading: "あ(ける)、ひら(く)",
    onReading: "かい",
    compounds: [
      { word: "開ける", reading: "あける", meaningMM: "ဖွင့်သည်" },
      { word: "開く", reading: "ひらく", meaningMM: "ဖွင့်လှစ်သည်" },
      { word: "開店", reading: "かいてん", meaningMM: "ဆိုင်ဖွင့်သည်" },
      { word: "開始する", reading: "かいしする", meaningMM: "စတင်သည်" }
    ]
  },
  {
    id: 193,
    kanji: "閉",
    kunReading: "し(める)、と(じる)",
    onReading: "へい",
    compounds: [
      { word: "閉める", reading: "しめる", meaningMM: "ပိတ်သည်" },
      { word: "閉じる", reading: "とじる", meaningMM: "ပိတ်သည် (မျက်လုံး)" },
      { word: "閉館する", reading: "へいかんする", meaningMM: "ပိတ်သည်" },
      { word: "閉会式", reading: "へいかいしき", meaningMM: "အခမ်းအနားပိတ်သိမ်းသည်" }
    ]
  },
  {
    id: 194,
    kanji: "去",
    kunReading: "さ(る)",
    onReading: "きょ、こ",
    compounds: [
      { word: "去年", reading: "きょねん", meaningMM: "မနှစ်က" },
      { word: "過去", reading: "かこ", meaningMM: "အတိတ်" },
      { word: "消去", reading: "しょうきょ", meaningMM: "ဖျက်သည်" }
    ]
  },
  {
    id: 195,
    kanji: "死",
    kunReading: "し(ぬ)",
    onReading: "し",
    compounds: [
      { word: "死ぬ", reading: "しぬ", meaningMM: "သေဆုံးသည်" },
      { word: "死者", reading: "ししゃ", meaningMM: "သေဆုံးသူ" },
      { word: "急死", reading: "きゅうし", meaningMM: "ရုတ်တရက်သေဆုံးသည်" },
      { word: "病死", reading: "びょうし", meaningMM: "ရောဂါကြောင့်သေဆုံးသည်" }
    ]
  },
  {
    id: 196,
    kanji: "集",
    kunReading: "あつ(まる) / あつ(める)",
    onReading: "しゅう",
    compounds: [
      { word: "集める", reading: "あつめる", meaningMM: "စုဆောင်းသည်" },
      { word: "集まる", reading: "あつまる", meaningMM: "စုဝေးသည်" },
      { word: "文集", reading: "ぶんしゅう", meaningMM: "စာစု၊ ကဗျာစု" },
      { word: "集合する", reading: "しゅうごうする", meaningMM: "တွေ့ဆုံသည်" }
    ]
  },
  {
    id: 197,
    kanji: "知",
    kunReading: "し(る)",
    onReading: "ち",
    compounds: [
      { word: "知る", reading: "しる", meaningMM: "သိသည်" },
      { word: "知り合い", reading: "しりあい", meaningMM: "အသိမိတ်ဆွေ" },
      { word: "通知", reading: "つうち", meaningMM: "သတိပေးချက်" },
      { word: "知識", reading: "ちしき", meaningMM: "ဗဟုသုတ" }
    ]
  },
  {
    id: 198,
    kanji: "売",
    kunReading: "う(る)",
    onReading: "ばい",
    compounds: [
      { word: "売る", reading: "うる", meaningMM: "ရောင်းသည်" },
      { word: "売店", reading: "ばいてん", meaningMM: "အရောင်းဆိုင်" },
      { word: "売り場", reading: "うりば", meaningMM: "ရောင်းတဲ့နေရာ" },
      { word: "自動販売機", reading: "じどうはんばいき", meaningMM: "vending-machine" }
    ]
  },
  {
    id: 199,
    kanji: "説",
    kunReading: "と(く)",
    onReading: "せつ",
    compounds: [
      { word: "説明する", reading: "せつめいする", meaningMM: "ရှင်းပြသည်" },
      { word: "小説", reading: "しょうせつ", meaningMM: "ဝတ္ထု" }
    ]
  },
  {
    id: 200,
    kanji: "思",
    kunReading: "おも(う)",
    onReading: "し",
    compounds: [
      { word: "思う", reading: "おもう", meaningMM: "တွေးသည်" },
      { word: "思い出す", reading: "おもいだす", meaningMM: "သတိရသည်" },
      { word: "思い出", reading: "おもいで", meaningMM: "အမှတ်တရ" },
      { word: "思想", reading: "しそう", meaningMM: "အတွေးအခေါ်" }
    ]
  }
];
