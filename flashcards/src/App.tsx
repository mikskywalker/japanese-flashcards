import Hiragana from "./components/Hiragana";
import Footer from "./components/Footer";
import { useState } from "react";
import Katakana from "./components/Katakana";
import { StudyChoiceType } from "./types/HiraganaCharacterTypes";
import Kanji from "./components/Kanji";

function App() {
  const [studyChoice, setStudyChoice] = useState<StudyChoiceType>({
    id: 2,
    title: "hiragana",
  });

  const mainOptions: StudyChoiceType[] = [
    {
      id: 1,
      title: "katakana",
    },
    {
      id: 2,
      title: "hiragana",
    },
    {
      id: 3,
      title: "kanji",
    },
  ];

  function getChosenStudy(option: number) {
    switch (option) {
      case 1:
        return <Katakana />;
      case 2:
        return <Hiragana />;
      case 3:
        return <Kanji />;
      default:
        <Hiragana />;
    }
  }

  return (
    <div className="bg-red-200 min-h-[50rem]">
      <div className="bg-white rounded md:border md:rounded-md md:shadow dark:bg-neutral-800 dark:text-white">
        {getChosenStudy(studyChoice.id)}
      </div>

      <Footer />

      <div
        // todo: add footer option choices
        className="fixed bottom-0 left-0"
      >
        {mainOptions.map((o) => {
          return (
            <button className="" key={o.id} onClick={() => setStudyChoice(o)}>
              {o.title}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
