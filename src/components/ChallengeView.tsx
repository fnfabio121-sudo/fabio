import React, { useState } from 'react';
import { CHALLENGE_30_DAYS } from '../data/courseData';
import {
  Calendar,
  CheckCircle2,
  Circle,
  Flame,
  Sparkles,
  Trophy,
  Filter
} from 'lucide-react';
import { audioSynth } from '../utils/audioSynth';
import { fireGoldenConfetti } from '../utils/confetti';

interface ChallengeViewProps {
  completedDays: number[];
  onToggleDay: (dayNumber: number) => void;
}

export const ChallengeView: React.FC<ChallengeViewProps> = ({
  completedDays,
  onToggleDay
}) => {
  const [selectedPhase, setSelectedPhase] = useState<string>('todas');

  const phases = [
    { id: 'todas', label: 'Todas as Fases' },
    { id: 'Fase 1: Destrave Inicial', label: 'Fase 1: Destrave' },
    { id: 'Fase 2: Consistência', label: 'Fase 2: Consistência' },
    { id: 'Fase 3: Alavancagem & Vendas', label: 'Fase 3: Vendas' },
    { id: 'Fase 4: Domínio & Escala', label: 'Fase 4: Escala' }
  ];

  const filteredDays = CHALLENGE_30_DAYS.filter((item) => {
    if (selectedPhase === 'todas') return true;
    return item.phase === selectedPhase;
  });

  const totalCompleted = completedDays.length;
  const progressPercent = Math.round((totalCompleted / 30) * 100);

  const handleDayClick = (dayNumber: number) => {
    onToggleDay(dayNumber);
    if (!completedDays.includes(dayNumber)) {
      audioSynth.playSuccessChime();
      fireGoldenConfetti();
    } else {
      audioSynth.playClickTick();
    }
  };

  return (
    <div className="space-y-8 pb-16 max-w-5xl mx-auto">
      {/* Challenge Hero Header */}
      <div className="relative overflow-hidden rounded-2xl border border-purple-800/40 bg-gradient-to-r from-[#200F44] to-[#15092E] p-6 sm:p-8 shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7 space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#D4AF37]">
              <Flame className="h-4 w-4 text-amber-400" />
              <span>Desafio Prático 30 Dias</span>
              <span className="text-zinc-500">·</span>
              <span className="text-zinc-300">Da 1ª Gravação ao 1º Resultado</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              30 Dias para Destravar sua <span className="gold-text-gradient">Renda com a Rotina</span>
            </h1>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Um plano diário guiado de micro-ações para você executar sem sobrecarga,
              mesmo com filhos e tarefas de casa. Cada dia concluído te aproxima da sua liberdade.
            </p>

            {/* Progress summary bar */}
            <div className="space-y-1.5 pt-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-300 font-medium">Progresso do Desafio</span>
                <span className="font-bold text-[#F5D77A] tabular-nums">
                  {totalCompleted} de 30 dias ({progressPercent}%)
                </span>
              </div>
              <div className="h-2.5 w-full overflow-hidden rounded-full bg-purple-950 border border-purple-900/60">
                <div
                  className="h-full bg-gradient-to-r from-[#6D28D9] via-[#8B5CF6] to-[#D4AF37] transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="overflow-hidden rounded-xl border border-purple-700/40 shadow-lg">
              <img
                src="/src/assets/images/challenge_30_days_banner_1794277383477.jpg"
                alt="Banner do Desafio 30 Dias"
                referrerPolicy="no-referrer"
                className="w-full h-44 sm:h-52 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Phase Filters (Buttons/Segmented Controls) */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-purple-900/40 pb-4">
        <div className="flex items-center gap-1.5 p-1 bg-[#1A0E38] rounded-xl border border-purple-900/40 overflow-x-auto max-w-full">
          {phases.map((phase) => {
            const isActive = selectedPhase === phase.id;
            return (
              <button
                key={phase.id}
                onClick={() => setSelectedPhase(phase.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] text-white shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {phase.label}
              </button>
            );
          })}
        </div>

        <div className="text-xs text-zinc-400 flex items-center gap-1">
          <Trophy className="h-3.5 w-3.5 text-[#F5D77A]" />
          <span>Meta: 1 micro-tarefa por dia</span>
        </div>
      </div>

      {/* 30 Days Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredDays.map((item) => {
          const isDone = completedDays.includes(item.day);

          return (
            <div
              key={item.day}
              onClick={() => handleDayClick(item.day)}
              className={`cursor-pointer rounded-xl border p-4 transition-all shadow-sm flex flex-col justify-between ${
                isDone
                  ? 'border-emerald-500/40 bg-[#162A20]/40'
                  : 'border-purple-900/40 bg-[#1A0D38]/70 hover:border-[#D4AF37]/40 hover:bg-[#1F1042]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-md text-xs font-bold ${
                      isDone
                        ? 'bg-emerald-900/80 text-emerald-300 border border-emerald-600/50'
                        : 'bg-purple-900/60 text-[#F5D77A] border border-purple-700/40'
                    }`}
                  >
                    D{item.day}
                  </span>
                  <span className="text-[10px] text-zinc-400">
                    {item.phase.split(':')[0]}
                  </span>
                </div>

                <h3
                  className={`text-sm font-bold mb-1.5 ${
                    isDone ? 'text-emerald-200 line-through' : 'text-white'
                  }`}
                >
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-300 leading-relaxed mb-3">
                  {item.task}
                </p>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-purple-900/30 text-xs font-semibold">
                <span
                  className={isDone ? 'text-emerald-400' : 'text-[#D4AF37]'}
                >
                  {isDone ? 'Dia Concluído!' : 'Marcar como feito'}
                </span>
                {isDone ? (
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                ) : (
                  <Circle className="h-4 w-4 text-zinc-500" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
