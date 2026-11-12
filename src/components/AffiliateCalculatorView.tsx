import React, { useState } from 'react';
import {
  DollarSign,
  TrendingUp,
  Sliders,
  Calculator,
  HelpCircle,
  Sparkles,
  ShoppingBag
} from 'lucide-react';

export const AffiliateCalculatorView: React.FC = () => {
  const [monthlyViews, setMonthlyViews] = useState<number>(100000);
  const [ctrPercent, setCtrPercent] = useState<number>(2.0); // 2% click on bio link
  const [conversionPercent, setConversionPercent] = useState<number>(3.0); // 3% of clicks buy
  const [avgTicket, setAvgTicket] = useState<number>(32); // R$ 32,00 average product price
  const [commissionRate, setCommissionRate] = useState<number>(10); // 10% commission

  // Calculations
  const clicksOnBio = Math.round((monthlyViews * ctrPercent) / 100);
  const totalSalesCount = Math.round((clicksOnBio * conversionPercent) / 100);
  const totalGrossSold = totalSalesCount * avgTicket;
  const monthlyCommission = (totalGrossSold * commissionRate) / 100;
  const annualCommission = monthlyCommission * 12;

  const setPreset = (views: number, ctr: number, conv: number, ticket: number, rate: number) => {
    setMonthlyViews(views);
    setCtrPercent(ctr);
    setConversionPercent(conv);
    setAvgTicket(ticket);
    setCommissionRate(rate);
  };

  return (
    <div className="space-y-8 pb-16 max-w-5xl mx-auto">
      {/* Header */}
      <div className="border-b border-purple-900/40 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#D4AF37] mb-1">
          <Calculator className="h-4 w-4" />
          <span>Planejador Financeiro da Aluna</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
          Calculadora de Ganhos como Afiliada
        </h1>
        <p className="text-xs sm:text-sm text-zinc-300">
          Simule o potencial realista de comissões com produtos de limpeza e organização na Shopee e Amazon.
        </p>
      </div>

      {/* Preset Scenarios */}
      <div className="space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
          Cenários Prontos para Simulação:
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <button
            onClick={() => setPreset(40000, 1.8, 2.5, 25, 9)}
            className="rounded-xl border border-purple-900/40 bg-[#1A0E38] p-3 text-left hover:border-[#D4AF37]/40 hover:bg-[#201142] transition-colors"
          >
            <p className="text-xs font-bold text-[#F5D77A]">1. Iniciante Cautelosa</p>
            <p className="text-[11px] text-zinc-400">40k visualizações / mês</p>
          </button>

          <button
            onClick={() => setPreset(120000, 2.2, 3.0, 35, 10)}
            className="rounded-xl border border-purple-900/40 bg-[#1A0E38] p-3 text-left hover:border-[#D4AF37]/40 hover:bg-[#201142] transition-colors"
          >
            <p className="text-xs font-bold text-[#F5D77A]">2. Constância Firme</p>
            <p className="text-[11px] text-zinc-400">120k visualizações / mês</p>
          </button>

          <button
            onClick={() => setPreset(350000, 2.8, 3.5, 42, 11)}
            className="rounded-xl border border-purple-900/40 bg-[#1A0E38] p-3 text-left hover:border-[#D4AF37]/40 hover:bg-[#201142] transition-colors"
          >
            <p className="text-xs font-bold text-[#F5D77A]">3. Viral em Expansão</p>
            <p className="text-[11px] text-zinc-400">350k visualizações / mês</p>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sliders Input Panel */}
        <div className="lg:col-span-7 space-y-5 rounded-2xl border border-purple-900/40 bg-[#1B0E3A]/80 p-6 shadow-md">
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#D4AF37] flex items-center gap-2">
            <Sliders className="h-4 w-4" />
            <span>Ajuste os Parâmetros da sua Rotina</span>
          </h2>

          {/* Slider 1: Views */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <span className="font-semibold text-zinc-200">Visualizações Mensais Acumuladas:</span>
              <span className="font-bold text-[#F5D77A] tabular-nums">
                {monthlyViews.toLocaleString('pt-BR')} views
              </span>
            </div>
            <input
              type="range"
              min={10000}
              max={1000000}
              step={10000}
              value={monthlyViews}
              onChange={(e) => setMonthlyViews(Number(e.target.value))}
              className="w-full accent-[#D4AF37]"
            />
            <span className="text-[10px] text-zinc-400 block">
              Soma das visualizações de todos os seus vídeos postados no mês.
            </span>
          </div>

          {/* Slider 2: Click Through Rate */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <span className="font-semibold text-zinc-200">Taxa de Cliques na Bio (CTR):</span>
              <span className="font-bold text-[#F5D77A] tabular-nums">{ctrPercent.toFixed(1)}%</span>
            </div>
            <input
              type="range"
              min={0.5}
              max={6.0}
              step={0.1}
              value={ctrPercent}
              onChange={(e) => setCtrPercent(Number(e.target.value))}
              className="w-full accent-[#D4AF37]"
            />
            <span className="text-[10px] text-zinc-400 block">
              Porcentagem de quem assiste e clica no seu link de produtos.
            </span>
          </div>

          {/* Slider 3: Conversion Rate */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <span className="font-semibold text-zinc-200">Taxa de Conversão em Venda:</span>
              <span className="font-bold text-[#F5D77A] tabular-nums">{conversionPercent.toFixed(1)}%</span>
            </div>
            <input
              type="range"
              min={1.0}
              max={8.0}
              step={0.5}
              value={conversionPercent}
              onChange={(e) => setConversionPercent(Number(e.target.value))}
              className="w-full accent-[#D4AF37]"
            />
            <span className="text-[10px] text-zinc-400 block">
              Porcentagem de quem clica e finaliza uma compra na Shopee/Amazon.
            </span>
          </div>

          {/* Slider 4: Ticket */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <span className="font-semibold text-zinc-200">Preço Médio dos Produtos Indicados:</span>
              <span className="font-bold text-[#F5D77A] tabular-nums">R$ {avgTicket},00</span>
            </div>
            <input
              type="range"
              min={15}
              max={150}
              step={1}
              value={avgTicket}
              onChange={(e) => setAvgTicket(Number(e.target.value))}
              className="w-full accent-[#D4AF37]"
            />
            <span className="text-[10px] text-zinc-400 block">
              Panos, rodos, borrifadores e organizadores (R$ 20 a R$ 60).
            </span>
          </div>

          {/* Slider 5: Commission */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <span className="font-semibold text-zinc-200">Comissão Média das Lojas:</span>
              <span className="font-bold text-[#F5D77A] tabular-nums">{commissionRate}%</span>
            </div>
            <input
              type="range"
              min={5}
              max={15}
              step={1}
              value={commissionRate}
              onChange={(e) => setCommissionRate(Number(e.target.value))}
              className="w-full accent-[#D4AF37]"
            />
          </div>
        </div>

        {/* Results Card (Right) */}
        <div className="lg:col-span-5 space-y-5 rounded-2xl border border-[#D4AF37]/40 bg-gradient-to-br from-[#211142] to-[#14082B] p-6 shadow-xl flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-purple-900/40 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                Resultado da Simulação
              </span>
              <Sparkles className="h-4 w-4 text-[#F5D77A]" />
            </div>

            {/* Big Monthly Number */}
            <div className="rounded-xl bg-[#14082B] p-5 border border-purple-900/50 space-y-1">
              <span className="text-xs font-semibold text-zinc-300">
                Renda Extra Estimada por Mês:
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#F5D77A] tabular-nums">
                R$ {monthlyCommission.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
              <p className="text-[11px] text-zinc-400">
                Comissões líquidas depositadas diretamente na sua conta bancária.
              </p>
            </div>

            {/* Annual Potential */}
            <div className="rounded-xl bg-purple-950/40 p-4 border border-purple-800/40 space-y-1">
              <span className="text-xs font-semibold text-zinc-300">
                Potencial Anual Acumulado:
              </span>
              <div className="text-xl sm:text-2xl font-bold text-white tabular-nums">
                R$ {annualCommission.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
              <p className="text-[11px] text-zinc-400">
                Dinheiro que entra sem você precisar sair de casa ou deixar seus filhos.
              </p>
            </div>

            {/* Operational details */}
            <div className="space-y-2 text-xs text-zinc-300 border-t border-purple-900/40 pt-3">
              <div className="flex justify-between">
                <span>Cliques estimados na sua Bio:</span>
                <span className="font-semibold text-white tabular-nums">{clicksOnBio.toLocaleString('pt-BR')} cliques</span>
              </div>
              <div className="flex justify-between">
                <span>Pedidos gerados no mês:</span>
                <span className="font-semibold text-white tabular-nums">{totalSalesCount} compras</span>
              </div>
              <div className="flex justify-between">
                <span>Total de vendas geradas:</span>
                <span className="font-semibold text-white tabular-nums">R$ {totalGrossSold.toLocaleString('pt-BR')},00</span>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-[#25134F]/70 p-3 border border-purple-800/40 text-[11px] text-purple-200">
            💡 <span className="font-semibold text-[#F5D77A]">Lembrete de Integridade:</span> Os valores são simulações matemáticas baseadas em métricas reais do mercado de afiliados brasileiro. O resultado depende da sua consistência e aplicação correta do método.
          </div>
        </div>
      </div>
    </div>
  );
};
