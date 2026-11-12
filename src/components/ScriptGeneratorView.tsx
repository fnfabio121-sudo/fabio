import React, { useState } from 'react';
import { VIRAL_HOOKS_BANK } from '../data/courseData';
import {
  Sparkles,
  Clapperboard,
  Copy,
  Check,
  RefreshCw,
  Search,
  Camera,
  Layers,
  Clock,
  Volume2
} from 'lucide-react';
import { audioSynth } from '../utils/audioSynth';

export const ScriptGeneratorView: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'gerador' | 'banco'>('gerador');

  // Generator inputs
  const [room, setRoom] = useState<'cozinha' | 'banheiro' | 'quarto' | 'sala' | 'lavanderia'>('cozinha');
  const [style, setStyle] = useState<'speed_clean' | 'asmr' | 'dica_express' | 'antes_depois' | 'reset_noturno'>('speed_clean');
  const [duration, setDuration] = useState<'15s' | '30s' | '60s'>('30s');
  const [audio, setAudio] = useState<'som_ambiente' | 'musica_trend' | 'narracao_off'>('musica_trend');

  const [copiedScript, setCopiedScript] = useState(false);
  const [copiedHookId, setCopiedHookId] = useState<number | null>(null);
  const [searchHook, setSearchHook] = useState('');

  // Script templates database logic
  const generateScriptContent = () => {
    const roomNames = {
      cozinha: 'Cozinha & Louça',
      banheiro: 'Banheiro & Box',
      quarto: 'Quarto & Cama',
      sala: 'Sala de Estar',
      lavanderia: 'Lavanderia & Roupas'
    };

    const styleNames = {
      speed_clean: 'Speed Cleaning Dinâmico',
      asmr: 'ASMR Puro Sensorial',
      dica_express: 'Dica Express com Truque Caseiro',
      antes_depois: 'Transformação Antes vs Depois',
      reset_noturno: 'Reset Noturno de Aconchego'
    };

    // Dynamic scenes builder based on parameters
    let hookText = '';
    let scenes: Array<{ time: string; action: string; angle: string; tip: string }> = [];
    let audioDesc = '';
    let caption = '';

    if (room === 'cozinha') {
      if (style === 'asmr') {
        hookText = '🫧 Somente o som da água e da pia ficando limpa para relaxar sua mente.';
        scenes = [
          { time: '0s - 4s', action: 'Espremer esponja com detergente concentrado perto da câmera', angle: 'Macro Close-up', tip: 'Movimento lento para capturar o borbulhar' },
          { time: '4s - 12s', action: 'Esfregar o inox da pia em círculos contínuos', angle: 'P.O.V. Primeira Pessoa', tip: 'Sem música, áudio natural em destaque' },
          { time: '12s - 22s', action: 'Abrir a torneira com jato forte levando toda a espuma branca', angle: 'Plano Médio Lateral', tip: 'Som cristalino de água caindo no ralo' },
          { time: '22s - 30s', action: 'Lustrar a torneira com pano microfibra seco e colocar dispenser', angle: 'Plano Detalhe', tip: 'Finalize com um toque suave na bancada' }
        ];
        audioDesc = 'ASMR Puro: volume das faixas amplificado para 200%, sem música.';
        caption = 'O som mais relaxante do dia 🫧✨ Nada melhor do que ver a cozinha em paz. Encontre meus paninhos e o dispenser no link da bio!';
      } else if (style === 'speed_clean') {
        hookText = '15 minutos de louça acumulada resumidos em 25 segundos dinâmicos.';
        scenes = [
          { time: '0s - 3s', action: 'Cena rápida da bancada cheia de pratos (Antes caótico)', angle: 'Plano Médio', tip: 'Corte seco no segundo 3' },
          { time: '3s - 10s', action: 'Esfregando pratos e talheres em velocidade acelerada (2.5x)', angle: 'P.O.V.', tip: 'Acelere o ritmo no editor' },
          { time: '10s - 18s', action: 'Enxágue rápido com torneira aberta', angle: 'Close-up Lateral', tip: 'Cores claras e luz natural de janela' },
          { time: '18s - 25s', action: 'Passando pano seco de microfibra na bancada e acendendo vela', angle: 'Plano Aberto', tip: 'Velocidade normal 1.0x para sensação de paz' }
        ];
        audioDesc = 'Música instrumental acústica suave ou Lofi relaxante em alta.';
        caption = 'Transformando o caos do almoço em paz com o coração leve ✨ Qual cômodo te dá mais alívio ver limpo? 👇 (Achadinhos da cozinha na bio!)';
      } else {
        hookText = 'O truque simples de 2 ingredientes que tira a gordura amarela do fogão sem esforço.';
        scenes = [
          { time: '0s - 4s', action: 'Close na gordura do fogão e borrifada da misturinha caseira', angle: 'Plano Detalhe', tip: 'Texto do gancho bem visível' },
          { time: '4s - 15s', action: 'Passando o pano e a gordura saindo na primeira passada', angle: 'P.O.V.', tip: 'O contraste imediato prende a atenção' },
          { time: '15s - 25s', action: 'Finalizando com vinagre de álcool e brilho no inox', angle: 'Close Angular', tip: 'Mostre o reflexo limpo do metal' }
        ];
        audioDesc = 'Narração calma explicando a proporção: 1 colher de bicarbonato + 100ml de vinagre de álcool.';
        caption = 'Nunca mais sofra para esfregar o fogão! Salve esse vídeo para não esquecer a receita 💛 Todos os utensílios que uso estão na bio!';
      }
    } else if (room === 'banheiro') {
      hookText = 'Como eu deixo o box de vidro brilhando sem nenhuma mancha de água.';
      scenes = [
        { time: '0s - 4s', action: 'Close no vidro embaçado antes de limpar', angle: 'Macro Close', tip: 'Gancho imediato de contraste' },
        { time: '4s - 12s', action: 'Passando a esponja com pasta de dente ou misturinha mágica', angle: 'P.O.V.', tip: 'Movimentos circulares firmes' },
        { time: '12s - 20s', action: 'Puxando com o rodo de silicone em linha reta', angle: 'Plano Médio', tip: 'A transparência instantânea é hipnótica' },
        { time: '20s - 30s', action: 'Borrife aromatizador de ambientes e toalha fofa estendida', angle: 'Plano Aberto', tip: 'Sensação de banheiro de spa ou hotel' }
      ];
      audioDesc = 'Música ambiente relaxante combinada com som de água escorrendo.';
      caption = 'O segredo para um box transparente sem esforço 🫧 O rodo de silicone salvador é o item #03 da minha bio!';
    } else {
      // Lavanderia / Quarto / Sala
      hookText = 'Meu reset de 20 minutos para deixar a casa acolhedora e cheirosa.';
      scenes = [
        { time: '0s - 5s', action: 'Abrindo a janela e deixando a luz da manhã entrar', angle: 'Plano Médio', tip: 'Luz natural suave' },
        { time: '5s - 14s', action: 'Esticando a colcha e ajeitando os dois travesseiros fofos', angle: 'P.O.V. Angular', tip: 'Movimento ritmado' },
        { time: '14s - 22s', action: 'Borrifando água perfumada nos lençóis', angle: 'Close-up névoa', tip: 'Som de spray no áudio' },
        { time: '22s - 30s', action: 'Pousando um livro e uma xícara de café na mesa de cabeceira', angle: 'Plano Acolhedor', tip: 'Finalização estética de cinema' }
      ];
      audioDesc = 'Trilha suave em tom acústico caloroso.';
      caption = 'Cuidar do meu lar é o meu momento de autocuidado ✨ Gostou da dica? Os links dos meus produtos favoritos estão todos organizadinhos na bio!';
    }

    return {
      title: `${styleNames[style]} — ${roomNames[room]} (${duration})`,
      hook: hookText,
      scenes,
      audioDesc,
      caption,
      hashtags: ['#rotinadolar', '#donadecasa', '#cleanwithme', '#dicasdecasa', '#achadinhosshopee', '#organização']
    };
  };

  const script = generateScriptContent();

  const handleCopyFullScript = () => {
    const text = `
ROTEIRO PRONTO — RENDA COM A ROTINA
Título: ${script.title}
Duração: ${duration}

GANCHO DOS PRIMEIROS 3 SEGUNDOS (Texto na tela):
"${script.hook}"

CRONOGRAMA DE CENAS & ÂNGULOS:
${script.scenes.map((s, idx) => `Cena ${idx + 1} (${s.time}):\n- Ação: ${s.action}\n- Ângulo de Câmera: ${s.angle}\n- Dica de Gravação: ${s.tip}\n`).join('\n')}

ÁUDIO RECOMENDADO:
${script.audioDesc}

LEGENDA PRONTA PARA POSTAR (COM CTA):
${script.caption}

HASHTAGS RECOMENDADAS:
${script.hashtags.join(' ')}
    `.trim();

    navigator.clipboard.writeText(text);
    setCopiedScript(true);
    audioSynth.playClickTick();
    setTimeout(() => setCopiedScript(false), 2500);
  };

  const handleCopyHook = (hookText: string, id: number) => {
    navigator.clipboard.writeText(hookText);
    setCopiedHookId(id);
    audioSynth.playClickTick();
    setTimeout(() => setCopiedHookId(null), 2500);
  };

  const filteredHooks = VIRAL_HOOKS_BANK.filter((h) => {
    if (!searchHook.trim()) return true;
    return (
      h.hook.toLowerCase().includes(searchHook.toLowerCase()) ||
      h.useCase.toLowerCase().includes(searchHook.toLowerCase()) ||
      h.category.toLowerCase().includes(searchHook.toLowerCase())
    );
  });

  return (
    <div className="space-y-8 pb-16 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-purple-900/40 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#D4AF37] mb-1">
            <Sparkles className="h-4 w-4" />
            <span>Ferramentas Inteligentes</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
            Gerador de Roteiros & Banco de Ideias
          </h1>
          <p className="text-xs sm:text-sm text-zinc-300">
            Crie roteiros cinematográficos personalizados para sua casa em segundos.
          </p>
        </div>

        {/* Tab switch */}
        <div className="flex items-center gap-1.5 p-1 bg-[#1A0E38] rounded-xl border border-purple-900/40">
          <button
            onClick={() => setActiveSubTab('gerador')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
              activeSubTab === 'gerador'
                ? 'bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] text-white shadow-sm'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Gerador de Roteiros
          </button>
          <button
            onClick={() => setActiveSubTab('banco')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
              activeSubTab === 'banco'
                ? 'bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] text-white shadow-sm'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Banco de 50 Ganchos
          </button>
        </div>
      </div>

      {activeSubTab === 'gerador' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Controls Panel (Left) */}
          <div className="lg:col-span-5 space-y-5 rounded-2xl border border-purple-900/40 bg-[#1A0E38]/80 p-6 shadow-md">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#D4AF37] flex items-center gap-2">
              <Clapperboard className="h-4 w-4" />
              <span>Configure seu Vídeo</span>
            </h2>

            {/* Room selection */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-zinc-300">1. Escolha o Cômodo:</label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'cozinha', label: 'Cozinha' },
                  { id: 'banheiro', label: 'Banheiro' },
                  { id: 'quarto', label: 'Quarto' },
                  { id: 'sala', label: 'Sala' },
                  { id: 'lavanderia', label: 'Lavanderia' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setRoom(item.id as unknown as typeof room)}
                    className={`rounded-lg p-2 text-xs font-medium text-left transition-colors border ${
                      room === item.id
                        ? 'bg-purple-900/60 text-[#F5D77A] border-[#D4AF37]/50 font-semibold'
                        : 'bg-[#14092A] text-zinc-300 border-purple-900/30 hover:bg-purple-950'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Style selection */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-zinc-300">2. Estilo do Vídeo:</label>
              <div className="space-y-1.5">
                {[
                  { id: 'speed_clean', label: 'Speed Clean (Faxina Acelerada)' },
                  { id: 'asmr', label: 'ASMR Puro (Sons Crocantes de Casa)' },
                  { id: 'dica_express', label: 'Dica Express (Misturinha/Truque)' },
                  { id: 'antes_depois', label: 'Antes vs Depois (Impacto Visual)' },
                  { id: 'reset_noturno', label: 'Reset Noturno (Aconchego & Paz)' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setStyle(item.id as unknown as typeof style)}
                    className={`w-full rounded-lg p-2.5 text-xs font-medium text-left transition-colors border ${
                      style === item.id
                        ? 'bg-purple-900/60 text-[#F5D77A] border-[#D4AF37]/50 font-semibold'
                        : 'bg-[#14092A] text-zinc-300 border-purple-900/30 hover:bg-purple-950'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Duration */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-zinc-300">3. Duração Desejada:</label>
              <div className="grid grid-cols-3 gap-2">
                {(['15s', '30s', '60s'] as const).map((d) => (
                  <button
                    key={d}
                    onClick={() => setDuration(d)}
                    className={`rounded-lg py-2 text-xs font-medium transition-colors border ${
                      duration === d
                        ? 'bg-purple-900/60 text-[#F5D77A] border-[#D4AF37]/50 font-semibold'
                        : 'bg-[#14092A] text-zinc-300 border-purple-900/30 hover:bg-purple-950'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Generated Result Card (Right) */}
          <div className="lg:col-span-7 space-y-5 rounded-2xl border border-[#D4AF37]/40 bg-gradient-to-br from-[#1E0F3D] to-[#14092C] p-6 shadow-xl flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-purple-900/40 pb-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#D4AF37] block mb-0.5">
                    Roteiro Gerado com Sucesso
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {script.title}
                  </h3>
                </div>

                <button
                  onClick={handleCopyFullScript}
                  className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#F5D77A] px-3.5 py-2 text-xs font-bold text-[#160B2E] shadow hover:brightness-105 transition-all whitespace-nowrap"
                >
                  {copiedScript ? (
                    <>
                      <Check className="h-4 w-4" />
                      <span>Roteiro Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      <span>Copiar Roteiro</span>
                    </>
                  )}
                </button>
              </div>

              {/* Hook Card */}
              <div className="rounded-xl border border-purple-700/50 bg-[#25124D]/70 p-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#F5D77A] block mb-1">
                  Gancho dos Primeiros 3 Segundos (Texto na Tela):
                </span>
                <p className="text-sm font-semibold text-white italic">
                  "{script.hook}"
                </p>
              </div>

              {/* Scenes Breakdown */}
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 block">
                  Plano de Filmagem Cena por Cena:
                </span>
                <div className="space-y-2.5">
                  {script.scenes.map((scene, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg bg-[#150A2E] p-3.5 border border-purple-900/30 text-xs space-y-1"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-[#D4AF37]">
                          Cena {idx + 1} ({scene.time})
                        </span>
                        <span className="text-purple-300 font-medium">
                          {scene.angle}
                        </span>
                      </div>
                      <p className="text-zinc-200">{scene.action}</p>
                      <p className="text-[11px] text-zinc-400">💡 {scene.tip}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Audio & Caption */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className="rounded-lg bg-[#150A2E] p-3 border border-purple-900/30">
                  <span className="font-bold text-zinc-300 block mb-1">Áudio Sugerido:</span>
                  <p className="text-zinc-400">{script.audioDesc}</p>
                </div>
                <div className="rounded-lg bg-[#150A2E] p-3 border border-purple-900/30">
                  <span className="font-bold text-zinc-300 block mb-1">Hashtags:</span>
                  <p className="text-[#F5D77A] font-medium">{script.hashtags.join(' ')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Viral Hooks Bank (Right subtab) */
        <div className="space-y-5">
          {/* Search bar */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-3 h-4 w-4 text-zinc-400" />
            <input
              type="text"
              value={searchHook}
              onChange={(e) => setSearchHook(e.target.value)}
              placeholder="Buscar por tarefa, comodo ou dor..."
              className="w-full rounded-xl bg-[#1A0E38] py-2.5 pl-9 pr-4 text-xs text-white placeholder-zinc-500 border border-purple-800/40 focus:border-[#D4AF37] focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredHooks.map((h) => (
              <div
                key={h.id}
                className="rounded-xl border border-purple-900/40 bg-[#1B0E38]/80 p-5 shadow-sm space-y-3 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-zinc-400 mb-2">
                    <span className="text-[#D4AF37] font-semibold">{h.category}</span>
                    <span>{h.useCase}</span>
                  </div>
                  <p className="text-sm font-semibold text-white leading-relaxed">
                    "{h.hook}"
                  </p>
                </div>

                <div className="pt-3 border-t border-purple-900/30 flex justify-end">
                  <button
                    onClick={() => handleCopyHook(h.hook, h.id)}
                    className="flex items-center gap-1.5 rounded-lg bg-[#25124D] px-3 py-1.5 text-xs font-semibold text-white hover:bg-purple-900/50 border border-purple-700/40 transition-colors"
                  >
                    {copiedHookId === h.id ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5 text-[#F5D77A]" />
                        <span>Copiar Frase</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
