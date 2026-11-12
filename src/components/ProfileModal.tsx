import React, { useState } from 'react';
import { StudentProgress } from '../types/course';
import {
  X,
  User,
  CheckCircle2,
  Bookmark,
  FileText,
  RotateCcw,
  Sparkles,
  Save,
  Check
} from 'lucide-react';
import { audioSynth } from '../utils/audioSynth';
import { fireGoldenConfetti } from '../utils/confetti';

interface ProfileModalProps {
  progress: StudentProgress;
  totalLessonsCount: number;
  onSaveProfile: (name: string, bio: string) => void;
  onResetProgress: () => void;
  onMarkAllComplete: () => void;
  onClose: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  progress,
  totalLessonsCount,
  onSaveProfile,
  onResetProgress,
  onMarkAllComplete,
  onClose
}) => {
  const [name, setName] = useState(progress.studentName);
  const [bio, setBio] = useState(progress.studentBio);
  const [savedFeedback, setSavedFeedback] = useState(false);

  const handleSave = () => {
    onSaveProfile(name, bio);
    setSavedFeedback(true);
    audioSynth.playClickTick();
    setTimeout(() => {
      setSavedFeedback(false);
      onClose();
    }, 900);
  };

  const handleCompleteAll = () => {
    onMarkAllComplete();
    audioSynth.playSuccessChime();
    fireGoldenConfetti();
  };

  const completedCount = progress.completedLessonIds.length;
  const notesCount = Object.keys(progress.savedNotes || {}).length;
  const favoritesCount = progress.favoriteLessonIds.length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
      <div className="relative w-full max-w-lg rounded-2xl border border-purple-800/60 bg-[#1A0E38] p-6 shadow-2xl space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-purple-900/40 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-[#6D28D9] to-[#D4AF37] text-white">
              <User className="h-4 w-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white">Perfil da Aluna</h2>
              <p className="text-[11px] text-zinc-400">Personalize seus dados de estudo</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-950/60 text-zinc-400 hover:text-white border border-purple-800/30"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="rounded-xl bg-[#14082B] p-3 border border-purple-900/40">
            <span className="text-[10px] text-zinc-400 block mb-0.5">Aulas</span>
            <span className="text-sm font-bold text-[#F5D77A] tabular-nums">
              {completedCount}/{totalLessonsCount}
            </span>
          </div>
          <div className="rounded-xl bg-[#14082B] p-3 border border-purple-900/40">
            <span className="text-[10px] text-zinc-400 block mb-0.5">Anotações</span>
            <span className="text-sm font-bold text-white tabular-nums">{notesCount}</span>
          </div>
          <div className="rounded-xl bg-[#14082B] p-3 border border-purple-900/40">
            <span className="text-[10px] text-zinc-400 block mb-0.5">Favoritas</span>
            <span className="text-sm font-bold text-white tabular-nums">{favoritesCount}</span>
          </div>
        </div>

        {/* Edit Fields */}
        <div className="space-y-4 text-xs">
          <div className="space-y-1.5">
            <label className="font-semibold text-zinc-300">Seu Nome Completo:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg bg-[#14082B] px-3.5 py-2 text-xs text-white placeholder-zinc-500 border border-purple-800/50 focus:border-[#D4AF37] focus:outline-none"
            />
          </div>

          <div className="space-y-1.5">
            <label className="font-semibold text-zinc-300">Bio / Objetivo com o Curso:</label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              rows={2}
              className="w-full rounded-lg bg-[#14082B] px-3.5 py-2 text-xs text-white placeholder-zinc-500 border border-purple-800/50 focus:border-[#D4AF37] focus:outline-none"
            />
          </div>
        </div>

        {/* Quick developer / testing tools for member convenience */}
        <div className="rounded-xl bg-purple-950/40 p-3.5 border border-purple-800/40 space-y-2 text-xs">
          <span className="font-bold text-[#F5D77A] block">Ações Rápidas de Membro:</span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={handleCompleteAll}
              className="flex items-center gap-1.5 rounded-lg bg-emerald-950/70 border border-emerald-600/40 px-3 py-1.5 text-[11px] font-semibold text-emerald-300 hover:bg-emerald-900/40 transition-colors"
            >
              <CheckCircle2 className="h-3 w-3" />
              Marcar Todas como Concluídas (Desbloquear Certificado)
            </button>
            <button
              onClick={onResetProgress}
              className="flex items-center gap-1.5 rounded-lg bg-purple-950 border border-purple-800 px-3 py-1.5 text-[11px] font-medium text-zinc-400 hover:text-white transition-colors"
            >
              <RotateCcw className="h-3 w-3" />
              Reiniciar Progresso
            </button>
          </div>
        </div>

        {/* Save button */}
        <div className="flex justify-end gap-2 border-t border-purple-900/40 pt-4">
          <button
            onClick={onClose}
            className="rounded-lg px-4 py-2 text-xs font-semibold text-zinc-400 hover:text-white"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#F5D77A] px-5 py-2 text-xs font-bold text-[#160B2E] shadow hover:brightness-105 transition-all"
          >
            {savedFeedback ? (
              <>
                <Check className="h-3.5 w-3.5" />
                <span>Salvo!</span>
              </>
            ) : (
              <>
                <Save className="h-3.5 w-3.5" />
                <span>Salvar Alterações</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
