import { create } from 'zustand';

type Question = {
  id: number;
  question: string;
  type: string;
  options?: string[];
  answare: string;
  required: boolean;
  ignoreCase?: boolean;
};

type Questionary = {
  id: number;
  tittle: string;
  description: string;
  image: string;
  author: string;
  created: Date;
  startDate: Date | null;
  limitDate: Date | null;
  public: boolean;
  questions: Question[];
  endMessage: string;
};

type QuestionaryStore = {
  questionary: Questionary;
  handleQuestionary: (key: string, value: any) => void;
  updateQuestion: (questionId: number, newAnswer: string) => void;
};

const useQuestionaryStore = create<QuestionaryStore>((set) => ({
  questionary: {
    id: 1,
    tittle: '',
    description: '',
    image: '',
    author: '',
    created: new Date(),
    startDate: null,
    limitDate: null,
    public: true,
    questions: [],
    endMessage: ''
  },

  handleQuestionary: (key, value) =>
    set((state) => ({
      questionary: {
        ...state.questionary, // Mantener el resto del cuestionario
        [key]: value // Solo actualizar la clave específica
      }
    })),

  updateQuestion: (questionId, newAnswer) =>
    set((state) => ({
      questionary: {
        ...state.questionary,
        questions: state.questionary.questions.map((q) =>
          q.id === questionId ? { ...q, answare: newAnswer } : q
        )
      }
    }))
}));

export default useQuestionaryStore;
