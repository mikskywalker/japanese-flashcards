import React, { useState } from "react";
import {
  HiraganaButton,
  HiraganaCharacter,
} from "../types/HiraganaCharacterTypes";
import Card from "./Card";
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
} from "../hiragana-data/hiragana";

export default function Hiragana() {
  const [chosenOptionTitle, setChosenOptionTitle] = useState<string>();
  const [char, setChar] = useState<HiraganaCharacter>();
  const [chosenOption, setChosenOption] = useState<number>(0);
  const hiraganaButtonRows: HiraganaButton[] = [
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
        return hiraganaVowels;
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
      <div>
        <h1 className="text-3xl font-bold pb-1">Hiragana</h1>
      </div>
      <div>
        <h2 className="h-5 mb-2">
          {chosenOptionTitle && `"${chosenOptionTitle}"`}
        </h2>
      </div>
      <div className="pb-7 flex justify-center">
        <Card hiragana={char?.hiragana} english={char?.english} />
      </div>

      <div className="h-10">
        <button
          className="bg-yellow-200 border-orange-100 border-2 hover:border-yellow-400 active:bg-yellow-100 focus:outline-none focus:ring focus:ring-yellow-300 inline-flex gap-1 "
          onClick={generateHiraganaCharacter}
        >
          Generate
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
            />
          </svg>
        </button>
      </div>

      <div className="pt-10">
        {hiraganaButtonRows.map((option) => (
          <button
            className="border-gray-200 inline-flex gap-1 m-1 hover:bg-yellow-100 hover:border-yellow-400 active:bg-yellow-100 focus:outline-none focus:ring focus:ring-yellow-300"
            key={option.id}
            onClick={() => {
              setChosenOptionTitle(option.title);
              setChosenOption(option.id);
            }}
          >
            {option.title}
            {option.id === 10 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-yellow-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
            )}
          </button>
        ))}
      </div>
    </>
  );
}
