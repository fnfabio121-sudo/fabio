import React, { useState } from 'react';
import { Lesson, Module } from '../types/course';
import {
  CheckCircle2,
  Circle,
  Clock,
  Tag,
  Bookmark,
  BookmarkCheck,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  AlertTriangle,
  HelpCircle,
  Copy,
  Check,
  Save,
  CheckSquare,
  Square
} from 'lucide-react';
import { audioSynth } from '../utils/audioSynth';
import { fireGoldenConfetti } from '../utils/confetti';

interface LessonViewProps {
  lesson: Lesson;
  module: Module;
  isCompleted: boolean;
  isFavorite: boolean;
  savedNote: string;
  checklistState: boolean[];
  onToggleComplete: (lessonId: string) => void;
  onToggleFavorite: (lessonId: string) => void;
  onSaveNote: (lessonId: string, note: string) => void;
  onToggleChecklistItem: (lessonId: string, index: number) => void;
  onPrevLesson?: () => void;
  onNextLesson?: () => void;
  hasPrevLesson: boolean;
  hasNextLesson: boolean;
}

export const LessonView: React.FC<LessonViewProps> = ({
  lesson,
  module,
  isCompleted,
  isFavorite,
  savedNote,
  checklistState,
  onToggleComplete,
  onToggleFavorite,
  onSaveNote,
  onToggleChecklistItem,
  onPrevLesson,
  onNextLesson,
  hasPrevLesson,
  hasNextLesson
}) => {
  const [noteContent, setNoteContent] = useState(savedNote || '');
  const [hasSavedFeedback, setHasSavedFeedback] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleSaveNotes = () => {
    onSaveNote(lesson.id, noteContent);
    setHasSavedFeedback(true);
    audioSynth.playClickTick();
    setTimeout(() => setHasSavedFeedback(false), 2000);
  };

  const handleCompleteClick = () => {
    onToggleComplete(lesson.id);
    if (!isCompleted) {
      audioSynth.playSuccessChime();
      fireGoldenConfetti();
    }
  };

  const handleCopyText = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    audioSynth.playClickTick();
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  return (
    <div className="space-y-8 pb-20 max-w-4xl mx-auto">
      {/* Lesson Header Navigation & Title */}
      <div className="space-y-3 border-b border-purple-900/40 pb-6">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[#D4AF37]">
              Módulo {module.id}: {module.shortTitle}
            </span>
            <span>/</span>
            <span>Aula {lesson.lessonNumber} de {module.lessons.length}</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-zinc-400">
              <Clock className="h-3.5 w-3.5 text-[#F5D77A]" />
              {lesson.readTime}
            </span>
            <button
              onClick={() => onToggleFavorite(lesson.id)}
              className={`flex items-center gap-1 transition-colors ${
                isFavorite ? 'text-[#F5D77A]' : 'text-zinc-400 hover:text-white'
              }`}
              title={isFavorite ? 'Remover dos favoritos' : 'Favoritar aula'}
            >
              {isFavorite ? (
                <BookmarkCheck className="h-4 w-4" />
              ) : (
                <Bookmark className="h-4 w-4" />
              )}
              <span className="hidden sm:inline">
                {isFavorite ? 'Salva' : 'Salvar'}
              </span>
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
            {lesson.title}
          </h1>

          {/* Quick Complete Button in Header */}
          <button
            onClick={handleCompleteClick}
            className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all whitespace-nowrap shrink-0 shadow-md ${
              isCompleted
                ? 'bg-emerald-950/70 border border-emerald-500/50 text-emerald-300 hover:bg-emerald-900/50'
                : 'bg-gradient-to-r from-[#D4AF37] to-[#F5D77A] text-[#160B2E] hover:brightness-105'
            }`}
          >
            {isCompleted ? (
              <>
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Aula Concluída</span>
              </>
            ) : (
              <>
                <Circle className="h-4 w-4 text-[#160B2E]" />
                <span>Marcar como Concluída</span>
              </>
            )}
          </button>
        </div>

        <div className="flex items-center gap-2 pt-1">
          <span className="inline-flex items-center gap-1 rounded-md bg-[#25134F] px-2.5 py-1 text-xs font-medium text-purple-300 border border-purple-800/40">
            <Tag className="h-3 w-3" />
            {lesson.tag}
          </span>
        </div>
      </div>

      {/* Objective Card */}
      <div className="rounded-xl border border-[#D4AF37]/35 bg-gradient-to-r from-[#201042] to-[#170B30] p-5 shadow-sm">
        <div className="flex items-start gap-3">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#D4AF37]/20 text-[#F5D77A]">
            <Sparkles className="h-4 w-4" />
          </div>
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-1">
              Objetivo da Aula
            </h2>
            <p className="text-sm font-medium text-zinc-200 leading-relaxed">
              {lesson.objective}
            </p>
          </div>
        </div>
      </div>

      {/* In-Depth Explanation Section */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <span>Explicação Aprofundada & Fundamentos</span>
        </h2>
        <div className="space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
          {lesson.explanation.map((paragraph, idx) => (
            <p key={idx} className="rounded-xl bg-[#1A0D38]/50 p-4 border border-purple-900/30">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Real-World Practical Examples */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <span>Exemplos Reais e Práticos</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {lesson.realWorldExamples.map((example, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-purple-800/40 bg-[#1D0F3B]/80 p-5 shadow-sm space-y-3"
            >
              <h3 className="text-sm font-bold text-[#F5D77A]">
                {example.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {example.scenario}
              </p>
              <div className="rounded-lg bg-[#14092A] p-3 border border-purple-900/30 text-xs text-purple-200">
                <span className="font-semibold text-[#D4AF37]">Lição chave: </span>
                {example.keyTakeaway}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Step by Step Implementation */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <span>Passo a Passo de Aplicação Imediata</span>
        </h2>
        <div className="space-y-3">
          {lesson.stepByStep.map((step) => (
            <div
              key={step.step}
              className="flex items-start gap-3 rounded-xl border border-purple-900/40 bg-[#1A0D38]/70 p-4"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-tr from-[#6D28D9] to-[#8B5CF6] text-xs font-bold text-white shadow-sm">
                {step.step}
              </span>
              <div className="space-y-1.5 flex-1">
                <h3 className="text-sm font-bold text-white">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {step.instruction}
                </p>
                {step.tip && (
                  <p className="text-xs text-[#F5D77A] font-medium bg-[#241348]/60 p-2 rounded-lg border border-purple-800/30 inline-block">
                    💡 Dica de ouro: {step.tip}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Common Mistakes & Fixes */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <AlertTriangle className="h-4 w-4 text-amber-400" />
          <span>Erros Comuns que Você Deve Evitar</span>
        </h2>
        <div className="space-y-3">
          {lesson.commonMistakes.map((err, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-2 gap-3 rounded-xl border border-purple-900/40 bg-[#160B2E] p-4"
            >
              <div className="rounded-lg bg-red-950/30 border border-red-900/40 p-3">
                <span className="text-xs font-bold text-red-400 uppercase tracking-wider block mb-1">
                  ❌ Erro Comum:
                </span>
                <p className="text-xs sm:text-sm text-red-200">{err.mistake}</p>
              </div>
              <div className="rounded-lg bg-emerald-950/30 border border-emerald-900/40 p-3">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                  ✅ Solução Correta:
                </span>
                <p className="text-xs sm:text-sm text-emerald-200">{err.fix}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ready Copies / Prompts to Copy (If Available) */}
      {lesson.readyCopy && lesson.readyCopy.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Copy className="h-4 w-4 text-[#D4AF37]" />
            <span>Modelos Prontos para Copiar & Colar</span>
          </h2>
          <div className="space-y-3">
            {lesson.readyCopy.map((copyItem, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-purple-800/50 bg-[#1A0E38] p-4 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#F5D77A] uppercase tracking-wider">
                    Opção #{idx + 1}
                  </span>
                  <button
                    onClick={() => handleCopyText(copyItem, idx)}
                    className="flex items-center gap-1.5 rounded-lg bg-purple-900/50 px-2.5 py-1 text-xs font-medium text-white hover:bg-purple-800 transition-colors border border-purple-700/40"
                  >
                    {copiedIndex === idx ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copiar Modelo</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="font-sans whitespace-pre-wrap text-xs sm:text-sm text-zinc-200 bg-[#120726] p-3 rounded-lg border border-purple-950">
                  {copyItem}
                </pre>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Interactive Practical Exercise & Student Notes */}
      <section className="space-y-4 rounded-2xl border border-purple-800/40 bg-gradient-to-b from-[#201042] to-[#160B2E] p-6 shadow-md">
        <div className="flex items-center gap-2">
          <HelpCircle className="h-5 w-5 text-[#D4AF37]" />
          <h2 className="text-lg font-bold text-white">
            {lesson.practicalExercise.title}
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
          {lesson.practicalExercise.description}
        </p>

        {/* Interactive Textarea for student notes */}
        <div className="space-y-2 pt-2">
          <label className="text-xs font-semibold text-zinc-300 flex items-center justify-between">
            <span>Seu Caderno de Respostas & Anotações da Aula:</span>
            {hasSavedFeedback && (
              <span className="text-xs text-emerald-400 font-bold flex items-center gap-1">
                <Check className="h-3.5 w-3.5" /> Salvo com sucesso!
              </span>
            )}
          </label>
          <textarea
            value={noteContent}
            onChange={(e) => setNoteContent(e.target.value)}
            rows={4}
            placeholder={lesson.practicalExercise.templatePlaceholder}
            className="w-full rounded-xl bg-[#14092A] p-3.5 text-xs sm:text-sm text-white placeholder-zinc-500 border border-purple-800/50 focus:border-[#D4AF37] focus:outline-none transition-colors"
          />
          <div className="flex justify-end">
            <button
              onClick={handleSaveNotes}
              className="flex items-center gap-1.5 rounded-lg bg-[#6D28D9] hover:bg-[#7C3AED] px-3.5 py-1.5 text-xs font-semibold text-white shadow transition-all"
            >
              <Save className="h-3.5 w-3.5" />
              Salvar Anotação
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Checklist */}
      <section className="space-y-4 rounded-xl border border-purple-900/40 bg-[#1A0D38]/70 p-5">
        <h2 className="text-sm font-bold uppercase tracking-wider text-[#D4AF37] flex items-center gap-2">
          <CheckSquare className="h-4 w-4" />
          <span>Checklist de Aprendizado desta Aula</span>
        </h2>
        <div className="space-y-2.5">
          {lesson.checklist.map((item, idx) => {
            const isChecked = checklistState[idx] || false;
            return (
              <button
                key={idx}
                onClick={() => onToggleChecklistItem(lesson.id, idx)}
                className={`flex w-full items-start gap-3 rounded-lg p-2.5 text-left text-xs sm:text-sm transition-colors ${
                  isChecked
                    ? 'bg-purple-950/40 text-zinc-300 line-through opacity-80'
                    : 'bg-[#15092B] text-white hover:bg-purple-900/30'
                }`}
              >
                <span className="mt-0.5 shrink-0 text-[#F5D77A]">
                  {isChecked ? (
                    <CheckSquare className="h-4 w-4 text-[#D4AF37]" />
                  ) : (
                    <Square className="h-4 w-4 text-purple-600" />
                  )}
                </span>
                <span className="flex-1">{item}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Bottom Main Action & Navigation */}
      <div className="space-y-4 pt-6 border-t border-purple-900/40">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Big Golden Complete Button */}
          <button
            onClick={handleCompleteClick}
            className={`w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl px-8 py-3.5 text-sm font-extrabold transition-all shadow-lg ${
              isCompleted
                ? 'bg-emerald-950/80 border border-emerald-500/50 text-emerald-300'
                : 'bg-gradient-to-r from-[#D4AF37] via-[#F5D77A] to-[#D4AF37] text-[#160B2E] hover:brightness-105'
            }`}
          >
            {isCompleted ? (
              <>
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                <span>Aula Concluída com Sucesso! (Clique para desmarcar)</span>
              </>
            ) : (
              <>
                <CheckCircle2 className="h-5 w-5" />
                <span>Marcar Aula como Concluída</span>
              </>
            )}
          </button>

          {/* Previous / Next Lesson Navigation */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
            <button
              onClick={onPrevLesson}
              disabled={!hasPrevLesson}
              className={`flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-xs font-semibold border transition-all ${
                hasPrevLesson
                  ? 'border-purple-800 bg-[#201042] text-white hover:bg-purple-900/40'
                  : 'border-purple-950 bg-purple-950/20 text-zinc-600 cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="h-4 w-4" />
              Aula Anterior
            </button>

            <button
              onClick={onNextLesson}
              disabled={!hasNextLesson}
              className={`flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-xs font-semibold border transition-all ${
                hasNextLesson
                  ? 'border-[#D4AF37]/50 bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] text-white hover:brightness-110 shadow-sm'
                  : 'border-purple-950 bg-purple-950/20 text-zinc-600 cursor-not-allowed'
              }`}
            >
              Próxima Aula
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
