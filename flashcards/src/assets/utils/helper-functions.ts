import {
  hiraganaVowels,
  hiraganaKRow,
  hiraganaSRow,
  hiraganaTRow,
  hiraganaNRow,
  hiraganaHRow,
  hiraganaMRow,
  hiraganaYRow,
  hiraganaRRow,
  hiraganaWRow,
  hiraganaAll,
} from "../../hiragana-data/hiragana";
import { HiraganaCharacter } from "../../types/HiraganaCharacterTypes";

export const getTheSelectedHiraganaRow = (id: number): HiraganaCharacter[] => {
  switch (id) {
    case 0:
      return hiraganaVowels;
    case 1:
      return hiraganaKRow;
    case 2:
      return hiraganaSRow;
    case 3:
      return hiraganaTRow;
    case 4:
      return hiraganaNRow;
    case 5:
      return hiraganaHRow;
    case 6:
      return hiraganaMRow;
    case 7:
      return hiraganaYRow;
    case 8:
      return hiraganaRRow;
    case 9:
      return hiraganaWRow;
    case 10:
      return hiraganaAll;
    default:
      return hiraganaVowels;
  }
};
