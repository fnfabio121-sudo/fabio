import React from 'react';
import { Sparkles, Volume2, VolumeX, Menu, X, CheckCircle2, User } from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  completionPercentage: number;
  completedLessonsCount: number;
  totalLessonsCount: number;
  studentName: string;
  isAmbientPlaying: boolean;
  onToggleAmbient: () => void;
  onOpenProfile: () => void;
  onToggleMobileMenu: () => void;
  isMobileMenuOpen: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  completionPercentage,
  completedLessonsCount,
  totalLessonsCount,
  studentName,
  isAmbientPlaying,
  onToggleAmbient,
  onOpenProfile,
  onToggleMobileMenu,
  isMobileMenuOpen
}) => {
  const navItems = [
    { id: 'dashboard', label: 'Início' },
    { id: 'lessons', label: 'Aulas' },
    { id: 'challenge', label: 'Desafio 30D' },
    { id: 'scripts', label: 'Gerador Roteiros' },
    { id: 'calculator', label: 'Calculadora' },
    { id: 'certificate', label: 'Certificado' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-purple-900/40 bg-[#160B2E]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Brand title, single line */}
        <button
          onClick={() => onSelectTab('dashboard')}
          className="flex items-center gap-2.5 text-left text-base font-extrabold tracking-tight text-white transition-opacity hover:opacity-90 whitespace-nowrap shrink-0"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-[#6D28D9] to-[#D4AF37] p-0.5 shadow-md">
            <div className="flex h-full w-full items-center justify-center rounded-[6px] bg-[#160B2E]">
              <Sparkles className="h-4 w-4 text-[#F5D77A]" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold tracking-tight text-white leading-tight">
              RENDA COM A ROTINA
            </span>
            <span className="text-[10px] tracking-widest uppercase text-[#D4AF37] font-semibold">
              Academia Digital
            </span>
          </div>
        </button>

        {/* Zone 2: Navigation links, single-line labels */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectTab(item.id)}
                className={`transition-colors whitespace-nowrap shrink-0 py-1.5 relative ${
                  isActive
                    ? 'text-[#F5D77A] font-semibold'
                    : 'text-zinc-300 hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#8B5CF6] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action & Controls */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Ambient Sound Toggle */}
          <button
            onClick={onToggleAmbient}
            title={isAmbientPlaying ? 'Desativar som ambiente relaxante' : 'Ativar som ambiente de chuva e foco'}
            className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium transition-all ${
              isAmbientPlaying
                ? 'bg-purple-900/60 text-[#F5D77A] border border-[#D4AF37]/40 shadow-sm'
                : 'bg-purple-950/40 text-zinc-400 hover:text-zinc-200 border border-purple-800/30'
            }`}
          >
            {isAmbientPlaying ? (
              <>
                <Volume2 className="h-3.5 w-3.5 text-[#F5D77A]" />
                <span className="hidden sm:inline">Som Relaxante</span>
              </>
            ) : (
              <>
                <VolumeX className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Modo Foco</span>
              </>
            )}
          </button>

          {/* Student Progress Badge */}
          <div className="hidden sm:flex items-center gap-2 rounded-lg bg-[#201142] px-3 py-1.5 border border-purple-800/40">
            <CheckCircle2 className="h-3.5 w-3.5 text-[#D4AF37]" />
            <span className="text-xs font-semibold text-zinc-200 tabular-nums">
              {completedLessonsCount}/{totalLessonsCount}
            </span>
            <span className="text-[11px] text-[#F5D77A] font-medium tabular-nums">
              ({completionPercentage}%)
            </span>
          </div>

          {/* Student Profile Button */}
          <button
            onClick={onOpenProfile}
            className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] px-3 py-1.5 text-xs font-semibold text-white shadow-sm hover:brightness-110 transition-all whitespace-nowrap shrink-0"
          >
            <User className="h-3.5 w-3.5" />
            <span className="max-w-[100px] truncate">{studentName}</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={onToggleMobileMenu}
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-950/70 text-zinc-300 hover:text-white border border-purple-800/40 lg:hidden"
            aria-label="Abrir menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="border-b border-purple-900/50 bg-[#160B2E] px-4 py-4 lg:hidden">
          <div className="grid grid-cols-2 gap-2 mb-3">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onSelectTab(item.id);
                    onToggleMobileMenu();
                  }}
                  className={`rounded-lg px-3 py-2 text-left text-xs font-medium transition-colors ${
                    isActive
                      ? 'bg-purple-900/60 text-[#F5D77A] border border-[#D4AF37]/30'
                      : 'bg-purple-950/40 text-zinc-300 hover:bg-purple-900/30'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-between border-t border-purple-900/40 pt-3 text-xs text-zinc-400">
            <span>Progresso Geral:</span>
            <span className="font-semibold text-[#D4AF37] tabular-nums">
              {completedLessonsCount} de {totalLessonsCount} aulas ({completionPercentage}%)
            </span>
          </div>
        </div>
      )}
    </header>
  );
};
