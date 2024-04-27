import { HiraganaCharacter } from "../types/HiraganaCharacterTypes";

export default function Card(props: HiraganaCharacter) {
  return (
    <>
      <a
        href="#"
        className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h1 className="mb-2 text-9xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props?.hiragana}
        </h1>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          In english, it sounds similar to {`'${props?.english}'`}
        </p>
      </a>
    </>
  );
}
