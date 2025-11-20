
import { GrammarEntry } from './types';

export const GRAMMAR_DATA: GrammarEntry[] = [
  {
    id: "26",
    title: "第26課: Explaining & Requesting",
    description: "Using ~んです for explanations and polite requests.",
    pattern: "Plain Form + んです",
    examples: [
      { japanese: "いくんです", myanmar: "သွားမလို့ပါ" },
      { japanese: "いかないんです", myanmar: "မသွားချင်လို့ပါ" },
      { japanese: "きれいなんです", myanmar: "လှလို့ပါ (な-adj)" },
      { japanese: "びょうきなんです", myanmar: "နေမကောင်းလို့ပါ (Noun)" },
      { japanese: "しりょうが ほしいんですが、おくっていただけませんか。", myanmar: "အချက်အလက်တွေ လိုချင်လို့ပါ၊ ပို့ပေးလို့ရမလား။" }
    ]
  },
  {
    id: "27",
    title: "第27課: Potential Form (可能形)",
    description: "Expressing ability or possibility.",
    pattern: "Verb Potential Form",
    examples: [
      { japanese: "うたえます", myanmar: "သီချင်းဆိုနိုင်သည်" },
      { japanese: "ひけます", myanmar: "တီးနိုင်သည်" },
      { japanese: "わたしは はしが つかえます。", myanmar: "ကျွန်တော် တူသုံးနိုင်ပါတယ်။" },
      { japanese: "２かいからはなびが みえます。", myanmar: "၂ ထပ်က နေ မီးပန်းတွေ မြင်နိုင်တယ်။" }
    ]
  },
  {
    id: "28",
    title: "第28課: Simultaneous Actions (~ながら)",
    description: "Doing two things at once.",
    pattern: "V-masu (stem) + ながら",
    examples: [
      { japanese: "しゃしんをみせながら、せつめいします。", myanmar: "ဓာတ်ပုံပြရင်းနဲ့ ရှင်းပြပါမယ်။" },
      { japanese: "ガムをかみながら、せんせいのはなしを きいてはいけません。", myanmar: "ပီကေဝါးရင်းနဲ့ ဆရာပြောတဲ့စကားကို နားမထောင်သင့်ပါဘူး။" }
    ]
  },
  {
    id: "29",
    title: "第29課: State of Being (~ています)",
    description: "Describing a state resulting from an action.",
    pattern: "V-te + います",
    examples: [
      { japanese: "ドアが あいています。", myanmar: "တံခါး ပွင့်နေတယ်။" },
      { japanese: "くるまが とまっています。", myanmar: "ကား ရပ်နေတယ်။" },
      { japanese: "このふくろは やぶれています。", myanmar: "ဒီအိတ်သည် ပြဲနေပါတယ်။" }
    ]
  },
  {
    id: "30",
    title: "第30課: Preparation & State (~てあります)",
    description: "State of an intentional action or preparation for future.",
    pattern: "V-te + あります / おきます",
    examples: [
      { japanese: "カレンダーに こんげつの よていが かいてあります。", myanmar: "ပြက္ခဒိန်တွင် ဒီလရဲ့ အစီအစဉ်ကို ရေးထားပါတယ်။" },
      { japanese: "こどもが うまれるまえに、ふくや ベッドを かっておきます。", myanmar: "ကလေးမမွေးဖွားခင် အဝတ်အစားတွေရယ် အိပ်ယာရယ် ဝယ်ထားပါမယ်။" }
    ]
  },
  {
    id: "31",
    title: "第31課: Volitional Form (意向形)",
    description: "Expressing intention or suggestion.",
    pattern: "Volitional Form + とおもっています",
    examples: [
      { japanese: "かいものに いこう。", myanmar: "ဈေးဝယ်သွားကြအောင်။" },
      { japanese: "がいこくで はたらこうとおもっています。", myanmar: "နိုင်ငံခြားတွင် အလုပ်လုပ်မယ်လို့ တွေးထားပါတယ်။" }
    ]
  },
  {
    id: "32",
    title: "第32課: Advice & Probability",
    description: "Giving advice (~たほうがいい) and probability (~でしょう).",
    pattern: "V-ta/nai + ほうがいいです / Plain + でしょう",
    examples: [
      { japanese: "びょういんへ いったほうがいいです。", myanmar: "ဆေးရုံ သွားတာကောင်းတယ်။" },
      { japanese: "あしたは あめでしょう。", myanmar: "မနက်ဖြန် မိုးရွာမယ်ထင်တယ်။" },
      { japanese: "かれは かいしゃを やめるかもしれません。", myanmar: "သူသည် ကုမ္ပဏီကို ထွက်ကောင်းထွက်နိုင်ပါတယ်။" }
    ]
  },
  {
    id: "33",
    title: "第33課: Imperative & Prohibitive",
    description: "Orders and prohibitions.",
    pattern: "Imperative / Prohibitive Form",
    examples: [
      { japanese: "はやく いけ。", myanmar: "မြန်မြန်သွား။" },
      { japanese: "ここでしゃしんを とるな。", myanmar: "ဒီမှာ ဓာတ်ပုံ မရိုက်နဲ့။" },
      { japanese: "あの かんじは 「いりぐち」 と よみます。", myanmar: "အဲ့ဒီ ခန်းဂျီးသည် 'ဝင်ပေါက်' လို့ ဖတ်ပါတယ်။" }
    ]
  },
  {
    id: "34",
    title: "第34課: Following actions (~とおりに)",
    description: "Doing something exactly as...",
    pattern: "V-ru/ta / N-no + とおりに",
    examples: [
      { japanese: "わたしが いったとおりに、いってください。", myanmar: "ကျွန်တော် ပြောတဲ့အတိုင်း ပြောပေးပါ။" },
      { japanese: "しごとが おわったあとで、のみにいきます。", myanmar: "အလုပ်ပြီးတဲ့နောက်မှာ သောက်ဖို့ သွားခဲ့ပါတယ်။" }
    ]
  },
  {
    id: "35",
    title: "第35課: Conditional Form (条件形)",
    description: "If/When conditions.",
    pattern: "V-eba / Adj-kereba / N-nara",
    examples: [
      { japanese: "あめが ふれば、すずしくなります。", myanmar: "မိုးရွာလျှင် အေးလာပါမယ်။" },
      { japanese: "ひまなら、つりに いきませんか。", myanmar: "အားလျှင် ငါးသွားမျှားမလား။" }
    ]
  },
  {
    id: "36",
    title: "第36課: Purpose & Change (~ように)",
    description: "So that... / Becoming able to...",
    pattern: "V-ru/nai + ように",
    examples: [
      { japanese: "にほんごが はなせるように、まいにちれんしゅうします。", myanmar: "ဂျပန်စကား ပြောနိုင်အောင် နေ့တိုင်း လေ့ကျင့်လာပါမယ်။" },
      { japanese: "テレビの にほんごが かなり わかるようになりました。", myanmar: "TV ရဲ့ ဂျပန်စာကို တော်တော်လေး နားလည်လာပြီ။" }
    ]
  },
  {
    id: "37",
    title: "第37課: Passive Voice (受身)",
    description: "Passive verb forms.",
    pattern: "Passive Form (れる/られる)",
    examples: [
      { japanese: "わたしは ぶちょうに ほめられました。", myanmar: "ကျွန်တော်သည် ဌာနမှူးဆီမှ ချီးကျူးခံခဲ့ရပါတယ်။" },
      { japanese: "このほんは せかいじゅうで よまれています。", myanmar: "ဒီစာအုပ်သည် တစ်ကမ္ဘာလုံး ဖတ်ကြပါတယ်။" }
    ]
  },
  {
    id: "38",
    title: "第38課: Nominalization (~の)",
    description: "Turning verbs into nouns.",
    pattern: "Plain Form + のは / のが / のを",
    examples: [
      { japanese: "テニスを するのは おもしろいです。", myanmar: "တင်းနစ်ကစားတာ စိတ်ဝင်စားဖို့ ကောင်းတယ်။" },
      { japanese: "わたしは えを かくのが へたです。", myanmar: "ကျွန်တော်သည် ပန်းချီဆွဲတာ ညံ့ပါတယ်။" }
    ]
  },
  {
    id: "39",
    title: "第39課: Reason/Cause (~て/ので)",
    description: "Because of...",
    pattern: "V-te / Adj-kute / N-de",
    examples: [
      { japanese: "ニュースを きいて、びっくりしました。", myanmar: "သတင်းကို ကြားပြီးတော့ အံ့သြသွားတယ်။" },
      { japanese: "じしんで ビルが たおれました。", myanmar: "ငလျင်ကြောင့် တိုက် ခါသွားခဲ့တယ်။" }
    ]
  },
  {
    id: "40",
    title: "第40課: Embedded Questions (~か)",
    description: "Whether or not / Clause with question word.",
    pattern: "Plain Form + か / かどうか",
    examples: [
      { japanese: "JAL107びんは なんじに つくか、しらべてください。", myanmar: "JAL107 လေယာဉ် ဘယ်အချိန် ရောက်မလဲ စစ်ဆေးပေးပါ။" },
      { japanese: "このくつを はいてみます。", myanmar: "ဒီဖိနပ်ကို စီးကြည့်မယ်။" }
    ]
  },
  {
    id: "41",
    title: "第41課: Giving & Receiving",
    description: "Giving and Receiving of favors.",
    pattern: "V-te + いただきます / くださいます / やります",
    examples: [
      { japanese: "わたしは しゃちょうに おみやげを いただきました。", myanmar: "ကျွန်တော်သည် သူဌေးဆီမှ လက်ဆောင် ရရှိခဲ့ပါတယ်။" },
      { japanese: "しゃちょうが わたしに おみやげを くださいました。", myanmar: "သူဌေးက ကျွန်တော့်အား လက်ဆောင်ပေးခဲ့ပါတယ်။" }
    ]
  },
  {
    id: "42",
    title: "第42課: Purpose (~ために/のに)",
    description: "In order to / For the purpose of.",
    pattern: "V-ru / N-no + ために / のに",
    examples: [
      { japanese: "いえを かうために、いっしょうけんめい はたらきます。", myanmar: "အိမ်ဝယ်ရန်အတွက် ကြိုးကြိုးစားစား အလုပ်လုပ်ပါတယ်။" },
      { japanese: "このかばんは りょこうに つかいます。", myanmar: "ဒီအိတ်သည် ခရီးအတွက် အသုံးပြုပါတယ်။" }
    ]
  },
  {
    id: "43",
    title: "第43課: Appearance (~そうです)",
    description: "Looks like / Seems like.",
    pattern: "V-stem / Adj-stem + そうです",
    examples: [
      { japanese: "いまにも あめが ふりそうです。", myanmar: "အခုလေးတင် မိုးရွာမယ့်ပုံပဲ။" },
      { japanese: "このりょうりは からそうです。", myanmar: "ဒီဟင်းလျာသည် စပ်မယ့်ပုံပဲ။" }
    ]
  },
  {
    id: "44",
    title: "第44課: Excess & Ease (~すぎる)",
    description: "Too much / Easy to do / Hard to do.",
    pattern: "V-stem / Adj-stem + すぎます / やすい / にくい",
    examples: [
      { japanese: "ごはんを たべすぎました。", myanmar: "ထမင်းကို အစားလွန်သွားခဲ့တယ်။" },
      { japanese: "このくすりは のみやすいです。", myanmar: "ဒီဆေးသည် သောက်ရလွယ်ပါတယ်။" }
    ]
  },
  {
    id: "45",
    title: "第45課: Case & Despite (~ばあいは/のに)",
    description: "In the case of / Even though.",
    pattern: "Plain Form + ばあいは / のに",
    examples: [
      { japanese: "かいぎに おくれるばあいは、れんらくしてください。", myanmar: "အစည်းအဝေး နောက်ကျမယ့် အခြေအနေဆိုရင် အကြောင်းကြားပေးပါ။" },
      { japanese: "３０ぷんも まっているのに、タクシーが きません。", myanmar: "မိနစ် ၃၀ တောင် စောင့်နေတာတောင် Taxi က မလာပါဘူး။" }
    ]
  },
  {
    id: "46",
    title: "第46課: Time Points (~ところ)",
    description: "Just about to / In the middle of / Just finished.",
    pattern: "V-ru/te-iru/ta + ところです",
    examples: [
      { japanese: "ちょうど いまから しあいが はじまるところです。", myanmar: "အခုကနေပဲ ပြိုင်ပွဲ စတော့မလို့။" },
      { japanese: "いま へやを かたづけているところです。", myanmar: "အခု အခန်းကို သိမ်းဆည်းရှင်းလင်းနေတုန်းပဲ။" }
    ]
  },
  {
    id: "47",
    title: "第47課: Hearsay (~そうです)",
    description: "I heard that...",
    pattern: "Plain Form + そうです",
    examples: [
      { japanese: "あしたは ゆきが ふるそうです。", myanmar: "မနက်ဖြန် နှင်းကျမယ်တဲ့။" },
      { japanese: "たいふうは こないそうです。", myanmar: "မုန်တိုင်းသည် မလာဘူးတဲ့။" }
    ]
  },
  {
    id: "48",
    title: "第48課: Causative (使役)",
    description: "Make someone do something / Let someone do.",
    pattern: "Causative Form (させる)",
    examples: [
      { japanese: "ぶちょうは ミラーさんを アメリカへ しゅっちょうさせました。", myanmar: "ဌာနမှူးသည် မီရာစံကို အမေရိကားသို့ အလုပ်ကိစ္စ ခရီးသွားခိုင်းခဲ့သည်။" },
      { japanese: "わたしは こどもに ほんを よませます。", myanmar: "ကျွန်တော်သည် ကလေးအား စာအုပ်ကို ဖတ်ခိုင်းပေးပါတယ်။" }
    ]
  },
  {
    id: "49",
    title: "第49課: Honorifics (尊敬語)",
    description: "Respectful language.",
    pattern: "Honorific Forms",
    examples: [
      { japanese: "いとうせんせいは さっき こられました。", myanmar: "ဆရာအီတိုးသည် ခုနက ရောက်လာခဲ့တယ်။" },
      { japanese: "しゃちょうは おでかけに なりました。", myanmar: "ဥက္ကဌသည် အပြင်ထွက်သွားခဲ့တယ်။" }
    ]
  },
  {
    id: "50",
    title: "第50課: Humble (謙譲語)",
    description: "Humble language.",
    pattern: "Humble Forms",
    examples: [
      { japanese: "あした ３じに おたくへ うかがいます。", myanmar: "မနက်ဖြန် ၃ နာရီတွင် အိမ်သို့ လာလည်ပါမယ်။" },
      { japanese: "わたくしは ミラーと もうします。", myanmar: "ကျွန်တော်သည် မီရာလို့ ခေါ်ပါတယ်။" }
    ]
  }
];
