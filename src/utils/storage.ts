import { StudentProgress } from '../types/course';

const STORAGE_KEY = 'renda_rotina_student_progress_v1';

export const DEFAULT_STUDENT_PROGRESS: StudentProgress = {
  studentName: 'Carla Mendes',
  studentBio: 'Mãe, dona de casa e futura criadora de conteúdo de rotina.',
  avatarSeed: 'carla',
  completedLessonIds: ['m1-a1'], // First lesson started/completed for welcoming feedback
  savedNotes: {
    'm1-a1': 'Minhas tarefas magnéticas: 1) Passar o café matinal na janela; 2) Limpar a bancada da pia com esponja espumosa; 3) Dobrar as mantas do sofá da sala; 4) Borrifar álcool perfumado no espelho do banheiro; 5) Organizar a fruteira com maçãs e laranjas.'
  },
  checklistStates: {
    'm1-a1': [true, true, true]
  },
  challengeDaysCompleted: [1, 2],
  favoriteLessonIds: ['m1-a2', 'm2-a4'],
  studyStreakDays: 3,
  lastStudiedLessonId: 'm1-a2',
  joinedDate: 'Novembro 2026'
};

export function loadStudentProgress(): StudentProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      saveStudentProgress(DEFAULT_STUDENT_PROGRESS);
      return DEFAULT_STUDENT_PROGRESS;
    }
    const parsed = JSON.parse(raw);
    return {
      ...DEFAULT_STUDENT_PROGRESS,
      ...parsed
    };
  } catch {
    return DEFAULT_STUDENT_PROGRESS;
  }
}

export function saveStudentProgress(progress: StudentProgress): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.error('Failed to save student progress to localStorage', e);
  }
}
