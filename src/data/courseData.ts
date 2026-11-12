import { Module } from '../types/course';

export const COURSE_MODULES: Module[] = [
  {
    id: 1,
    title: 'Módulo 1 — Primeiros Passos & Fundamentos do Conteúdo Doméstico',
    shortTitle: 'Primeiros Passos',
    description: 'Entenda como funciona o mercado de vídeos de rotina, as oportunidades reais de monetização e como organizar suas gravações.',
    iconName: 'Sparkles',
    lessons: [
      {
        id: 'm1-a1',
        moduleId: 1,
        lessonNumber: 1,
        title: 'Como Funciona a Criação de Conteúdo Doméstico',
        objective: 'Compreender por que pessoas comuns consomem milhões de vídeos de tarefas simples do lar e como você pode se posicionar nesse nicho.',
        readTime: '7 min de leitura',
        tag: 'Fundamentos',
        explanation: [
          'O nicho de rotina doméstica (conhecido globalmente como "Clean With Me", "Daily Routine" e "Aesthetic Reset") é um dos maiores fenômenos de engajamento do TikTok, Instagram Reels e YouTube Shorts.',
          'Diferente do que muitos imaginam, o público não está buscando mansões de cinema ou produtos de luxo inalcançáveis. As pessoas buscam conexão, relaxamento mental, sensação de ordem e satisfação visual (o efeito de ver algo sujo ou desorganizado se transformar em um ambiente limpo e acolhedor).',
          'Você não precisa criar situações artificiais nem fingir ter uma vida perfeita. O seu maior diferencial é a autenticidade da sua rotina real: lavar a louça do almoço, esticar o lençol da cama, organizar a gaveta de talheres ou higienizar a pia do banheiro.'
        ],
        realWorldExamples: [
          {
            title: 'Exemplo: Vídeo de 35 segundos de Limpeza de Fogão',
            scenario: 'Uma criadora sem mostrar o rosto posicionou o celular apoiado em um pote de tempero, gravou em câmera rápida a aplicação de detergente e vinagre com esponja amarela, colocou uma música suave e obteve 480 mil visualizações.',
            keyTakeaway: 'A simplicidade e a satisfação do resultado geram retenção alta e comentários perguntando a receita caseira utilizada.'
          },
          {
            title: 'Exemplo: Arrumando a Cama com Janela Aberta',
            scenario: 'Gravação em plano aberto com iluminação natural da manhã, esticando o edredom e ajeitando os dois travesseiros em 18 segundos.',
            keyTakeaway: 'Pessoas exaustas assistem a vídeos de organização como alívio de ansiedade e inspiração para cuidarem de suas próprias casas.'
          }
        ],
        stepByStep: [
          {
            step: 1,
            title: 'Mapeie as tarefas que você já faz todos os dias',
            instruction: 'Liste 5 atividades que fazem parte do seu dia (ex: passar café, limpar a bancada, arrumar a cama, varrer a sala, dobrar toalhas).',
            tip: 'Você não vai gastar tempo extra para inventar tarefas; vai apenas documentar o que já iria fazer.'
          },
          {
            step: 2,
            title: 'Entenda os 3 pilares da retenção visual',
            instruction: 'Os vídeos de rotina dependem de: 1) Estética limpa (sem bagunça excessiva fora do foco), 2) Ritmo dinâmico (cortes a cada 2 a 4 segundos), e 3) Satisfação sensorial (som da água, da esponja ou música suave).',
            tip: 'Vídeos lentos perdem espectadores. O segredo é a dinâmica entre as cenas.'
          },
          {
            step: 3,
            title: 'Defina o tom do seu perfil',
            instruction: 'Escolha se o seu estilo será "Aconchegante e Relaxante" (tons quentes, trilha tranquila), "Prático e Eficiente" (dicas diretas, cortes rápidos) ou "ASMR Puro" (sem voz, foco nos sons da casa).',
            tip: 'Mantenha o mesmo tom nos primeiros 10 vídeos para criar consistência de marca.'
          }
        ],
        commonMistakes: [
          {
            mistake: 'Achar que precisa de uma casa decorada de revista para começar a gravar.',
            fix: 'Grave apenas um pedaço do cômodo bem iluminado (ex: um canto de 60 cm da pia ou uma tábua de passar bem limpa). O enquadramento fechado esconde o resto do ambiente.'
          },
          {
            mistake: 'Achar que precisa falar para a câmera ou aparecer de corpo inteiro.',
            fix: 'Mais de 70% dos perfis de maior crescimento nesse nicho mostram apenas as mãos, o utensílio e a tarefa.'
          }
        ],
        practicalExercise: {
          title: 'Exercício 1: Inventário das Suas 5 Tarefas Magnéticas',
          description: 'Escreva abaixo 5 tarefas que você realiza regularmente na sua semana e que possuem bom apelo visual (água corrente, espumas, alinhamento de objetos, dobras de roupas).',
          templatePlaceholder: 'Minhas 5 tarefas magnéticas:\n1.\n2.\n3.\n4.\n5.'
        },
        checklist: [
          'Entendi que o público busca alívio mental e satisfação visual nas tarefas diárias.',
          'Identifiquei que meu foco será no enquadramento da tarefa, sem necessidade de mostrar o rosto.',
          'Anotei 5 tarefas simples da minha semana para usar como pauta inicial.'
        ],
        keySummary: 'A criação de conteúdo doméstico transforma o que você já faz em entretenimento relaxante e útil para quem assiste. O foco é na tarefa bem enquadrada, nunca na perfeição da casa inteira.'
      },
      {
        id: 'm1-a2',
        moduleId: 1,
        lessonNumber: 2,
        title: 'Quais São as Oportunidades Reais de Monetização',
        objective: 'Conhecer as fontes concretas de renda geradas por vídeos de rotina, com transparência e sem ilusões de dinheiro fácil.',
        readTime: '9 min de leitura',
        tag: 'Monetização Realista',
        explanation: [
          'Aviso de honestidade e transparência: a monetização nas redes sociais é real e viável, mas NÃO é mágica nem acontece do dia para a noite. Ela é o resultado direto de consistência, retenção de público e aplicação estratégica.',
          'Existem 4 canais principais onde criadoras de conteúdo doméstico faturam mensalmente: Programa de Criadores (TikTok Creator Rewards e YouTube Partner), Programas de Afiliados (Shopee, Amazon, Magalu), Parcerias/Publis com Marcas e Venda de Mini-Produtos Digitais próprios (como cronogramas de limpeza e cardápios semanais).',
          'O modelo mais rápido para iniciantes é o Marketing de Afiliados, pois você não precisa ter 10 mil seguidores para começar a recomendar os produtos que você realmente usa (o pano de microfibra, o rodo mágico, o borrifador de spray fino ou o organizador de geladeira).'
        ],
        realWorldExamples: [
          {
            title: 'Exemplo: Afiliada Shopee com Rodo Mágico',
            scenario: 'Vídeo mostrando a praticidade de limpar o piso debaixo do sofá com um rodo giratório. Na legenda: "O link do meu rodo favorito está na bio no item #04".',
            keyTakeaway: 'Em um mês com 80 mil visualizações acumuladas, gerou 142 vendas do rodo a uma comissão média de R$ 6,50 por unidade (total: R$ 923,00 de renda extra apenas desse produto).'
          },
          {
            title: 'Exemplo: Programa de Recompensas do TikTok',
            scenario: 'Após atingir os requisitos (10k seguidores e 100k views no mês), vídeos com mais de 1 minuto qualificados pagam em média entre US$ 0,10 e US$ 0,40 a cada 1.000 visualizações qualificadas (RPM).',
            keyTakeaway: 'Um vídeo que atinge 300 mil views pode render entre R$ 200 e R$ 700 em dólares diretamente na sua conta bancária.'
          }
        ],
        stepByStep: [
          {
            step: 1,
            title: 'Compreenda a escada da monetização',
            instruction: 'Fase 1 (Mês 1): Construção de base e cliques em links de afiliados. Fase 2 (Mês 2-3): Primeiras comissões consistentes e crescimento de seguidores. Fase 3 (Mês 4+): Monetização por visualizações (TikTok/Shorts) e primeiros contatos de marcas.',
            tip: 'Não pule etapas querendo cobrar publis caras antes de provar que seu conteúdo engaja.'
          },
          {
            step: 2,
            title: 'Cadastre-se nos programas gratuitos de afiliados',
            instruction: 'Shopee Afiliados (comissões de 6% a 14%), Amazon Associados (comissões de 8% a 13% em utilidades domésticas) e Mercado Livre.',
            tip: 'Recomende apenas produtos que façam sentido estético e prático para o seu público.'
          },
          {
            step: 3,
            title: 'Separe uma pasta no celular para organizar seus links',
            instruction: 'Crie uma nota com o link direto de cada objeto da sua casa que aparece no vídeo (o dispenser de sabão, o porta-escovas, a lixeira de inox, o borrifador).',
            tip: 'Facilite o acesso dos seguidores com uma árvore de links limpa e organizada.'
          }
        ],
        commonMistakes: [
          {
            mistake: 'Acreditar em promessas de faturamento milionário no primeiro fim de semana.',
            fix: 'Encare como uma construção sólida de renda extra que cresce mês a mês conforme sua biblioteca de vídeos fica maior.'
          },
          {
            mistake: 'Fazer vídeos que parecem comerciais chatos de televendas.',
            fix: 'O vídeo deve ser 90% entretenimento e rotina agradável, e apenas 10% sutil recomendação do utensílio utilizado.'
          }
        ],
        practicalExercise: {
          title: 'Exercício 2: Simulação de Produtos Afiliáveis da Sua Casa',
          description: 'Dê uma volta pela sua cozinha e lavanderia. Escolha 3 utensílios que você tem e pesquise na Shopee ou Amazon quanto custam. Anote abaixo o produto e o valor aproximado.',
          templatePlaceholder: '1. Produto: ________________ | Preço médio: R$ _______\n2. Produto: ________________ | Preço médio: R$ _______\n3. Produto: ________________ | Preço médio: R$ _______'
        },
        checklist: [
          'Entendi com clareza as 4 formas de monetização de vídeos domésticos.',
          'Compreendi que a monetização exige consistência e não é enriquecimento instantâneo.',
          'Identifiquei 3 produtos da minha rotina que possuem potencial de recomendação como afiliada.'
        ],
        keySummary: 'A monetização começa pelo programa de afiliados com produtos baratos e úteis da sua casa, evoluindo para ganhos por visualizações e parcerias conforme seu canal ganha tração.'
      },
      {
        id: 'm1-a3',
        moduleId: 1,
        lessonNumber: 3,
        title: 'O Que É Realmente Necessário para Começar',
        objective: 'Identificar a lista mínima de recursos para gravar hoje mesmo com o que você já tem em mãos, com custo zero.',
        readTime: '6 min de leitura',
        tag: 'Equipamento Zero Custo',
        explanation: [
          'O maior obstáculo que trava iniciantes é a ilusão de que precisam de um iPhone de última geração, um ring light de R$ 300 e microfones caros. Isso é 100% um mito.',
          'Vídeos caseiros gravados em celulares simples (Samsung linha A, Motorola, Xiaomi ou iPhones antigos) performam incrivelmente bem porque transmitem naturalidade. Se o vídeo parece uma propaganda de estúdio profissional, ele perde a sensação de rotina íntima e real.',
          'Os únicos 3 elementos que realmente importam são: 1) Uma lente de câmera rigorosamente limpa antes de cada gravação, 2) Luz natural vinda de uma janela ou porta, e 3) Um apoio firme para que o vídeo não fique tremido.'
        ],
        realWorldExamples: [
          {
            title: 'Exemplo: O Pote de Arroz como Tripé',
            scenario: 'Uma aluna começou apoiando o celular em um copo de vidro pesado em cima da bancada para filmar ela cortando legumes e lavando a louça.',
            keyTakeaway: 'O vídeo ficou perfeitamente estável e alcançou 120 mil visualizações sem nenhum centavo gasto com equipamentos.'
          },
          {
            title: 'Exemplo: O Hábito de Limpar a Câmera',
            scenario: 'Antes de gravar, a criadora passou a ponta da camiseta na lente do celular, removendo a gordura dos dedos que deixava a imagem esbranquiçada.',
            keyTakeaway: 'A nitidez duplicou instantaneamente, parecendo uma câmera de preço duas vezes maior.'
          }
        ],
        stepByStep: [
          {
            step: 1,
            title: 'Regra de Ouro nº 1: Limpar a lente do celular',
            instruction: 'Pegue um pano macio de microfibra (ou até a barra limpa da sua camiseta) e limpe a lente traseira do celular antes de apertar o REC.',
            tip: 'Celulares passam o dia na mão e acumulam oleosidade que destrói a qualidade do vídeo.'
          },
          {
            step: 2,
            title: 'Construa seu suporte caseiro de estabilização',
            instruction: 'Opção A: Uma xícara ou caneca pesada. Opção B: Dois livros grossos empilhados. Opção C: Um suporte de mesa articulado de celular (custa menos de R$ 15 em qualquer loja de bairro ou Shopee).',
            tip: 'O celular nunca deve ficar seguro na mão balançando enquanto você limpa com a outra mão.'
          },
          {
            step: 3,
            title: 'Configure a câmera do seu celular para o melhor resultado',
            instruction: 'Abra as configurações da câmera do seu telefone e selecione a resolução 1080p (Full HD) a 30fps ou 60fps. Desative filtros embelezadores automáticos que deixam a imagem artificial.',
            tip: 'Vídeos gravados em 1080p vertical (proporção 9:16) são o padrão aceito por todas as redes sociais.'
          }
        ],
        commonMistakes: [
          {
            mistake: 'Gravar segurando o celular com uma mão e limpando a pia com a outra.',
            fix: 'Apoie o celular em uma superfície fixa. Isso libera suas duas mãos para a tarefa e traz aspecto profissional e calmo ao vídeo.'
          },
          {
            mistake: 'Comprar luz artificial cara logo na largada.',
            fix: 'Grave sempre perto da janela entre 8h e 16h. A luz solar indireta é infinitamente mais bonita que ring lights baratos.'
          }
        ],
        practicalExercise: {
          title: 'Exercício 3: Teste de Nitidez e Estabilidade',
          description: 'Limpe a lente da câmera do seu celular. Apoie o aparelho em uma xícara ou livro na bancada da pia virado para a torneira. Grave 10 segundos abrindo a torneira e lavando uma colher. Assista ao vídeo para avaliar a estabilidade.',
          templatePlaceholder: 'Resultado do teste: Ficou estável? A luz da janela foi suficiente? Anote o que percebeu no teste.'
        },
        checklist: [
          'Limpei a lente traseira da câmera do celular.',
          'Descobri 2 lugares estáveis na minha casa para apoiar o celular (xícara, livro ou suporte).',
          'Verifiquei que a câmera está configurada em 1080p na orientação vertical (em pé).'
        ],
        keySummary: 'Você só precisa do seu celular atual, lente limpa e um ponto de apoio fixo. Não gaste dinheiro comprando nada antes de postar seus primeiros 15 vídeos.'
      },
      {
        id: 'm1-a4',
        moduleId: 1,
        lessonNumber: 4,
        title: 'Como Organizar sua Rotina de Gravação sem Estresse',
        objective: 'Planejar momentos de 20 minutos durante suas tarefas diárias para capturar vídeos sem atrapalhar o cuidado com os filhos e o lar.',
        readTime: '8 min de leitura',
        tag: 'Produtividade Doméstica',
        explanation: [
          'O maior erro das donas de casa iniciantes é transformar a gravação em um segundo emprego exaustivo que atrasa o almoço e deixa a família impaciente.',
          'O método correto chama-se "Gravação em Micro-Momentos": você não para a sua vida para gravar; você grava pequenas frações de 15 a 30 segundos da tarefa que já teria que fazer de qualquer forma.',
          'Com 4 ou 5 tomadas curtas de 10 segundos capturadas durante a manhã, você já tem o material completo para montar um vídeo de 30 a 45 segundos pronto para publicação.'
        ],
        realWorldExamples: [
          {
            title: 'Exemplo: O Método dos 3 Momentos do Dia',
            scenario: 'Mariana grava: 1 cena passando o café às 7h30 (8 segundos); 1 cena esticando a colcha da cama às 8h15 (8 segundos); 1 cena borrifando lustra-móveis na mesa às 9h00 (8 segundos).',
            keyTakeaway: 'Em menos de 3 minutos de gravação total acumulada durante a manhã, ela criou o vídeo "Minha rotina matinal para manter a casa em paz", que teve 95 mil views.'
          },
          {
            title: 'Exemplo: O Lote Semanal de Vídeos',
            scenario: 'Criadora que aproveita a sexta-feira de faxina para gravar 4 tarefas diferentes, gerando conteúdo para a semana inteira.',
            keyTakeaway: 'Uma única manhã de limpeza planejada alimenta os perfis com publicações diárias de segunda a quinta.'
          }
        ],
        stepByStep: [
          {
            step: 1,
            title: 'Defina seu bloco de gravação de 20 minutos',
            instruction: 'Escolha o melhor horário do seu dia em que a casa está mais calma ou a iluminação da janela está mais bonita (geralmente entre 8h e 10h da manhã).',
            tip: 'Avise a família que você vai tirar 20 minutinhos focados naquele cantinho.'
          },
          {
            step: 2,
            title: 'Prepare o espaço de 1 metro quadrado',
            instruction: 'Antes de ligar a câmera, tire do enquadramento fios soltos, panos velhos rasgados ou embalagens chamativas desnecessárias.',
            tip: 'Você só precisa deixar bonito o espaço que a câmera enxerga, não a sala inteira.'
          },
          {
            step: 3,
            title: 'Grave takes curtos e objetivos',
            instruction: 'Aperte REC -> Execute o movimento com calma por 5 a 10 segundos -> Aperte STOP. Mude o celular de posição e repita para a próxima etapa.',
            tip: 'Takes curtos facilitam muito a edição e economizam a memória do seu celular.'
          }
        ],
        commonMistakes: [
          {
            mistake: 'Deixar a câmera gravando continuamente por 40 minutos seguidos.',
            fix: 'Isso enche a memória do celular e torna a edição uma tortura. Grave sempre takes curtos de 5 a 10 segundos.'
          },
          {
            mistake: 'Querer arrumar a casa inteira de uma vez só com a câmera ligada.',
            fix: 'Foque em um único móvel ou canto por vídeo. Menos é mais no formato curto.'
          }
        ],
        practicalExercise: {
          title: 'Exercício 4: Seu Cronograma de Micro-Momentos',
          description: 'Defina em quais dias da semana e horários você irá gravar seus takes de 5 segundos. Preencha seu plano de rotina abaixo.',
          templatePlaceholder: 'Meu plano de gravação:\n- Dias ideais: (ex: Terça, Quinta e Sábado)\n- Horário preferido com boa luz natural: (ex: 9h às 9h30)\n- Primeiras 3 tarefas do cronograma:'
        },
        checklist: [
          'Entendi o conceito de Gravação em Micro-Momentos de 5 a 10 segundos.',
          'Escolhi o melhor horário de luz natural da minha casa.',
          'Preparei um cronograma realista que não atrapalha minhas tarefas diárias.'
        ],
        keySummary: 'Você não precisa parar sua vida de dona de casa para gravar: capture pequenos takes de 5 a 8 segundos das tarefas que já faz naturalmente e junte-os em vídeos estéticos.'
      }
    ]
  },
  {
    id: 2,
    title: 'Módulo 2 — Criando seus Perfis de Sucesso',
    shortTitle: 'Criando Perfis',
    description: 'Como criar contas profissionais no TikTok, YouTube e Facebook, com nomes atraentes e biografias magnéticas prontas para copiar.',
    iconName: 'UserCheck',
    lessons: [
      {
        id: 'm2-a1',
        moduleId: 2,
        lessonNumber: 1,
        title: 'Como Criar e Configurar uma Conta Estratégica no TikTok',
        objective: 'Criar uma conta do zero no TikTok com as configurações certas de privacidade, categoria e otimização para entrega de vídeos.',
        readTime: '7 min de leitura',
        tag: 'TikTok Pro',
        explanation: [
          'O TikTok é a plataforma com a entrega orgânica mais rápida para perfis que estão começando do zero sem seguidores. Se o seu vídeo tiver retenção nos primeiros 3 segundos, ele é distribuído para milhares de pessoas na página "Para Você" (FYP).',
          'Ao criar a conta, você pode optar pela Conta Pessoal ou Conta Corporativa/Criador. Para quem quer usar músicas famosas e em alta em seus vídeos de rotina, a Conta Pessoal (ou de Criador padrão) é recomendada inicialmente porque libera a biblioteca completa de músicas comerciais populares.',
          'Mantenha o perfil 100% público, com download de vídeos ativado e mensagem direta aberta para futuras propostas de marcas e dúvidas de seguidores.'
        ],
        realWorldExamples: [
          {
            title: 'Exemplo: Conta Nova com Viral no 4º Vídeo',
            scenario: 'Perfil criado em uma terça-feira, focado exclusivamente em "organização de armários pequenos". No quarto vídeo postado, o algoritmo entregou para 310 mil usuários da região sudeste.',
            keyTakeaway: 'O nicho bem definido e a falta de vídeos aleatórios anteriores ensinaram o algoritmo em 72 horas quem era o público-alvo.'
          }
        ],
        stepByStep: [
          {
            step: 1,
            title: 'Crie uma conta com e-mail exclusivo para o projeto',
            instruction: 'Crie um Gmail novo (ex: rotina.suanome@gmail.com) para separar suas redes sociais pessoais do seu perfil de criadora.',
            tip: 'Isso evita misturar notificações de amigos e familiares com o seu projeto de renda extra.'
          },
          {
            step: 2,
            title: 'Escolha a opção de Conta de Criador',
            instruction: 'Vá em Perfil -> Menu (3 tracinhos) -> Configurações e Privacidade -> Gerenciar Conta -> Verifique os recursos para criadores.',
            tip: 'Verifique se a análise de dados (Analytics) está disponível para você acompanhar visualizações e retenção.'
          },
          {
            step: 3,
            title: 'Adicione suas preferências de idioma e região',
            instruction: 'Configure Português como idioma primário para garantir que seus vídeos sejam entregues ao público brasileiro.',
            tip: 'Evite usar VPNs ou configurações de país estrangeiro no aplicativo.'
          }
        ],
        commonMistakes: [
          {
            mistake: 'Usar sua conta pessoal antiga cheia de vídeos de família e festas.',
            fix: 'Crie uma conta do zero. O algoritmo do TikTok precisa entender com precisão qual é o tema exclusivo do seu perfil.'
          },
          {
            mistake: 'Seguir centenas de contas de fofoca e comédia na conta do seu projeto.',
            fix: 'Use o perfil novo para consumir apenas conteúdos de casa, limpeza e decoração, treinando o feed para referências úteis.'
          }
        ],
        practicalExercise: {
          title: 'Exercício 1: Criação e Validação da Conta TikTok',
          description: 'Crie seu perfil novo no TikTok (ou separe uma conta exclusiva) e verifique se as configurações de privacidade estão com perfil público e permissão de comentários ativa.',
          templatePlaceholder: 'Nome de usuário escolhido no TikTok: @____________________\nData de criação: ____/____/________'
        },
        checklist: [
          'Criei uma conta nova ou limpa no TikTok.',
          'Defini e-mail exclusivo para o projeto.',
          'Verifiquei que o perfil está público com permissão para comentários.'
        ],
        keySummary: 'O TikTok é seu motor de crescimento rápido. Começar com uma conta limpa e focada no nicho de rotina ensina o algoritmo a encontrar suas futuras seguidoras rapidamente.'
      },
      {
        id: 'm2-a2',
        moduleId: 2,
        lessonNumber: 2,
        title: 'Como Criar um Canal de Sucesso no YouTube Shorts',
        objective: 'Configurar um canal no YouTube voltado para vídeos curtos (Shorts) de rotina doméstica com potencial de monetização a longo prazo.',
        readTime: '8 min de leitura',
        tag: 'YouTube Shorts',
        explanation: [
          'O YouTube é a maior plataforma de vídeos do mundo e pertence ao Google. Uma enorme vantagem do YouTube sobre o TikTok e Instagram é que os vídeos NUNCA morrem: uma pessoa pode pesquisar "como limpar fogão de inox" daqui a 2 anos e o seu vídeo continuará recebendo visualizações e gerando comissões de afiliada.',
          'Com a ferramenta do YouTube Shorts (vídeos verticais de até 60 segundos), você pode reaproveitar exatamente os mesmos vídeos que gravou para o TikTok, sem precisar de trabalho duplo.',
          'Além disso, o programa de monetização do YouTube (AdSense) paga em dólares diretamente na sua conta corrente com estabilidade e regras sólidas.'
        ],
        realWorldExamples: [
          {
            title: 'Exemplo: Vídeo Antigo que Continua Vendendo',
            scenario: 'Short gravado em outubro mostrando a remoção de gordura da air fryer. Mesmo 8 meses depois, recebe entre 50 e 100 visualizações diárias de buscas do Google e continua rendendo comissões no link fixado.',
            keyTakeaway: 'O YouTube funciona como uma biblioteca de pesquisa perpétua.'
          }
        ],
        stepByStep: [
          {
            step: 1,
            title: 'Acesse o YouTube Studio no celular ou computador',
            instruction: 'Entre com a sua conta Google exclusiva do projeto e crie o canal com o mesmo nome de usuário que escolheu para o TikTok.',
            tip: 'Manter o mesmo nome em todas as redes facilita que as pessoas encontrem você em qualquer lugar.'
          },
          {
            step: 2,
            title: 'Configure as palavras-chave do canal',
            instruction: 'No YouTube Studio -> Configurações -> Canal -> Palavras-chave: insira termos como "rotina dona de casa", "limpeza estética", "faxina rápida", "dicas para casa".',
            tip: 'Isso ajuda o mecanismo de busca a classificar seu canal na categoria correta.'
          },
          {
            step: 3,
            title: 'Ative a verificação em duas etapas',
            instruction: 'Cadastre seu número de celular para desbloquear recursos intermediários (como miniaturas personalizadas e vídeos de mais de 15 minutos futuros).',
            tip: 'Canal verificado tem maior autoridade e segurança contra invasões.'
          }
        ],
        commonMistakes: [
          {
            mistake: 'Postar no YouTube com a marca d\'água do TikTok estampada na tela.',
            fix: 'Sempre salve seu vídeo editado original no CapCut antes de enviar para as redes, ou use ferramentas de download sem logo para não ser penalizado pelo algoritmo do YouTube.'
          }
        ],
        practicalExercise: {
          title: 'Exercício 2: Configuração Básica do Canal YouTube',
          description: 'Acesse o YouTube, crie o canal com seu nome do projeto e escreva uma breve descrição de 2 linhas na aba "Sobre".',
          templatePlaceholder: 'Link ou @ do Canal no YouTube: @____________________\nDescrição cadastrada na aba Sobre:'
        },
        checklist: [
          'Canal do YouTube criado com conta profissional.',
          'Nome padronizado igual ao TikTok.',
          'Palavras-chave de busca adicionadas no YouTube Studio.'
        ],
        keySummary: 'O YouTube Shorts dá vida longa aos seus vídeos de rotina: o que você publica hoje continuará gerando visualizações e renda passiva por meses e anos.'
      },
      {
        id: 'm2-a3',
        moduleId: 2,
        lessonNumber: 3,
        title: 'Configurando Perfil Profissional no Instagram e Facebook',
        objective: 'Configurar a conta comercial no Instagram e conectar à página do Facebook para atrair público qualificado e marcas patrocinadoras.',
        readTime: '7 min de leitura',
        tag: 'Meta Ecossistema',
        explanation: [
          'O Instagram é o lugar onde marcas de eletrodomésticos, panos, organizadores e produtos de limpeza mais investem em parcerias e publis pagas.',
          'Para ter acesso aos dados estatísticos e permitir que marcas marquem seu perfil em colaborações pagas, a conta deve ser configurada como "Conta Profissional / Criadora de Conteúdo".',
          'Conectar a página ao Facebook permite que seus vídeos de Reels sejam automaticamente recomendados no feed do Facebook para um público mais maduro (mulheres de 35 a 65 anos), que é extremamente engajado em dicas de casa e compras para o lar.'
        ],
        realWorldExamples: [
          {
            title: 'Exemplo: O Poder do Reels no Facebook',
            scenario: 'Um Reels de organização de geladeira que teve 40 mil visualizações no Instagram atingiu 1,2 milhão de visualizações ao ser recomendado no feed do Facebook com mais de 3.000 comentários de donas de casa elogiando.',
            keyTakeaway: 'O público do Facebook adora compartilhar vídeos úteis para a família, gerando viralização passiva enorme.'
          }
        ],
        stepByStep: [
          {
            step: 1,
            title: 'Mude a conta do Instagram para Criador de Conteúdo',
            instruction: 'Vá em Configurações -> Tipo e ferramentas da conta -> Mudar para conta profissional -> Escolha a categoria "Criador de Conteúdo" ou "Casa e Jardim".',
            tip: 'Isso libera o painel profissional com métricas de contas alcançadas e seguidores.'
          },
          {
            step: 2,
            title: 'Ative o compartilhamento cruzado com o Facebook',
            instruction: 'Em Configurações -> Central de Contas -> Conectar página do Facebook -> Ativar opção "Compartilhar Reels automaticamente no Facebook".',
            tip: 'Com um único clique você publica em duas redes sociais gigantes ao mesmo tempo.'
          },
          {
            step: 3,
            title: 'Configure os destaques essenciais do perfil',
            instruction: 'Crie 3 destaques no perfil: "Links da Casa" (com seus produtos favoritos), "Rotina" (melhores momentos) e "Dicas Práticas".',
            tip: 'Isso transforma visitantes curiosos em compradores dos seus links de afiliada.'
          }
        ],
        commonMistakes: [
          {
            mistake: 'Deixar o perfil do Instagram trancado (privado).',
            fix: 'Seu perfil deve ser obrigatoriamente público para que seus Reels possam ser entregues na aba Explorar.'
          }
        ],
        practicalExercise: {
          title: 'Exercício 3: Mudar para Conta Profissional',
          description: 'Abra as configurações do seu perfil no Instagram e ative o painel profissional como Criadora de Conteúdo.',
          templatePlaceholder: 'Status da conta Instagram: [ ] Conta Profissional Ativada\nCategoria escolhida: ____________________'
        },
        checklist: [
          'Conta do Instagram convertida para Criadora de Conteúdo.',
          'Compartilhamento automático de Reels para o Facebook ativado.',
          'Perfil 100% público com acesso ao painel de estatísticas.'
        ],
        keySummary: 'O Instagram com compartilhamento no Facebook é a maior ponte para parcerias com marcas e viralizações massivas em público feminino interessado em casa.'
      },
      {
        id: 'm2-a4',
        moduleId: 2,
        lessonNumber: 4,
        title: 'Como Escolher Nome, Foto e Biografia Magnética',
        objective: 'Definir uma identidade atrativa e profissional para o seu perfil faceless, com exemplos prontos para copiar e colar.',
        readTime: '9 min de leitura',
        tag: 'Identidade & Copy',
        explanation: [
          'O seu nome de usuário (arroba) e a sua biografia são o cartão de visitas do seu perfil. Quando um vídeo seu viraliza, as pessoas clicam no perfil para decidir em menos de 3 segundos se vão te seguir ou fechar a página.',
          'Como você não vai mostrar o rosto, a sua foto de perfil NÃO precisa ser sua selfie: ela pode ser uma foto aconchegante de uma xícara de café com flores, um cantinho limpo da sua casa, ou um logotipo minimalista elegante.',
          'A biografia deve responder com clareza a três perguntas: 1) O que você posta? 2) Qual sensação quem assiste vai sentir? 3) Onde está o link dos produtos?'
        ],
        realWorldExamples: [
          {
            title: 'Exemplo: Bio Fraca vs Bio Magnética',
            scenario: 'Bio Fraca: "Mãe de 2, casada, gosto de limpeza e Deus no coração". (Não explica o benefício para quem segue)\nBio Magnética: "Transformando o caos diário em paz e rotina limpa 🫧 | Dicas reais para o seu lar | ✨ Meus achadinhos de casa no link abaixo 👇".',
            keyTakeaway: 'A segunda bio atrai seguidores interessados em aprender e comprar recomendações.'
          }
        ],
        stepByStep: [
          {
            step: 1,
            title: 'Escolha um nome simples, sem números aleatórios',
            instruction: 'Prefira combinações fáceis de memorizar. Evite: @maria_silva19827364. Prefira: @rotinadamaria, @cantinho.acolhedor, @paznolar.dicas, @casaorganizada.diario.',
            tip: 'Quanto mais limpo o nome, mais profissional parecerá seu projeto.'
          },
          {
            step: 2,
            title: 'Selecione uma foto de perfil estética e nítida',
            instruction: 'Opções recomendadas: uma xícara de café fumegante sobre a mesa de madeira, uma esponjinha ensaboada com espuma branca ou um buquê de flores simples num vaso de vidro.',
            tip: 'Use iluminação clara para a imagem ficar visível no pequeno círculo da foto de perfil.'
          },
          {
            step: 3,
            title: 'Copie e adapte um dos modelos de biografia testados',
            instruction: 'Escolha um dos 5 modelos prontos fornecidos abaixo e cole no seu perfil com o link da sua bio.',
            tip: 'Adicione um emoji sutil no início de cada linha para guiar a leitura visual.'
          }
        ],
        commonMistakes: [
          {
            mistake: 'Colocar links externos feios e gigantescos que quebram a estética da bio.',
            fix: 'Use um agregador limpo de links (como Beacons, Linktree ou Koji) ou um link encurtado profissional.'
          }
        ],
        practicalExercise: {
          title: 'Exercício 4: Definição da Sua Identidade',
          description: 'Escreva 3 opções de nomes para o seu perfil e selecione o seu modelo favorito de biografia.',
          templatePlaceholder: 'Opção de nome 1: @____________________\nOpção de nome 2: @____________________\nOpção de nome 3: @____________________\nMinha bio definitiva:'
        },
        checklist: [
          'Defini um nome limpo sem excesso de números ou traços.',
          'Escolhi uma foto de perfil temática aconchegante sem necessidade de foto pessoal.',
          'Configurei a biografia com promessa clara e indicação para o link.'
        ],
        readyCopy: [
          'MODELO 1 (Aconchegante e Minimalista):\n🌿 Transformando a rotina do lar em momentos de paz\n✨ Dicas de limpeza & organização sem complicações\n🧺 Vídeos novos todos os dias\n👇 Meus achadinhos favoritos para casa:',
          'MODELO 2 (Prático & Econômico):\n🧼 Casa limpa e cheirosa sem gastar rios de dinheiro\n🧹 Truques caseiros que realmente funcionam\n🏡 Rotina real de dona de casa\n👇 Onde compro meus utensílios favoritos:',
          'MODELO 3 (Foco em Reset & ASMR):\n🫧 Som de água, casa limpa e mente calma\n🕯️ Rotinas matinais e resets noturnos relaxantes\n📦 Achadinhos testados e aprovados\n👇 Encontre tudo o que uso nos vídeos:'
        ],
        keySummary: 'Um nome fácil de lembrar, uma foto de perfil aconchegante e uma biografia com promessa clara são suficientes para transformar visitantes casuais em seguidoras fiéis.'
      }
    ]
  },
  {
    id: 3,
    title: 'Módulo 3 — Gravando sem Mostrar o Rosto (Faceless)',
    shortTitle: 'Gravação Faceless',
    description: 'Aprenda os melhores ângulos, suportes caseiros, iluminação natural e técnicas de áudio para produzir vídeos impecáveis sem aparecer.',
    iconName: 'Camera',
    lessons: [
      {
        id: 'm3-a1',
        moduleId: 3,
        lessonNumber: 1,
        title: 'Como Posicionar o Celular com Suportes Caseiros e Acessíveis',
        objective: 'Dominar o posicionamento firme do smartphone em qualquer cômodo da casa usando objetos do dia a dia ou suportes de baixo custo.',
        readTime: '8 min de leitura',
        tag: 'Estabilidade',
        explanation: [
          'A gravação sem mostrar o rosto (faceless) depende inteiramente da estabilidade da câmera. Um vídeo trêmulo passa amadorismo e causa desconforto visual no espectador.',
          'Para filmar tarefas como lavar louça, varrer ou arrumar a cama, você precisa que o celular fique fixo enquanto seus braços e mãos executam as tarefas livremente.',
          'Você não precisa de tripés pesados de cinema: um suporte flexível tipo polvo (que custa R$ 20 na internet) ou truques caseiros com xícaras, fitas e livros resolvem 100% das suas necessidades de gravação.'
        ],
        realWorldExamples: [
          {
            title: 'Exemplo: O Suporte Magnético de Geladeira',
            scenario: 'Uma criadora colou uma capinha com anel magnético na lateral da geladeira para filmar a pia e o fogão por cima, criando um ângulo aéreo incrível.',
            keyTakeaway: 'O ângulo elevado valorizou a bancada e ocultou o chão que ainda não havia sido varrido.'
          }
        ],
        stepByStep: [
          {
            step: 1,
            title: 'Técnica da Caneca Pesada na Bancada',
            instruction: 'Coloque uma caneca de cerâmica pesada na beirada da pia. Apoie o celular dentro dela ou encostado na borda com uma pequena toalha de apoio para ajustar a inclinação.',
            tip: 'Teste se o celular não escorrega antes de abrir a torneira.'
          },
          {
            step: 2,
            title: 'Técnica do Suporte Garra na Janela ou Prateleira',
            instruction: 'Use um suporte tipo presilha/garra de celular (braço articulado) preso na prateleira acima da pia ou no puxador do armário superior.',
            tip: 'Isso gera o famoso ângulo "Top-Down" (visto de cima), que tem retenção altíssima em vídeos de culinária e limpeza de bancada.'
          },
          {
            step: 3,
            title: 'Sempre faça um vídeo teste de 3 segundos',
            instruction: 'Antes de começar a tarefa, aperte REC, dê dois passos em direção à pia, confira se suas mãos estão no centro da tela e se a imagem não corta o produto.',
            tip: 'Nunca limpe 10 minutos para só depois descobrir que a câmera estava apontada para o teto.'
          }
        ],
        commonMistakes: [
          {
            mistake: 'Deixar o celular em posição inclinada demais, pegando reflexos da lâmpada do teto.',
            fix: 'Ajuste o celular para uma inclinação de 75 a 90 graus em relação à superfície.'
          }
        ],
        practicalExercise: {
          title: 'Exercício 1: Três Pontos de Apoio na Cozinha',
          description: 'Encontre 3 pontos fixos na sua cozinha onde você consegue apoiar o celular virado para a bancada ou fogão com total segurança.',
          templatePlaceholder: 'Ponto de apoio 1: ____________________\nPonto de apoio 2: ____________________\nPonto de apoio 3: ____________________'
        },
        checklist: [
          'Testei o equilíbrio do celular em um apoio caseiro.',
          'Garantir que o celular não corre risco de cair na água ou no chão.',
          'Fiz um teste de 3 segundos para validar o enquadramento das mãos.'
        ],
        keySummary: 'Apoios caseiros firmes garantem que você tenha as duas mãos livres para executar tarefas com naturalidade e perfeição visual.'
      },
      {
        id: 'm3-a2',
        moduleId: 3,
        lessonNumber: 2,
        title: 'Os Melhores Ângulos para Filmar Tarefas Domésticas',
        objective: 'Aprender os 4 ângulos cinematográficos que tornam qualquer tarefa doméstica esteticamente atraente e viciante de assistir.',
        readTime: '9 min de leitura',
        tag: 'Direção de Câmera',
        explanation: [
          'O segredo dos vídeos que viralizam não é a tarefa em si, mas a alternância de ângulos. Se você filmar 40 segundos da mesma posição estática, o espectador cansa e passa para o próximo vídeo.',
          'Ao intercalar 3 ou 4 ângulos diferentes na mesma faxina, seu vídeo ganha ritmo profissional de documentário da Netflix.',
          'Os 4 ângulos fundamentais são: 1) Plano Detalhe (Close-up nas mãos/espuma), 2) Ponto de Vista (POV primeira pessoa), 3) Plano Médio Lateral (mostrando o movimento do braço) e 4) Plano Aéreo (de cima para baixo).'
        ],
        realWorldExamples: [
          {
            title: 'Exemplo: Lavando 3 Pratos com 3 Ângulos',
            scenario: 'Take 1 (3 seg): Celular na lateral pegando o prato ensaboado. Take 2 (2 seg): Close-up macro na água da torneira enxaguando a espuma. Take 3 (2 seg): Celular no escorredor vendo o prato limpo ser posicionado.',
            keyTakeaway: 'Um processo comum de 7 segundos pareceu uma produção audiovisual sofisticada.'
          }
        ],
        stepByStep: [
          {
            step: 1,
            title: 'O Plano Detalhe (Macro)',
            instruction: 'Aproxime o celular a 15-20 centímetros do objeto (ex: a esponja apertando sabão, o botão do fogão girando, o clique da tampa do pote fechando).',
            tip: 'Mantenha o foco travado tocando na tela do celular por 2 segundos até aparecer "Bloqueio AE/AF".'
          },
          {
            step: 2,
            title: 'O Plano P.O.V. (Point of View / Primeira Pessoa)',
            instruction: 'Grave do ponto de vista dos seus próprios olhos, mostrando apenas suas duas mãos esticando o lençol ou passando pano.',
            tip: 'Você pode segurar o celular encostado no queixo ou com uma alça de pescoço barata para gravar em primeira pessoa.'
          },
          {
            step: 3,
            title: 'O Plano Médio no Chão ou Bancada',
            instruction: 'Apoie o celular no chão rente ao rodapé para filmar a vassoura ou o aspirador se aproximando em sua direção.',
            tip: 'Esse ângulo de baixo para cima é super dinâmico e dá sensação de poder à limpeza.'
          }
        ],
        commonMistakes: [
          {
            mistake: 'Fazer movimentos bruscos girando a câmera com a mão.',
            fix: 'A câmera deve ficar parada em cada take; o único movimento deve ser o das suas mãos e objetos.'
          }
        ],
        practicalExercise: {
          title: 'Exercício 2: Gravação dos 3 Ângulos em 1 Tarefa',
          description: 'Escolha uma tarefa rápida (ex: passar café ou guardar os copos). Grave um take de 3 segundos em Plano Detalhe, um de 3 segundos em POV e um de 3 segundos em Plano Médio.',
          templatePlaceholder: 'Tarefa escolhida: ____________________\nSensação após assistir a sequência dos 3 ângulos juntos: ____________________'
        },
        checklist: [
          'Entendi a diferença entre Plano Detalhe, POV e Plano Médio.',
          'Aprendi a travar o foco da câmera (Bloqueio AE/AF).',
          'Gravei 3 takes curtos com ângulos diferentes para testar a dinâmica.'
        ],
        keySummary: 'Variar entre close nas mãos, visão de primeira pessoa e câmera no chão transforma qualquer tarefa comum em um conteúdo dinâmico e hipnótico.'
      },
      {
        id: 'm3-a3',
        moduleId: 3,
        lessonNumber: 3,
        title: 'Como Usar Iluminação Natural sem Gastar com Luzes Caras',
        objective: 'Aproveitar as janelas e a luz do sol da sua casa para conseguir imagens nítidas, quentes e com aspecto de estúdio.',
        readTime: '7 min de leitura',
        tag: 'Iluminação Natural',
        explanation: [
          'A melhor fonte de luz do mundo é totalmente gratuita: o sol. A luz natural difusa (aquela que entra pela janela em dias claros sem o sol queimar direto na lente) tem uma fidelidade de cores que nenhum refletor barato consegue igualar.',
          'O grande segredo da iluminação doméstica é nunca gravar "contra a luz". Quando você aponta a câmera diretamente para uma janela aberta, o fundo fica estourado de branco e tudo na frente fica escuro e sem nitidez (efeito silhueta).',
          'A posição ideal é a "Luz Lateral" ou a "Luz Frontal Suave": a janela fica ao lado ou atrás da câmera, iluminando a sua bancada de frente.'
        ],
        realWorldExamples: [
          {
            title: 'Exemplo: A Janela da Cozinha como Refletor',
            scenario: 'Criadora abriu a cortina branca da cozinha às 9h30 da manhã. A cortina serviu como um difusor gigante de luz suave, eliminando sombras escuras da bancada.',
            keyTakeaway: 'O vídeo parecia ter sido gravado com equipamento profissional de iluminação difusa de R$ 1.500.'
          }
        ],
        stepByStep: [
          {
            step: 1,
            title: 'Identifique a "Janela de Ouro" da sua casa',
            instruction: 'Descubra em qual horário a sua cozinha, sala ou quarto recebe luz clara indireta (geralmente entre 8h e 11h ou entre 14h e 16h30).',
            tip: 'Evite o meio-dia exato em dias de sol forte, pois a luz do zênite cria sombras duras.'
          },
          {
            step: 2,
            title: 'Posicione o celular com a janela ao lado ou atrás',
            instruction: 'A luz deve bater no objeto ou na pia, nunca entrar diretamente na lente da câmera do celular.',
            tip: 'Se a janela estiver na sua frente, use uma cortina fina ou mude o ângulo do celular em 45 graus.'
          },
          {
            step: 3,
            title: 'Use uma cartolina branca ou tábua clara como rebatedor',
            instruction: 'Se um lado da pia estiver com sombra escura, posicione uma cartolina branca comum do lado oposto à janela para rebater a luz natural.',
            tip: 'Esse truque de cinema de R$ 3 clareia sombras instantaneamente.'
          }
        ],
        commonMistakes: [
          {
            mistake: 'Gravar à noite com a lâmpada fluorescente amarelada ou fraca do teto ligada.',
            fix: 'Vídeos noturnos com pouca luz geram ruído e granulação feia na imagem. Priorize sempre o período diurno com luz natural.'
          }
        ],
        practicalExercise: {
          title: 'Exercício 3: Mapeamento de Luz da Sua Casa',
          description: 'Caminhe pela sua casa em dois horários diferentes (de manhã e à tarde). Anote quais cômodos oferecem a melhor luz natural para cada período.',
          templatePlaceholder: 'Melhor cômodo pela manhã (9h): ____________________\nMelhor cômodo à tarde (15h): ____________________'
        },
        checklist: [
          'Entendi que nunca devo apontar a câmera contra a janela aberta.',
          'Identifiquei os horários de luz suave difusa na minha casa.',
          'Aprendi a usar a luz lateral para valorizar texturas de limpeza e organização.'
        ],
        keySummary: 'A luz natural da janela é o seu maior trunfo: grave durante o dia, mantenha a janela na lateral da cena e suas imagens terão nitidez impecável com custo zero.'
      },
      {
        id: 'm3-a4',
        moduleId: 3,
        lessonNumber: 4,
        title: 'Como Gravar Vídeos com Áudio Limpo e Narração em Off',
        objective: 'Capturar sons ambientes relaxantes e aprender a gravar narrações de voz nítidas e acolhedoras usando apenas o microfone do celular.',
        readTime: '8 min de leitura',
        tag: 'Áudio & Narração',
        explanation: [
          'Em vídeos de rotina doméstica, o áudio é responsável por 50% da experiência emocional. Um vídeo silencioso ou com chiado irritante é fechado em segundos.',
          'Existem dois formatos campeões de áudio para criadoras faceless: 1) O Áudio ASMR / Ambiente (apenas os sons reais de água, borrifador, pano e cliques de tampas com uma música suave ao fundo), e 2) A Narração em Off (onde você grava as cenas em silêncio e depois narra por cima pelo aplicativo, contando uma reflexão ou o passo a passo da receita).',
          'Para narrar com voz de veludo sem eco de banheiro, você não precisa de microfone de estúdio: basta gravar seu áudio com o celular perto da boca debaixo de uma coberta ou dentro do guarda-roupa fechado (o melhor isolamento acústico caseiro do mundo!).'
        ],
        realWorldExamples: [
          {
            title: 'Exemplo: A Narração no Guarda-Roupa',
            scenario: 'Aluna gravou 30 segundos de faxina matinal. À noite, sentou no quarto, abriu o guarda-roupa e gravou sua voz pelo CapCut com o microfone do celular a 10 cm dos lábios.',
            keyTakeaway: 'As roupas abafaram todo o eco do quarto, resultando em uma voz quente, íntima e cristalina como de podcast profissional.'
          }
        ],
        stepByStep: [
          {
            step: 1,
            title: 'Desligue ruídos de fundo antes de gravar o som ambiente',
            instruction: 'Desligue ventiladores, televisão da sala e certifique-se de que a máquina de lavar não esteja no ciclo de centrifugação estridente.',
            tip: 'O silêncio do ambiente destaca os sons gostosos da tarefa (água corrente, esponja escorrendo sabão).'
          },
          {
            step: 2,
            title: 'Como gravar a narração pelo CapCut',
            instruction: 'Abra seu projeto editado -> Toque em "Áudio" -> Toque em "Gravar" -> Segure o botão e fale com calma, em tom de conversa de amiga.',
            tip: 'Fale sorrindo levemente; o sorriso muda a vibração da sua voz e soa muito mais acolhedor.'
          },
          {
            step: 3,
            title: 'Ajuste o volume da música de fundo (BGM)',
            instruction: 'Se estiver usando narração, mantenha a música de fundo em volume entre 8% e 12%. Sua voz deve estar sempre nítida em primeiro plano.',
            tip: 'Música alta brigando com a voz faz o espectador desistir de escutar.'
          }
        ],
        commonMistakes: [
          {
            mistake: 'Falar muito longe do celular em um quarto vazio com eco.',
            fix: 'Aproxime o microfone inferior do celular a 10 cm da boca e evite ambientes vazios com piso frio sem tapete.'
          }
        ],
        practicalExercise: {
          title: 'Exercício 4: Teste de Gravação de Narração Caseira',
          description: 'Grave uma mensagem de áudio de 15 segundos no gravador do celular narrando o seguinte texto: "Hoje resolvi fazer um reset rápido na minha cozinha para começar o dia com o coração leve. Vem comigo!". Ouça com fones para testar a clareza.',
          templatePlaceholder: 'Texto narrado com sucesso? A voz soou calma e nítida? Anote suas observações.'
        },
        checklist: [
          'Aprendi a diferença entre vídeo ASMR e vídeo com Narração em Off.',
          'Conheci o truque caseiro do guarda-roupa para eliminar eco de ambiente.',
          'Entendi a proporção correta de volume entre voz e música de fundo.'
        ],
        keySummary: 'Áudio de qualidade é proximidade do microfone e eliminação de ecos. Uma narração calma e acolhedora cria um laço emocional poderoso com suas seguidoras.'
      }
    ]
  },
  {
    id: 4,
    title: 'Módulo 4 — Roteiros & Ideias Práticas que Prendem a Atenção',
    shortTitle: 'Roteiros & Ganchos',
    description: 'A anatomia do vídeo viral, a regra dos 3 segundos, faxinas aceleradas (speed cleaning) e o poder magnético do Antes e Depois.',
    iconName: 'FileText',
    lessons: [
      {
        id: 'm4-a1',
        moduleId: 4,
        lessonNumber: 1,
        title: 'A Anatomia do Vídeo Viral: O Gancho dos 3 Segundos',
        objective: 'Aprender como prender o polegar do usuário no primeiro segundo do vídeo para multiplicar a retenção e a entrega do algoritmo.',
        readTime: '8 min de leitura',
        tag: 'Ganchos Magnéticos',
        explanation: [
          'Nas redes sociais, o usuário rola o feed a uma velocidade média de 1 vídeo a cada 2 segundos. Se nos primeiros 3 segundos nada capturar a curiosidade visual ou auditiva dele, seu vídeo é descartado para sempre.',
          'O "Gancho" (Hook) é a combinação de uma frase na tela + uma ação visual surpreendente nos primeiros momentos. Em vídeos de dona de casa, o gancho pode ser uma frase com a qual todas as mulheres se identificam ("Quando a casa está em ordem, minha mente descansa") ou uma quebra de expectativa ("Não passe pano na casa antes de ver esse truque").',
          'Vídeos que começam com telas pretas, pessoas ajustando o celular ou momentos lentos perdem mais de 80% do público antes do quinto segundo.'
        ],
        realWorldExamples: [
          {
            title: 'Exemplo: O Gancho da Espuma',
            scenario: 'O vídeo começa com a esponja sendo espremida e jorrando espuma branca diretamente na tela com o texto: "O único produto caseiro que tira a gordura amarela do fogão".',
            keyTakeaway: 'Retenção de 78% nos primeiros 5 segundos e mais de 600 mil visualizações.'
          }
        ],
        stepByStep: [
          {
            step: 1,
            title: 'Corte o primeiro segundo morto',
            instruction: 'Corte o momento em que sua mão entra para dar o play na câmera. O vídeo deve começar já no meio do movimento da ação (jogando o produto, abrindo a torneira).',
            tip: 'Ação imediata gera curiosidade instantânea.'
          },
          {
            step: 2,
            title: 'Coloque um texto de gancho no terço superior da tela',
            instruction: 'Use fonte limpa, fundo preto ou branco com sombra, com no máximo 7 a 9 palavras fáceis de ler em 1 segundo.',
            tip: 'Exemplo: "O reset da cozinha que salvou minha segunda-feira".'
          },
          {
            step: 3,
            title: 'Sincronize com um som de impacto sutil',
            instruction: 'Adicione um "swoosh" suave ou comece a música exatamente no primeiro frame do vídeo.',
            tip: 'O estímulo visual e auditivo simultâneo prende a atenção instantaneamente.'
          }
        ],
        commonMistakes: [
          {
            mistake: 'Começar o vídeo dando "Oi meninas, tudo bem com vocês?".',
            fix: 'Nunca gaste os primeiros preciosos segundos com saudações longas. Vá direto para a ação visual da tarefa.'
          }
        ],
        practicalExercise: {
          title: 'Exercício 1: Criando 3 Ganchos para uma Tarefa',
          description: 'Escolha a tarefa de "Limpeza do Banheiro". Escreva 3 frases diferentes de gancho para colocar na tela nos primeiros 3 segundos.',
          templatePlaceholder: 'Gancho 1 (Curiosidade): ____________________\nGancho 2 (Identificação emocional): ____________________\nGancho 3 (Praticidade/Dica rápida): ____________________'
        },
        checklist: [
          'Entendi a regra crucial dos 3 primeiros segundos.',
          'Eliminei segundos mortos no início da gravação.',
          'Escrevi ganchos curtos de até 9 palavras com alto impacto.'
        ],
        readyCopy: [
          '• "Como eu mantenho a pia sempre brilhando sem esforço"',
          '• "30 minutos de faxina que me devolvem a paz mental"',
          '• "Pare de sofrer para tirar o queimado da panela: faça isso"',
          '• "Meu reset noturno para acordar com a casa cheirosa"'
        ],
        keySummary: 'O primeiro segundo decide o sucesso do vídeo: comece no meio da ação, insira um texto magnético e nunca perca tempo com apresentações compridas.'
      },
      {
        id: 'm4-a2',
        moduleId: 4,
        lessonNumber: 2,
        title: 'Speed Cleaning: Faxinas Aceleradas e Magnéticas',
        objective: 'Criar vídeos de limpeza rápida e dinâmica em velocidade 2x/3x que geram efeito viciante e altíssima taxa de conclusão.',
        readTime: '7 min de leitura',
        tag: 'Speed Cleaning',
        explanation: [
          'O formato de Speed Cleaning (faxina acelerada) é um dos queridinhos das redes sociais. Ver uma bancada cheia de louça ser organizada em 25 segundos gera uma descarga de dopamina em quem assiste.',
          'Para que a faxina acelerada não pareça confusa ou poluída, você deve organizar as ações em blocos lógicos: Recolher o lixo -> Ensaboar -> Enxaguar -> Secar com pano microfibra.',
          'O ritmo do corte deve acompanhar a música escolhida, criando uma dança rítmica entre os movimentos de limpeza e os acordes sonoros.'
        ],
        realWorldExamples: [
          {
            title: 'Exemplo: O Speed Clean de 20 Segundos da Pia',
            scenario: 'Vídeo composto por 6 takes de 3 segundos cada em velocidade 2.5x: 1) Tirando os pratos sujos; 2) Borrifando desengordurante; 3) Esfregando com esponja; 4) Água corrente levando a espuma; 5) Passando pano seco no inox; 6) Colocando um difusor aromático.',
            keyTakeaway: 'Vídeo com taxa de retenção de 92% e mais de 15.000 salvamentos.'
          }
        ],
        stepByStep: [
          {
            step: 1,
            title: 'Planeje os 5 passos da faxina antes de gravar',
            instruction: 'Defina a ordem exata: 1. Antes caótico, 2. Limpeza pesada, 3. Enxágue, 4. Secagem/Acabamento, 5. Toque de perfume ou aconchego final.',
            tip: 'Ter a sequência clara evita parar para pensar com o celular gravando.'
          },
          {
            step: 2,
            title: 'Acelere as partes longas entre 2x e 3x',
            instruction: 'No editor do celular (CapCut), selecione o clipe e aumente a velocidade para 2.0x ou 2.5x para manter os movimentos fluidos e ágeis.',
            tip: 'Velocidades acima de 5x ficam tremidas e perdem a sensação estética gostosa.'
          },
          {
            step: 3,
            title: 'Finalize com o "Toque Estético de 2 Segundos"',
            instruction: 'Após limpar, coloque uma vela aromática, acenda um incenso, ou posicione um paninho dobrado perfeitamente.',
            tip: 'O fechamento estético é o que deixa o espectador satisfeito e com vontade de curtir.'
          }
        ],
        commonMistakes: [
          {
            mistake: 'Fazer o vídeo muito longo com mais de 90 segundos para uma tarefa simples.',
            fix: 'Mantenha o vídeo curto (entre 25 e 45 segundos). Quanto menor e mais dinâmico, mais vezes o usuário assiste em loop.'
          }
        ],
        practicalExercise: {
          title: 'Exercício 2: Roteiro do seu Primeiro Speed Clean',
          description: 'Escreva a lista dos 5 pequenos takes que você vai gravar para o seu primeiro vídeo de Speed Cleaning (máximo 40 segundos no total).',
          templatePlaceholder: 'Take 1 (Antes): ____________________\nTake 2 (Aplicação do produto): ____________________\nTake 3 (Ação da esponja/pano): ____________________\nTake 4 (Enxágue e brilho): ____________________\nTake 5 (Toque final de aconchego): ____________________'
        },
        checklist: [
          'Entendi a estrutura de 5 passos do Speed Cleaning.',
          'Configurei a velocidade acelerada em 2x ou 2.5x no editor.',
          'Incluí o momento final de aconchego e recompensa visual.'
        ],
        keySummary: 'O Speed Cleaning comprime minutos de esforço em segundos de puro prazer visual. Acelerar de forma suave e finalizar com um toque acolhedor garante salvamentos e compartilhamentos.'
      },
      {
        id: 'm4-a3',
        moduleId: 4,
        lessonNumber: 3,
        title: 'Rotinas Matinais e Noturnas Minimalistas ("Reset do Lar")',
        objective: 'Construir narrativas de "Reset" matinal e noturno que conectam com os sentimentos de calma, bem-estar e renovação das donas de casa.',
        readTime: '8 min de leitura',
        tag: 'Reset Doméstico',
        explanation: [
          'O termo "Reset" (reiniciar) tornou-se uma das tendências mais poderosas da internet. A ideia é preparar o ambiente da casa para que a manhã seguinte comece leve, sem acúmulo de estresse.',
          'Enquanto a faxina pesada mostra sujeira pesada, o Reset foca no cuidado, na ordem sutil e na harmonia: apagar as luzes, deixar a pia limpa com um pano seco, acender uma vela, ajeitar as almofadas do sofá e ligar o difusor de lavanda.',
          'Esse tipo de conteúdo gera identificação profunda e comentários afetuosos de mulheres que buscam paz mental no encerramento de dias agitados.'
        ],
        realWorldExamples: [
          {
            title: 'Exemplo: O "Fechando a Cozinha às 21h"',
            scenario: 'Vídeo com iluminação baixa e acolhedora: 1) Guardando a última louça do escorredor; 2) Passando pano com cheirinho na bancada; 3) Apagando a luz da cozinha e deixando apenas uma lâmpada quente acesa.',
            keyTakeaway: 'Texto na tela: "Nada melhor do que acordar amanhã e ver a cozinha em paz". 420 mil views e 8.000 compartilhamentos no WhatsApp.'
          }
        ],
        stepByStep: [
          {
            step: 1,
            title: 'Crie uma atmosfera de iluminação quente',
            instruction: 'À noite, evite a luz branca forte do teto. Use um abajur, fita de LED ou a luz indireta de outro cômodo para criar clima cinematográfico.',
            tip: 'A iluminação quente passa aconchego imediato para o cérebro de quem assiste.'
          },
          {
            step: 2,
            title: 'Grave movimentos lentos e tranquilos',
            instruction: 'Diferente do Speed Cleaning acelerado, no Reset Noturno os movimentos devem ser serenos, suaves e com sons relaxantes.',
            tip: 'Sem pressa: valorize a dobra de uma manta ou o vapor suave do difusor.'
          },
          {
            step: 3,
            title: 'Finalize com o fechamento do ciclo',
            instruction: 'A última cena deve ser você apagando o interruptor ou fechando a porta com suavidade.',
            tip: 'Isso sinaliza para o espectador o fim do dia e a sensação de dever cumprido.'
          }
        ],
        commonMistakes: [
          {
            mistake: 'Tentar mostrar o apartamento inteiro num único vídeo de reset.',
            fix: 'Foque em um único cômodo: "Reset da Cozinha", "Reset da Sala" ou "Reset do Quarto das Crianças".'
          }
        ],
        practicalExercise: {
          title: 'Exercício 3: Seu Roteiro de Reset Noturno',
          description: 'Escreva quais 4 pequenas ações você faz antes de dormir que deixam sua casa pronta para a manhã seguinte.',
          templatePlaceholder: 'Minhas 4 ações de reset:\n1.\n2.\n3.\n4.'
        },
        checklist: [
          'Entendi a proposta emocional do conceito de "Reset do Lar".',
          'Aprendi a usar luz indireta suave para vídeos noturnos.',
          'Escrevi meu roteiro de 4 ações de encerramento do dia.'
        ],
        keySummary: 'O Reset Noturno é o remédio contra a ansiedade da rotina moderna: poucas luzes, movimentos suaves e a doce sensação de deixar a casa descansando em paz.'
      },
      {
        id: 'm4-a4',
        moduleId: 4,
        lessonNumber: 4,
        title: 'O Poder Magnético do "Antes e Depois" de Armários e Gavetas',
        objective: 'Aprender a contrastar o caos com a ordem de maneira visualmente irresistível, estimulando salvamentos e compras de organizadores.',
        readTime: '7 min de leitura',
        tag: 'Antes & Depois',
        explanation: [
          'O cérebro humano é programado para notar contrastes. Quando apresentamos uma imagem caótica (uma gaveta de talheres desarrumada, potes plásticos sem tampa caindo) seguida de uma transição suave para um ambiente impecável, o impacto é instantâneo.',
          'Vídeos de organização de armários e gavetas são os maiores campeões de vendas como afiliada, porque quem assiste imediatamente quer comprar as caixas organizadoras, cestas de acrílico ou etiquetas que você usou.',
          'Você não precisa de armários de marcenaria cara: potes de maionese higienizados, caixas de papelão encapadas ou cestinhas de R$ 5 compradas em lojas populares funcionam com louvor.'
        ],
        realWorldExamples: [
          {
            title: 'Exemplo: Gaveta de Pano de Prato com Dobra Envelope',
            scenario: 'Antes: Panos amontoados e amassados. Depois: Panos dobrados em rolinho ou envelope alinhados por cor.',
            keyTakeaway: 'O vídeo gerou 340 comentários perguntando como fazer a dobra e onde encontrar as divisórias de gaveta.'
          }
        ],
        stepByStep: [
          {
            step: 1,
            title: 'Fotografe e filme o "Antes" sem medo da bagunça',
            instruction: 'Apoie o celular e filme 3 segundos da gaveta ou prateleira desorganizada antes de tocar em qualquer coisa.',
            tip: 'Quanto mais realista for a bagunça inicial, mais grandioso será o impacto do depois.'
          },
          {
            step: 2,
            title: 'Esvazie e limpe o fundo do móvel',
            instruction: 'Grave tirando tudo de dentro e passando um paninho com álcool perfumado no fundo da gaveta limpa.',
            tip: 'A limpeza do móvel vazio mostra capricho e cuidado aos detalhes.'
          },
          {
            step: 3,
            title: 'Acomode os itens com ritmo satisfatório',
            instruction: 'Grave cada cesto ou pote sendo colocado no lugar com pequenos "cliques" e encaixes perfeitos.',
            tip: 'Termine abrindo a gaveta em movimento suave para exibir o resultado final impecável.'
          }
        ],
        commonMistakes: [
          {
            mistake: 'Fazer o "Antes" parecer uma encenação forçada jogando coisas no chão.',
            fix: 'Mostre a bagunça real da rotina diária que qualquer família acumula naturalmente.'
          }
        ],
        practicalExercise: {
          title: 'Exercício 4: Escolha sua Primeira Gaveta Desafio',
          description: 'Identifique na sua casa a gaveta ou prateleira que mais precisa de organização hoje (potes, temperos, maquiagens ou panos). Planeje a gravação do seu Antes e Depois.',
          templatePlaceholder: 'Local escolhido: ____________________\nItens organizadores que vou usar (cestos, potes, divisórias): ____________________'
        },
        checklist: [
          'Gravei o "Antes" com o celular bem posicionado.',
          'Mostrei a higienização do fundo da gaveta ou prateleira.',
          'Filmei o "Depois" com iluminação frontal e alinhamento impecável.'
        ],
        keySummary: 'O contraste entre bagunça e alinhamento desperta desejo instantâneo de organização e é a melhor alavanca para vendas de produtos organizadores.'
      }
    ]
  },
  {
    id: 5,
    title: 'Módulo 5 — Edição Simples e Rápida no Celular (CapCut / InShot)',
    shortTitle: 'Edição no Celular',
    description: 'Como cortar pausas, acelerar partes longas, inserir legendas automáticas elegantes e escolher trilhas sonoras livres de direitos.',
    iconName: 'Scissors',
    lessons: [
      {
        id: 'm5-a1',
        moduleId: 5,
        lessonNumber: 1,
        title: 'Cortando Pausas e Momentos Mortos sem Travar o Editor',
        objective: 'Dominar a ferramenta de corte (Split/Dividir) para eliminar segundos inúteis e dar fluidez dinâmica ao seu vídeo.',
        readTime: '8 min de leitura',
        tag: 'Cortes Precisos',
        explanation: [
          'A edição não é sobre colocar efeitos especiais chamativos; é sobre tirar o que não presta. Uma boa editora é uma lapidadora: ela descarta 80% do material gravado para deixar apenas os 20% mais brilhantes.',
          'Em um vídeo de rotina doméstica, momentos mortos incluem: sua mão estendendo para apertar o botão de parar, você parada pensando no que pegar a seguir, ou 8 segundos esfregando o mesmo prato sem variação.',
          'Ao cortar esses excessos com a ferramenta "Dividir" do CapCut ou InShot, seu vídeo ganha energia e o espectador sente que o tempo voa enquanto assiste.'
        ],
        realWorldExamples: [
          {
            title: 'Exemplo: Transformando 5 Minutos em 32 Segundos',
            scenario: 'Uma gravação de lavar louça de 5 minutos foi fatiada em 11 micro-clipes de 2 a 3 segundos cada.',
            keyTakeaway: 'O resultado final foi um vídeo conciso, sem nenhum momento de tédio, com retenção acima de 85%.'
          }
        ],
        stepByStep: [
          {
            step: 1,
            title: 'Importe seus clipes na linha do tempo do CapCut',
            instruction: 'Abra o CapCut -> Novo Projeto -> Selecione os takes na ordem cronológica da sua tarefa -> Toque em Adicionar.',
            tip: 'Verifique se o formato do projeto está em 9:16 (vertical para redes sociais).'
          },
          {
            step: 2,
            title: 'Encontre o início e o fim de cada movimento útil',
            instruction: 'Posicione a linha branca exatamente onde a ação começa (ex: a água batendo na esponja) -> Toque em "Dividir" -> Apague o pedaço anterior inútil.',
            tip: 'Faça o mesmo no final do movimento, antes da sua mão ir em direção ao celular.'
          },
          {
            step: 3,
            title: 'Mantenha cada corte com duração entre 1.5 e 3.5 segundos',
            instruction: 'Cortes com essa duração mantêm a mente do espectador atenta e renovada a cada mudança de cena.',
            tip: 'Em tarefas mais calmas (como passar café), os cortes podem ter até 4 ou 5 segundos.'
          }
        ],
        commonMistakes: [
          {
            mistake: 'Colocar transições chamativas (como estrelinhas ou giros 3D) entre cada corte.',
            fix: 'Em vídeos de rotina elegante, o melhor corte é o corte seco (sem transição) ou um suave "Dissolver" de 0.2 segundos.'
          }
        ],
        practicalExercise: {
          title: 'Exercício 1: Lapidando 3 Vídeos no CapCut',
          description: 'Grave 3 takes aleatórios na sua casa com 10 segundos cada. Abra o CapCut e corte cada um para ficar com exatos 2 segundos de pura ação.',
          templatePlaceholder: 'Tempo total inicial: 30 segundos\nTempo final após cortes precisos: 6 segundos\nSentiu a diferença de dinamismo?'
        },
        checklist: [
          'Instalei o CapCut gratuitamente no meu celular.',
          'Aprendi a usar a ferramenta "Dividir" e "Excluir".',
          'Eliminei segundos mortos no início e fim de cada clipe.'
        ],
        keySummary: 'Editar bem é saber o que apagar. Cortes secos e precisos eliminam o tédio e transformam qualquer tarefa caseira em uma sequência viciante.'
      },
      {
        id: 'm5-a2',
        moduleId: 5,
        lessonNumber: 2,
        title: 'Ajuste de Velocidade (Speed Ramp e 2x/3x) para Vídeos Estéticos',
        objective: 'Controlar a velocidade de reprodução dos clipes para criar variações entre momentos rápidos e detalhes relaxantes.',
        readTime: '7 min de leitura',
        tag: 'Velocidade & Ritmo',
        explanation: [
          'A aceleração de vídeo é a ferramenta mais usada em vídeos de dona de casa. Ela permite mostrar uma faxina inteira sem que o vídeo fique cansativo.',
          'No CapCut, você tem duas opções de velocidade: "Normal" (onde você acelera o clipe inteiro de forma constante, como 2.0x ou 3.0x) e "Curva" (onde o clipe começa rápido e desacelera suavemente no ponto de impacto, conhecido como Speed Ramp).',
          'O contraste entre uma tarefa rápida e um momento em velocidade normal (1.0x) no final valoriza o capricho da dona de casa.'
        ],
        realWorldExamples: [
          {
            title: 'Exemplo: O Enxágue em Câmera Normal',
            scenario: 'Esfregar a panela: acelerado em 3x. Momento em que a água corre e revela o fundo brilhando sem gordura: velocidade normal em 1.0x com som cristalino.',
            keyTakeaway: 'Essa quebra de velocidade gera alívio e satisfação máxima em quem assiste.'
          }
        ],
        stepByStep: [
          {
            step: 1,
            title: 'Selecione o clipe que deseja acelerar',
            instruction: 'Toque no clipe na linha do tempo -> Selecione o ícone de relógio "Velocidade" no menu inferior.',
            tip: 'Escolha a opção "Normal" para faxinas e tarefas mecânicas.'
          },
          {
            step: 2,
            title: 'Ajuste o cursor entre 2x e 3x',
            instruction: 'Arraste para 2.0x ou 2.5x. Ative a opção "Tonalidade" se quiser manter o som original com tom corrigido, ou desative o áudio do clipe para colocar música.',
            tip: 'Para tarefas muito longas (como passar aspirador na sala inteira), você pode testar 4x.'
          },
          {
            step: 3,
            title: 'Mantenha os detalhes finais em velocidade 1.0x',
            instruction: 'O último take do seu vídeo (colocando o vasinho de flor ou admirando o balcão) deve ser sempre na velocidade normal ou leve câmera lenta (0.8x).',
            tip: 'Isso desacelera o ritmo cardíaco de quem assiste e deixa uma sensação de paz.'
          }
        ],
        commonMistakes: [
          {
            mistake: 'Acelerar tudo em 10x parecendo um filme antigo e confuso.',
            fix: 'Acelere apenas o suficiente para dar agilidade, sem perder os detalhes estéticos da mão e do produto.'
          }
        ],
        practicalExercise: {
          title: 'Exercício 2: Aplicando Aceleração 2.5x',
          description: 'Pegue um vídeo de 15 segundos varrendo a cozinha e aplique a velocidade de 2.5x no CapCut. Observe como ele se reduz para 6 segundos com fluidez.',
          templatePlaceholder: 'Velocidade testada: [ ] 2.0x  [ ] 2.5x  [ ] 3.0x\nObservação sobre o ritmo do vídeo:'
        },
        checklist: [
          'Localizei o menu "Velocidade" no CapCut.',
          'Apliquei aceleração de 2x a 3x em tarefas mecânicas.',
          'Conservei os takes de detalhes e finalização na velocidade normal.'
        ],
        keySummary: 'Acelere as tarefas repetitivas e mantenha a velocidade normal nos momentos de resultado e detalhes. Esse contraste é o segredo do ritmo magnético.'
      },
      {
        id: 'm5-a3',
        moduleId: 5,
        lessonNumber: 3,
        title: 'Legendas Automáticas Elegantes e Fontes Minimalistas',
        objective: 'Gerar legendas automáticas com 1 clique e estilizá-las com tipografia limpa e moderna que agrada o algoritmo e pessoas que assistem no mudo.',
        readTime: '8 min de leitura',
        tag: 'Legendas Estéticas',
        explanation: [
          'Mais de 65% das pessoas no Instagram e TikTok assistem a vídeos com o som desligado no transporte público, no trabalho ou com os filhos dormindo no quarto. Se o seu vídeo não tiver texto na tela, você perde mais da metade do seu público.',
          'Além disso, o algoritmo das redes lê o texto na tela para categorizar seu vídeo e entregá-lo para quem tem interesse no assunto (ex: pessoas que buscam "dicas de casa").',
          'O CapCut possui uma ferramenta gratuita fantástica chamada "Legendas Automáticas", que transcreve sua narração em menos de 10 segundos com precisão.'
        ],
        realWorldExamples: [
          {
            title: 'Exemplo: O Estilo de Legenda Clean',
            scenario: 'Fonte: Montserrat ou Futura em caixa alta, tamanho médio, cor branca com contorno preto sutil de 2% ou fundo cinza translúcido.',
            keyTakeaway: 'A legenda ficou 100% legível em qualquer fundo de azulejo ou pia sem poluir a imagem.'
          }
        ],
        stepByStep: [
          {
            step: 1,
            title: 'Gere as legendas automáticas no CapCut',
            instruction: 'Toque na ferramenta "Texto" -> Toque em "Legendas Automáticas" -> Selecione o idioma Português -> Toque em Iniciar.',
            tip: 'O aplicativo transcreverá tudo o que você falou no áudio em instantes.'
          },
          {
            step: 2,
            title: 'Corrija erros de pontuação e ortografia',
            instruction: 'Toque em "Edição em Lote" para revisar rapidamente se o aplicativo entendeu todas as palavras corretamente.',
            tip: 'Erros de português diminuem a credibilidade do seu perfil perante marcas.'
          },
          {
            step: 3,
            title: 'Aplique um estilo minimalista elegante',
            instruction: 'Toque em "Estilo" -> Escolha uma fonte moderna e sem serifa (ex: Arial, Montserrat, Helvetica) -> Tamanho 9 a 11 -> Centralizado no meio da tela.',
            tip: 'Evite fontes infantis com contornos coloridos fluorescentes que poluem a tela.'
          }
        ],
        commonMistakes: [
          {
            mistake: 'Colocar a legenda muito embaixo da tela, onde os botões do TikTok (curtir, comentar) cobrem o texto.',
            fix: 'Posicione a legenda um pouco acima do rodapé, na chamada "Zona Segura" (Safe Zone).'
          }
        ],
        practicalExercise: {
          title: 'Exercício 3: Estilizando sua Primeira Legenda',
          description: 'Grave um áudio de 10 segundos falando sobre seu produto de limpeza favorito, gere as legendas automáticas e teste 2 estilos de fonte diferentes.',
          templatePlaceholder: 'Fonte escolhida: ____________________\nPosicionamento na zona segura verificado? [ ] Sim'
        },
        checklist: [
          'Gerei legendas automáticas pelo CapCut.',
          'Revisei o texto na Edição em Lote.',
          'Escolhi uma fonte limpa e posicionei na Zona Segura da tela.'
        ],
        keySummary: 'Legendas retêm quem assiste sem som e reforçam o SEO para o algoritmo. Use fontes minimalistas e mantenha o texto na área central segura.'
      },
      {
        id: 'm5-a4',
        moduleId: 5,
        lessonNumber: 4,
        title: 'Trilhas Sonoras em Alta e Efeitos Sutis sem Direitos Autorais',
        objective: 'Escolher músicas que ajudam o vídeo a ser impulsionado pelo algoritmo sem correr risco de ter o áudio silenciado por direitos autorais.',
        readTime: '8 min de leitura',
        tag: 'Trilha Sonora',
        explanation: [
          'O som certo é o tempero que une todas as cenas do seu vídeo. Uma música acústica relaxante de violão ou um lofi suave de cafeteria transmite paz instantânea para quem está assistindo à sua rotina.',
          'Usar "Sons em Alta" (Trending Sounds) no TikTok e no Instagram faz o algoritmo entender que o seu vídeo faz parte de uma conversa que está bombando no momento, aumentando a chance de ser sugerido para novos públicos.',
          'No entanto, você deve ter cuidado com músicas comerciais bloqueadas: sempre adicione a música final diretamente pela biblioteca nativa do TikTok ou Instagram na hora de postar, garantindo que o áudio nunca seja silenciado.'
        ],
        realWorldExamples: [
          {
            title: 'Exemplo: O Som do Café que Bateu 1 Milhão',
            scenario: 'Uma música acústica instrumental suave com notas de piano e violão que estava no Top 10 sons virais do momento serviu de fundo para um vídeo simples de arrumar a cama.',
            keyTakeaway: 'O vídeo pegou carona na onda do som viral e alcançou 1,4 milhão de visualizações em 5 dias.'
          }
        ],
        stepByStep: [
          {
            step: 1,
            title: 'Como encontrar músicas em alta no nicho de casa',
            instruction: 'No TikTok, digite na busca "Clean With Me Sound" ou "Rotina Som" e filtre por vídeos postados na última semana com alto número de curtidas.',
            tip: 'Toque no disquinho girando no canto inferior direito do vídeo e salve o som em "Favoritos".'
          },
          {
            step: 2,
            title: 'Adicione efeitos sonoros sutis (SFX) no CapCut',
            instruction: 'Em momentos de impacto (como o clique da tampa de um pote ou a borrifada de um spray), adicione um efeito sonoro curto em "Áudio -> Efeitos".',
            tip: 'Efeitos sonoros sutis dão acabamento profissional de cinema ao vídeo.'
          },
          {
            step: 3,
            title: 'Ajuste o balanço de volume',
            instruction: 'Vídeo só com música: volume da música em 60% a 80%. Vídeo com voz/narração: volume da música em 10% a 15% e voz em 100%.',
            tip: 'O equilíbrio perfeito evita que o som fique estridente no fone de ouvido de quem escuta.'
          }
        ],
        commonMistakes: [
          {
            mistake: 'Colocar músicas de balada agitadas ou batidas pesadas em vídeos de organização relaxante.',
            fix: 'A música deve combinar com a energia do cômodo: prefira acústico, jazz suave, MPB instrumental ou lofi calmo.'
          }
        ],
        practicalExercise: {
          title: 'Exercício 4: Sua Playlist de 3 Músicas Ideais',
          description: 'Abra o TikTok ou Instagram e salve 3 sons instrumentais calmos que você acha que combinam com o estilo acolhedor da sua casa.',
          templatePlaceholder: 'Som 1: ____________________\nSom 2: ____________________\nSom 3: ____________________'
        },
        checklist: [
          'Aprendi a salvar sons em alta nos Favoritos do TikTok e Instagram.',
          'Entendi a proporção de volume entre música e narração.',
          'Conheci a biblioteca de efeitos sonoros (SFX) do CapCut.'
        ],
        keySummary: 'A música dita o sentimento do vídeo. Escolha sons em alta instrumentais calmos e combine com efeitos sutis para encantar e viralizar.'
      }
    ]
  },
  {
    id: 6,
    title: 'Módulo 6 — O Poder do ASMR Doméstico',
    shortTitle: 'ASMR Doméstico',
    description: 'Como explorar sons viciantes de limpeza (esponjas, água, borrifadores e cliques) para criar vídeos que prendem a atenção sem falar uma palavra.',
    iconName: 'Volume2',
    lessons: [
      {
        id: 'm6-a1',
        moduleId: 6,
        lessonNumber: 1,
        title: 'O Que É ASMR de Rotina e Por Que Viraliza Tanto',
        objective: 'Compreender a psicologia por trás dos sons relaxantes de tarefas domésticas e como eles ativam a sensação de calma e satisfação.',
        readTime: '7 min de leitura',
        tag: 'Ciência do ASMR',
        explanation: [
          'ASMR (Resposta Sensorial Meridiana Autônoma) é uma resposta biológica de formigamento agradável e relaxamento profundo desencadeada por sons suaves, rítmicos e repetitivos.',
          'No universo de casa e organização, o ASMR é uma febre mundial: o barulho do pano deslizando no espelho, a espuma da esponja sendo espremida com água morna, o som seco de uma lixeira de pedal fechando ou o clique do borrifador.',
          'Para quem tem vergonha ou não gosta da própria voz, o ASMR é o formato perfeito: você não precisa falar absolutamente nada! O protagonista do vídeo é 100% o som dos materiais e a tarefa sendo realizada com maestria.'
        ],
        realWorldExamples: [
          {
            title: 'Exemplo: Vídeo de 18 Segundos de Esponja e Sabão',
            scenario: 'Sem nenhuma música, apenas o som nítido da esponja esfregando o fundo da pia de inox e o jato de água enxaguando a espuma.',
            keyTakeaway: 'Mais de 1,8 milhão de visualizações e milhares de comentários pedindo: "Por favor, posta um de 10 minutos para eu dormir".'
          }
        ],
        stepByStep: [
          {
            step: 1,
            title: 'Aproxime o microfone do celular da fonte do som',
            instruction: 'Quando for filmar a esponja ou a torneira, posicione o celular a cerca de 15 a 25 cm de distância para captar o áudio com volume limpo.',
            tip: 'Cuidado apenas com respingos de água no microfone.'
          },
          {
            step: 2,
            title: 'Execute os movimentos com firmeza e ritmo constante',
            instruction: 'Não tenha pressa. Movimentos constantes geram um som ritmado que acalma o cérebro do espectador.',
            tip: 'O segredo do ASMR é a ausência de solavancos ou barulhos estridentes repentinos.'
          },
          {
            step: 3,
            title: 'Remova ruídos externos na edição',
            instruction: 'No CapCut, selecione o clipe de áudio e ative a opção "Reduzir Ruído" para eliminar pequenos chiados de fundo.',
            tip: 'Isso limpa o áudio e destaca apenas o som puro da limpeza.'
          }
        ],
        commonMistakes: [
          {
            mistake: 'Bater panelas ou soltar tampas com força causando susto em quem está de fone.',
            fix: 'Todos os sons devem ser suaves, aconchegantes e intencionais.'
          }
        ],
        practicalExercise: {
          title: 'Exercício 1: Identificando os 4 Sons mais Gostosos da Sua Casa',
          description: 'Caminhe pela sua cozinha e teste 4 sons diferentes. Anote quais produziram o som mais nítido e relaxante perto do microfone.',
          templatePlaceholder: 'Som 1: (ex: borrifador de spray) ____________________\nSom 2: (ex: água na pia) ____________________\nSom 3: (ex: esponja espremida) ____________________\nSom 4: (ex: pote com trava fechando) ____________________'
        },
        checklist: [
          'Entendi o conceito e a atratividade do formato ASMR.',
          'Compreendi que não preciso falar uma palavra nesse formato.',
          'Aprendi a aproximar o microfone da fonte sonora sem ruídos bruscos.'
        ],
        keySummary: 'O ASMR transforma a tarefa mais corriqueira em um deleite sonoro relaxante. É a melhor porta de entrada para quem quer criar conteúdo sem falar ou aparecer.'
      },
      {
        id: 'm6-a2',
        moduleId: 6,
        lessonNumber: 2,
        title: 'Sons que Viralizam: Esponja, Água, Borrifador e Potes',
        objective: 'Conhecer os 5 elementos sonoros com maior poder de retenção e como explorá-los em vídeos de até 60 segundos.',
        readTime: '8 min de leitura',
        tag: 'Sons Magnéticos',
        explanation: [
          'Nem todo som de casa é agradável. O som estridente de um liquidificador ou aspirador de pó com motor velho afasta o público. Por outro lado, existem sons específicos que o cérebro humano adora.',
          'Os 4 campeões absolutos de engajamento no nicho doméstico são: 1) O som úmido da espuma densa sendo comprimida nas mãos; 2) O som do clique de tampas herméticas com trava de silicone; 3) O spray do borrifador com névoa fina; e 4) O atrito macio do pano de microfibra lustrando vidro ou espelho.',
          'Ao combinar esses 4 sons em uma sequência rápida, você cria uma composição musical natural da sua própria casa.'
        ],
        realWorldExamples: [
          {
            title: 'Exemplo: A Sequência dos 4 Cliques',
            scenario: 'Vídeo organizando temperos em potes de vidro idênticos com colherzinha de bambu. Cada pote fechado dava um "tock" seco e satisfatório.',
            keyTakeaway: 'O vídeo gerou mais de 800 comentários elogiando o som e pedindo o link da Shopee dos potes organizadores.'
          }
        ],
        stepByStep: [
          {
            step: 1,
            title: 'Use o sabão certo para gerar som espumoso',
            instruction: 'Detergente concentrado com um pinguinho de água na esponja cria bolhas grossas com som crocante e úmido.',
            tip: 'Aperte a esponja duas ou três vezes perto da câmera para captar a espuma inflando.'
          },
          {
            step: 2,
            title: 'Explore o som de borrifadores de qualidade',
            instruction: 'Borrifadores com válvula gatilho contínua produzem um som de pressão prolongado super estético.',
            tip: 'Borrife na superfície a cerca de 20 cm para criar uma névoa homogênea e bonita.'
          },
          {
            step: 3,
            title: 'Monte a sequência rítmica na edição',
            instruction: 'Corte cada som exatamente no pico de intensidade (1 segundo por som) e intercale: Spray -> Esponja -> Água -> Pano seco.',
            tip: 'Essa alternância rápida é o formato perfeito para vídeos virais de 15 segundos.'
          }
        ],
        commonMistakes: [
          {
            mistake: 'Colocar música alta por cima de um vídeo que foi gravado para ser ASMR.',
            fix: 'No ASMR puro, não use música de fundo ou mantenha-a em no máximo 3% de volume quase imperceptível.'
          }
        ],
        practicalExercise: {
          title: 'Exercício 2: Gravação da Sequência dos 4 Sons',
          description: 'Grave um take de 3 segundos com cada um dos 4 sons: Borrifador, Esponja ensaboada, Água da torneira e Tampa de pote. Junte os 4 clipes no CapCut.',
          templatePlaceholder: 'Duração total do vídeo: 12 segundos.\nQual som ficou mais crocante no fone?'
        },
        checklist: [
          'Conheci os 4 sons com maior índice de retenção.',
          'Gravei a sequência rítmica de 4 etapas.',
          'Mantive o áudio natural sem abafamento de músicas altas.'
        ],
        keySummary: 'Os sons crocantes de espuma, sprays e tampas são música para o cérebro das espectadoras. Destaque-os no primeiro plano e veja o engajamento decolar.'
      },
      {
        id: 'm6-a3',
        moduleId: 6,
        lessonNumber: 3,
        title: 'Técnicas para Amplificar o Som sem Equipamento de Estúdio',
        objective: 'Aprender truques simples de pós-produção no celular para deixar os sons caseiros encorpados, nítidos e potentes.',
        readTime: '7 min de leitura',
        tag: 'Pós-Produção de Áudio',
        explanation: [
          'Muitas vezes você grava um som gostoso na cozinha, mas ao escutar no celular ele soa baixo ou distante. Isso acontece porque o microfone do celular foi desenhado para captar vozes e tenta filtrar sons ambientes.',
          'A boa notícia é que com dois ajustes no editor gratuito do celular, você consegue amplificar e encorpar esses sons para parecerem gravados com microfones profissionais de estúdio.',
          'Você aprenderá a aumentar o ganho de volume, equalizar o tom e duplicar canais para um efeito sonoro rico e surround.'
        ],
        realWorldExamples: [
          {
            title: 'Exemplo: O Truque do Volume em 200%',
            scenario: 'Aluna gravou o borrifador com áudio baixo. No CapCut, aumentou o volume do clipe para 200% e ativou a ferramenta "Reduzir Ruído".',
            keyTakeaway: 'O som da névoa ficou nítido e presente como se estivesse soprando no ouvido de quem escuta com fone.'
          }
        ],
        stepByStep: [
          {
            step: 1,
            title: 'Aumente o volume dos clipes no CapCut',
            instruction: 'Toque no clipe de vídeo -> Ícone "Volume" -> Arraste de 1000 para 200% ou 300% até o som ficar claro sem estourar.',
            tip: 'Observe a barra de ondas verdes: ela não deve encostar no topo vermelho para não chiar.'
          },
          {
            step: 2,
            title: 'Ative a Redução de Ruído integrada',
            instruction: 'Com o clipe selecionado, role o menu inferior até o final -> Toque em "Reduzir Ruído" -> Ative a chavinha.',
            tip: 'Isso remove aquele ruído de fundo estático sem mexer no som principal da esponja ou água.'
          },
          {
            step: 3,
            title: 'Duplique o áudio para um efeito encorpado',
            instruction: 'Se o som ainda estiver tímido, toque em "Extrair Áudio" -> Selecione a faixa de áudio extraída -> Toque em "Copiar". Duas faixas sobrepostas dobram a presença.',
            tip: 'Verifique se as duas faixas estão perfeitamente alinhadas para não dar eco.'
          }
        ],
        commonMistakes: [
          {
            mistake: 'Aumentar o volume excessivamente até o som ficar distorcido e metálico.',
            fix: 'Ouça sempre com fones de ouvido para calibrar o volume em um nível agradável.'
          }
        ],
        practicalExercise: {
          title: 'Exercício 3: Calibrando o Volume no CapCut',
          description: 'Pegue um clipe com som de água correndo e aumente o volume para 200%. Ative a redução de ruído e compare o antes e o depois.',
          templatePlaceholder: 'O som ficou mais presente? [ ] Sim\nHouve alguma distorção? [ ] Não, som cristalino'
        },
        checklist: [
          'Aprendi a aumentar o volume além de 100% no CapCut.',
          'Utilizei a ferramenta nativa de redução de ruído.',
          'Calibrei o áudio ouvindo com fone de ouvido.'
        ],
        keySummary: 'Com ajustes de ganho de volume e limpeza de ruído no aplicativo, os sons da sua casa ganham textura de cinema sem gastar com microfones caros.'
      },
      {
        id: 'm6-a4',
        moduleId: 6,
        lessonNumber: 4,
        title: 'Montando uma Sequência de 50 Segundos de ASMR Puro e Hipnótico',
        objective: 'Estruturar um vídeo completo de ASMR do início ao fim com roteiro, transições e finalização de alto impacto.',
        readTime: '8 min de leitura',
        tag: 'Projeto Prático ASMR',
        explanation: [
          'Agora que você domina a captação e o tratamento dos sons, vamos reunir tudo em um projeto completo de 50 segundos que está pronto para ser publicado no TikTok, Reels e YouTube Shorts.',
          'Um bom vídeo de ASMR segue uma jornada sensorial: Começo curioso (o primeiro clique ou borrifada) -> Desenvolvimento de ação (limpeza e espuma) -> Clímax sensorial (enxágue com água e som crocante de pano) -> Desfecho de paz (um som suave de objeto pousando na mesa e ambiente limpo).',
          'Esse formato tem uma das maiores taxas de compartilhamento do nicho, porque as pessoas marcam amigas com a legenda: "Olha que delícia de vídeo!".'
        ],
        realWorldExamples: [
          {
            title: 'Exemplo: O Reset da Pia em 45 Segundos',
            scenario: 'Estrutura: 1) Spray no inox (3s); 2) Esponja inflando espuma (6s); 3) Esfregando torneira (8s); 4) Água corrente levando toda a espuma branca ralo abaixo (12s); 5) Pano microfibra lustrando o metal (8s); 6) Pousando um sabonete líquido perfumado na bancada (4s).',
            keyTakeaway: 'Vídeo acumulou 940 mil visualizações em 10 dias com mais de 32 mil curtidas.'
          }
        ],
        stepByStep: [
          {
            step: 1,
            title: 'Grave os 6 takes do roteiro com celular apoiado',
            instruction: 'Siga a lista dos 6 momentos mantendo o celular firme e bem próximo de cada ação para capturar o áudio perfeito.',
            tip: 'Não se preocupe com o tempo durante a gravação; você vai ajustar os tamanhos exatos na edição.'
          },
          {
            step: 2,
            title: 'Monte a linha do tempo sem nenhuma música',
            instruction: 'Importe os 6 takes no CapCut e aplique os cortes secos entre as ações.',
            tip: 'Deixe o som natural de cada take respirar por 1 segundo antes e depois do movimento.'
          },
          {
            step: 3,
            title: 'Exporte em 1080p a 30fps ou 60fps',
            instruction: 'Toque na seta de exportar no topo do CapCut com resolução definida em 1080p para manter a máxima qualidade.',
            tip: 'Seu vídeo de ASMR está pronto para ser agendado e postado.'
          }
        ],
        commonMistakes: [
          {
            mistake: 'Fazer o vídeo rápido demais sem deixar o som da água ou da esponja ser apreciado.',
            fix: 'No ASMR, o ritmo é um pouco mais calmo e meditativo do que no Speed Cleaning tradicional.'
          }
        ],
        practicalExercise: {
          title: 'Exercício 4: Gravação do seu Primeiro Vídeo ASMR',
          description: 'Grave a sequência de 6 takes da limpeza da pia ou higienização da bancada. Edite no CapCut e salve o vídeo pronto na sua galeria.',
          templatePlaceholder: 'Nome do projeto no CapCut: ASMR_Reset_Pia_01\nDuração final do vídeo: ____ segundos\nData da gravação: ____/____/________'
        },
        checklist: [
          'Gravei os 6 takes sensoriais da jornada do ASMR.',
          'Editei sem música com foco nos sons naturais ampliados.',
          'Exportei o vídeo em alta resolução (1080p).'
        ],
        keySummary: 'A jornada sensorial de 50 segundos com início curioso, desenvolvimento com espuma e desfecho relaxante cria uma obra de arte relaxante pronta para viralizar.'
      }
    ]
  },
  {
    id: 7,
    title: 'Módulo 7 — Como Postar & Algoritmo Trabalhando por Você',
    shortTitle: 'Postagens & SEO',
    description: 'Horários estratégicos, títulos persuasivos, palavras-chave para o mecanismo de busca e como dobrar o engajamento.',
    iconName: 'TrendingUp',
    lessons: [
      {
        id: 'm7-a1',
        moduleId: 7,
        lessonNumber: 1,
        title: 'Melhores Horários e Frequência Realista de Postagens',
        objective: 'Definir uma rotina de publicações consistente e sustentável sem se sobrecarregar, aproveitando os picos de audiência do público feminino.',
        readTime: '8 min de leitura',
        tag: 'Estratégia de Postagem',
        explanation: [
          'Existe um mito de que você precisa postar 5 vídeos por dia para crescer. Para uma dona de casa com família, filhos e obrigações, isso é a receita certa para o esgotamento em menos de 2 semanas.',
          'A consistência vence a quantidade exagerada. Postar 1 bom vídeo por dia (ou até 4 a 5 vídeos por semana bem feitos) é mais do que suficiente para ensinar o algoritmo e atrair uma audiência fiel.',
          'O público consumidor de conteúdo de casa tem momentos bem específicos em que abre as redes sociais: pela manhã bem cedo (entre 6h30 e 8h30), na pausa do almoço (entre 12h e 13h30) e à noite após colocar a casa em ordem (entre 19h30 e 22h).'
        ],
        realWorldExamples: [
          {
            title: 'Exemplo: A Postagem das 20h30',
            scenario: 'Aluna programou seus vídeos de "Reset Noturno da Casa" para entrarem no ar exatamente às 20h30 de segunda a sexta.',
            keyTakeaway: 'As mulheres que estavam deitadas no sofá após a janta consumiam o vídeo em massa e compartilhavam com amigas antes de dormir.'
          }
        ],
        stepByStep: [
          {
            step: 1,
            title: 'Escolha seu horário âncora de postagem',
            instruction: 'Opção 1: Manhã (7h30 às 8h30) para vídeos de rotina matinal e café. Opção 2: Noite (19h30 às 21h) para resets noturnos e faxinas satisfatórias.',
            tip: 'Mantenha o mesmo horário aproximado nos primeiros 30 dias para educar seus seguidores.'
          },
          {
            step: 2,
            title: 'Defina uma meta mínima de 4 a 5 vídeos por semana',
            instruction: 'Por exemplo: postar de segunda a sexta e descansar no sábado e domingo com a família.',
            tip: 'Essa previsibilidade traz paz mental e evita a culpa nos dias de folga.'
          },
          {
            step: 3,
            title: 'Deixe vídeos prontos no rascunho com antecedência',
            instruction: 'Aproveite o dia em que estiver inspirada para deixar 2 ou 3 vídeos salvos no rascunho do aplicativo com legendas prontas.',
            tip: 'No dia corrido, basta apertar "Publicar" em 10 segundos.'
          }
        ],
        commonMistakes: [
          {
            mistake: 'Ficar postando em horários aleatórios da madrugada (ex: 3h da manhã).',
            fix: 'Poste nos horários de maior fluxo para que o vídeo receba as primeiras curtidas e retenção imediata que acionam a recomendação do algoritmo.'
          }
        ],
        practicalExercise: {
          title: 'Exercício 1: Seu Compromisso Semanal de Postagens',
          description: 'Defina os 4 ou 5 dias da sua semana e o horário âncora em que você irá clicar no botão de publicar.',
          templatePlaceholder: 'Dias escolhidos: [ ] Seg [ ] Ter [ ] Qua [ ] Qui [ ] Sex [ ] Sab [ ] Dom\nHorário âncora fixado: ____:____'
        },
        checklist: [
          'Defini um horário âncora alinhado com o público de donas de casa.',
          'Estabeleci uma meta semanal sustentável de 4 a 5 vídeos.',
          'Aprendi a guardar rascunhos para dias mais atarefados.'
        ],
        keySummary: 'Consistência sustentável supera excesso de publicações. Escolha um horário âncora e mantenha o ritmo constante sem abrir mão da sua paz familiar.'
      },
      {
        id: 'm7-a2',
        moduleId: 7,
        lessonNumber: 2,
        title: 'Títulos Persuasivos, Hashtags e Palavras-Chave de Busca (SEO)',
        objective: 'Dominar o mecanismo de busca das redes para fazer seus vídeos serem encontrados por pessoas procurando exatamente pelo que você ensina.',
        readTime: '9 min de leitura',
        tag: 'SEO & Hashtags',
        explanation: [
          'Hoje, o TikTok e o Instagram são usados pela nova geração como ferramentas de busca no lugar do próprio Google. As pessoas pesquisam na barra superior: "como limpar piso manchado", "produtos baratos da shopee para casa", "como tirar gordura do fogão".',
          'Se o seu vídeo tiver essas palavras-chave exatas na legenda, no texto da tela e na descrição falada, o algoritmo indexa seu vídeo no topo dos resultados de busca orgânica.',
          'Isso significa que você continuará ganhando seguidoras e vendas mesmo semanas após ter postado o conteúdo.'
        ],
        realWorldExamples: [
          {
            title: 'Exemplo: A Legenda com SEO Campeão',
            scenario: 'Título: "Como limpar o vidro do box do banheiro sem esforço usando apenas 2 ingredientes caseiros. #limpezadebanheiro #dicasdecasa #donadecasa #truquesdelimpeza".',
            keyTakeaway: 'O vídeo virou o 1º resultado de pesquisa para "limpar box de banheiro" no TikTok e já acumula 1,1 milhão de visualizações perenes.'
          }
        ],
        stepByStep: [
          {
            step: 1,
            title: 'Descubra o que as pessoas estão buscando no nicho',
            instruction: 'Abra a barra de busca do TikTok, digite "como limpar" ou "rotina de" e observe as sugestões automáticas que aparecem abaixo.',
            tip: 'Essas sugestões são exatamente as buscas mais digitadas por milhares de usuárias no Brasil.'
          },
          {
            step: 2,
            title: 'Escreva uma legenda com estrutura de 3 partes',
            instruction: 'Linha 1: Título com gancho e palavra-chave. Linha 2-3: Breve explicação útil da dica ou receita. Linha 4: Chamada para ação (CTA) + indicação do link na bio.',
            tip: 'Legendas úteis recebem muitos salvamentos, o que agrada imensamente o algoritmo.'
          },
          {
            step: 3,
            title: 'Use de 4 a 6 hashtags bem direcionadas',
            instruction: 'Combine 2 hashtags amplas (#donadecasa #dicasparaolar) com 3 hashtags específicas da tarefa (#limpezadefogao #misturinhacaseira #achadinhosshopee).',
            tip: 'Não use 30 hashtags aleatórias em inglês que confundem a entrega regional.'
          }
        ],
        commonMistakes: [
          {
            mistake: 'Postar o vídeo sem nenhuma legenda ou apenas com um emoji solto.',
            fix: 'Sem texto na legenda, o algoritmo não sabe sobre o que é o vídeo e tem dificuldade de entregá-lo para as pessoas certas.'
          }
        ],
        practicalExercise: {
          title: 'Exercício 2: Criando a Legenda Perfeita com SEO',
          description: 'Crie a legenda completa para um vídeo de "Limpeza e Organização da Geladeira", aplicando a estrutura das 3 partes e as 5 hashtags recomendadas.',
          templatePlaceholder: 'Título com palavra-chave: ____________________\nExplicação útil: ____________________\nChamada para ação (CTA): ____________________\nHashtags escolhidas:'
        },
        checklist: [
          'Aprendi a usar a barra de busca para encontrar tópicos em alta.',
          'Estruturei a legenda com Gancho + Explicação + Chamada para Ação.',
          'Selecionei de 4 a 6 hashtags estratégicas em português.'
        ],
        keySummary: 'Palavras-chave bem colocadas na legenda transformam seus vídeos em resultados eternos de busca, gerando visualizações e comissões automáticas a longo prazo.'
      },
      {
        id: 'm7-a3',
        moduleId: 7,
        lessonNumber: 3,
        title: 'Capas Limpas e Estética Visual do Feed',
        objective: 'Criar capas elegantes no próprio editor do aplicativo para atrair cliques imediatos de quem visita o seu perfil.',
        readTime: '7 min de leitura',
        tag: 'Estética do Feed',
        explanation: [
          'Quando um usuário gosta de um vídeo seu e entra no seu perfil, a primeira coisa que ele vê é a grade (feed) com as miniaturas dos seus vídeos.',
          'Se o seu feed tiver capas bagunçadas, com cortes no meio do rosto ou textos desalinhados, ele transmite desordem. Se as capas forem limpas, com um título grande e legível no centro mostrando o resultado final da tarefa, o visitante costuma maratonar vários vídeos seguidos.',
          'O próprio TikTok e o Instagram permitem selecionar a capa do vídeo e adicionar um texto com fundo sem precisar de Photoshop ou Canva.'
        ],
        realWorldExamples: [
          {
            title: 'Exemplo: O Feed em Tons Pastéis',
            scenario: 'Criadora selecionou sempre o frame final do ambiente limpo como capa, com um título padrão em caixa alta branca no centro: "RESET DA SALA", "LAVANDO A COZINHA", "GAVETA DE TALHERES".',
            keyTakeaway: 'A taxa de conversão de visitantes para novos seguidores aumentou de 4% para 18% em 2 semanas.'
          }
        ],
        stepByStep: [
          {
            step: 1,
            title: 'Selecione o melhor frame na tela final de postagem',
            instruction: 'Antes de postar no TikTok ou Instagram, toque em "Selecionar Capa" -> Arraste o cursor até a cena mais bonita e iluminada do vídeo.',
            tip: 'Geralmente a cena final com a bancada brilhando ou a xícara de café é a mais atraente.'
          },
          {
            step: 2,
            title: 'Adicione um título curto com contraste alto',
            instruction: 'Escolha um modelo de texto pré-definido pelo aplicativo com fundo preto ou branco translúcido.',
            tip: 'Máximo de 3 ou 4 palavras: ex: "ROUTINE // RESET MATINAL" ou "DICA DE OURO P/ O FOGÃO".'
          },
          {
            step: 3,
            title: 'Mantenha o mesmo padrão de capa nos vídeos',
            instruction: 'Usar o mesmo estilo de fonte e posicionamento em todos os vídeos cria uma identidade visual harmônica no seu perfil.',
            tip: 'Isso passa imagem de portal profissional e autoridade no assunto.'
          }
        ],
        commonMistakes: [
          {
            mistake: 'Deixar o aplicativo escolher uma capa automática aleatória com borrão de movimento.',
            fix: 'Nunca poste sem escolher manualmente o frame mais estético e estático da gravação.'
          }
        ],
        practicalExercise: {
          title: 'Exercício 3: Padronização das suas Capas',
          description: 'Defina o modelo de texto e as 3 palavras que você usará nas capas dos seus próximos 3 vídeos de faxina e rotina.',
          templatePlaceholder: 'Título da Capa 1: ____________________\nTítulo da Capa 2: ____________________\nTítulo da Capa 3: ____________________'
        },
        checklist: [
          'Aprendi a selecionar manualmente o melhor frame do vídeo como capa.',
          'Adicionei título curto e legível no centro da miniatura.',
          'Defini um padrão estético limpo para a grade do perfil.'
        ],
        keySummary: 'Capas limpas e padronizadas transformam visitantes curiosos em seguidores que maratonam vários conteúdos no seu perfil em sequência.'
      },
      {
        id: 'm7-a4',
        moduleId: 7,
        lessonNumber: 4,
        title: 'Como Responder Comentários para Dobrar a Entrega do Algoritmo',
        objective: 'Aprender a interagir estrategicamente nos comentários para estimular conversas e impulsionar o vídeo para novas pessoas.',
        readTime: '8 min de leitura',
        tag: 'Engajamento & Comunidade',
        explanation: [
          'Para o algoritmo do TikTok, Instagram e YouTube, os comentários têm um peso muito maior do que simples curtidas. Um comentário indica que o conteúdo despertou uma emoção forte o suficiente para fazer a pessoa parar e digitar.',
          'Quando você responde aos primeiros comentários nos primeiros 60 minutos após a publicação, você praticamente dobra a contagem de interações do vídeo, fazendo a plataforma entender que o assunto é quente e merece ser entregue para mais pessoas.',
          'Além disso, o TikTok possui uma ferramenta maravilhosa chamada "Responder com Vídeo", onde a pergunta de uma seguidora vira a pauta do seu próximo conteúdo sem você precisar quebrar a cabeça inventando ideias.'
        ],
        realWorldExamples: [
          {
            title: 'Exemplo: A Resposta que Gerou 250 Mil Views',
            scenario: 'Uma seguidora perguntou: "Qual é essa misturinha que você passou na pia?". A criadora tocou no comentário e gravou um vídeo de 20 segundos mostrando a receita.',
            keyTakeaway: 'O vídeo de resposta viralizou com 250 mil visualizações e o comentário original ficou fixado no topo.'
          }
        ],
        stepByStep: [
          {
            step: 1,
            title: 'Responda sempre fazendo uma nova pergunta de volta',
            instruction: 'Se a seguidora disser: "Que casa aconchegante!", não responda apenas "Obrigada". Responda: "Muito obrigada, querida! Você também gosta de deixar a casa arrumada antes de dormir?".',
            tip: 'Isso estimula a seguidora a responder novamente, gerando 2 ou 3 comentários na mesma conversa.'
          },
          {
            step: 2,
            title: 'Fixe o comentário mais relevante no topo',
            instruction: 'Fixe um comentário que faça uma pergunta comum ou elogie a dica. Isso incentiva outras pessoas a lerem e comentarem também.',
            tip: 'Você também pode fixar o seu próprio comentário com a pergunta: "De qual cidade você está assistindo?".'
          },
          {
            step: 3,
            title: 'Use as dúvidas para alimentar o banco de próximos vídeos',
            instruction: 'Toda vez que alguém perguntar "onde comprou esse cesto?" ou "como tira limo do rejunte?", tire um print e guarde como pauta da semana.',
            tip: 'Você nunca mais ficará sem ideias de vídeos.'
          }
        ],
        commonMistakes: [
          {
            mistake: 'Entrar em brigas ou responder com grosseria a comentários mal-educados.',
            fix: 'Apenas delete o comentário negativo ou silencie o usuário sem responder. Mantenha o clima do seu perfil sempre calmo e acolhedor.'
          }
        ],
        practicalExercise: {
          title: 'Exercício 4: Resposta Estratégica Simulada',
          description: 'Imagine que uma seguidora comentou no seu vídeo: "Adorei o vídeo, mas minha casa tem criança pequena e a bagunça nunca acaba". Como você responderia de forma acolhedora estimulando nova resposta?',
          templatePlaceholder: 'Minha resposta acolhedora e estratégica:\n"__________________________________________________"'
        },
        checklist: [
          'Entendi a importância de responder aos comentários na primeira hora.',
          'Aprendi a técnica de responder com uma nova pergunta para manter a conversa.',
          'Conheci a ferramenta de "Responder comentário com vídeo".'
        ],
        keySummary: 'Comentários são o coração do engajamento. Responda com acolhimento, faça perguntas de volta e use as dúvidas para criar seus próximos vídeos virais.'
      }
    ]
  },
  {
    id: 8,
    title: 'Módulo 8 — Estratégias de Monetização Realistas',
    shortTitle: 'Monetização na Prática',
    description: 'Como faturar como afiliada na Shopee, Amazon e Magalu, parcerias locais com lojas de bairro e programas de criadores.',
    iconName: 'DollarSign',
    lessons: [
      {
        id: 'm8-a1',
        moduleId: 8,
        lessonNumber: 1,
        title: 'Programa de Recompensas de Criadores (TikTok & YouTube)',
        objective: 'Compreender os requisitos, cálculos de RPM e estratégias para monetizar visualizações diretamente com as plataformas.',
        readTime: '9 min de leitura',
        tag: 'Ganhos por Views',
        explanation: [
          'O Programa de Criadores do TikTok (TikTok Creator Rewards) e o Programa de Parcerias do YouTube (AdSense) pagam aos criadores uma porcentagem da receita publicitária gerada por seus vídeos.',
          'No TikTok, o programa exige que o perfil tenha no mínimo 10.000 seguidores e 100.000 visualizações nos últimos 30 dias, e os vídeos precisam ter MAIS de 1 minuto de duração (geralmente entre 1min02s e 1min30s para garantir elegibilidade).',
          'O valor pago é medido pelo RPM (Receita por Mil Visualizações Qualificadas), que no Brasil costuma variar entre R$ 0,60 e R$ 2,50 por 1.000 views qualificadas (pagos em dólares convertidos). Um único vídeo que atinge 500 mil visualizações pode render entre R$ 300 e R$ 1.200.'
        ],
        realWorldExamples: [
          {
            title: 'Exemplo: Vídeo de 1min05s de Faxina Semanal',
            scenario: 'A criadora juntou a rotina da casa inteira em um vídeo dinâmico de 1 minuto e 5 segundos com narração calma. O vídeo atingiu 640 mil visualizações qualificadas.',
            keyTakeaway: 'Gerou um pagamento direto no painel do TikTok de US$ 178,00 (cerca de R$ 980,00 na cotação atual).'
          }
        ],
        stepByStep: [
          {
            step: 1,
            title: 'Foque no formato curto primeiro para atrair os 10k seguidores',
            instruction: 'Nos primeiros 60 dias, faça vídeos curtos de 25 a 45 segundos para crescer a base de seguidores com facilidade.',
            tip: 'Vídeos curtos têm maior taxa de conclusão e viralizam mais rápido para novas contas.'
          },
          {
            step: 2,
            title: 'Introduza vídeos de mais de 1 minuto aos poucos',
            instruction: 'Quando estiver próxima aos 8.000 seguidores, comece a postar vídeos de 1min05s mostrando rotinas completas com narração.',
            tip: 'O vídeo não deve ser enrolado: mantenha o dinamismo com muitos cortes de tarefas diferentes.'
          },
          {
            step: 3,
            title: 'Cadastre seus dados fiscais e conta bancária',
            instruction: 'Ao atingir os requisitos, envie seu documento oficial e cadastre uma conta (como PayPal ou transferência direta) para receber os pagamentos mensais.',
            tip: 'Os pagamentos caem pontualmente todo dia 15 do mês seguinte.'
          }
        ],
        commonMistakes: [
          {
            mistake: 'Fazer o vídeo com 59 segundos e perder a monetização do TikTok.',
            fix: 'Sempre deixe a gravação passar de 1 minuto e 3 segundos no editor para garantir que a plataforma não arredonde para baixo.'
          }
        ],
        practicalExercise: {
          title: 'Exercício 1: Estrutura de um Roteiro de 1 Minuto e 10 Segundos',
          description: 'Escreva a lista de 4 tarefas que juntas somam 1 minuto e 10 segundos de vídeo contínuo com narração sobre organização geral da casa.',
          templatePlaceholder: 'Tarefa 1 (0 a 15s): ____________________\nTarefa 2 (15s a 35s): ____________________\nTarefa 3 (35s a 55s): ____________________\nTarefa 4 (55s a 1m10s): ____________________'
        },
        checklist: [
          'Entendi os requisitos do Programa de Recompensas do TikTok (10k seguidores + 100k views).',
          'Compreendi a importância da duração mínima de 1 minuto e 1 segundo.',
          'Conheci o conceito de RPM e pagamento em moeda forte.'
        ],
        keySummary: 'A monetização por visualizações premia vídeos dinâmicos de mais de 1 minuto. Cresça com vídeos curtos e depois colha os pagamentos com conteúdos mais aprofundados.'
      },
      {
        id: 'm8-a2',
        moduleId: 8,
        lessonNumber: 2,
        title: 'Como Ser Afiliada de Sucesso na Shopee e Amazon',
        objective: 'Cadastrar-se gratuitamente, gerar links rastreáveis e recomendar os produtos da sua casa sem parecer vendedora chata.',
        readTime: '9 min de leitura',
        tag: 'Marketing de Afiliados',
        explanation: [
          'O marketing de afiliados é a forma mais rápida de colocar dinheiro no bolso, porque não depende de número mínimo de seguidores: você pode fazer sua primeira venda no primeiro dia de canal.',
          'O funcionamento é simples: você se cadastra no Programa de Afiliados da Shopee ou da Amazon. Eles geram um link exclusivo com o seu código de identificação. Quando alguém clica no seu link e compra o produto em até 7 dias, a loja paga uma comissão de 8% a 14% para você.',
          'O maior segredo para vender muito é a sutileza: você não diz "compre esse produto". Você apenas usa o produto com elegância no vídeo, e na legenda escreve: "Onde comprei esse dispenser está salvo no link da minha bio no item #12".'
        ],
        realWorldExamples: [
          {
            title: 'Exemplo: O Pote de Vidro com Tampa de Bambu',
            scenario: 'Aluna gravou vídeo repondo arroz no pote com concha de madeira. Nos comentários, dezenas de mulheres perguntaram o preço. Ela respondeu: "Paguei super barato na Shopee, o link direto com frete grátis está na minha bio!".',
            keyTakeaway: 'Em 4 dias, 89 pessoas compraram o kit de potes gerando R$ 420,00 de comissão líquida.'
          }
        ],
        stepByStep: [
          {
            step: 1,
            title: 'Faça o cadastro no Shopee Afiliados e Amazon Associados',
            instruction: 'Acesse o site oficial da Shopee Afiliados (afiliados.shopee.com.br) ou Amazon Associados e preencha seus dados cadastrais.',
            tip: 'A aprovação costuma sair em até 48 horas úteis de forma 100% gratuita.'
          },
          {
            step: 2,
            title: 'Crie uma página de árvore de links organizada',
            instruction: 'Use ferramentas gratuitas como Linktree ou Beacons. Crie botões numerados e categorizados (ex: #01 Rodo Mágico, #02 Potes Herméticos, #03 Borrifador Contínuo).',
            tip: 'Colocar foto em miniatura do produto ao lado do botão dobra a taxa de cliques.'
          },
          {
            step: 3,
            title: 'Insira a Chamada para Ação sutil em todos os vídeos',
            instruction: 'No final de toda legenda, coloque: "✨ Quer os links dos produtos usados no vídeo? Estão todos organizadinhos na minha bio!".',
            tip: 'Isso direciona o tráfego curioso diretamente para a sua página de compras.'
          }
        ],
        commonMistakes: [
          {
            mistake: 'Colocar o link bruto gigante direto na legenda do TikTok ou Instagram (o link não fica clicável na legenda!).',
            fix: 'O único lugar onde o link é clicável nas redes sociais é na sua Biografia (ou nos Stories do Instagram).'
          }
        ],
        practicalExercise: {
          title: 'Exercício 2: Criando sua Primeira Lista de 5 Links',
          description: 'Pesquise 5 produtos de casa na Shopee ou Amazon que você tem ou gostaria de ter, e simule a organização deles na sua futura árvore de links.',
          templatePlaceholder: '#01: ___________________________________ (Comissão est: R$ ____)\n#02: ___________________________________ (Comissão est: R$ ____)\n#03: ___________________________________ (Comissão est: R$ ____)\n#04: ___________________________________ (Comissão est: R$ ____)\n#05: ___________________________________ (Comissão est: R$ ____)'
        },
        checklist: [
          'Realizei o cadastro gratuito no programa de afiliados.',
          'Criei minha árvore de links organizada por categorias.',
          'Aprendi a fazer chamadas sutis para a biografia em todos os vídeos.'
        ],
        keySummary: 'Afiliados é renda imediata: use os produtos com capricho nos seus vídeos, organize os links na biografia e receba comissões automáticas de cada compra realizada.'
      },
      {
        id: 'm8-a3',
        moduleId: 8,
        lessonNumber: 3,
        title: 'Parcerias e Publis com Lojas Locais e Marcas do Bairro',
        objective: 'Conquistar seus primeiros patrocínios e produtos gratuitos (recebidos) de lojas da sua cidade e marcas regionais.',
        readTime: '8 min de leitura',
        tag: 'Parcerias & Recebidos',
        explanation: [
          'Você não precisa esperar marcas gigantes multinacionais baterem na sua porta para fechar parcerias. As pequenas e médias lojas da sua cidade (lojas de utilidades domésticas, perfumarias para casa, lojas de colchões, marcenarias e bazares) sonham em ter alguém que divulgue seus produtos na internet.',
          'Muitas vezes, uma loja local prefere muito mais pagar R$ 300 ou doar R$ 500 em produtos para uma criadora com 5.000 seguidores da mesma região do que gastar rios de dinheiro em panfletos que vão para o lixo.',
          'Você aprenderá a criar um "Mídia Kit Simples" de uma página e mandar uma mensagem profissional e simpática para as lojas certas.'
        ],
        realWorldExamples: [
          {
            title: 'Exemplo: A Parceria com a Loja de Essências da Cidade',
            scenario: 'Aluna mandou mensagem para uma loja local de essências e aromatizadores oferecendo gravar 2 vídeos de rotina usando os difusores da loja.',
            keyTakeaway: 'A loja enviou uma cesta com R$ 400 em produtos de graça + pagou R$ 250 em dinheiro para cada vídeo postado.'
          }
        ],
        stepByStep: [
          {
            step: 1,
            title: 'Mapeie 5 lojas de artigos para o lar da sua região',
            instruction: 'Procure no Instagram perfis de lojas de decoração, utilidades, tecidos de mesa posta ou produtos de limpeza da sua cidade.',
            tip: 'Verifique se a loja é ativa e posta stories com frequência.'
          },
          {
            step: 2,
            title: 'Prepare um resumo das suas métricas (Mídia Kit)',
            instruction: 'Tire print do seu painel profissional mostrando: Total de contas alcançadas no mês, porcentagem de público feminino (geralmente acima de 80%) e média de visualizações por vídeo.',
            tip: 'Lojas amam ver que seu público é formado por mulheres e donas de casa.'
          },
          {
            step: 3,
            title: 'Envie uma proposta em tom profissional e amigável',
            instruction: 'Use o modelo de mensagem pronto fornecido nesta aula, adaptando com o nome da loja e a sua proposta de colaboração.',
            tip: 'Seja sempre educada e mostre como o seu vídeo vai valorizar o produto da loja.'
          }
        ],
        commonMistakes: [
          {
            mistake: 'Mandar mensagem pedindo coisas de graça sem mostrar nenhum benefício para a loja.',
            fix: 'Mostre primeiro o que a loja ganha: divulgação com qualidade de imagem, estética e alcance de consumidoras reais.'
          }
        ],
        practicalExercise: {
          title: 'Exercício 3: Mapeando 3 Parceiros Potenciais',
          description: 'Encontre 3 lojas da sua cidade ou região no Instagram que vendem artigos para casa e anote o perfil delas abaixo.',
          templatePlaceholder: 'Loja 1: @____________________ (Tipo de produto: ____________________)\nLoja 2: @____________________ (Tipo de produto: ____________________)\nLoja 3: @____________________ (Tipo de produto: ____________________)'
        },
        checklist: [
          'Identifiquei as lojas locais com potencial para parcerias.',
          'Reuni meus prints de alcance e porcentagem de público feminino.',
          'Adaptei o modelo de mensagem profissional para envio.'
        ],
        readyCopy: [
          'MODELO DE MENSAGEM PARA LOJAS PARCEIRAS:\n"Olá, equipe da [Nome da Loja]! Tudo bem?\n\nAcompanho e admiro muito o trabalho de vocês. Sou criadora de conteúdo de rotina e organização do lar no perfil @[SeuPerfil], onde compartilho diariamente dicas práticas e estéticas para uma comunidade de mais de [X] mil mulheres apaixonadas por cuidar da casa.\n\nMeu público tem mais de 85% de público feminino e estou organizando o calendário de vídeos das próximas semanas. Gostaria muito de apresentar os produtos de vocês em um dos meus vídeos de rotina de limpeza e aconchego.\n\nPosso enviar meu Mídia Kit com os números de alcance para avaliarmos uma colaboração especial?\n\nUm grande abraço e parabéns pela loja!"'
        ],
        keySummary: 'Parcerias locais trazem produtos gratuitos para abastecer sua casa e seus primeiros cachês em dinheiro. Aborde com profissionalismo e mostre seu público feminino qualificado.'
      },
      {
        id: 'm8-a4',
        moduleId: 8,
        lessonNumber: 4,
        title: 'Criando seu Próprio Mini-Produto Digital de Casa',
        objective: 'Aprender como empacotar seu conhecimento prático em cronogramas de limpeza e checklists para vender e lucrar 100% do valor.',
        readTime: '8 min de leitura',
        tag: 'Infoprodutos Próprios',
        explanation: [
          'Quando você recomenda um produto como afiliada, você ganha de 8% a 14% de comissão. Mas quando você vende um produto próprio, você fica com praticamente 100% do lucro na sua conta!',
          'E você não precisa escrever um livro de 300 páginas: no nicho de dona de casa, o que as mulheres mais compram são soluções rápidas para a preguiça e a falta de tempo. Exemplos: um "Cronograma Semanal de Limpeza sem Sobrecarga", um "Guia de Misturinhas Caseiras Seguras" ou um "Cardápio Semanal com Lista de Compras Pronta".',
          'Vendendo um guia em PDF por um valor super acessível (como R$ 10 a R$ 19,90) através de plataformas como a Lowify, apenas 3 vendas por dia já colocam cerca de R$ 1.500 a R$ 1.800 de lucro limpo extra todo mês no seu orçamento.'
        ],
        realWorldExamples: [
          {
            title: 'Exemplo: O Checklist de Limpeza de R$ 12,90',
            scenario: 'Aluna montou um PDF de 4 páginas com a rotina de limpeza dividida em 15 minutos por dia. Fixou o link na bio e mencionava no final dos vídeos.',
            keyTakeaway: 'Teve 310 compras no primeiro mês, faturando R$ 3.999,00 brutos praticamente sem custos de produção.'
          }
        ],
        stepByStep: [
          {
            step: 1,
            title: 'Escolha uma dor real das donas de casa',
            instruction: 'Opções que mais vendem: 1) "Como manter a casa limpa gastando 20 min por dia", 2) "Cardápio do almoço semanal para economizar no mercado", 3) "Caderno de misturinhas infalíveis para tirar manchas".',
            tip: 'Escolha um tema que você domina na sua própria casa.'
          },
          {
            step: 2,
            title: 'Monte o material no Canva gratuitamente',
            instruction: 'Use um modelo gratuito de "Planner" ou "Checklist" no Canva. Coloque cores suaves e diagramação limpa de fácil leitura no celular.',
            tip: 'Salve em formato PDF padrão.'
          },
          {
            step: 3,
            title: 'Cadastre o produto em uma plataforma de checkout rápido',
            instruction: 'Cadastre o arquivo na Lowify ou plataforma parceira, defina o preço popular (entre R$ 9,90 e R$ 19,90) e coloque o link de pagamento na bio.',
            tip: 'Preços baixos vendem por impulso com altíssima taxa de conversão.'
          }
        ],
        commonMistakes: [
          {
            mistake: 'Querer cobrar preços caros (R$ 97 ou R$ 197) logo no começo.',
            fix: 'Comece com produtos baratos e acessíveis para que qualquer seguidora possa comprar sem pesar no bolso.'
          }
        ],
        practicalExercise: {
          title: 'Exercício 4: Ideação do seu Primeiro Mini-Produto',
          description: 'Qual ferramenta ou guia simples você adoraria ter recebido quando começou a cuidar da casa e que suas seguidoras comprariam por R$ 14,90?',
          templatePlaceholder: 'Nome do Mini-Produto: ____________________\nTema central: ____________________\nNúmero de páginas estimadas: (ex: 3 a 5 páginas)\nPreço sugerido: R$ ____,____'
        },
        checklist: [
          'Entendi a vantagem de ter um produto próprio com quase 100% de margem de lucro.',
          'Escolhi um tema prático de checklist ou cronograma de tarefas.',
          'Compreendi como cadastrar o arquivo para entrega automática no checkout.'
        ],
        keySummary: 'Seu próprio mini-produto digital de R$ 19,90 transforma visualizações em vendas diárias no piloto automático, gerando uma fonte de renda previsível e sustentável.'
      }
    ]
  },
  {
    id: 9,
    title: 'Módulo 9 — Desafio 30 Dias: Da 1ª Gravação ao 1º Resultado',
    shortTitle: 'Desafio 30 Dias',
    description: 'Um passo a passo diário e estruturado em 4 semanas para destravar a gravação, publicar com consistência e ver os primeiros resultados.',
    iconName: 'Calendar',
    lessons: [
      {
        id: 'm9-a1',
        moduleId: 9,
        lessonNumber: 1,
        title: 'Semana 1: Destravando a Câmera e os 5 Vídeos Teste sem Postar',
        objective: 'Superar o medo da tecnologia, acostumar-se a filmar suas mãos e tarefas diárias e montar seus primeiros testes de edição.',
        readTime: '8 min de leitura',
        tag: 'Semana 1: Destrave',
        explanation: [
          'A primeira semana é dedicada exclusivamente a você se sentir confortável com a câmera. Não existe pressão de postar ou ser julgada por ninguém.',
          'O seu único objetivo nesta semana é gravar 5 pequenos testes de 15 segundos de tarefas da sua rotina, cortar no CapCut e guardar na galeria do seu celular para avaliar sua evolução.',
          'Quando você elimina a cobrança de ter que publicar imediatamente, a ansiedade desaparece e você descobre como filmar tarefas pode ser gostoso e relaxante.'
        ],
        realWorldExamples: [
          {
            title: 'Exemplo: O Teste da Xícara de Chá',
            scenario: 'Aluna gravou 3 segundos esquentando água, 3 segundos colocando o saquinho de chá na xícara e 3 segundos admirando a fumaça subir pela janela.',
            keyTakeaway: 'Ao assistir, ela se emocionou ao ver como a rotina dela tinha momentos poéticos e belos que ela nunca havia notado antes.'
          }
        ],
        stepByStep: [
          {
            step: 1,
            title: 'Dia 1 e 2: O Teste da Limpeza de Lente e Suporte',
            instruction: 'Apoie o celular na caneca e grave 2 testes lavando as mãos ou enxaguando uma fruta.',
            tip: 'Verifique se a iluminação da janela está clara.'
          },
          {
            step: 2,
            title: 'Dia 3 e 4: O Teste dos Cortes no CapCut',
            instruction: 'Abra os vídeos gravados no aplicativo gratuito e faça os primeiros cortes secos eliminando segundos mortos.',
            tip: 'Não se preocupe com perfeição, apenas pratique os botões Dividir e Excluir.'
          },
          {
            step: 3,
            title: 'Dia 5 a 7: Junte o primeiro vídeo de 20 segundos completo',
            instruction: 'Una 4 takes com uma música suave salva dos favoritos e assista ao seu primeiro clipe finalizado.',
            tip: 'Guarde com carinho: esse é o marco zero da sua nova história.'
          }
        ],
        commonMistakes: [
          {
            mistake: 'Ficar exigindo perfeição de estúdio de cinema no seu primeiro teste.',
            fix: 'O feito é melhor que o perfeito não realizado. Comemore cada pequeno clipe gravado.'
          }
        ],
        practicalExercise: {
          title: 'Exercício 1: Conclusão dos 5 Testes Privados',
          description: 'Marque quais dos 5 testes você gravou esta semana na sua galeria privada.',
          templatePlaceholder: '[ ] Teste 1: Passando café ou chá da manhã\n[ ] Teste 2: Limpando a bancada da pia\n[ ] Teste 3: Arrumando a cama ou dobrando manta\n[ ] Teste 4: Borrifando produto em espelho/vidro\n[ ] Teste 5: Abrindo janela ou organizando temperos'
        },
        checklist: [
          'Gravei 5 testes na minha galeria sem obrigação de postar.',
          'Abri o CapCut e testei os cortes básicos.',
          'Senti o alívio de gravar sem mostrar o rosto com tranquilidade.'
        ],
        keySummary: 'A Semana 1 é o seu laboratório secreto: pratique sem pressão, descubra seus melhores ângulos e ganhe intimidade com as ferramentas.'
      },
      {
        id: 'm9-a2',
        moduleId: 9,
        lessonNumber: 2,
        title: 'Semana 2: A Primeira Semana de Postagens com Consistência',
        objective: 'Superar o frio na barriga do botão "Publicar", postar seus primeiros 5 vídeos e iniciar o ciclo de entrega do algoritmo.',
        readTime: '8 min de leitura',
        tag: 'Semana 2: Postagem',
        explanation: [
          'Chegou a hora de dar o passo mais corajoso: colocar os seus vídeos no ar. Lembre-se: ninguém que você não queira precisa saber do seu perfil no começo.',
          'Nas primeiras semanas, seus vídeos serão vistos principalmente por pessoas desconhecidas que estão navegando na aba "Para Você" em busca de inspiração de casa.',
          'A sua meta na Semana 2 não é bater 1 milhão de visualizações; a sua meta é cumprir a disciplina de postar 1 vídeo por dia durante 5 dias consecutivos.'
        ],
        realWorldExamples: [
          {
            title: 'Exemplo: O Primeiro Vídeo Postado',
            scenario: 'Aluna postou seu primeiro vídeo às 8h da manhã tremendo de medo. Às 15h, o vídeo tinha 340 visualizações e 18 curtidas de mulheres elogiando a limpeza da pia.',
            keyTakeaway: 'O medo do julgamento sumiu instantaneamente e deu lugar à motivação de postar o segundo vídeo no dia seguinte.'
          }
        ],
        stepByStep: [
          {
            step: 1,
            title: 'Prepare seus 5 vídeos no fim de semana',
            instruction: 'Tenha os 5 vídeos editados e prontos com antecedência para não ter desculpas no meio da semana.',
            tip: 'Isso tira o peso de ter que criar do zero todos os dias.'
          },
          {
            step: 2,
            title: 'Aperte publicar no seu horário âncora',
            instruction: 'Publique o vídeo com legenda e hashtags, feche o aplicativo e vá viver sua vida.',
            tip: 'Não fique atualizando a tela a cada 30 segundos; deixe o algoritmo trabalhar com calma.'
          },
          {
            step: 3,
            title: 'Volte 2 horas depois para responder os comentários',
            instruction: 'Abra as notificações, responda todas as pessoas com carinho e faça uma pergunta de volta.',
            tip: 'Essa interação inicial acende o sinal verde para a plataforma continuar entregando.'
          }
        ],
        commonMistakes: [
          {
            mistake: 'Apagar o vídeo porque ele teve poucas visualizações nas primeiras 3 horas.',
            fix: 'Muitos vídeos de rotina demoram 24h a 48h para começarem a ser distribuídos. Nunca apague vídeos da sua conta.'
          }
        ],
        practicalExercise: {
          title: 'Exercício 2: Registro das Primeiras 5 Postagens',
          description: 'Acompanhe as datas e os temas dos seus 5 primeiros vídeos oficiais no ar.',
          templatePlaceholder: 'Vídeo 1: Data ___/___ | Tema: ____________________\nVídeo 2: Data ___/___ | Tema: ____________________\nVídeo 3: Data ___/___ | Tema: ____________________\nVídeo 4: Data ___/___ | Tema: ____________________\nVídeo 5: Data ___/___ | Tema: ____________________'
        },
        checklist: [
          'Publiquei meu primeiro vídeo oficial no perfil.',
          'Mantive a consistência de 5 dias seguidos de postagens.',
          'Respondi a todas as pessoas que deixaram comentários.'
        ],
        keySummary: 'A Semana 2 quebra o tabu da publicação. Ao apertar o botão publicar 5 vezes, você se torna oficialmente uma criadora de conteúdo do lar.'
      },
      {
        id: 'm9-a3',
        moduleId: 9,
        lessonNumber: 3,
        title: 'Semana 3: Analisando Métricas sem Paranoias e Ajustando Rota',
        objective: 'Aprender a ler os dados analíticos básicos (retenção, taxa de conclusão e tempo médio) para melhorar o que está funcionando.',
        readTime: '8 min de leitura',
        tag: 'Semana 3: Métricas',
        explanation: [
          'Agora que você já tem cerca de 10 vídeos publicados, o painel de estatísticas (Analytics) começa a mostrar o comportamento real de quem assiste.',
          'A métrica mais importante de todas NÃO é o número de curtidas; é a "Taxa de Retenção" (o gráfico que mostra até que segundo as pessoas continuaram assistindo antes de desistirem).',
          'Se o gráfico despenca no segundo 2, significa que seu gancho inicial foi fraco. Se ele se mantém estável até o final, significa que o ritmo e o som foram excelentes.'
        ],
        realWorldExamples: [
          {
            title: 'Exemplo: O Ajuste que Salvou o Canal',
            scenario: 'Aluna percebeu que nos vídeos em que começava com a esponja espremendo água a retenção era de 75%, enquanto nos que começava abrindo a torneira caía para 35%.',
            keyTakeaway: 'Ela padronizou o início com a esponja e a média de visualizações de todos os vídeos seguintes triplicou.'
          }
        ],
        stepByStep: [
          {
            step: 1,
            title: 'Acesse o painel do Analytics do seu perfil',
            instruction: 'Abra o TikTok ou Instagram -> Vá no vídeo com mais visualizações -> Toque em "Mais Dados" ou "Ver Insights".',
            tip: 'Observe a porcentagem que assistiu ao vídeo completo.'
          },
          {
            step: 2,
            title: 'Identifique o seu vídeo campeão da semana',
            instruction: 'Descubra qual vídeo teve mais salvamentos e compartilhamentos.',
            tip: 'Salvamentos indicam que a dica foi tão valiosa que a pessoa quer consultar no futuro.'
          },
          {
            step: 3,
            title: 'Replique o formato do vídeo campeão',
            instruction: 'Se o vídeo campeão foi de "Limpeza do Fogão", grave na semana seguinte "Limpeza da Air Fryer" ou "Limpeza do Micro-ondas" usando a mesma estrutura.',
            tip: 'Repita o que deu certo em outros cômodos da casa.'
          }
        ],
        commonMistakes: [
          {
            mistake: 'Ficar olhando métricas de hora em hora e ficando ansiosa com números.',
            fix: 'Analise os dados apenas 1 vez por semana, com tranquilidade e olhar de aprendizado.'
          }
        ],
        practicalExercise: {
          title: 'Exercício 3: Análise do Vídeo Destaque da Semana',
          description: 'Selecione o vídeo com melhor desempenho até agora e anote as lições observadas.',
          templatePlaceholder: 'Vídeo destaque: ____________________\nNúmero de visualizações: ________\nO que você acha que fez esse vídeo agradar mais?'
        },
        checklist: [
          'Acessei o painel de dados analíticos do meu perfil.',
          'Compreendi o significado da curva de retenção.',
          'Identifiquei os pontos fortes do meu vídeo mais assistido para replicar.'
        ],
        keySummary: 'Os dados não servem para desanimar, mas para guiar. Descubra o que suas seguidoras mais gostaram e dobre a aposta nesse estilo de conteúdo.'
      },
      {
        id: 'm9-a4',
        moduleId: 9,
        lessonNumber: 4,
        title: 'Semana 4: Inserindo Links de Afiliada e os Primeiros Resultados',
        objective: 'Ativar as chamadas para ação estratégicas e ver os primeiros cliques e comissões caírem no seu painel de afiliada.',
        readTime: '9 min de leitura',
        tag: 'Semana 4: Resultados',
        explanation: [
          'Você concluiu o primeiro mês com vídeos publicados e uma audiência que já reconhece o seu estilo de casa limpa e acolhedora. Agora é o momento de colher os primeiros frutos financeiros.',
          'Nesta semana, você aprenderá a gravar vídeos estrategicamente desenhados para gerar curiosidade sobre um produto específico (o rodo mágico, o borrifador, o organizador de geladeira ou o pano especial de microfibra).',
          'Quando uma seguidora vê a utilidade do produto no seu vídeo e compra pelo seu link na bio, a sensação de receber a notificação da primeira comissão é inesquecível e comprova que o método funciona.'
        ],
        realWorldExamples: [
          {
            title: 'Exemplo: A Primeira Comissão de R$ 14,80',
            scenario: 'Aluna gravou vídeo mostrando como limpava os cantinhos difíceis do rodapé com uma escovinha especial de R$ 9 da Shopee. Na legenda indicou o link da bio.',
            keyTakeaway: 'Recebeu 7 notificações de comissão no mesmo sábado, somando R$ 48,00 logo no primeiro teste com links ativos.'
          }
        ],
        stepByStep: [
          {
            step: 1,
            title: 'Escolha 1 produto estrela da semana',
            instruction: 'Selecione um utensílio barato, funcional e que resolva uma dor chata de limpeza (ex: escova para trilho de janela, organizador giratório de temperos).',
            tip: 'Produtos baratos (menos de R$ 30) vendem com extrema facilidade por impulso.'
          },
          {
            step: 2,
            title: 'Grave um vídeo demonstrando o "Antes vs Depois com o Produto"',
            instruction: 'Mostre o problema (o cantinho sujo) -> Apresente o utensílio entrando em ação -> Mostre a sujeira saindo com extrema facilidade.',
            tip: 'Não precisa falar: o resultado visual vende por si só.'
          },
          {
            step: 3,
            title: 'Coloque a CTA clara na legenda e no comentário fixado',
            instruction: 'Escreva: "Comprei por menos de 15 reais na Shopee e salvou minha vida! O link dele é o #01 da minha bio".',
            tip: 'Deixe o comentário fixado no topo para facilitar a navegação.'
          }
        ],
        commonMistakes: [
          {
            mistake: 'Tentar empurrar 5 produtos diferentes no mesmo vídeo.',
            fix: 'Foque em um único produto por vídeo para não confundir a atenção da compradora.'
          }
        ],
        practicalExercise: {
          title: 'Exercício 4: Meu Primeiro Vídeo com Foco em Afiliados',
          description: 'Planeje o produto estrela que você vai destacar esta semana e o link que colocará no topo da sua biografia.',
          templatePlaceholder: 'Produto estrela escolhido: ____________________\nLink de afiliada gerado com sucesso? [ ] Sim\nTexto da chamada na bio: ____________________'
        },
        checklist: [
          'Selecionei um produto útil e acessível para recomendar.',
          'Gravei a demonstração prática da facilidade de uso.',
          'Inseri a chamada sutil na legenda e no comentário fixado.'
        ],
        keySummary: 'A Semana 4 fecha o ciclo com chave de ouro: seu conteúdo traz valor e entretenimento, e suas recomendações de produtos geram renda extra justa e merecida.'
      }
    ]
  },
  {
    id: 10,
    title: 'Módulo 10 — Mentalidade, Foco & Gestão do Tempo',
    shortTitle: 'Mentalidade & Tempo',
    description: 'Como conciliar tarefas de casa, filhos e 30 min de criação, lidar com o medo do julgamento e manter a disciplina nos dias difíceis.',
    iconName: 'Heart',
    lessons: [
      {
        id: 'm10-a1',
        moduleId: 10,
        lessonNumber: 1,
        title: 'Como Conciliar Filhos, Almoço e 30 Minutos de Criação',
        objective: 'Criar um sistema de blindagem de tempo para gravar sem sobrecarregar sua rotina como mãe, esposa e dona de casa.',
        readTime: '8 min de leitura',
        tag: 'Gestão do Tempo',
        explanation: [
          'A rotina de quem cuida de uma casa com filhos é cheia de imprevistos: a criança adoece, o almoço queima, a visita chega sem avisar. Se você depender de ter um dia 100% perfeito e livre para criar conteúdo, você nunca vai postar nada.',
          'O segredo das mães e donas de casa que constroem renda sólida nas redes é a regra dos "30 Minutos Sagrados": um pequeno bloco de tempo onde o foco é exclusivo na gravação dos takes.',
          'Lembre-se: o seu conteúdo É a sua rotina. Quando os filhos estão na escola ou dormindo a soneca da tarde, esses 30 minutos são o seu investimento no seu futuro e na sua independência financeira.'
        ],
        realWorldExamples: [
          {
            title: 'Exemplo: A Rotina da Madrugada Tranquila',
            scenario: 'Criadora com 2 filhos pequenos acorda 30 minutos antes de todo mundo (às 6h30) para passar o café, abrir as janelas e gravar as tomadas da manhã em silêncio.',
            keyTakeaway: 'Às 7h, quando as crianças acordavam, o vídeo do dia já estava gravado e guardado para ser editado na hora do almoço.'
          }
        ],
        stepByStep: [
          {
            step: 1,
            title: 'Identifique sua "Janela de Silêncio" diária',
            instruction: 'Pode ser antes de todos acordarem (6h30), durante o cochilo da tarde dos pequenos (14h) ou após o jantar (20h).',
            tip: 'Defina esse momento no seu alarme do celular.'
          },
          {
            step: 2,
            title: 'Deixe o celular com bateria e espaço livre na noite anterior',
            instruction: 'Coloque o celular para carregar e apague fotos antigas inúteis antes de dormir para não perder tempo no dia seguinte.',
            tip: 'Aparelho preparado evita desculpas na hora de gravar.'
          },
          {
            step: 3,
            title: 'Perdoe os dias imperfeitos',
            instruction: 'Se a criança teve febre ou você acordou exausta, não se culpe. Pule o dia e retome no dia seguinte com leveza.',
            tip: 'Constância não é rigidez militar, é não desistir no longo prazo.'
          }
        ],
        commonMistakes: [
          {
            mistake: 'Tentar fazer tudo perfeito ao mesmo tempo e explodir de cansaço.',
            fix: 'Faça o que der com os recursos que tem no dia. Um vídeo simples gravado em 10 minutos vale mais do que nenhum.'
          }
        ],
        practicalExercise: {
          title: 'Exercício 1: Minha Janela de Silêncio de 30 Minutos',
          description: 'Qual é o melhor momento de 30 minutos do seu dia onde você tem maior tranquilidade para capturar seus takes?',
          templatePlaceholder: 'Minha Janela de Silêncio: das ____:____ às ____:____\nO que costuma acontecer na casa nesse horário:'
        },
        checklist: [
          'Defini minha Janela de Silêncio diária de 30 minutos.',
          'Aprendi a organizar o celular na véspera para ganhar agilidade.',
          'Adotei uma postura de autocompaixão com a rotina da maternidade.'
        ],
        keySummary: 'Você não precisa de horas livres: 30 minutos focados durante a soneca dos filhos ou antes da casa acordar são suficientes para construir um império digital.'
      },
      {
        id: 'm10-a2',
        moduleId: 10,
        lessonNumber: 2,
        title: 'Superando o Medo do Julgamento de Parentes e Vizinhos',
        objective: 'Proteger sua energia emocional, blindar seu projeto contra opiniões desmotivadoras e entender por que gravar sem o rosto é sua maior proteção.',
        readTime: '9 min de leitura',
        tag: 'Blindagem Emocional',
        explanation: [
          'Muitas mulheres travam porque pensam: "O que minha cunhada, minha sogra ou minha vizinha vão falar se descobrirem que estou filmando a pia da cozinha?".',
          'A verdade libertadora é: quem não paga suas contas não tem o direito de opinar sobre como você constrói sua renda honesta. E o formato sem mostrar o rosto (faceless) é a sua maior armadura.',
          'Com um perfil sem seu nome completo e sem seu rosto, NINGUÉM do seu círculo pessoal sabe que o perfil é seu até você decidir contar quando já estiver faturando alto.'
        ],
        realWorldExamples: [
          {
            title: 'Exemplo: O Perfil Secreto que Atingiu 50k',
            scenario: 'Aluna criou o @cantinho.acolhedor sem contar para ninguém da família. Gravou suas tarefas por 4 meses e já estava tirando mais de R$ 2.000 de renda extra.',
            keyTakeaway: 'Quando contou para o marido, ele ficou surpreso e orgulhoso da dedicação e dos resultados práticos alcançados.'
          }
        ],
        stepByStep: [
          {
            step: 1,
            title: 'Desative a sincronização de contatos nas redes sociais',
            instruction: 'Ao criar a conta no TikTok e Instagram, recuse a permissão de "Sincronizar Lista de Contatos da Agenda" e "Sugerir para amigos do Facebook".',
            tip: 'Isso impede que o aplicativo sugira seu perfil novo para parentes e conhecidos.'
          },
          {
            step: 2,
            title: 'Mantenha o projeto como seu momento sagrado em segredo',
            instruction: 'Não conte para pessoas pessimistas que nunca construíram nada na internet. Guarde seus sonhos para quem te apoia de verdade.',
            tip: 'Resultados em silêncio fazem barulho no futuro.'
          },
          {
            step: 3,
            title: 'Lembre-se do seu "Porquê"',
            instruction: 'Por quem você está fazendo isso? Para comprar uma roupa melhor para seus filhos? Para ajudar nas despesas do mercado? Para não ter que pedir dinheiro para ninguém?',
            tip: 'Seu objetivo familiar é infinitamente maior do que a opinião de terceiros.'
          }
        ],
        commonMistakes: [
          {
            mistake: 'Pedir aprovação ou opinião para pessoas que só sabem reclamar da vida.',
            fix: 'Confie no método, estude as aulas e deixe que as métricas e o dinheiro na conta falem por você.'
          }
        ],
        practicalExercise: {
          title: 'Exercício 2: Escrevendo o Seu Grande "Porquê"',
          description: 'Escreva em 3 linhas por que você quer conquistar sua renda extra com a rotina. Guarde essas palavras para os dias de desânimo.',
          templatePlaceholder: 'Estou construindo minha renda com a rotina porque: _____________________________________________________________________'
        },
        checklist: [
          'Desativei a sincronização de contatos da agenda no aplicativo.',
          'Entendi que o formato faceless protege 100% da minha privacidade.',
          'Escrevi meu propósito inegociável de independência financeira.'
        ],
        keySummary: 'Quem critica não paga suas faturas. Use o anonimato inteligente do modelo faceless como proteção e trabalhe em silêncio pelos seus sonhos.'
      },
      {
        id: 'm10-a3',
        moduleId: 10,
        lessonNumber: 3,
        title: 'O Veneno da Comparação: Seu Começo não É o Palco dos Outros',
        objective: 'Libertar-se da armadilha de se comparar com perfis de luxo e aprender a valorizar o charme da sua casa real.',
        readTime: '7 min de leitura',
        tag: 'Anti-Comparação',
        explanation: [
          'A internet é cheia de perfis com bancadas de mármore italiano caríssimo, torneiras douradas de R$ 3.000 e eletrodomésticos importados. Olhar para esses perfis e achar que sua casa comum não tem valor é o veneno mais comum para iniciantes.',
          'A realidade que o algoritmo comprova todos os dias é: a grande massa das donas de casa brasileiras se conecta muito mais com uma pia de inox comum e um pano de prato simples do que com mansões inalcançáveis.',
          'O seu charme está na simplicidade, no capricho e no calor humano. A beleza não vem do preço do piso, mas do cuidado com que você cuida do seu cantinho.'
        ],
        realWorldExamples: [
          {
            title: 'Exemplo: A Cozinha de Azulejo Antigo que Bombou',
            scenario: 'Criadora morando em casa alugada simples com armário antigo de fórmica. Os vídeos dela focavam em manter o armário impecável e cheiroso com produtos baratos.',
            keyTakeaway: 'Recebia centenas de mensagens dizendo: "Finalmente um perfil com uma casa igual à minha! Me sinto acolhida aqui".'
          }
        ],
        stepByStep: [
          {
            step: 1,
            title: 'Dê "Deixar de Seguir" em perfis que te causam frustração',
            instruction: 'Se uma conta faz você se sentir mal com sua casa ou sua vida, pare de seguir imediatamente sem culpa.',
            tip: 'Mantenha no seu feed apenas perfis que te inspirem e ensinem com leveza.'
          },
          {
            step: 2,
            title: 'Foque no enquadramento de 50 cm de capricho',
            instruction: 'A câmera só enxerga o que você aponta. Um azulejo antigo bem limpo com vinagre brilha tão bonito quanto um revestimento importado.',
            tip: 'O capricho vence o luxo em qualquer rede social.'
          },
          {
            step: 3,
            title: 'Celebre as pequenas vitórias da sua jornada',
            instruction: 'Comemore o primeiro vídeo editado, os primeiros 50 seguidores, a primeira mensagem carinhosa de uma desconhecida.',
            tip: 'O sucesso é feito de pequenos tijolos colocados todos os dias.'
          }
        ],
        commonMistakes: [
          {
            mistake: 'Ficar adiando o início até "reformar a cozinha".',
            fix: 'Comece exatamente onde você está, com a casa que você tem. Essa autenticidade é o seu maior ímã de seguidoras reais.'
          }
        ],
        practicalExercise: {
          title: 'Exercício 3: O Canto com mais Charme da Sua Casa',
          description: 'Identifique o cantinho da sua casa que, mesmo simples, tem o maior valor afetivo e acolhedor para você.',
          templatePlaceholder: 'Meu cantinho favorito: ____________________\nO que ele tem de acolhedor: ____________________'
        },
        checklist: [
          'Entendi que a simplicidade da casa real conecta muito mais do que luxo inalcançável.',
          'Limpei meu feed de perfis que geravam sentimentos de inferioridade.',
          'Reconheci o valor e a dignidade do meu lar exatamente como ele é hoje.'
        ],
        keySummary: 'O luxo distancia; o capricho da casa real conecta. Sua autenticidade é a sua maior força para atrair uma comunidade fiel de mulheres reais.'
      },
      {
        id: 'm10-a4',
        moduleId: 10,
        lessonNumber: 4,
        title: 'Como Manter a Disciplina nos Dias em que Não Dá Vontade',
        objective: 'Construir hábitos sólidos e rotinas automáticas para continuar postando mesmo quando a motivação inicial sumir.',
        readTime: '8 min de leitura',
        tag: 'Disciplina & Constância',
        explanation: [
          'A motivação é como um fósforo: acende forte no primeiro dia e apaga na primeira chuva. A disciplina é como uma brasa de fogão a lenha: queima quieta, constante e dura o inverno inteiro.',
          'Haverá dias em que você estará cansada, o tempo estará nublado e você terá zero vontade de gravar. É exatamente nesses dias que as criadoras que vencem se diferenciam das que desistem.',
          'Ter uma pasta de "Vídeos de Reserva" gravados em dias de inspiração garante que você mantenha sua conta ativa mesmo quando precisar descansar o corpo e a mente.'
        ],
        realWorldExamples: [
          {
            title: 'Exemplo: A Pasta dos 5 Vídeos de Emergência',
            scenario: 'Aluna gravou 5 vídeos rápidos num sábado ensolarado e guardou no rascunho com a etiqueta "Emergência". Quando pegou uma gripe de 4 dias, continuou postando normalmente.',
            keyTakeaway: 'O algoritmo não notou nenhuma pausa e entregou seus vídeos sem queda de alcance.'
          }
        ],
        stepByStep: [
          {
            step: 1,
            title: 'Crie sua Pasta de Emergência com 3 a 5 vídeos',
            instruction: 'Sempre que estiver com tempo bom e a casa limpa, grave 2 ou 3 takes extras de tarefas universais (passando café, acendendo vela, organizando almofadas).',
            tip: 'Deixe esses vídeos editados e salvos para dias difíceis.'
          },
          {
            step: 2,
            title: 'Aplique a Regra dos 2 Minutos',
            instruction: 'Quando bater a preguiça, diga para si mesma: "Vou apenas posicionar o celular e gravar 1 take de 5 segundos. Se eu ainda não quiser continuar, eu paro".',
            tip: 'Na maioria das vezes, o difícil é apenas dar o primeiro passo; depois que começa, você grava o vídeo inteiro com prazer.'
          },
          {
            step: 3,
            title: 'Lembre-se da frase de ouro do curso',
            instruction: '"Grandes mudanças começam com pequenos passos". Cada vídeo é uma semente plantada para a sua liberdade financeira.',
            tip: 'Não pare até se orgulhar do que construiu.'
          }
        ],
        commonMistakes: [
          {
            mistake: 'Ficar esperando a "vontade" aparecer para fazer o que precisa ser feito.',
            fix: 'A ação gera motivação, nunca o contrário. Dê o primeiro passo e a vontade virá durante o caminho.'
          }
        ],
        practicalExercise: {
          title: 'Exercício 4: Criação do seu Vídeo de Emergência',
          description: 'Grave um vídeo simples e atemporal de 20 segundos de uma tarefa que nunca envelhece (ex: dobrando uma toalha macia ou passando café) e guarde no rascunho como sua reserva de emergência.',
          templatePlaceholder: 'Status do Vídeo de Emergência:\n[ ] Gravado e editado com música salvo nos rascunhos\nTema do vídeo reserva: ____________________'
        },
        checklist: [
          'Entendi a diferença entre motivação passageira e disciplina constante.',
          'Criei meu primeiro vídeo de reserva para dias de imprevisto.',
          'Assumi o compromisso de não desistir diante dos obstáculos.'
        ],
        keySummary: 'Grandes mudanças começam com pequenos passos diários. Tenha vídeos de reserva prontos e mantenha a brasa acesa mesmo nos dias mais frios.'
      }
    ]
  },
  {
    id: 11,
    title: 'Módulo 11 — Banco de Roteiros, Copys e Prompts de IA',
    shortTitle: 'Banco de Roteiros & IA',
    description: '20 ganchos irresistíveis, 15 roteiros prontos de faxina e rotina, ideias de supermercado e prompts de IA para nunca ficar sem ideias.',
    iconName: 'Sparkle',
    lessons: [
      {
        id: 'm11-a1',
        moduleId: 11,
        lessonNumber: 1,
        title: '20 Ganchos Irresistíveis para Prender no 1º Segundo',
        objective: 'Ter em mãos uma lista validada de ganchos visuais e textuais prontos para copiar e colar no topo dos seus vídeos.',
        readTime: '8 min de leitura',
        tag: 'Ganchos Prontos',
        explanation: [
          'Ter que inventar a frase de abertura do vídeo todos os dias é uma das coisas que mais gasta energia mental. Por isso, criadores profissionais usam bancos de modelos testados.',
          'Os ganchos dividem-se em 3 categorias: 1) Ganchos de Quebra de Padrão ("Pare de limpar o fogão assim!"); 2) Ganchos de Identificação Emocional ("Quando a casa está em paz, minha ansiedade diminui"); e 3) Ganchos de Transformação Rápida ("O reset de 15 minutos que salvou minha cozinha").',
          'Abaixo, você tem acesso a 20 modelos validados no nicho de rotina doméstica brasileira para usar livremente em suas publicações.'
        ],
        realWorldExamples: [
          {
            title: 'Exemplo: O Gancho #04 na Prática',
            scenario: 'Texto na tela: "A única misturinha caseira que realmente tirou o encardido do rejunte sem esforço".',
            keyTakeaway: 'O vídeo gerou 3.800 compartilhamentos e mais de 120 mil visualizações em 48 horas.'
          }
        ],
        stepByStep: [
          {
            step: 1,
            title: 'Escolha o gancho que combina com a tarefa do dia',
            instruction: 'Se for uma dica rápida, use os ganchos da Categoria 1. Se for rotina da manhã ou noite, use a Categoria 2.',
            tip: 'Mantenha o texto na tela nos primeiros 2 a 3 segundos.'
          },
          {
            step: 2,
            title: 'Combine o gancho com o som e ação imediata',
            instruction: 'Coloque a primeira cena já no auge da ação (borrifando o produto, espremendo a esponja com espuma, abrindo a torneira).',
            tip: 'Texto + ação visual rápida no 1º segundo = retenção garantida.'
          },
          {
            step: 3,
            title: 'Alterne os ganchos durante a semana',
            instruction: 'Não use a mesma frase 5 dias seguidos; varie entre curiosidade, identificação e dicas práticas.',
            tip: 'Isso mantém o público curioso para a próxima postagem.'
          }
        ],
        commonMistakes: [
          {
            mistake: 'Colocar um gancho apelativo (clickbait) e no vídeo não entregar a solução prometida.',
            fix: 'Sempre entregue exatamente o que prometeu no gancho para construir autoridade e confiança.'
          }
        ],
        practicalExercise: {
          title: 'Exercício 1: Selecionando seus 3 Ganchos da Semana',
          description: 'Leia a lista de 20 ganchos abaixo e selecione os 3 que você vai usar nas suas próximas 3 postagens.',
          templatePlaceholder: 'Gancho escolhido 1: ____________________\nGancho escolhido 2: ____________________\nGancho escolhido 3: ____________________'
        },
        checklist: [
          'Conheci as 3 categorias de ganchos virais.',
          'Copiei os 20 ganchos para o meu bloco de notas.',
          'Selecionei os 3 ganchos das minhas próximas gravações.'
        ],
        readyCopy: [
          'CATEGORIA 1 — DICAS E QUEBRA DE PADRÃO:\n1. "Pare de sofrer esfregando o fogão: faça essa misturinha de 2 ingredientes"\n2. "O truque simples que deixa o box do banheiro brilhando sem esforço"\n3. "Nunca mais jogue dinheiro fora com produtos caros: teste isso antes"\n4. "O segredo de hotel para deixar as toalhas sempre fofas e cheirosas"\n5. "3 coisas que eu parei de comprar no mercado e passei a fazer em casa"\n6. "O produto de 12 reais da Shopee que salvou a limpeza da minha cozinha"',
          'CATEGORIA 2 — IDENTIFICAÇÃO E ACONCHEGO:\n7. "Quando a minha casa está em ordem, minha cabeça descansa"\n8. "30 minutos de paz cuidando do meu cantinho antes de dormir"\n9. "Minha rotina matinal para começar o dia com o coração leve"\n10. "A melhor sensação do mundo: deitar sabendo que a pia está limpa"\n11. "O carinho que eu tenho pelo meu lar não tem preço"\n12. "Fechando a cozinha comigo às 21h em silêncio"\n13. "Um lembrete de que sua casa não precisa ser de revista para ser feliz"',
          'CATEGORIA 3 — VELOCIDADE E TRANSFORMAÇÃO:\n14. "Reset rápido de 15 minutos na sala antes das crianças acordarem"\n15. "Transformando o caos do almoço em paz em 30 segundos"\n16. "Minha faxina rápida de sexta para aproveitar o fim de semana com a família"\n17. "Organizando a gaveta mais bagunçada da casa comigo"\n18. "O antes e depois dessa bancada vai te dar muita satisfação"\n19. "Como eu deixo a casa toda cheirosa em apenas 10 minutos"\n20. "Vem comigo fazer o reset da noite para começar o dia amanhã sem estresse"'
        ],
        keySummary: 'Ganchos testados eliminam o bloqueio criativo e garantem que o espectador pare de rolar o feed e assista ao seu vídeo até o fim.'
      },
      {
        id: 'm11-a2',
        moduleId: 11,
        lessonNumber: 2,
        title: '15 Roteiros Prontos de Faxina, Lavanderia e Cozinha',
        objective: 'Acessar roteiros passo a passo com marcação de cenas, ângulos e textos prontos para gravar sem perder tempo.',
        readTime: '9 min de leitura',
        tag: 'Roteiros Prontos',
        explanation: [
          'Um roteiro de vídeo curto não precisa ser longo como uma peça de teatro: ele é apenas uma lista de 4 a 6 ações visuais ordenadas que contam uma historinha satisfatória em 30 a 50 segundos.',
          'Quando você já sabe exatamente qual ângulo colocar em cada tarefa, você grava tudo em menos de 15 minutos sem ficar parada pensando no que fazer.',
          'Abaixo, você recebe 15 estruturas prontas para gravar: 5 de Cozinha, 5 de Lavanderia/Roupas e 5 de Sala/Quarto.'
        ],
        realWorldExamples: [
          {
            title: 'Exemplo: Roteiro Cozinha #02 no Ar',
            scenario: 'Roteiro de 35 segundos: 1) Tirando os copos da pia (Plano Médio); 2) Borrifando desengordurante caseiro (Close Macro); 3) Esponja amarela espumando (POV); 4) Água levando espuma (Close); 5) Passando pano seco no balcão e colocando florzinha.',
            keyTakeaway: 'Gravado em 8 minutos na terça-feira de manhã, bateu 190 mil visualizações.'
          }
        ],
        stepByStep: [
          {
            step: 1,
            title: 'Escolha o roteiro que corresponde à sua tarefa de hoje',
            instruction: 'Se hoje for dia de lavar roupa, escolha um dos roteiros da categoria Lavanderia.',
            tip: 'Você não precisa mudar sua rotina de casa para se adequar ao roteiro; escolha o roteiro que se adequa ao seu dia.'
          },
          {
            step: 2,
            title: 'Posicione o celular nos ângulos indicados em cada cena',
            instruction: 'Siga a recomendação de ângulo de cada cena (Plano Detalhe, POV, etc.).',
            tip: 'A variação de ângulos já está calculada para garantir retenção alta.'
          },
          {
            step: 3,
            title: 'Cole a legenda e hashtags sugeridas',
            instruction: 'Ao postar, use a copy pronta fornecida para economizar tempo.',
            tip: 'Adapte com o seu tom de voz e os links da sua bio.'
          }
        ],
        commonMistakes: [
          {
            mistake: 'Querer gravar tudo com o mesmo enquadramento sem mexer o celular de lugar.',
            fix: 'Mude o celular de posição a cada novo passo do roteiro para enriquecer o vídeo.'
          }
        ],
        practicalExercise: {
          title: 'Exercício 2: Executando seu Primeiro Roteiro Pronto',
          description: 'Escolha um dos 15 roteiros da lista abaixo e execute hoje mesmo na sua casa.',
          templatePlaceholder: 'Roteiro escolhido: ____________________\nTempo que levou para gravar os takes: ____ minutos\nSentiu mais agilidade tendo o roteiro pronto?'
        },
        checklist: [
          'Li os 15 roteiros organizados por cômodos da casa.',
          'Escolhi o roteiro da minha tarefa de hoje.',
          'Gravei as cenas seguindo as indicações de ângulos recomendadas.'
        ],
        readyCopy: [
          'ROTEIRO 1 — O RESET DA COZINHA (35s):\n• Cena 1 (3s): Close na pia com pratos do almoço -> Gancho: "15 minutos que devolvem a paz da minha cozinha"\n• Cena 2 (4s): Apoio lateral -> Colocando o detergente e abrindo a torneira com água quente\n• Cena 3 (6s): P.O.V. -> Esfregando os pratos com esponja espumosa\n• Cena 4 (5s): Close na água límpida enxaguando a louça\n• Cena 5 (6s): Velocidade 2x -> Passando pano de microfibra seco na bancada de inox\n• Cena 6 (3s): Velocidade 1.0x -> Pousando uma xícara de chá quente na bancada impecável',
          'ROTEIRO 2 — A LAVANDERIA CHEIROSA (40s):\n• Cena 1 (3s): Abrindo a tampa da máquina com cesto de roupas coloridas\n• Cena 2 (4s): P.O.V. -> Colocando o sabão líquido na gaveta medidora\n• Cena 3 (3s): P.O.V. -> Adicionando vinagre de álcool no compartimento do amaciante (truque caseiro!)\n• Cena 4 (4s): Girando o botão para o ciclo suave com som de clique (ASMR)\n• Cena 5 (8s): Estendendo os lençóis brancos no varal com vento balançando ao sol\n• Cena 6 (4s): Borrifando água perfumada de lençóis nas toalhas dobradas'
        ],
        keySummary: 'Roteiros prontos transformam o caos em clareza: siga o passo a passo de cenas e ângulos e grave vídeos cinematográficos em menos de 15 minutos.'
      },
      {
        id: 'm11-a3',
        moduleId: 11,
        lessonNumber: 3,
        title: '10 Ideias de Vídeos de Compras e Feirinha sem Mostrar Rosto',
        objective: 'Criar conteúdos virais e estéticos mostrando compras de supermercado, feira de frutas e higienização de alimentos.',
        readTime: '8 min de leitura',
        tag: 'Compras & Higienização',
        explanation: [
          'Vídeos de "Compras do Mês" e "Feirinha da Semana" estão entre os conteúdos mais assistidos e salvos de toda a internet. Pessoas adoram ver como as outras famílias organizam suas despensas e geladeiras.',
          'Você não precisa filmar dentro do supermercado se tiver vergonha: o segredo desse formato é filmar em casa quando as compras chegam, mostrando o desempacotamento (Haul) e a higienização dos vegetais.',
          'Além de altíssimo engajamento, esse formato é a vitrine perfeita para recomendar potes herméticos, saquinhos de silicone e organizadores de gaveta de geladeira como afiliada.'
        ],
        realWorldExamples: [
          {
            title: 'Exemplo: A Higienização dos Morangos e Uvas',
            scenario: 'Vídeo mostrando a bacia com água e vinagre higienizando os morangos, secando no papel toalha e guardando no pote de vidro forrado.',
            keyTakeaway: 'Mais de 700 mil visualizações com mulheres salvando para lembrar da técnica de conservação dos alimentos.'
          }
        ],
        stepByStep: [
          {
            step: 1,
            title: 'O Plano Detalhe das Sacolas Chegando',
            instruction: 'Apoie o celular na bancada e grave você tirando as frutas e vegetais coloridos da sacola (tomates, maçãs, folhas verdes).',
            tip: 'As cores naturais dos alimentos enchem os olhos de quem assiste.'
          },
          {
            step: 2,
            title: 'O Momento da Bacia de Água (ASMR)',
            instruction: 'Grave a água enchendo a tigela e as frutas caindo suavemente com respingos estéticos.',
            tip: 'O som da água lavando os vegetais é extremamente relaxante.'
          },
          {
            step: 3,
            title: 'Organização final na geladeira ou fruteira',
            instruction: 'Mostre as frutas acomodadas em potes organizadores ou na fruteira com alinhamento impecável.',
            tip: 'Esse take final dá sensação imediata de fartura e ordem no lar.'
          }
        ],
        commonMistakes: [
          {
            mistake: 'Ficar mostrando recibos de compras com preços minúsculos ilegíveis.',
            fix: 'Foque na beleza dos alimentos e nos recipientes de organização, não na nota fiscal.'
          }
        ],
        practicalExercise: {
          title: 'Exercício 3: Roteiro da sua Próxima Fruta ou Feirinha',
          description: 'Na próxima vez que comprar frutas ou legumes, grave a sequência de lavar e guardar em potes. Planeje os 3 takes principais.',
          templatePlaceholder: 'Alimento escolhido: (ex: uvas ou tomates) ____________________\nTake 1 (Chegando na sacola): ____________________\nTake 2 (Lavagem na água): ____________________\nTake 3 (Guardado no pote limpo): ____________________'
        },
        checklist: [
          'Entendi o apelo visual das compras e higienização de alimentos.',
          'Aprendi a gravar na bancada de casa sem precisar filmar no mercado.',
          'Identifiquei as oportunidades de links de afiliados em potes e recipientes.'
        ],
        keySummary: 'Cores de frutas, água corrente e potes alinhados na geladeira: vídeos de compras são campeões de salvamentos e vendas de potes organizadores.'
      },
      {
        id: 'm11-a4',
        moduleId: 11,
        lessonNumber: 4,
        title: 'Como Usar Inteligência Artificial para Ter 50 Ideias em 5 Minutos',
        objective: 'Utilizar ferramentas gratuitas de IA para gerar roteiros, títulos persuasivos e calendários de postagens personalizados para o seu perfil.',
        readTime: '9 min de leitura',
        tag: 'Inteligência Artificial',
        explanation: [
          'Você não precisa sofrer com bloqueio criativo nunca mais na sua vida. A inteligência artificial pode atuar como sua assistente pessoal de roteiros gratuita 24 horas por dia.',
          'Com o comando (prompt) correto, você pode pedir para a IA criar 30 ideias de vídeos curtos de faxina com ganchos em segundos, adaptados para o tamanho da sua casa e os produtos que você mais gosta.',
          'Abaixo, você recebe os exatos comandos profissionais que os maiores criadores de conteúdo usam para alimentar seus perfis o ano inteiro.'
        ],
        realWorldExamples: [
          {
            title: 'Exemplo: O Prompt de 1 Mês de Ideias',
            scenario: 'Criadora colou o prompt de criação no chat de IA pedindo: "Crie 20 ideias de vídeos de rotina noturna para donas de casa sem mostrar o rosto". Em 15 segundos, ela recebeu uma tabela completa com ideias, ganchos e sugestões de áudio.',
            keyTakeaway: 'Economizou mais de 4 horas de planejamento e já gravou os 4 primeiros vídeos no mesmo dia.'
          }
        ],
        stepByStep: [
          {
            step: 1,
            title: 'Copie o Prompt Mestre fornecido abaixo',
            instruction: 'Selecione o modelo de comando pronto e cole em uma ferramenta de IA generativa gratuita.',
            tip: 'Preencha os campos entre colchetes [como seu foco principal: ex: cozinha e lavanderia].'
          },
          {
            step: 2,
            title: 'Peça variações de ganchos e legendas',
            instruction: 'Peça: "Agora escreva a legenda com chamada para ação de afiliada para a ideia número 3".',
            tip: 'A IA entregará o texto completo com hashtags e estrutura pronta.'
          },
          {
            step: 3,
            title: 'Adapte com o seu toque humano e sotaque natural',
            instruction: 'Nunca copie cegamente: revise para garantir que soe como uma conversa de amiga acolhedora da sua região.',
            tip: 'A IA dá a estrutura; o seu coração traz a conexão humana.'
          }
        ],
        commonMistakes: [
          {
            mistake: 'Fazer pedidos genéricos como "me dê ideias de vídeos" e receber respostas sem graça.',
            fix: 'Use prompts detalhados especificando o nicho (donas de casa, faceless, vídeos de 30 segundos, estilo acolhedor).'
          }
        ],
        practicalExercise: {
          title: 'Exercício 4: Testando o Prompt Mestre de IA',
          description: 'Copie o prompt abaixo, cole na ferramenta de IA e anote as 3 ideias geradas que você mais gostou.',
          templatePlaceholder: 'Ideia gerada 1: ____________________\nIdeia gerada 2: ____________________\nIdeia gerada 3: ____________________'
        },
        checklist: [
          'Copiei o Prompt Mestre de geração de ideias de conteúdo.',
          'Gerei meu primeiro calendário temático de postagens.',
          'Aprendi a humanizar as sugestões com o meu tom de voz único.'
        ],
        readyCopy: [
          'PROMPT MESTRE DE GERAÇÃO DE ROTEIROS DE ROTINA:\n"Você é uma especialista renomada em marketing de conteúdo e algoritmos do TikTok, Instagram Reels e YouTube Shorts, focada no nicho de rotina doméstica e organização do lar sem mostrar o rosto (faceless).\n\nMinha proposta é criar vídeos estéticos, acolhedores e dinâmicos para mulheres e donas de casa reais, mostrando tarefas simples do dia a dia (limpeza de bancada, passar café, reset noturno, arrumação de cama, organização de gavetas) para gerar conexão, retenção alta e vendas como afiliada da Shopee/Amazon.\n\nPor favor, crie uma tabela com 10 ideias de vídeos de 30 a 45 segundos contendo as seguintes colunas:\n1. Título e Tema do Vídeo\n2. Gancho magnético dos primeiros 3 segundos (texto na tela)\n3. Descrição das 4 cenas principais e melhores ângulos (ex: POV, Plano Detalhe)\n4. Sugestão de áudio (ASMR puro ou Estilo de música instrumental)\n5. Chamada para Ação (CTA) sutil para a biografia"'
        ],
        keySummary: 'A inteligência artificial aliada aos prompts certos é o fim do bloqueio criativo. Gere dezenas de pautas em segundos e foque o seu tempo no que realmente importa: gravar com carinho.'
      }
    ]
  },
  {
    id: 12,
    title: 'Módulo 12 — Ferramentas Bônus, Checklist & Certificado Oficial',
    shortTitle: 'Certificado & Bônus',
    description: 'Checklist diário da criadora, planilha de afiliados e ganhos, canal de apoio e a emissão do seu Certificado Oficial de Conclusão.',
    iconName: 'Award',
    lessons: [
      {
        id: 'm12-a1',
        moduleId: 12,
        lessonNumber: 1,
        title: 'Checklist Diário da Criadora de Conteúdo Doméstico',
        objective: 'Ter um guia visual prático para conferir todos os passos antes, durante e após a gravação para nunca esquecer nada.',
        readTime: '7 min de leitura',
        tag: 'Checklist Operacional',
        explanation: [
          'Pilotos de avião e cirurgiões usam checklists todos os dias para não depender da memória. Criadoras profissionais fazem a mesma coisa.',
          'Antes de gravar, você confere a lente, a luz e o apoio. Durante a gravação, confere se as mãos estão centralizadas e se gravou em takes curtos. Após a gravação, confere os cortes, a música e a legenda na zona segura.',
          'Com essa rotina de verificação rápida de 60 segundos, você garante que nenhum vídeo saia com defeito ou tenha que ser regravado.'
        ],
        realWorldExamples: [
          {
            title: 'Exemplo: O Dia em que a Lente Estava com Gordura',
            scenario: 'Criadora gravou 20 minutos de faxina com a lente suja de óleo de cozinha. O vídeo inteiro ficou embaçado e foi para o lixo.',
            keyTakeaway: 'Após adotar o checklist impresso ao lado da geladeira, nunca mais perdeu nenhum take por descuido técnico.'
          }
        ],
        stepByStep: [
          {
            step: 1,
            title: 'Etapa Pré-Gravação (30 segundos)',
            instruction: '1) Limpar lente da câmera; 2) Verificar bateria do celular; 3) Janela de luz aberta; 4) Apoio firme testado.',
            tip: 'Mantenha esse hábito automático antes de abrir o aplicativo de câmera.'
          },
          {
            step: 2,
            title: 'Etapa de Gravação (Micro-Takes)',
            instruction: '1) Takes curtos de 5 a 10 segundos; 2) Mãos e tarefas no centro; 3) Variação entre close detalhe e plano médio.',
            tip: 'Nunca deixe a gravação rodando sem necessidade.'
          },
          {
            step: 3,
            title: 'Etapa Pós-Produção e Publicação',
            instruction: '1) Cortes precisos no CapCut; 2) Velocidade 2x nas partes longas; 3) Gancho nos primeiros 3 segundos; 4) Legenda na zona segura.',
            tip: 'Pronto! Seu vídeo está perfeito para ir ao ar.'
          }
        ],
        commonMistakes: [
          {
            mistake: 'Tentar memorizar tudo de cabeça e esquecer de limpar a lente ou ativar a iluminação.',
            fix: 'Consulte o checklist digital desta aula sempre que for iniciar uma gravação.'
          }
        ],
        practicalExercise: {
          title: 'Exercício 1: Aplicação do Checklist em 1 Gravação',
          description: 'Abra o checklist interativo da aula e marque cada um dos itens antes de gravar seu próximo conteúdo.',
          templatePlaceholder: 'Checklist concluído antes da gravação? [ ] Sim\nObservações sobre o processo: ____________________'
        },
        checklist: [
          'Lente da câmera do celular limpa com microfibra.',
          'Ambiente iluminado com luz natural de janela.',
          'Suporte estável posicionado e validado.',
          'Cortes secos e eliminação de momentos mortos no editor.',
          'Legenda com palavra-chave na Zona Segura da tela.'
        ],
        keySummary: 'O checklist é o seu seguro contra erros técnicos. 30 segundos de conferência antes de gravar poupam horas de frustração.'
      },
      {
        id: 'm12-a2',
        moduleId: 12,
        lessonNumber: 2,
        title: 'Planilha e Guia de Organização de Links de Afiliados e Ganhos',
        objective: 'Aprender a organizar seus códigos de afiliados, links encurtados e registrar seus ganhos mensais para acompanhar seu crescimento.',
        readTime: '8 min de leitura',
        tag: 'Gestão Financeira',
        explanation: [
          'Conforme você for recomendando produtos em diferentes vídeos, você terá dezenas de links ativos: o rodo da Shopee, o borrifador da Amazon, o cesto organizador do Mercado Livre, etc.',
          'Se você não organizar seus links em uma tabela simples no celular ou computador, você vai perder tempo toda vez que uma seguidora perguntar onde comprou um item.',
          'Além disso, anotar suas comissões recebidas mês a mês gera uma satisfação indescritível ao ver o gráfico subindo de R$ 80 no primeiro mês para R$ 450 no segundo e ultrapassando R$ 1.500 nos meses seguintes.'
        ],
        realWorldExamples: [
          {
            title: 'Exemplo: A Tabela de Achadinhos das Alunas',
            scenario: 'Aluna criou uma nota simples no Google Keep ou Notion com 4 colunas: Código | Produto | Link de Afiliada | Loja.',
            keyTakeaway: 'Quando alguém comentava no vídeo, em 5 segundos ela copiava o link exato e enviava, convertendo a venda na hora.'
          }
        ],
        stepByStep: [
          {
            step: 1,
            title: 'Crie sua Nota Central de Achadinhos',
            instruction: 'No seu aplicativo de notas do celular, crie uma nota chamada "MEUS LINKS DE AFILIADA - RENDA COM A ROTINA".',
            tip: 'Fixe essa nota no topo do aplicativo de notas para acesso imediato.'
          },
          {
            step: 2,
            title: 'Categorize os links por cômodo',
            instruction: 'Divida em: Cozinha / Banheiro / Lavanderia / Quarto e Sala / Cuidados Pessoais.',
            tip: 'Facilita encontrar o item correspondente ao tema do vídeo postado.'
          },
          {
            step: 3,
            title: 'Registre suas comissões todo dia 1º do mês',
            instruction: 'Abra os painéis da Shopee e Amazon, anote o total comissionado e comemore cada real de renda extra conquistado com o trabalho das suas mãos.',
            tip: 'Reinvista uma pequena parte em novos utensílios para produzir novos vídeos.'
          }
        ],
        commonMistakes: [
          {
            mistake: 'Deixar links vencidos ou produtos esgotados ativos na árvore de links da bio.',
            fix: 'Revise sua árvore de links 1 vez por mês para garantir que todos os produtos continuam disponíveis com bom preço.'
          }
        ],
        practicalExercise: {
          title: 'Exercício 2: Criando sua Tabela de Achadinhos',
          description: 'Cadastre os primeiros 3 links de afiliada que você pretende usar nos seus vídeos organizados por cômodo.',
          templatePlaceholder: 'Item 1: [Cozinha] ____________________ -> Link: ____________________\nItem 2: [Lavanderia] ____________________ -> Link: ____________________\nItem 3: [Banheiro] ____________________ -> Link: ____________________'
        },
        checklist: [
          'Criei minha nota ou tabela de links de afiliados organizada.',
          'Categorizei os itens por cômodos da casa.',
          'Defini a rotina mensal de conferência de links e ganhos.'
        ],
        keySummary: 'Organização gera vendas rápidas. Mantenha seus links na ponta dos dedos e acompanhe seu progresso financeiro com orgulho mês a mês.'
      },
      {
        id: 'm12-a3',
        moduleId: 12,
        lessonNumber: 3,
        title: 'Suporte à Aluna, Tirar Dúvidas e Canal de Comunidade',
        objective: 'Saber como acionar o time de apoio pedagógico, participar da comunidade de alunas e nunca se sentir sozinha na jornada.',
        readTime: '7 min de leitura',
        tag: 'Comunidade & Apoio',
        explanation: [
          'Você não está sozinha nesta caminhada. Milhares de mulheres comuns em todo o Brasil estão exatamente no mesmo processo que você: aprendendo a posicionar o celular, quebrando o medo do julgamento e construindo sua liberdade financeira com as próprias mãos.',
          'Participar ativamente da comunidade de alunas permite trocar dicas de produtos baratos que estão vendendo muito, tirar dúvidas sobre configurações técnicas e celebrar as conquistas umas das outras.',
          'Se você tiver qualquer dúvida durante a execução das aulas, nosso suporte oficial está sempre disponível para te orientar com carinho e paciência.'
        ],
        realWorldExamples: [
          {
            title: 'Exemplo: A Troca de Dicas na Comunidade',
            scenario: 'Uma aluna compartilhou na comunidade que um borrifador contínuo de R$ 14 estava com frete grátis na Shopee. Várias colegas usaram a dica em seus vídeos.',
            keyTakeaway: 'Em uma semana, mais de 20 alunas fizeram suas primeiras vendas do mesmo produto.'
          }
        ],
        stepByStep: [
          {
            step: 1,
            title: 'Acesse os canais oficiais de avisos e novidades',
            instruction: 'Acompanhe as atualizações de tendências de áudios em alta e novas ferramentas que compartilhamos periodicamente.',
            tip: 'Mantenha as notificações ativas para não perder dicas quentes.'
          },
          {
            step: 2,
            title: 'Como tirar dúvidas com a equipe pedagógica',
            instruction: 'Sempre que tiver uma dúvida técnica de edição ou configuração, envie sua pergunta de forma clara com print da tela para nossa equipe.',
            tip: 'Respondemos com carinho para destravar seu progresso.'
          },
          {
            step: 3,
            title: 'Seja uma incentivadora de outras mulheres',
            instruction: 'Curta e apoie as conquistas das outras alunas. A união feminina no nicho de donas de casa cria uma corrente do bem poderosa.',
            tip: 'O sucesso de uma colega prova que o mercado é abundante para todas.'
          }
        ],
        commonMistakes: [
          {
            mistake: 'Ficar com uma dúvida travando você por dias sem pedir ajuda.',
            fix: 'Acione o suporte ou consulte as anotações das aulas. Nenhuma dúvida é boba.'
          }
        ],
        practicalExercise: {
          title: 'Exercício 3: Sua Mensagem de Compromisso',
          description: 'Escreva uma mensagem de compromisso com você mesma e com a sua jornada neste curso.',
          templatePlaceholder: 'Eu, ___________________________________, assumo o compromisso de aplicar cada ensinamento deste curso com constância e fé no meu potencial.'
        },
        checklist: [
          'Conheci os canais de apoio e suporte à aluna.',
          'Entendi a força da comunidade de mulheres que se apoiam.',
          'Assumi meu compromisso de perseverança e aplicação contínua.'
        ],
        keySummary: 'Caminhar acompanhada é o segredo para ir longe. Conte com nosso apoio e celebre cada degrau subido na sua jornada de sucesso.'
      },
      {
        id: 'm12-a4',
        moduleId: 12,
        lessonNumber: 4,
        title: 'Conclusão da sua Formação e Emissão do Certificado Oficial',
        objective: 'Celebrar a conclusão com honra de todos os 12 módulos do curso e emitir seu Certificado Oficial de Conclusão Personalizado.',
        readTime: '6 min de leitura',
        tag: 'Conclusão & Certificado',
        explanation: [
          'Parabéns! Chegar até aqui é uma prova incontestável da sua determinação, foco e compromisso com o seu futuro. Você não é mais a mesma pessoa que começou com medo e dúvidas no Módulo 1.',
          'Você aprendeu os fundamentos do conteúdo de rotina, configurou suas contas profissionais, dominou os ângulos cinematográficos faceless sem precisar mostrar o rosto, desvendou a iluminação natural, dominou a edição no CapCut, explorou o poder magnético do ASMR e compreendeu as fontes reais de monetização e afiliados.',
          'Agora é o momento de comemorar essa conquista histórica com a emissão do seu Certificado Oficial de Conclusão da Academia Digital Renda com a Rotina!'
        ],
        realWorldExamples: [
          {
            title: 'Exemplo: O Quadro do Certificado no Quarto',
            scenario: 'Aluna imprimiu o certificado em papel especial, colocou em uma moldura bonita perto da mesa de trabalho e postou uma foto orgulhosa.',
            keyTakeaway: 'O certificado serve como lembrete diário de que ela é uma profissional capacitada e dona do seu próprio negócio digital.'
          }
        ],
        stepByStep: [
          {
            step: 1,
            title: 'Verifique se todas as 48 aulas foram marcadas como concluídas',
            instruction: 'Acesse o menu lateral do curso e confira se o seu indicador de progresso geral atingiu 100% de conclusão.',
            tip: 'Se faltar alguma aula, clique e marque como concluída.'
          },
          {
            step: 2,
            title: 'Personalize o nome no seu Certificado',
            instruction: 'Na aba Certificado, digite seu nome completo exatamente como deseja que apareça na impressão oficial.',
            tip: 'Seu nome será grafado com tipografia nobre dourada com selo oficial.'
          },
          {
            step: 3,
            title: 'Emita, imprima ou salve em PDF o documento oficial',
            instruction: 'Toque no botão "Imprimir / Salvar em PDF". Guarde esse marco com orgulho e mostre para sua família.',
            tip: 'Você é agora oficialmente uma Criadora de Conteúdo Doméstico e Gestora de Rotina Digital.'
          }
        ],
        commonMistakes: [
          {
            mistake: 'Parar de postar e achar que o aprendizado terminou com a última aula.',
            fix: 'A conclusão do curso é apenas a linha de partida da sua carreira. Continue aplicando os roteiros e ganchos todos os dias!'
          }
        ],
        practicalExercise: {
          title: 'Exercício 4: Emissão do Certificado Oficial',
          description: 'Acesse a aba Certificado, preencha seu nome e gere o seu documento oficial de conclusão com o selo dourado.',
          templatePlaceholder: 'Nome no Certificado: ___________________________________\nData da formatura: ____/____/________\nSensação de ter concluído o curso completo:'
        },
        checklist: [
          'Completei os 12 módulos e as 48 aulas detalhadas do curso.',
          'Preenchi meu nome completo para emissão do documento oficial.',
          'Gerei meu Certificado de Conclusão com selo de excelência da Academia Digital.'
        ],
        keySummary: 'Você completou uma formação completa, profunda e transformadora. Seu Certificado Oficial simboliza sua dedicação e o início de uma nova fase de prosperidade e liberdade.'
      }
    ]
  }
];

