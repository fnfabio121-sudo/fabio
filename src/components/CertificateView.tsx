import React, { useState } from 'react';
import certificateBadgeImg from '../assets/images/course_certificate_badge_1794277383565.jpg';
import {
  Award,
  Printer,
  Sparkles,
  CheckCircle2,
  Lock,
  Download,
  Share2
} from 'lucide-react';
import { audioSynth } from '../utils/audioSynth';
import { fireGoldenConfetti } from '../utils/confetti';

interface CertificateViewProps {
  studentName: string;
  completionPercentage: number;
  completedLessonsCount: number;
  totalLessonsCount: number;
  onUpdateStudentName: (newName: string) => void;
}

export const CertificateView: React.FC<CertificateViewProps> = ({
  studentName,
  completionPercentage,
  completedLessonsCount,
  totalLessonsCount,
  onUpdateStudentName
}) => {
  const [nameInput, setNameInput] = useState(studentName);
  const isFullyCompleted = completionPercentage >= 100;

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.target.value);
    onUpdateStudentName(e.target.value);
  };

  const handlePrint = () => {
    audioSynth.playClickTick();
    if (isFullyCompleted) {
      fireGoldenConfetti();
    }
    window.print();
  };

  const issueDate = new Date().toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  const certCode = `RCR-${new Date().getFullYear()}-VIP-${Math.abs(
    studentName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 1000)
  )}`;

  return (
    <div className="space-y-8 pb-16 max-w-5xl mx-auto">
      {/* Header and Controls (no-print) */}
      <div className="no-print space-y-4 border-b border-purple-900/40 pb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#D4AF37] mb-1">
              <Award className="h-4 w-4" />
              <span>Certificação Oficial de Conclusão</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              Emissão do seu Certificado
            </h1>
            <p className="text-xs sm:text-sm text-zinc-300">
              Personalize seu nome completo para a impressão oficial em alta resolução.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#F5D77A] px-5 py-2.5 text-xs font-bold text-[#160B2E] shadow-md hover:brightness-105 transition-all whitespace-nowrap"
            >
              <Printer className="h-4 w-4" />
              Imprimir / Salvar em PDF
            </button>
          </div>
        </div>

        {/* Name input & completion status */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center rounded-xl bg-[#1A0E38] p-4 border border-purple-900/40">
          <div className="md:col-span-7 space-y-1">
            <label className="text-xs font-semibold text-zinc-300">
              Nome como deseja que apareça no Certificado:
            </label>
            <input
              type="text"
              value={nameInput}
              onChange={handleNameChange}
              placeholder="Digite seu nome e sobrenome completo..."
              className="w-full rounded-lg bg-[#14082B] px-3.5 py-2 text-xs text-white placeholder-zinc-500 border border-purple-800/50 focus:border-[#D4AF37] focus:outline-none font-medium"
            />
          </div>

          <div className="md:col-span-5 flex items-center justify-between md:justify-end gap-3 text-xs">
            <div className="text-right">
              <span className="text-zinc-400 block text-[11px]">Status do Curso:</span>
              <span
                className={`font-bold ${
                  isFullyCompleted ? 'text-emerald-400' : 'text-[#D4AF37]'
                }`}
              >
                {isFullyCompleted
                  ? 'Aprovada com Louvor (100%)'
                  : `${completedLessonsCount}/${totalLessonsCount} aulas concluídas`}
              </span>
            </div>
            {isFullyCompleted ? (
              <CheckCircle2 className="h-7 w-7 text-emerald-400 shrink-0" />
            ) : (
              <div className="flex items-center gap-1 bg-purple-950 px-2.5 py-1.5 rounded-lg border border-purple-800 text-purple-300">
                <Lock className="h-3.5 w-3.5 text-[#F5D77A]" />
                <span className="text-[11px]">Pré-visualização</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* The Printable Official Certificate Frame */}
      <div
        id="certificate-print-area"
        className="relative overflow-hidden rounded-2xl border-4 border-[#D4AF37] bg-gradient-to-br from-[#1A0C38] via-[#120726] to-[#1A0C38] p-8 sm:p-14 shadow-2xl text-center"
        style={{
          boxShadow: '0 0 50px -10px rgba(212, 175, 55, 0.25)'
        }}
      >
        {/* Filigree decorative corners */}
        <div className="absolute top-3 left-3 w-12 h-12 border-t-2 border-l-2 border-[#D4AF37]/70" />
        <div className="absolute top-3 right-3 w-12 h-12 border-t-2 border-r-2 border-[#D4AF37]/70" />
        <div className="absolute bottom-3 left-3 w-12 h-12 border-b-2 border-l-2 border-[#D4AF37]/70" />
        <div className="absolute bottom-3 right-3 w-12 h-12 border-b-2 border-r-2 border-[#D4AF37]/70" />

        {/* Ambient watermark glow */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <Award className="w-96 h-96 text-[#D4AF37]" />
        </div>

        <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
          {/* Badge Icon Slot */}
          <div className="flex justify-center">
            <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-full overflow-hidden border-2 border-[#D4AF37] shadow-lg">
              <img
                src={certificateBadgeImg}
                alt="Selo Dourado Oficial"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-1">
            <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#D4AF37] uppercase">
              ACADEMIA DIGITAL RENDA COM A ROTINA
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white font-serif">
              CERTIFICADO DE FORMAÇÃO
            </h2>
            <p className="text-xs text-zinc-400 tracking-wider uppercase">
              Capacitação Profissional em Criação de Conteúdo e Renda Doméstica
            </p>
          </div>

          <div className="h-0.5 w-32 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />

          {/* Student Name */}
          <div className="space-y-2 py-2">
            <p className="text-xs sm:text-sm text-zinc-300">
              Certificamos solenemente que
            </p>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold gold-text-gradient tracking-wide py-1">
              {nameInput.trim() || 'Aluna da Academia Digital'}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 max-w-2xl mx-auto leading-relaxed pt-2">
              concluiu com êxito e mérito a formação intensiva de 40 horas do curso{' '}
              <strong className="text-white">RENDA COM A ROTINA</strong>, dominando técnicas de gravação
              de tarefas domésticas sem mostrar o rosto, edição profissional no celular (CapCut),
              sonorização ASMR, psicologia de retenção de público, algoritmos de redes sociais e
              monetização estratégica por meio de marketing de afiliados e programas de criadores.
            </p>
          </div>

          {/* Footer of the diploma: Signatures & Codes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-purple-900/50 items-end">
            <div className="space-y-1 text-center sm:text-left">
              <p className="text-[11px] text-zinc-400">Data de Emissão</p>
              <p className="text-xs font-semibold text-white">{issueDate}</p>
            </div>

            <div className="space-y-1 text-center">
              <div className="w-36 h-0.5 bg-zinc-600 mx-auto mb-1" />
              <p className="text-xs font-bold text-white">Diretoria Pedagógica</p>
              <p className="text-[10px] text-[#D4AF37]">Renda com a Rotina Digital</p>
            </div>

            <div className="space-y-1 text-center sm:text-right">
              <p className="text-[11px] text-zinc-400">Autenticidade & Registro</p>
              <p className="text-xs font-mono font-bold text-[#F5D77A] tracking-wider">
                {certCode}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
