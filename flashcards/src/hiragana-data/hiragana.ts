import { HiraganaCharacter } from "../types/HiraganaCharacterTypes";

export const hiraganaVowels: HiraganaCharacter[] = [
  { hiragana: "あ", english: "a" },
  { hiragana: "い", english: "i" },
  { hiragana: "う", english: "u" },
  { hiragana: "え", english: "e" },
  { hiragana: "お", english: "o" },
];

export const hiraganaKRow: HiraganaCharacter[] = [
  { hiragana: "か", english: "ka" },
  { hiragana: "き", english: "ki" },
  { hiragana: "く", english: "ku" },
  { hiragana: "け", english: "ke" },
  { hiragana: "こ", english: "ko" },
];

export const hiraganaSRow: HiraganaCharacter[] = [
  { hiragana: "さ", english: "sa" },
  { hiragana: "し", english: "shi" },
  { hiragana: "す", english: "su" },
  { hiragana: "せ", english: "se" },
  { hiragana: "そ", english: "so" },
];

export const hiraganaTRow: HiraganaCharacter[] = [
  { hiragana: "た", english: "ta" },
  { hiragana: "ち", english: "chi" },
  { hiragana: "つ", english: "tsu" },
  { hiragana: "て", english: "te" },
  { hiragana: "と", english: "to" },
];

export const hiraganaNRow: HiraganaCharacter[] = [
  { hiragana: "な", english: "na" },
  { hiragana: "に", english: "ni" },
  { hiragana: "ぬ", english: "nu" },
  { hiragana: "ね", english: "ne" },
  { hiragana: "の", english: "no" },
];

export const hiraganaHRow: HiraganaCharacter[] = [
  { hiragana: "は", english: "ha" },
  { hiragana: "ひ", english: "hi" },
  { hiragana: "ふ", english: "fu" },
  { hiragana: "へ", english: "he" },
  { hiragana: "ほ", english: "ho" },
];

export const hiraganaMRow: HiraganaCharacter[] = [
  { hiragana: "ま", english: "ma" },
  { hiragana: "み", english: "mi" },
  { hiragana: "む", english: "mu" },
  { hiragana: "め", english: "me" },
  { hiragana: "も", english: "mo" },
];

export const hiraganaYRow: HiraganaCharacter[] = [
  { hiragana: "や", english: "ya" },
  { hiragana: "ゆ", english: "yu" },
  { hiragana: "よ", english: "yo" },
];

export const hiraganaRRow: HiraganaCharacter[] = [
  { hiragana: "ら", english: "ra" },
  { hiragana: "り", english: "ri" },
  { hiragana: "る", english: "ru" },
  { hiragana: "れ", english: "re" },
  { hiragana: "ろ", english: "ro" },
];

export const hiraganaWRow: HiraganaCharacter[] = [
  { hiragana: "わ", english: "wa" },
  { hiragana: "を", english: "wo" },
  { hiragana: "ん", english: "n" },
];

export const hiraganaAll: HiraganaCharacter[] = [
  ...hiraganaVowels,
  ...hiraganaKRow,
  ...hiraganaSRow,
  ...hiraganaTRow,
  ...hiraganaNRow,
  ...hiraganaHRow,
  ...hiraganaMRow,
  ...hiraganaYRow,
  ...hiraganaRRow,
];