export const DAILY_TIPS = [
  {
    id: 1,
    title: 'A Regra dos 3 Segundos no Rodo',
    tip: 'Antes de postar seu vídeo de limpeza do chão, corte qualquer momento em que você esteja andando com o rodo. Comece o vídeo com a espuma sendo puxada rente ao rodapé. O contraste é imediato!',
    category: 'Edição & Retenção'
  },
  {
    id: 2,
    title: 'Luz da Manhã é seu Ring Light Gratuito',
    tip: 'Grave seus vídeos de rotina entre 8h30 e 10h da manhã com a cortina branca fechada. A cortina funciona como difusor gigante e esconde qualquer imperfeição na parede.',
    category: 'Iluminação'
  },
  {
    id: 3,
    title: 'O Som Crocante da Esponja',
    tip: 'Coloque detergente concentrado com 3 gotas de água na esponja seca e aperte 3 vezes perto do microfone do celular. O áudio de espuma crocante aumenta em 40% a taxa de conclusão.',
    category: 'ASMR'
  },
  {
    id: 4,
    title: 'Links na Bio com Numeração',
    tip: 'Sempre numere os itens da sua bio (#01, #02, #03). No vídeo, diga apenas: "O link do meu borrifador favorito é o número 3 da bio". As pessoas encontram em 2 segundos sem errar.',
    category: 'Afiliados'
  },
  {
    id: 5,
    title: 'Respondendo com Novas Perguntas',
    tip: 'Quando alguém comentar "Que cozinha cheirosa", responda com: "Muito obrigada, lindeza! Você também gosta de cheirinho de lavanda ou prefere cítrico?". Isso dobra os comentários e faz o algoritmo entregar mais!',
    category: 'Engajamento'
  },
  {
    id: 6,
    title: 'Nunca Apague Vídeos nos Primeiros 3 Dias',
    tip: 'Muitos vídeos de tarefas do lar demoram até 48 horas para serem indexados pelo algoritmo e atingirem a página Para Você. Tenha paciência e deixe a plataforma trabalhar.',
    category: 'Algoritmo'
  }
];

