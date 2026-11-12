import React, { useState } from 'react';
import { Module, Lesson } from '../types/course';
import { DAILY_TIPS } from '../data/courseData';
import heroWorkspaceImg from '../assets/images/hero_workspace_aesthetic_1794277383298.jpg';
import {
  Sparkles,
  Play,
  Calendar,
  Flame,
  Award,
  ArrowRight,
  Lightbulb,
  CheckCircle2,
  RefreshCw,
  BookOpen,
  ChevronRight
} from 'lucide-react';

interface DashboardViewProps {
  studentName: string;
  completionPercentage: number;
  completedLessonsCount: number;
  totalLessonsCount: number;
  nextRecommendedLesson: Lesson;
  nextRecommendedModule: Module;
  modules: Module[];
  studyStreakDays: number;
  onContinueStudying: (lessonId: string) => void;
  onGoToChallenge: () => void;
  onGoToCertificate: () => void;
  onSelectLesson: (lessonId: string) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  studentName,
  completionPercentage,
  completedLessonsCount,
  totalLessonsCount,
  nextRecommendedLesson,
  nextRecommendedModule,
  modules,
  studyStreakDays,
  onContinueStudying,
  onGoToChallenge,
  onGoToCertificate,
  onSelectLesson
}) => {
  const [currentTipIndex, setCurrentTipIndex] = useState(0);
  const currentTip = DAILY_TIPS[currentTipIndex % DAILY_TIPS.length];

  const handleNextTip = () => {
    setCurrentTipIndex((prev) => (prev + 1) % DAILY_TIPS.length);
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Hero Welcome Card with Aesthetic Studio Background */}
      <div className="relative overflow-hidden rounded-2xl border border-purple-800/40 bg-gradient-to-br from-[#200E44] via-[#180B35] to-[#110626] p-6 sm:p-8 shadow-xl">
        {/* Ambient background glow & image accent */}
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#6D28D9]/25 blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-[#D4AF37]/15 blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#F5D77A]">
              <Sparkles className="h-4 w-4" />
              <span>Área de Membros VIP</span>
              <span className="text-zinc-500">·</span>
              <span className="text-zinc-300">Acesso Vitalício</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Bem-vinda à sua nova jornada,{' '}
              <span className="gold-text-gradient">{studentName}</span>!
            </h1>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl">
              Aprenda a transformar tarefas domésticas em conteúdos para as redes sociais,
              mesmo começando do zero e sem mostrar o rosto.
            </p>

            {/* Quote of the Day Badge */}
            <div className="rounded-xl border border-[#D4AF37]/30 bg-[#25134F]/60 p-4">
              <p className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold mb-1">
                Lembrete de Hoje
              </p>
              <p className="text-sm sm:text-base font-medium text-white italic">
                “Grandes mudanças começam com pequenos passos.”
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onContinueStudying(nextRecommendedLesson.id)}
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F5D77A] to-[#D4AF37] px-6 py-3 text-sm font-bold text-[#160B2E] shadow-lg shadow-[#D4AF37]/20 hover:brightness-105 transition-all whitespace-nowrap"
              >
                <Play className="h-4 w-4 fill-[#160B2E]" />
                Continuar estudando
              </button>

              <button
                onClick={onGoToChallenge}
                className="flex items-center gap-2 rounded-xl border border-purple-700/60 bg-purple-950/50 px-5 py-3 text-sm font-semibold text-white hover:bg-purple-900/40 hover:border-[#D4AF37]/50 transition-all whitespace-nowrap"
              >
                <Calendar className="h-4 w-4 text-[#F5D77A]" />
                Desafio 30 Dias
              </button>
            </div>
          </div>

          {/* Aesthetic Workspace Visual Slot */}
          <div className="lg:col-span-5">
            <div className="relative group overflow-hidden rounded-xl border border-purple-700/40 shadow-2xl">
              <img
                src={heroWorkspaceImg}
                alt="Ambiente estético de gravação de rotina doméstica"
                referrerPolicy="no-referrer"
                className="w-full h-56 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#160B2E] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-[#160B2E]/80 backdrop-blur-sm border border-purple-900/40">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-300 font-medium">Método Faceless</span>
                  <span className="text-[#F5D77A] font-semibold">100% Caseiro</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress & Quick Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Stat 1: Course Completion */}
        <div className="rounded-xl border border-purple-900/40 bg-[#1A0D38]/70 p-5 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-zinc-400">Progresso Geral</span>
            <CheckCircle2 className="h-4 w-4 text-[#D4AF37]" />
          </div>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-2xl font-extrabold text-white tabular-nums">
              {completionPercentage}%
            </span>
            <span className="text-xs text-zinc-400">concluído</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-purple-950 border border-purple-900/50">
            <div
              className="h-full bg-gradient-to-r from-[#6D28D9] via-[#8B5CF6] to-[#D4AF37] transition-all duration-500"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
        </div>

        {/* Stat 2: Completed Lessons */}
        <div className="rounded-xl border border-purple-900/40 bg-[#1A0D38]/70 p-5 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-zinc-400">Aulas Finalizadas</span>
            <BookOpen className="h-4 w-4 text-[#8B5CF6]" />
          </div>
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-2xl font-extrabold text-white tabular-nums">
              {completedLessonsCount}
            </span>
            <span className="text-xs text-zinc-400">de {totalLessonsCount} aulas</span>
          </div>
          <p className="text-[11px] text-zinc-400">
            {totalLessonsCount - completedLessonsCount} aulas restantes para a formatura
          </p>
        </div>

        {/* Stat 3: Study Streak */}
        <div className="rounded-xl border border-purple-900/40 bg-[#1A0D38]/70 p-5 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-zinc-400">Sequência de Estudos</span>
            <Flame className="h-4 w-4 text-amber-400" />
          </div>
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-2xl font-extrabold text-white tabular-nums">
              {studyStreakDays} dias
            </span>
            <span className="text-xs text-amber-300 font-medium">seguidos</span>
          </div>
          <p className="text-[11px] text-zinc-400">
            Mantenha o foco diário para destravar sua renda
          </p>
        </div>

        {/* Stat 4: Certificate Status */}
        <div className="rounded-xl border border-purple-900/40 bg-[#1A0D38]/70 p-5 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-zinc-400">Certificado Oficial</span>
            <Award className="h-4 w-4 text-[#F5D77A]" />
          </div>
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-lg font-bold text-white">
              {completionPercentage >= 100 ? 'Disponível!' : 'Em andamento'}
            </span>
          </div>
          <button
            onClick={onGoToCertificate}
            className="text-[11px] font-semibold text-[#D4AF37] hover:underline flex items-center gap-1"
          >
            Visualizar certificado <ArrowRight className="h-3 w-3" />
          </button>
        </div>
      </div>

      {/* Recommended Lesson & Tip of the Day Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Next Recommended Lesson Card */}
        <div className="lg:col-span-7 rounded-2xl border border-purple-800/40 bg-[#1D0F3B]/80 p-6 shadow-md flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                Próxima Aula Recomendada
              </span>
              <span className="text-xs font-medium text-zinc-400">
                {nextRecommendedLesson.readTime}
              </span>
            </div>

            <p className="text-xs text-purple-300 font-medium mb-1">
              Módulo {nextRecommendedModule.id}: {nextRecommendedModule.shortTitle}
            </p>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
              Aula {nextRecommendedLesson.lessonNumber}: {nextRecommendedLesson.title}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 line-clamp-2 mb-4 leading-relaxed">
              {nextRecommendedLesson.objective}
            </p>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-purple-900/40">
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <span className="rounded bg-purple-950/80 px-2 py-0.5 text-purple-300 border border-purple-800/40">
                {nextRecommendedLesson.tag}
              </span>
            </div>
            <button
              onClick={() => onContinueStudying(nextRecommendedLesson.id)}
              className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] px-4 py-2 text-xs font-bold text-white hover:brightness-110 shadow-sm transition-all"
            >
              Assistir agora
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Tip of the Day Card */}
        <div className="lg:col-span-5 rounded-2xl border border-[#D4AF37]/30 bg-gradient-to-br from-[#241347] to-[#170B2F] p-6 shadow-md flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Lightbulb className="h-4 w-4 text-[#F5D77A]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#F5D77A]">
                  Dica Rápida do Dia
                </span>
              </div>
              <button
                onClick={handleNextTip}
                title="Ver outra dica"
                className="flex items-center gap-1 text-[11px] text-zinc-400 hover:text-[#F5D77A] transition-colors"
              >
                <RefreshCw className="h-3 w-3" />
                <span>Nova dica</span>
              </button>
            </div>

            <h4 className="text-sm sm:text-base font-bold text-white mb-2">
              {currentTip.title}
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {currentTip.tip}
            </p>
          </div>

          <div className="pt-4 border-t border-purple-900/40 text-[11px] text-[#D4AF37]">
            Categoria: {currentTip.category}
          </div>
        </div>
      </div>

      {/* Course Modules Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white">
              Estrutura dos 12 Módulos
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              Formação completa com 48 aulas passo a passo para o seu sucesso.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.map((mod) => {
            const completedInModule = mod.lessons.filter((l) =>
              l.id === nextRecommendedLesson.id ||
              // Check if in completed
              false
            ).length;

            return (
              <div
                key={mod.id}
                onClick={() => onSelectLesson(mod.lessons[0].id)}
                className="group cursor-pointer rounded-xl border border-purple-900/40 bg-[#1B0E38]/70 p-5 hover:border-[#D4AF37]/50 hover:bg-[#201142] transition-all shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-purple-900/60 text-xs font-bold text-[#F5D77A] border border-purple-700/40">
                      {mod.id}
                    </span>
                    <span className="text-[11px] text-zinc-400">
                      {mod.lessons.length} aulas
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-white group-hover:text-[#F5D77A] transition-colors mb-1.5">
                    {mod.shortTitle}
                  </h3>
                  <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                    {mod.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 mt-3 border-t border-purple-900/30 text-xs font-semibold text-[#D4AF37]">
                  <span>Acessar módulo</span>
                  <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
