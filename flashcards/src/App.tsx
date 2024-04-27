import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import { HiraganaCharacter } from './types/HiraganaCharacterTypes';

function App() {
  const [char, setChar] = useState<HiraganaCharacter>();

  const hiraganaVowels = [
    { hiragana: "あ", english: "a" },
    { hiragana: "い", english: "i" },
    { hiragana: "う", english: "u" },
    { hiragana: "え", english: "e" },
    { hiragana: "お", english: "o" },
  ];

  const hiraganaKRow = [
    { hiragana: "か", english: "ka" },
    { hiragana: "き", english: "ki" },
    { hiragana: "く", english: "ku" },
    { hiragana: "け", english: "ke" },
    { hiragana: "こ", english: "ko" },
  ];

  const hiraganaSRow = [
    { hiragana: "さ", english: "sa" },
    { hiragana: "し", english: "shi" },
    { hiragana: "す", english: "su" },
    { hiragana: "せ", english: "se" },
    { hiragana: "そ", english: "so" },
  ];

  const hiraganaTRow = [
    { hiragana: "た", english: "ta" },
    { hiragana: "ち", english: "chi" },
    { hiragana: "つ", english: "tsu" },
    { hiragana: "て", english: "te" },
    { hiragana: "と", english: "to" },
  ];

  const hiraganaNRow = [
    { hiragana: "な", english: "na" },
    { hiragana: "に", english: "ni" },
    { hiragana: "ぬ", english: "nu" },
    { hiragana: "ね", english: "ne" },
    { hiragana: "の", english: "no" },
  ];

  const hiraganaHRow = [
    { hiragana: "は", english: "ha" },
    { hiragana: "ひ", english: "hi" },
    { hiragana: "ふ", english: "fu" },
    { hiragana: "へ", english: "he" },
    { hiragana: "ほ", english: "ho" },
  ];

  const hiraganaMRow = [
    { hiragana: "ま", english: "ma" },
    { hiragana: "み", english: "mi" },
    { hiragana: "む", english: "mu" },
    { hiragana: "め", english: "me" },
    { hiragana: "も", english: "mo" },
  ];

  const hiraganaYRow = [
    { hiragana: "や", english: "ya" },
    { hiragana: "ゆ", english: "yu" },
    { hiragana: "よ", english: "yo" },
  ];

  const hiraganaRRow = [
    { hiragana: "ら", english: "ra" },
    { hiragana: "り", english: "ri" },
    { hiragana: "る", english: "ru" },
    { hiragana: "れ", english: "re" },
    { hiragana: "ろ", english: "ro" },
  ];

  const hiraganaWRow: HiraganaCharacter[] = [
    { hiragana: "わ", english: "wa" },
    { hiragana: "を", english: "wo" },
    { hiragana: "ん", english: "n" },
  ];

  
  const generateHiraganaChar = () => {
    setChar(randomChar(hiraganaVowels));
  };
  
  const randomChar = (char: HiraganaCharacter[]) => {
    // Generate a random index within the range of the row length
    const randomIndex = Math.floor(Math.random() * char.length);
    // Return the hiragana character at the random index
    return char[randomIndex];
  };
 
  return (
    <>
    <h1>Hiragana</h1>
    <Card hiragana={char?.hiragana} english={char?.english}  />
    <button onClick={generateHiraganaChar}>Generate</button>
    </>
  )
}

export default App