export const VIRAL_HOOKS_BANK = [
  {
    id: 1,
    category: 'Curiosidade & Segredos',
    hook: 'O único produto de R$ 12 da Shopee que realmente tirou o queimado da minha panela.',
    useCase: 'Cozinha, panelas, fogão'
  },
  {
    id: 2,
    category: 'Curiosidade & Segredos',
    hook: 'Pare de sofrer para limpar o box do banheiro: faça esse truque de 2 minutos.',
    useCase: 'Banheiro, box de vidro, azulejo'
  },
  {
    id: 3,
    category: 'Curiosidade & Segredos',
    hook: 'O segredo de hotel para deixar as toalhas macias e fofas sem gastar com amaciante caro.',
    useCase: 'Lavanderia, toalhas, lençóis'
  },
  {
    id: 4,
    category: 'Curiosidade & Segredos',
    hook: 'A misturinha caseira que as faxineiras profissionais usam e ninguém te conta.',
    useCase: 'Limpeza pesada, desengordurante'
  },
  {
    id: 5,
    category: 'Aconchego & Identificação',
    hook: 'Quando a minha casa está em ordem, minha mente descansa. Vem comigo nesse reset.',
    useCase: 'Rotina noturna, domingo à noite'
  },
  {
    id: 6,
    category: 'Aconchego & Identificação',
    hook: 'Minha rotina matinal silenciosa para começar o dia com o coração leve.',
    useCase: 'Passar café, arrumar a cama'
  },
  {
    id: 7,
    category: 'Aconchego & Identificação',
    hook: 'Fechando a cozinha comigo às 21h para acordar amanhã sem desespero.',
    useCase: 'Fechamento do dia, bancada limpa'
  },
  {
    id: 8,
    category: 'Aconchego & Identificação',
    hook: 'Um lembrete carinhoso: sua casa não precisa ser de revista para ser o seu refúgio de paz.',
    useCase: 'Casa real, tarefas simples'
  },
  {
    id: 9,
    category: 'Rapidez & Praticidade',
    hook: '15 minutos de faxina rápida antes das crianças acordarem.',
    useCase: 'Speed cleaning, mães com filhos'
  },
  {
    id: 10,
    category: 'Rapidez & Praticidade',
    hook: 'Transformando o caos do almoço em paz em menos de 30 segundos.',
    useCase: 'Louça, pia, fogão'
  },
  {
    id: 11,
    category: 'Rapidez & Praticidade',
    hook: 'O antes e depois dessa gaveta vai te dar uma sensação imediata de alívio.',
    useCase: 'Organização de gavetas, potes'
  },
  {
    id: 12,
    category: 'Rapidez & Praticidade',
    hook: 'Como eu mantenho a pia brilhando a semana inteira sem esforço.',
    useCase: 'Inox, torneiras, pedras'
  }
];

