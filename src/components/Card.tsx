import { HiraganaCharacter } from "../types/HiraganaCharacterTypes";

export default function Card(props: HiraganaCharacter) {
  return (
    <>
      <div className="w-80 h-full p-5 grid grid-cols-1 shadow grid-rows-2 items-center hover:shadow bg-white border border-4 border-gray-300 rounded-lg dark:bg-neutral-900 dark:border-neutral-600 dark:hover:border-neutral-500">
        <h1 className="text-9xl py-5 font-bold border border-4 rounded-md border-gray-300 text-neutral-800 dark:text-white dark:border-neutral-600 ">
          {props.hiragana !== undefined ? props.hiragana : "🍙"}
        </h1>
        <p className="font-normal text-lg text-neutral-700 dark:text-white">
          {props.english !== undefined
            ? `In english, it sounds similar to '${props.english}'`
            : "Click the button to generate a character"}
        </p>
      </div>
    </>
  );
}
