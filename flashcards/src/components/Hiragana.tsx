import React, { useState } from "react";
import { HiraganaCharacter } from "../types/HiraganaCharacterTypes";
import Card from "./Card";
import { hiraganaButtonRows } from "../assets/utils/hiragana-button-rows";
import { getTheSelectedHiraganaRow } from "../assets/utils/helper-functions";

export default function Hiragana() {
  const [chosenOptionTitle, setChosenOptionTitle] = useState<string>();
  const [char, setChar] = useState<HiraganaCharacter>();
  const [chosenOption, setChosenOption] = useState<number>(0);
  const [prevIndex, setPrevIndex] = useState<number>();

  const generateHiraganaCharacter = () => {
    setChar(getARandomChar(getTheSelectedHiraganaRow(chosenOption)));
  };

  const getARandomChar = (char: HiraganaCharacter[]) => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * char.length);
    } while (randomIndex === prevIndex);
    setPrevIndex(randomIndex);
    return char[randomIndex];
  };

  return (
    <div className="max-w-md text-center">
      <div className="grid grid-cols-1 gap-4 pb-10 justify-items-center">
        {/* Row Options */}
        <div className="my-5">
          {hiraganaButtonRows.map((option) => (
            <button
              className="inline-flex gap-1 m-1 border-gray-200 hover:bg-yellow-100 hover:border-yellow-400 active:bg-yellow-100 focus:outline-none focus:ring focus:ring-yellow-300 dark:hover:bg-yellow-500 dark:hover:text-neutral-800"
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
                  className="w-6 h-6 text-yellow-500 dark:text-inherit"
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
        <div>
          <h1 className="font-bold text-neutral-800 dark:text-white">
            Hiragana
          </h1>
        </div>
        <div>
          <h2 className="h-3 italic font-bold text-neutral-800">
            {chosenOptionTitle && `"${chosenOptionTitle}"`}
          </h2>
        </div>
        <div>
          <Card hiragana={char?.hiragana} english={char?.english} />
        </div>
        <div>
          <button
            className="inline-flex gap-1 mt-5 text-xl bg-yellow-200 border-2 border-orange-100 shadow hover:border-yellow-400 active:bg-yellow-100 focus:outline-none focus:ring focus:ring-yellow-300 dark:text-neutral-800 dark:bg-yellow-500 dark:border-yellow-400 dark:active:bg-yellow-600 dark:focus:ring-yellow-300 dark:hover:bg-yellow-600 dark:hover:text-white"
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
      </div>
    </div>
  );
}
