/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { COURSE_MODULES } from './data/courseData';
import { StudentProgress, Lesson, Module } from './types/course';
import { loadStudentProgress, saveStudentProgress, DEFAULT_STUDENT_PROGRESS } from './utils/storage';
import { audioSynth } from './utils/audioSynth';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { DashboardView } from './components/DashboardView';
import { LessonView } from './components/LessonView';
import { ChallengeView } from './components/ChallengeView';
import { ScriptGeneratorView } from './components/ScriptGeneratorView';
import { AffiliateCalculatorView } from './components/AffiliateCalculatorView';
import { CertificateView } from './components/CertificateView';
import { ProfileModal } from './components/ProfileModal';
import { Sparkles, HelpCircle, ShieldCheck, Heart } from 'lucide-react';

export default function App() {
  const [progress, setProgress] = useState<StudentProgress>(loadStudentProgress);
  const [currentTab, setCurrentTab] = useState<string>('dashboard');
  const [currentLessonId, setCurrentLessonId] = useState<string>(
    progress.lastStudiedLessonId || 'm1-a1'
  );
  const [isAmbientPlaying, setIsAmbientPlaying] = useState<boolean>(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState<boolean>(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState<boolean>(false);

  // Sync progress state to localStorage
  useEffect(() => {
    saveStudentProgress(progress);
  }, [progress]);

  // Compute all lessons list
  const allLessons: Lesson[] = COURSE_MODULES.flatMap((m) => m.lessons);
  const totalLessonsCount = allLessons.length;
  const completedLessonsCount = progress.completedLessonIds.length;
  const completionPercentage = Math.round(
    (completedLessonsCount / totalLessonsCount) * 100
  );

  // Active lesson and active module
  const activeLesson: Lesson =
    allLessons.find((l) => l.id === currentLessonId) || allLessons[0];
  const activeModule: Module =
    COURSE_MODULES.find((m) => m.id === activeLesson.moduleId) ||
    COURSE_MODULES[0];

  // Active lesson index for previous / next navigation
  const activeLessonIndex = allLessons.findIndex((l) => l.id === activeLesson.id);
  const hasPrevLesson = activeLessonIndex > 0;
  const hasNextLesson = activeLessonIndex < allLessons.length - 1;

  // Next recommended lesson is the first uncompleted lesson, or the first lesson
  const nextRecommendedLesson: Lesson =
    allLessons.find((l) => !progress.completedLessonIds.includes(l.id)) ||
    allLessons[0];
  const nextRecommendedModule: Module =
    COURSE_MODULES.find((m) => m.id === nextRecommendedLesson.moduleId) ||
    COURSE_MODULES[0];

  // Handlers
  const handleSelectTab = (tab: string) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectLesson = (lessonId: string) => {
    setCurrentLessonId(lessonId);
    setCurrentTab('lessons');
    setProgress((prev) => ({
      ...prev,
      lastStudiedLessonId: lessonId
    }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrevLesson = () => {
    if (hasPrevLesson) {
      const prev = allLessons[activeLessonIndex - 1];
      handleSelectLesson(prev.id);
    }
  };

  const handleNextLesson = () => {
    if (hasNextLesson) {
      const next = allLessons[activeLessonIndex + 1];
      handleSelectLesson(next.id);
    }
  };

  const handleToggleComplete = (lessonId: string) => {
    setProgress((prev) => {
      const isAlready = prev.completedLessonIds.includes(lessonId);
      const updated = isAlready
        ? prev.completedLessonIds.filter((id) => id !== lessonId)
        : [...prev.completedLessonIds, lessonId];
      return {
        ...prev,
        completedLessonIds: updated
      };
    });
  };

  const handleToggleFavorite = (lessonId: string) => {
    setProgress((prev) => {
      const isFav = prev.favoriteLessonIds.includes(lessonId);
      return {
        ...prev,
        favoriteLessonIds: isFav
          ? prev.favoriteLessonIds.filter((id) => id !== lessonId)
          : [...prev.favoriteLessonIds, lessonId]
      };
    });
  };

  const handleSaveNote = (lessonId: string, noteText: string) => {
    setProgress((prev) => ({
      ...prev,
      savedNotes: {
        ...prev.savedNotes,
        [lessonId]: noteText
      }
    }));
  };

  const handleToggleChecklistItem = (lessonId: string, index: number) => {
    setProgress((prev) => {
      const currentList = prev.checklistStates[lessonId] || [];
      const updated = [...currentList];
      updated[index] = !updated[index];
      return {
        ...prev,
        checklistStates: {
          ...prev.checklistStates,
          [lessonId]: updated
        }
      };
    });
  };

  const handleToggleChallengeDay = (day: number) => {
    setProgress((prev) => {
      const isDone = prev.challengeDaysCompleted.includes(day);
      return {
        ...prev,
        challengeDaysCompleted: isDone
          ? prev.challengeDaysCompleted.filter((d) => d !== day)
          : [...prev.challengeDaysCompleted, day]
      };
    });
  };

  const handleToggleAmbient = () => {
    const isPlayingNow = audioSynth.toggleAmbient();
    setIsAmbientPlaying(isPlayingNow);
  };

  const handleSaveProfile = (name: string, bio: string) => {
    setProgress((prev) => ({
      ...prev,
      studentName: name,
      studentBio: bio
    }));
  };

  const handleResetProgress = () => {
    setProgress({
      ...DEFAULT_STUDENT_PROGRESS,
      studentName: progress.studentName,
      completedLessonIds: [],
      challengeDaysCompleted: [],
      checklistStates: {}
    });
    setIsProfileModalOpen(false);
  };

  const handleMarkAllComplete = () => {
    setProgress((prev) => ({
      ...prev,
      completedLessonIds: allLessons.map((l) => l.id),
      challengeDaysCompleted: Array.from({ length: 30 }, (_, i) => i + 1)
    }));
  };

  return (
    <div className="min-h-screen bg-[#120726] text-white flex flex-col font-sans selection:bg-[#6D28D9] selection:text-[#F5D77A]">
      {/* Top Navbar */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        completionPercentage={completionPercentage}
        completedLessonsCount={completedLessonsCount}
        totalLessonsCount={totalLessonsCount}
        studentName={progress.studentName}
        isAmbientPlaying={isAmbientPlaying}
        onToggleAmbient={handleToggleAmbient}
        onOpenProfile={() => setIsProfileModalOpen(true)}
        onToggleMobileMenu={() => setIsMobileSidebarOpen((prev) => !prev)}
        isMobileMenuOpen={isMobileSidebarOpen}
      />

      {/* Main Workspace Layout */}
      <div className="flex-1 flex w-full">
        {/* Persistent Curriculum Sidebar when in 'lessons' mode */}
        {currentTab === 'lessons' && (
          <Sidebar
            modules={COURSE_MODULES}
            currentLessonId={activeLesson.id}
            completedLessonIds={progress.completedLessonIds}
            onSelectLesson={handleSelectLesson}
            isOpenOnMobile={isMobileSidebarOpen}
            onCloseMobile={() => setIsMobileSidebarOpen(false)}
          />
        )}

        {/* Content Viewport */}
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8 overflow-y-auto">
          {currentTab === 'dashboard' && (
            <DashboardView
              studentName={progress.studentName}
              completionPercentage={completionPercentage}
              completedLessonsCount={completedLessonsCount}
              totalLessonsCount={totalLessonsCount}
              nextRecommendedLesson={nextRecommendedLesson}
              nextRecommendedModule={nextRecommendedModule}
              modules={COURSE_MODULES}
              studyStreakDays={progress.studyStreakDays}
              onContinueStudying={handleSelectLesson}
              onGoToChallenge={() => handleSelectTab('challenge')}
              onGoToCertificate={() => handleSelectTab('certificate')}
              onSelectLesson={handleSelectLesson}
            />
          )}

          {currentTab === 'lessons' && (
            <LessonView
              lesson={activeLesson}
              module={activeModule}
              isCompleted={progress.completedLessonIds.includes(activeLesson.id)}
              isFavorite={progress.favoriteLessonIds.includes(activeLesson.id)}
              savedNote={progress.savedNotes[activeLesson.id] || ''}
              checklistState={progress.checklistStates[activeLesson.id] || []}
              onToggleComplete={handleToggleComplete}
              onToggleFavorite={handleToggleFavorite}
              onSaveNote={handleSaveNote}
              onToggleChecklistItem={handleToggleChecklistItem}
              onPrevLesson={handlePrevLesson}
              onNextLesson={handleNextLesson}
              hasPrevLesson={hasPrevLesson}
              hasNextLesson={hasNextLesson}
            />
          )}

          {currentTab === 'challenge' && (
            <ChallengeView
              completedDays={progress.challengeDaysCompleted}
              onToggleDay={handleToggleChallengeDay}
            />
          )}

          {currentTab === 'scripts' && <ScriptGeneratorView />}

          {currentTab === 'calculator' && <AffiliateCalculatorView />}

          {currentTab === 'certificate' && (
            <CertificateView
              studentName={progress.studentName}
              completionPercentage={completionPercentage}
              completedLessonsCount={completedLessonsCount}
              totalLessonsCount={totalLessonsCount}
              onUpdateStudentName={(name) =>
                setProgress((prev) => ({ ...prev, studentName: name }))
              }
            />
          )}
        </main>
      </div>

      {/* Footer (Hidden during printing) */}
      <footer className="no-print border-t border-purple-900/40 bg-[#160B2E]/90 py-6 px-4 text-xs text-zinc-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-[#D4AF37]" />
            <span className="font-bold text-white">RENDA COM A ROTINA</span>
            <span className="text-zinc-600">|</span>
            <span>Academia Digital Premium</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-zinc-400">
            <span className="flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              Área de Membros Protegida
            </span>
            <span>·</span>
            <span>Comercializado via Lowify por R$ 19,90</span>
            <span>·</span>
            <span className="text-[#F5D77A] font-medium">Acesso Vitalício Garantido</span>
          </div>
        </div>
      </footer>

      {/* Student Profile & Settings Modal */}
      {isProfileModalOpen && (
        <ProfileModal
          progress={progress}
          totalLessonsCount={totalLessonsCount}
          onSaveProfile={handleSaveProfile}
          onResetProgress={handleResetProgress}
          onMarkAllComplete={handleMarkAllComplete}
          onClose={() => setIsProfileModalOpen(false)}
        />
      )}
    </div>
  );
}
