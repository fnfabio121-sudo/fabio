import React, { useState } from 'react';
import { Module } from '../types/course';
import {
  ChevronDown,
  ChevronRight,
  CheckCircle,
  Circle,
  Search,
  BookOpen,
  Award,
  Sparkles
} from 'lucide-react';

interface SidebarProps {
  modules: Module[];
  currentLessonId: string;
  completedLessonIds: string[];
  onSelectLesson: (lessonId: string) => void;
  isOpenOnMobile: boolean;
  onCloseMobile: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  modules,
  currentLessonId,
  completedLessonIds,
  onSelectLesson,
  isOpenOnMobile,
  onCloseMobile
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedModuleIds, setExpandedModuleIds] = useState<number[]>([1, 2, 3]);

  const toggleModule = (moduleId: number) => {
    setExpandedModuleIds((prev) =>
      prev.includes(moduleId) ? prev.filter((id) => id !== moduleId) : [...prev, moduleId]
    );
  };

  const filteredModules = modules.map((mod) => {
    if (!searchQuery.trim()) return mod;
    const query = searchQuery.toLowerCase();
    const matchingLessons = mod.lessons.filter(
      (l) =>
        l.title.toLowerCase().includes(query) ||
        l.objective.toLowerCase().includes(query) ||
        l.tag.toLowerCase().includes(query)
    );
    return {
      ...mod,
      lessons: matchingLessons
    };
  }).filter((mod) => !searchQuery.trim() || mod.lessons.length > 0);

  const totalLessons = modules.reduce((acc, m) => acc + m.lessons.length, 0);
  const completedCount = completedLessonIds.length;
  const progressPercent = Math.round((completedCount / totalLessons) * 100);

  const sidebarContent = (
    <div className="flex h-full flex-col bg-[#160B2E] border-r border-purple-900/40 w-full sm:w-80">
      {/* Header & Search */}
      <div className="p-4 border-b border-purple-900/40">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-[#D4AF37]" />
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-300">
              Grade Curricular
            </h2>
          </div>
          <span className="text-[11px] font-semibold text-[#F5D77A] tabular-nums">
            {completedCount}/{totalLessons} ({progressPercent}%)
          </span>
        </div>

        {/* Progress Mini Bar */}
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-purple-950/80 mb-3 border border-purple-900/30">
          <div
            className="h-full bg-gradient-to-r from-[#6D28D9] via-[#8B5CF6] to-[#D4AF37] transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-zinc-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar entre as 48 aulas..."
            className="w-full rounded-lg bg-[#201142] py-1.5 pl-8 pr-3 text-xs text-white placeholder-zinc-500 border border-purple-800/40 focus:border-[#D4AF37] focus:outline-none"
          />
        </div>
      </div>

      {/* Module & Lessons List */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {filteredModules.map((mod) => {
          const isExpanded = expandedModuleIds.includes(mod.id) || searchQuery.trim().length > 0;
          const moduleCompletedCount = mod.lessons.filter((l) =>
            completedLessonIds.includes(l.id)
          ).length;
          const isModuleFullyComplete =
            moduleCompletedCount === mod.lessons.length && mod.lessons.length > 0;

          return (
            <div
              key={mod.id}
              className="rounded-xl border border-purple-900/30 bg-[#1D0F3B]/50 overflow-hidden"
            >
              {/* Module Header Button */}
              <button
                onClick={() => toggleModule(mod.id)}
                className="flex w-full items-center justify-between p-3 text-left transition-colors hover:bg-purple-900/20"
              >
                <div className="flex items-center gap-2.5 min-w-0 pr-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-purple-900/60 text-[10px] font-bold text-[#F5D77A] border border-purple-700/40">
                    {mod.id}
                  </span>
                  <div className="truncate">
                    <p className="text-xs font-semibold text-zinc-200 truncate">
                      {mod.shortTitle}
                    </p>
                    <p className="text-[10px] text-zinc-400">
                      {moduleCompletedCount}/{mod.lessons.length} concluídas
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  {isModuleFullyComplete ? (
                    <Award className="h-3.5 w-3.5 text-[#D4AF37]" />
                  ) : null}
                  {isExpanded ? (
                    <ChevronDown className="h-4 w-4 text-zinc-400" />
                  ) : (
                    <ChevronRight className="h-4 w-4 text-zinc-400" />
                  )}
                </div>
              </button>

              {/* Lessons Sublist */}
              {isExpanded && (
                <div className="border-t border-purple-900/20 bg-[#14092A]/70 px-2 py-1.5 space-y-1">
                  {mod.lessons.map((lesson) => {
                    const isSelected = currentLessonId === lesson.id;
                    const isCompleted = completedLessonIds.includes(lesson.id);

                    return (
                      <button
                        key={lesson.id}
                        onClick={() => {
                          onSelectLesson(lesson.id);
                          onCloseMobile();
                        }}
                        className={`flex w-full items-start gap-2 rounded-lg p-2 text-left text-xs transition-all ${
                          isSelected
                            ? 'bg-gradient-to-r from-[#6D28D9]/40 to-[#8B5CF6]/20 border border-[#D4AF37]/50 text-white font-medium shadow-sm'
                            : 'text-zinc-300 hover:bg-purple-950/60 hover:text-white'
                        }`}
                      >
                        <span className="mt-0.5 shrink-0">
                          {isCompleted ? (
                            <CheckCircle className="h-3.5 w-3.5 text-[#D4AF37]" />
                          ) : (
                            <Circle className="h-3.5 w-3.5 text-purple-600/70" />
                          )}
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className={`line-clamp-1 leading-snug ${isSelected ? 'text-[#F5D77A]' : ''}`}>
                            {lesson.lessonNumber}. {lesson.title}
                          </p>
                          <span className="text-[10px] text-zinc-400 block mt-0.5">
                            {lesson.readTime}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer Info */}
      <div className="p-3 border-t border-purple-900/40 bg-[#120726] flex items-center justify-between text-[11px] text-zinc-400">
        <span className="flex items-center gap-1.5 text-zinc-400">
          <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
          Área de Membros VIP
        </span>
        <span className="text-zinc-400">Lowify Aprovado</span>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar (persistent) */}
      <aside className="hidden lg:block h-[calc(100vh-4rem)] sticky top-16 shrink-0">
        {sidebarContent}
      </aside>

      {/* Mobile Drawer (overlay) */}
      {isOpenOnMobile && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            onClick={onCloseMobile}
          />
          <div className="relative flex w-full max-w-xs flex-1 flex-col">
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
};
