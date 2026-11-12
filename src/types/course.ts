export interface LessonStep {
  step: number;
  title: string;
  instruction: string;
  tip?: string;
}

export interface RealWorldExample {
  title: string;
  scenario: string;
  keyTakeaway: string;
}

export interface CommonMistake {
  mistake: string;
  fix: string;
}

export interface PracticalExercise {
  title: string;
  description: string;
  templatePlaceholder: string;
}

export interface Lesson {
  id: string; // e.g. "m1-a1"
  moduleId: number;
  lessonNumber: number;
  title: string;
  objective: string;
  readTime: string;
  tag: string;
  explanation: string[];
  realWorldExamples: RealWorldExample[];
  stepByStep: LessonStep[];
  commonMistakes: CommonMistake[];
  practicalExercise: PracticalExercise;
  checklist: string[];
  readyCopy?: string[];
  keySummary: string;
}

export interface Module {
  id: number;
  title: string;
  shortTitle: string;
  description: string;
  iconName: string;
  lessons: Lesson[];
}

export interface StudentProgress {
  studentName: string;
  studentBio: string;
  avatarSeed: string;
  completedLessonIds: string[];
  savedNotes: Record<string, string>;
  checklistStates: Record<string, boolean[]>;
  challengeDaysCompleted: number[];
  favoriteLessonIds: string[];
  studyStreakDays: number;
  lastStudiedLessonId: string;
  joinedDate: string;
}

export interface ScriptGeneratorParams {
  room: 'cozinha' | 'quarto' | 'banheiro' | 'sala' | 'lavanderia';
  style: 'asmr' | 'speed_clean' | 'dica_express' | 'antes_depois' | 'reset_noturno';
  duration: '15s' | '30s' | '60s';
  audioChoice: 'som_ambiente' | 'musica_trend' | 'narracao_off';
}

export interface GeneratedScript {
  title: string;
  hook: string;
  visualScenes: Array<{ time: string; action: string; angle: string; tip: string }>;
  audioPrompt: string;
  captionCopy: string;
  hashtags: string[];
}