export const CHALLENGE_30_DAYS = [
  { day: 1, title: 'Limpeza da Lente e Teste de Iluminação', task: 'Limpe a lente da câmera, apoie o celular na caneca e grave 2 testes de 10 segundos da janela da cozinha.', phase: 'Fase 1: Destrave Inicial' },
  { day: 2, title: 'Primeiro Ângulo P.O.V.', task: 'Grave suas mãos passando um pano úmido na bancada em primeira pessoa por 15 segundos.', phase: 'Fase 1: Destrave Inicial' },
  { day: 3, title: 'Som de Espuma (ASMR)', task: 'Esprema a esponja com detergente e grave o som nítido bem perto do microfone.', phase: 'Fase 1: Destrave Inicial' },
  { day: 4, title: 'Primeiros Cortes no CapCut', task: 'Junte os 3 takes gravados nos dias anteriores e corte para 15 segundos dinâmicos.', phase: 'Fase 1: Destrave Inicial' },
  { day: 5, title: 'Criando sua Conta do Zero', task: 'Crie seu perfil novo no TikTok ou Instagram com nome limpo e bio magnética acolhedora.', phase: 'Fase 1: Destrave Inicial' },
  { day: 6, title: 'Foto de Perfil Estética', task: 'Escolha uma foto bonita de xícara de café ou cantinho aconchegante para a foto de perfil.', phase: 'Fase 1: Destrave Inicial' },
  { day: 7, title: 'O 1º Vídeo Oficial no Ar!', task: 'Poste seu primeiro vídeo de rotina com legenda de gancho e 4 hashtags.', phase: 'Fase 1: Destrave Inicial' },
  { day: 8, title: 'Reset Noturno de 30s', task: 'Grave um vídeo noturno com iluminação quente apagando a luz da cozinha arrumada.', phase: 'Fase 2: Consistência' },
  { day: 9, title: 'Arrumando a Cama com Janela Aberta', task: 'Grave o esticar da colcha e os travesseiros com luz da manhã.', phase: 'Fase 2: Consistência' },
  { day: 10, title: 'Speed Clean da Pia', task: 'Acelere o take da louça em 2.5x e finalize com o pano seco brilhando.', phase: 'Fase 2: Consistência' },
  { day: 11, title: 'Respondendo os Primeiros Comentários', task: 'Entre nas notificações e responda cada comentário fazendo uma pergunta carinhosa de volta.', phase: 'Fase 2: Consistência' },
  { day: 12, title: 'Vídeo com Narração de Voz no Guarda-Roupa', task: 'Grave 25 segundos de faxina e narre uma reflexão calma debaixo da coberta.', phase: 'Fase 2: Consistência' },
  { day: 13, title: 'Organizando uma Gaveta (Antes vs Depois)', task: 'Mostre a bagunça real de 3 segundos e a organização impecável em seguida.', phase: 'Fase 2: Consistência' },
  { day: 14, title: 'Cadastro no Shopee Afiliados', task: 'Preencha seu cadastro gratuito na Shopee para receber seu código de links.', phase: 'Fase 2: Consistência' },
  { day: 15, title: 'Criando sua Árvore de Links', task: 'Crie sua página no Beacons ou Linktree e coloque os primeiros 3 itens da sua casa.', phase: 'Fase 3: Alavancagem & Vendas' },
  { day: 16, title: 'Primeiro Vídeo com Link Ativo', task: 'Grave um vídeo usando o borrifador ou rodo e indique o item #01 da sua bio na legenda.', phase: 'Fase 3: Alavancagem & Vendas' },
  { day: 17, title: 'Teste de Som de Borrifador', task: 'Grave um vídeo de ASMR destacando o spray contínuo na superfície do espelho.', phase: 'Fase 3: Alavancagem & Vendas' },
  { day: 18, title: 'Lavanderia Estética', task: 'Filme o movimento das roupas no varal ao sol e o clique do sabão na gaveta.', phase: 'Fase 3: Alavancagem & Vendas' },
  { day: 19, title: 'Análise dos Melhores Vídeos', task: 'Abra os insights e anote qual vídeo teve mais salvamentos para repetir o estilo.', phase: 'Fase 3: Alavancagem & Vendas' },
  { day: 20, title: 'Vídeo de Compras de Feira ou Frutas', task: 'Filme a lavagem de frutas na bacia d’água e organização em potes transparentes.', phase: 'Fase 3: Alavancagem & Vendas' },
  { day: 21, title: 'Preparando 3 Vídeos de Reserva', task: 'Grave takes extras para salvar nos rascunhos e nunca quebrar a constância.', phase: 'Fase 3: Alavancagem & Vendas' },
  { day: 22, title: 'Fixando o Comentário Campeão', task: 'Fixe no topo do seu vídeo mais assistido uma pergunta perguntando a cidade da seguidora.', phase: 'Fase 4: Domínio & Escala' },
  { day: 23, title: 'Vídeo de 1 Minuto e 5 Segundos', task: 'Junte 4 tarefas da manhã em um vídeo de mais de 1 minuto pronto para monetização.', phase: 'Fase 4: Domínio & Escala' },
  { day: 24, title: 'Mapeando 2 Lojas do seu Bairro', task: 'Encontre 2 lojas de artigos de casa da sua cidade no Instagram para futuras publis.', phase: 'Fase 4: Domínio & Escala' },
  { day: 25, title: 'Padronizando as Capas do Perfil', task: 'Selecione frames iluminados com títulos em caixa alta para organizar a grade do feed.', phase: 'Fase 4: Domínio & Escala' },
  { day: 26, title: 'Gerando 15 Ideias com IA', task: 'Cole o Prompt Mestre na IA e monte seu calendário de postagens do próximo mês.', phase: 'Fase 4: Domínio & Escala' },
  { day: 27, title: 'Conferência de Comissões e Vendas', task: 'Abra o painel de afiliada e registre os primeiros cliques e vendas realizadas.', phase: 'Fase 4: Domínio & Escala' },
  { day: 28, title: 'Roteiro de Limpeza Profunda de Fogão', task: 'Execute o roteiro da misturinha caseira com take de antes e depois impressionante.', phase: 'Fase 4: Domínio & Escala' },
  { day: 29, title: 'Mensagem de Gratidão na Comunidade', task: 'Compartilhe sua evolução na comunidade de alunas e celebre seus primeiros 30 dias.', phase: 'Fase 4: Domínio & Escala' },
  { day: 30, title: 'Formatura e Emissão do Certificado Oficial', task: 'Finalize todas as tarefas, emita seu Certificado Oficial da Academia e brinde à sua nova profissão!', phase: 'Fase 4: Domínio & Escala' }
];
