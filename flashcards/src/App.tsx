import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import { HiraganaButton, HiraganaCharacter } from "./types/HiraganaCharacterTypes";
import { hiraganaVowels, hiraganaKRow, hiraganaSRow, hiraganaTRow, hiraganaNRow, hiraganaHRow, hiraganaMRow, hiraganaYRow, hiraganaRRow, hiraganaWRow, hiraganaAll } from "./hiragana-data/hiragana";



function App() {
  const [chosenOptionTitle, setChosenOptionTitle] = useState<string>();
  const [char, setChar] = useState<HiraganaCharacter>();
  const [chosenOption, setChosenOption] = useState<number>(0);
  const hiraganaButtonRows : HiraganaButton[] = [
    {
      id: 0,
      title: "Vowels",
    },
    {
      id: 1,
      title: "K-row",
    },
    {
      id: 2,
      title: "S-row",
    },
    {
      id: 3,
      title: "T-row",
    },
    {
      id: 4,
      title: "N-row",
    },
    {
      id: 5,
      title: "H-row",
    },
    {
      id: 6,
      title: "M-row",
    },
    {
      id: 7,
      title: "Y-row",
    },
    {
      id: 8,
      title: "R-row",
    },
    {
      id: 9,
      title: "W-row",
    },
    {
      id: 10,
      title: "All",
    },
  ];

  const getTheSelectedHiraganaRow = (id: number) => {
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
        return hiraganaVowels
    }
  };

  const generateHiraganaCharacter = () => {
    setChar(getARandomChar(getTheSelectedHiraganaRow(chosenOption)));
  };

  const getARandomChar = (char: HiraganaCharacter[]) => {
    // Generate a random index within the range of the row length
    const randomIndex = Math.floor(Math.random() * char.length);
    // Return the hiragana character at the random index
    return char[randomIndex];
  };

  return (
    <>
      <h1 className="text-3xl pb-5">Hiragana {chosenOptionTitle && `"${chosenOptionTitle}"`}</h1>

      <div className="pb-5 flex justify-center">
        <Card hiragana={char?.hiragana} english={char?.english} />
      </div>
      
      <div>
        <button className="bg-amber-200 border-yellow-400" onClick={generateHiraganaCharacter}>Generate</button>
      </div>

      <div className="pt-5">
        {hiraganaButtonRows.map((option) => (
          <button key={option.id} 
          onClick={() => {
            setChosenOptionTitle(option.title)
            setChosenOption(option.id);
          }} className="m-1">
            {option.title}
          </button>
        ))}
      </div>
    </>
  );
}

export default App;
