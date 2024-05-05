export type HiraganaCharacter = {
  hiragana?: string;
  english?: string;
};

export type StudyChoiceType = {
  id: number;
  title: string;
};

export type HiraganaButton = Pick<StudyChoiceType, "id" | "title">;
