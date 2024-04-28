import { HiraganaCharacter } from "../types/HiraganaCharacterTypes";

export default function Card(props: HiraganaCharacter) {
  return (
    <>
      <div className="w-80 h-full p-5 grid grid-cols-1 grid-rows-2 items-center hover:shadow bg-white border border-4 border-gray-200 hover:border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h1 className="text-9xl py-5 font-bold border border-4 rounded-md border-gray-200 text-gray-900 dark:text-white">
          {props.hiragana !== undefined ? props.hiragana : "🍡"}
        </h1>
        <p className="font-normal text-lg text-gray-500 dark:text-gray-4500">
          {props.english !== undefined
            ? `In english, it sounds similar to '${props.english}'`
            : "Click the button to generate a character"}
        </p>
      </div>
    </>
  );
}
