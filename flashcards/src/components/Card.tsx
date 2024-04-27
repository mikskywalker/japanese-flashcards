import { HiraganaCharacter } from "../types/HiraganaCharacterTypes";

export default function Card(props: HiraganaCharacter) {
  return (
    <>
      <div className="grid grid-cols-1 grid-rows-2 items-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h1 className="h-[120px] text-[120px] font-bold tracking-tight text-gray-900 dark:text-white">
          {props.hiragana !== undefined ? props.hiragana : '🍡'}
        </h1>
        <p className="w-64 font-normal text-gray-700 dark:text-gray-400">
          {props.english !== undefined
            ? `In english, it sounds similar to '${props.english}'`
            : "Click the button to generate a character"}
        </p>
      </div>
    </>
  );
}
