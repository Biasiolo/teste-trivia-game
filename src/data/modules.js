const modulesData = [
  {
    id: 1,
    name: 'Pensamento Geográfico',
    videoUrl: 'https://www.youtube.com/embed/xn_rU45f0l8?si=C6IY5EZ1KzTi-6-P', // Link para vídeo aula específica
    questions: [
      {
        id: 1,
        concept: 'O espaço geográfico é formado pela interação entre elementos naturais e artificiais, influenciado pelas relações sociais e econômicas.',
        question: 'O que caracteriza o espaço geográfico como resultado das relações humanas?',
        answers: [
          'A transformação da paisagem pelo trabalho humano.',
          'A existência de áreas naturais inexploradas.',
          'A presença de apenas elementos culturais.',
          'A ausência de relações econômicas.',
        ],
        correct: 0, // A transformação da paisagem pelo trabalho humano.
      },
      {
        id: 2,
        concept: 'O conceito de lugar está associado às experiências individuais e coletivas em determinado espaço.',
        question: 'Verdadeiro ou Falso: O lugar é sempre definido pelas condições naturais de um espaço.',
        answers: ['Verdadeiro', 'Falso'],
        correct: 1, // Falso
      },
      {
        id: 3,
        concept: 'A globalização é um processo de integração econômica, cultural e política que modifica as dinâmicas espaciais.',
        question: 'Assinale a alternativa que indica corretamente um impacto espacial da globalização:',
        answers: [
          'A redução das desigualdades regionais.',
          'A criação de fronteiras naturais.',
          'A formação de fluxos de capitais e pessoas.',
          'O aumento da autossuficiência regional.',
        ],
        correct: 2, // A formação de fluxos de capitais e pessoas.
      },
      {
        id: 4,
        concept: 'A paisagem pode ser entendida como a aparência visível de um espaço, que inclui elementos naturais e culturais.',
        question: 'Qual das opções é um exemplo de paisagem humanizada?',
        answers: [
          'Um parque nacional intocado.',
          'Uma cidade histórica com edificações antigas.',
          'Uma área de floresta amazônica.',
          'Uma cordilheira com pouca ocupação humana.',
        ],
        correct: 1, // Uma cidade histórica com edificações antigas.
      },
      {
        id: 5,
        concept: 'A escala geográfica permite analisar fenômenos em diferentes níveis espaciais, como local, regional, nacional e global.',
        question: [
          'Associe os fenômenos às escalas geográficas correspondentes:',
          '1. Desmatamento na Amazônia.',
          '2. Tráfego em uma cidade.',
          '3. Aquecimento global.',
          '',
          'Escolha a sequência correta:',
          '(A) Local - Regional - Global',
          '(B) Regional - Local - Global',
          '(C) Global - Local - Regional',
          '(D) Local - Global - Regional',
        ],
        answers: ['A', 'B', 'C', 'D'],
        correct: 1, // (B) Regional - Local - Global
      },
      
      {
        id: 6,
        concept: 'A região é definida como uma área com características homogêneas, delimitada para fins de análise ou organização.',
        question: 'Verdadeiro ou Falso: Uma região pode ser delimitada exclusivamente por fatores econômicos.',
        answers: ['Verdadeiro', 'Falso'],
        correct: 0, // Verdadeiro
      },
      {
        id: 7,
        concept: 'As redes geográficas conectam diferentes pontos no espaço, possibilitando fluxos de pessoas, bens e informações.',
        question: 'Qual alternativa melhor descreve as redes geográficas?',
        answers: [
          'São sistemas fixos de transporte e comunicação.',
          'São conexões dinâmicas que promovem a interação espacial.',
          'São áreas delimitadas por fronteiras naturais.',
          'São apenas conexões físicas entre países.',
        ],
        correct: 1, // São conexões dinâmicas que promovem a interação espacial.
      },
    ],
  },
  {
    id: 2,
    name: 'Orientação e Localização',
    videoUrl: 'https://www.youtube.com/embed/Elz_eZf_aaI?si=9tqDa7SZgfMo11vi', // Link para vídeo aula específica
    questions: [
      {
        id: 1,
        concept: 'A rotação da Terra é o movimento que o planeta realiza em torno de seu próprio eixo, resultando na alternância entre dia e noite.',
        question: 'Quanto tempo a Terra leva para completar uma rotação em torno de seu eixo?',
        answers: ['12 horas', '24 horas', '48 horas', '365 dias'],
        correct: 1,
      },
      {
        id: 2,
        concept: 'As linhas imaginárias conhecidas como paralelos e meridianos formam a base para o sistema de coordenadas geográficas.',
        question: 'Qual é o nome do paralelo que divide a Terra em hemisfério norte e sul?',
        answers: ['Meridiano de Greenwich', 'Trópico de Câncer', 'Equador', 'Trópico de Capricórnio'],
        correct: 2,
      },
      {
        id: 3,
        concept: 'Os fusos horários são definidos com base na rotação da Terra e na divisão do planeta em 24 zonas horárias.',
        question: 'Quantos graus cada fuso horário cobre aproximadamente na superfície terrestre?',
        answers: ['10 graus', '15 graus', '30 graus', '45 graus'],
        correct: 1,
      },
      {
        id: 4,
        concept: 'A inclinação do eixo terrestre e o movimento de translação da Terra ao redor do Sol causam as estações do ano.',
        question: 'Qual é o ângulo de inclinação do eixo terrestre em relação ao plano de sua órbita?',
        answers: ['15 graus', '23,5 graus', '45 graus', '90 graus'],
        correct: 1,
      },
      {
        id: 5,
        concept: 'Os paralelos são linhas imaginárias traçadas horizontalmente ao longo da superfície terrestre.',
        question: 'Verdadeiro ou Falso: O Trópico de Câncer está localizado ao sul do Equador.',
        answers: ['Verdadeiro', 'Falso'],
        correct: 1, // Falso
      },
      {
        id: 6,
        concept: 'O meridiano de Greenwich é a linha de longitude 0°, usada como referência para calcular fusos horários.',
        question: 'Qual é o nome do fuso horário baseado no meridiano de Greenwich?',
        answers: ['GMT (Greenwich Mean Time)', 'UTC (Universal Time Coordinated)', 'ZULU Time', 'Todos os anteriores'],
        correct: 3,
      },
    ],
  },
  
  {
    id: 3,
    name: 'Geologia',
    videoUrl: 'https://www.youtube.com/embed/lX_NDtrBPn8', // Link para vídeo aula específica
    questions: [
      {
        id: 1,
        concept: 'Rochas sedimentares são formadas pela compactação de sedimentos em ambientes aquáticos ou terrestres.',
        question: 'Qual processo está diretamente envolvido na formação de rochas sedimentares?',
        answers: [
          'Resfriamento do magma',
          'Compactação e cimentação',
          'Movimento das placas tectônicas',
          'Transformação de minerais por calor extremo',
        ],
        correct: 1,
      },
      {
        id: 2,
        concept: 'A escala de Mohs mede a dureza dos minerais, indo de 1 (talco) a 10 (diamante).',
        question: 'Verdadeiro ou Falso: O quartzo, com dureza 7 na escala de Mohs, é mais resistente que o coríndon.',
        answers: ['Verdadeiro', 'Falso'],
        correct: 1, // Falso
      },
      {
        id: 3,
        concept: 'O núcleo da Terra é dividido em núcleo externo (líquido) e núcleo interno (sólido).',
        question: 'Qual fator é responsável pela solidificação do núcleo interno da Terra?',
        answers: [
          'Temperatura baixa',
          'Pressão extremamente alta',
          'Ausência de materiais metálicos',
          'Resfriamento constante',
        ],
        correct: 1,
      },
      {
        id: 4,
        concept: 'As rochas metamórficas são formadas pela transformação de outras rochas por pressão e/ou temperatura.',
        question: 'Assinale a opção que representa uma rocha metamórfica:',
        answers: ['Granito', 'Calcário', 'Mármore', 'Basalto'],
        correct: 2,
      },
      {
        id: 5,
        concept: 'Os movimentos das placas tectônicas resultam em processos geológicos como terremotos e vulcanismo.',
        question: 'Qual tipo de limite de placas tectônicas está associado à formação de cadeias de montanhas?',
        answers: [
          'Limites convergentes',
          'Limites divergentes',
          'Limites transformantes',
          'Limites passivos',
        ],
        correct: 0,
      },
      {
        id: 6,
        concept: 'A crosta terrestre é composta por minerais que formam rochas de diferentes tipos.',
        question: 'Verdadeiro ou Falso: O granito é uma rocha plutônica formada por resfriamento rápido do magma.',
        answers: ['Verdadeiro', 'Falso'],
        correct: 1, // Falso
      },
      {
        id: 7,
        concept: 'A hidrosfera compreende todas as formas de água na Terra, incluindo rios, lagos e aquíferos.',
        question: 'Qual alternativa apresenta um recurso hídrico renovável?',
        answers: ['Petróleo', 'Gás natural', 'Rios', 'Urânio'],
        correct: 2,
      },
      {
        id: 8,
        concept: 'A tectônica de placas influencia diretamente a formação de relevo e a ocorrência de desastres naturais.',
        question: [
          'Associe corretamente os tipos de limites tectônicos aos fenômenos abaixo:',
          '1. Vulcões.',
          '2. Terremotos em falhas transformantes.',
          '3. Formação de novas crostas oceânicas.',
          'Escolha a sequência correta:',
          '(A) Convergente - Transformante - Divergente',
          '(B) Divergente - Convergente - Transformante',
          '(C) Transformante - Divergente - Convergente',
          '(D) Convergente - Divergente - Transformante',
        ],
        answers: ['A', 'B', 'C', 'D'],
        correct: 0, // Convergente - Transformante - Divergente
      },
      {
        id: 9,
        concept: 'Os minerais têm grande importância econômica, sendo utilizados em várias indústrias.',
        question: 'Qual mineral é comumente usado na produção de chips eletrônicos devido à sua elevada condutividade?',
        answers: ['Silício', 'Feldspato', 'Diamante', 'Calcita'],
        correct: 0,
      },
    ],
  },

  {
    id: 4,
    name: 'Cartografia',
    videoUrl: 'https://www.youtube.com/embed/ZI2GIWgxiG4?si=8-Hv3M6spbIcpm4N', // Link para vídeo aula específica
    questions: [
      {
        id: 1,
        concept: 'A cartografia é a ciência que estuda e representa graficamente o espaço geográfico por meio de mapas, cartas e plantas.',
        question: 'Qual é o principal elemento que define a escala de um mapa?',
        answers: ['Projeção Cartográfica', 'Título', 'Legenda', 'Relação entre distância real e no mapa'],
        correct: 3,
      },
      {
        id: 2,
        concept: 'As projeções cartográficas são métodos utilizados para transferir a superfície esférica da Terra para um plano.',
        question: 'Qual projeção é mais adequada para representar as áreas próximas ao Equador com mínima deformação?',
        answers: ['Projeção de Mercator', 'Projeção Cônica', 'Projeção Cilíndrica Equidistante', 'Projeção Azimutal'],
        correct: 2,
      },
      {
        id: 3,
        concept: 'Os mapas apresentam diferentes tipos de escalas que determinam o nível de detalhamento da representação.',
        question: 'Um mapa com escala 1:50.000 é considerado:',
        answers: ['Mapa de grande escala', 'Mapa de pequena escala', 'Mapa temático', 'Mapa topográfico detalhado'],
        correct: 0,
      },
      {
        id: 4,
        concept: 'As escalas em um mapa são responsáveis por indicar a relação entre as dimensões reais e as representadas graficamente.',
        question: 'Um mapa com escala 1:1.000.000 apresenta um maior nível de detalhamento que um mapa com escala 1:10.000.',
        answers: ['Verdadeiro', 'Falso'],
        correct: 1, // "Falso" é correto porque a escala 1:10.000 oferece maior detalhamento.
      },
      {
        id: 5,
        concept: 'A orientação nos mapas é garantida por elementos como a rosa-dos-ventos e as linhas imaginárias como os paralelos e meridianos.',
        question: 'Qual é a direção convencionalmente apontada para o topo dos mapas?',
        answers: ['Sul', 'Norte', 'Leste', 'Oeste'],
        correct: 1,
      },
      {
        id: 6,
        concept: 'As legendas dos mapas são fundamentais para decodificar os símbolos e informações representadas.',
        question: 'O que geralmente é representado por cores no mapa físico?',
        answers: ['Limites políticos', 'Altitudes e profundidades', 'Fronteiras culturais', 'Rotas comerciais'],
        correct: 1,
      },
      {
        id: 7,
        concept: 'A projeção de Mercator é amplamente usada em navegação, mas distorce áreas próximas aos polos.',
        question: 'Qual problema está associado à projeção de Mercator?',
        answers: ['Distorção de áreas nos polos', 'Imprecisão na escala de cores', 'Incapacidade de representar paralelos', 'Erro na localização de meridianos'],
        correct: 0,
      },
      {
        id: 8,
        concept: 'Os paralelos e meridianos são linhas imaginárias utilizadas para formar o sistema de coordenadas geográficas, ajudando a localizar qualquer ponto na superfície terrestre.',
        question: 'Os paralelos são linhas imaginárias que conectam os polos norte e sul.',
        answers: ['Verdadeiro', 'Falso'],
        correct: 1, // "Falso" é correto porque os paralelos são linhas horizontais que circulam a Terra.
      },
      {
        id: 9,
        concept: 'A cartografia temática utiliza mapas para representar informações específicas sobre diferentes aspectos da realidade geográfica.',
        question: 'Qual dos exemplos abaixo representa um mapa temático?',
        answers: ['Mapa político', 'Mapa de precipitação', 'Mapa topográfico', 'Mapa físico'],
        correct: 1,
      },
    ],
  },
  {
  id: 5,
  name: 'Relevo',
  videoUrl: 'https://www.youtube.com/embed/GKjI3LL4-p4?si=CuVpGc6KPE7kPu7g', // Link para vídeo aula específica
  questions: [
    // Múltipla escolha
    {
      id: 1,
      concept: 'A geomorfologia estuda as formas da superfície terrestre e os processos que as originam.',
      question: 'Qual é o principal agente responsável pela formação de cavernas calcárias?',
      answers: ['Intemperismo físico', 'Intemperismo químico', 'Tectonismo', 'Sedimentação'],
      correct: 1, // Intemperismo químico
    },
    {
      id: 2,
      concept: 'As montanhas são formas de relevo resultantes de forças tectônicas.',
      question: 'Qual processo tectônico é responsável pela formação de montanhas como os Andes?',
      answers: ['Subducção', 'Falhamento', 'Erosão', 'Intemperismo químico'],
      correct: 0, // Subducção
    },
    {
      id: 3,
      concept: 'O solo é a base para atividades humanas, formado a partir de processos de intemperismo.',
      question: 'Qual tipo de solo é conhecido por sua alta fertilidade e predominância em áreas vulcânicas?',
      answers: ['Latossolo', 'Terra roxa', 'Arenoso', 'Podzólico'],
      correct: 1, // Terra roxa
    },

    // Verdadeiro ou falso
    {
      id: 4,
      concept: 'As planícies são formas de relevo associadas a áreas de deposição de sedimentos.',
      question: 'As planícies são formadas exclusivamente por agentes internos, como tectonismo.',
      answers: ['Verdadeiro', 'Falso'],
      correct: 1, // Falso
    },
    {
      id: 5,
      concept: 'Os agentes internos, como tectonismo, atuam no interior da Terra, moldando o relevo.',
      question: 'O tectonismo de placas divergentes resulta na formação de falhas geológicas.',
      answers: ['Verdadeiro', 'Falso'],
      correct: 0, // Verdadeiro
    },

    // Associação
    {
      id: 6,
      concept: 'As formas de relevo podem ser classificadas de acordo com os processos de formação.',
      question: [
        'Associe os tipos de relevo aos seus processos de formação:',
        '1. Planalto.',
        '2. Planície.',
        '3. Montanha.',
        '',
        'Escolha a sequência correta:',
        '(A) Erosão - Sedimentação - Tectonismo',
        '(B) Sedimentação - Tectonismo - Erosão',
        '(C) Tectonismo - Sedimentação - Erosão',
        '(D) Sedimentação - Erosão - Tectonismo',
      ],
      answers: ['A', 'B', 'C', 'D'],
      correct: 0, // Erosão - Sedimentação - Tectonismo
    },
    {
      id: 7,
      concept: 'O intemperismo físico e químico atuam de formas complementares na formação do solo.',
      question: [
        'Associe os tipos de intemperismo às suas características:',
        '1. Físico.',
        '2. Químico.',
        '',
        'Escolha a sequência correta:',
        '(A) Alteração da composição química - Fragmentação mecânica',
        '(B) Fragmentação mecânica - Alteração da composição química',
        '(C) Dissolução de minerais - Fragmentação mecânica',
        '(D) Fragmentação mecânica - Dissolução de minerais',
      ],
      answers: ['A', 'B', 'C', 'D'],
      correct: 1, // Fragmentação mecânica - Alteração da composição química
    },

    // Múltipla escolha
    {
      id: 8,
      concept: 'O Brasil possui relevo antigo, com predominância de planaltos e depressões.',
      question: 'Qual é a característica do relevo brasileiro que favorece a formação de bacias sedimentares?',
      answers: ['Estabilidade geológica', 'Intensa atividade vulcânica', 'Dobramentos modernos', 'Falhas transformantes'],
      correct: 0, // Estabilidade geológica
    },
    {
      id: 9,
      concept: 'Os agentes externos atuam continuamente para esculpir o relevo terrestre.',
      question: 'Qual agente externo é o principal responsável pela formação de vales em "V"?',
      answers: ['Vento', 'Água', 'Gelo', 'Intemperismo químico'],
      correct: 1, // Água
    },
  ],
},
{
  id: 6,
  name: 'Clima',
  videoUrl: 'https://www.youtube.com/embed/Tl9k3pkuVP4?si=a74L9UrIZhSpSYIC', // Link fictício para vídeo aula
  questions: [
    // Múltipla escolha
    {
      id: 1,
      concept: 'A atmosfera é composta por diferentes camadas que desempenham funções específicas.',
      question: 'Qual camada da atmosfera é responsável pela maior parte dos fenômenos climáticos? ',
      answers: ['Estratosfera', 'Troposfera', 'Mesosfera', 'Exosfera'],
      correct: 1, // Troposfera
    },
    {
      id: 2,
      concept: 'Os fatores climáticos influenciam diretamente as variações de temperatura e precipitação.',
      question: 'Qual dos seguintes fatores é diretamente influenciado pela latitude?',
      answers: ['Altitude', 'Maritimidade', 'Radiação solar', 'Vegetação'],
      correct: 2, // Radiação solar
    },
    {
      id: 3,
      concept: 'A circulação atmosférica global é responsável pela distribuição de calor e umidade no planeta.',
      question: 'Qual é o fenômeno responsável pelos ventos alísios que sopram em direção ao Equador?',
      answers: [
        'Coriolis',
        'Movimento de rotação',
        'Convecção atmosférica',
        'Diferenças de pressão',
      ],
      correct: 3, // Diferenças de pressão
    },

    // Verdadeiro ou falso
    {
      id: 4,
      concept: 'Os tipos de clima são definidos com base em elementos como temperatura e precipitação.',
      question: 'O clima tropical é caracterizado por estações bem definidas e baixa umidade ao longo do ano.',
      answers: ['Verdadeiro', 'Falso'],
      correct: 1, // Falso
    },
    {
      id: 5,
      concept: 'Fenômenos climáticos como o El Niño têm impacto global.',
      question:
        'O fenômeno El Niño é causado pelo resfriamento anormal das águas do Oceano Pacífico, reduzindo a evaporação.',
      answers: ['Verdadeiro', 'Falso'],
      correct: 1, // Falso
    },

    // Associação
    {
      id: 6,
      concept:
        'Os elementos e fatores climáticos atuam de maneira interligada para determinar o clima de uma região.',
      question: [
        'Associe os fatores climáticos aos seus exemplos:',
        '1. Latitude',
        '2. Altitude',
        '3. Maritimidade',
        '',
        'Escolha a sequência correta:',
        '(A) Proximidade de oceanos - Variação de temperatura com a altura - Radiação solar',
        '(B) Radiação solar - Variação de temperatura com a altura - Proximidade de oceanos',
        '(C) Radiação solar - Proximidade de oceanos - Variação de temperatura com a altura',
        '(D) Variação de temperatura com a altura - Radiação solar - Proximidade de oceanos',
      ],
      answers: ['A', 'B', 'C', 'D'],
      correct: 1, // Radiação solar - Variação de temperatura com a altura - Proximidade de oceanos
    },

    {
      id: 7,
      concept: 'Os protocolos e acordos climáticos têm como objetivo mitigar as mudanças climáticas.',
      question: [
        'Associe os acordos internacionais aos seus objetivos:',
        '1. Protocolo de Kyoto.',
        '2. Acordo de Paris.',
        '3. Agenda 21.',
        '',
        'Escolha a sequência correta:',
        '(A) Redução de emissões de gases de efeito estufa - Limitar o aumento da temperatura global - Desenvolvimento sustentável',
        '(B) Desenvolvimento sustentável - Limitar o aumento da temperatura global - Redução de emissões de gases de efeito estufa',
        '(C) Limitar o aumento da temperatura global - Desenvolvimento sustentável - Redução de emissões de gases de efeito estufa',
        '(D) Redução de emissões de gases de efeito estufa - Desenvolvimento sustentável - Limitar o aumento da temperatura global',
      ],
      answers: ['A', 'B', 'C', 'D'],
      correct: 0, // Redução de emissões de gases de efeito estufa - Limitar o aumento da temperatura global - Desenvolvimento sustentável
    },

    // Múltipla escolha
    {
      id: 8,
      concept: 'As mudanças climáticas têm impactos socioambientais e econômicos significativos.',
      question: 'Qual das alternativas representa um impacto direto das mudanças climáticas?',
      answers: [
        'Aumento da biodiversidade',
        'Redução do nível do mar',
        'Aumento da frequência de eventos climáticos extremos',
        'Estabilidade da temperatura média global',
      ],
      correct: 2, // Aumento da frequência de eventos climáticos extremos
    },
    {
      id: 9,
      concept: 'Os tipos de clima são classificados de acordo com a temperatura, precipitação e localização geográfica.',
      question: 'Qual é o clima predominante em regiões de desertos, caracterizado por baixa precipitação anual?',
      answers: ['Equatorial', 'Temperado', 'Semiárido', 'Desértico'],
      correct: 3, // Desértico
    },
  ],
},
{
  id: 7,
  name: 'Vegetação',
  videoUrl: 'https://www.youtube.com/embed/91mhB7g5xO0?si=rNecnV9kTiHg3Ndh', // Link para vídeo aula
  questions: [
    // Múltipla escolha
    {
      id: 1,
      concept: 'Os biomas são grandes ecossistemas com características semelhantes de clima, solo e vegetação.',
      question: 'Qual dos seguintes biomas é conhecido por sua biodiversidade e clima quente e úmido?',
      answers: ['Tundra', 'Floresta Amazônica', 'Taiga', 'Savanas Africanas'],
      correct: 1, // Floresta Amazônica
    },
    {
      id: 2,
      concept: 'Os biomas brasileiros possuem características únicas devido à sua localização e clima.',
      question: 'Qual bioma brasileiro é caracterizado por vegetação rasteira e adaptada à seca?',
      answers: ['Pantanal', 'Cerrado', 'Caatinga', 'Mata Atlântica'],
      correct: 2, // Caatinga
    },
    {
      id: 3,
      concept: 'Os impactos ambientais afetam os biomas de maneira variada, dependendo da intensidade e tipo de ação humana.',
      question: 'Qual atividade humana é a principal responsável pelo desmatamento na Amazônia?',
      answers: [
        'Mineração',
        'Expansão agropecuária',
        'Construção de barragens',
        'Expansão urbana',
      ],
      correct: 1, // Expansão agropecuária
    },
    {
      id: 4,
      concept: 'Os biomas possuem diferentes tipos de solo, que influenciam diretamente a vegetação presente.',
      question: 'Qual tipo de solo é encontrado predominantemente no Cerrado e é pobre em nutrientes?',
      answers: ['Latossolo', 'Argiloso', 'Podzólico', 'Calcário'],
      correct: 0, // Latossolo
    },

    // Verdadeiro ou falso
    {
      id: 5,
      concept: 'A Mata Atlântica é um dos biomas mais ameaçados do Brasil devido à exploração humana.',
      question: 'A Mata Atlântica já perdeu mais de 80% de sua vegetação original.',
      answers: ['Verdadeiro', 'Falso'],
      correct: 0, // Verdadeiro
    },

    // Associação
    {
      id: 6,
      concept:
        'Os biomas mundiais apresentam vegetações e condições climáticas específicas que os caracterizam.',
      question: [
        'Associe os biomas às suas características predominantes:',
        '1. Tundra.',
        '2. Savana.',
        '3. Floresta Temperada.',
        '',
        'Escolha a sequência correta:',
        '(A) Vegetação rasteira - Árvores esparsas - Árvores caducifólias',
        '(B) Árvores caducifólias - Vegetação rasteira - Árvores esparsas',
        '(C) Árvores esparsas - Árvores caducifólias - Vegetação rasteira',
        '(D) Vegetação rasteira - Árvores caducifólias - Árvores esparsas',
      ],
      answers: ['A', 'B', 'C', 'D'],
      correct: 0, // Vegetação rasteira - Árvores esparsas - Árvores caducifólias
    },
    {
      id: 7,
      concept: 'A vegetação mundial é classificada de acordo com o clima, o solo e as características das espécies predominantes.',
      question: 'Qual bioma é caracterizado por temperaturas muito baixas, solos congelados e vegetação rasteira como líquens e musgos?',
      answers: ['Taiga', 'Tundra', 'Savanas Africanas', 'Floresta Temperada'],
      correct: 1, // Tundra
    },

    // Nova questão: Verdadeiro ou falso
    {
      id: 8,
      concept: 'Os desertos são biomas encontrados em diferentes continentes, caracterizados por baixa precipitação e adaptações específicas das plantas ao clima seco.',
      question: 'Os desertos possuem alta biodiversidade devido à sua abundância de água e clima ameno.',
      answers: ['Verdadeiro', 'Falso'],
      correct: 1, // Falso
    },
  ],
},
{
  id: 8,
  name: 'Hidrografia',
  videoUrl: 'https://www.youtube.com/embed/gZph9ax8Xpg?si=b1fEHMfIuZbCaVcr', // Link para vídeo aula
  questions: [
    // Múltipla escolha
    {
      id: 1,
      concept: 'A hidrografia continental estuda os rios, lagos, aquíferos e outros corpos d’água localizados no interior dos continentes.',
      question: 'Qual é a maior bacia hidrográfica do mundo em volume de água?',
      answers: [
        'Bacia do Congo',
        'Bacia Amazônica',
        'Bacia do Mississipi',
        'Bacia do Nilo',
      ],
      correct: 1, // Bacia Amazônica
    },
    {
      id: 2,
      concept: 'O Brasil possui uma vasta rede hidrográfica, com várias bacias hidrográficas importantes.',
      question: 'Qual das seguintes bacias hidrográficas é totalmente brasileira?',
      answers: ['Bacia do Tocantins-Araguaia', 'Bacia Platina', 'Bacia do Amazonas', 'Bacia do São Francisco'],
      correct: 0, // Bacia do Tocantins-Araguaia
    },
    {
      id: 3,
      concept: 'O litoral brasileiro é extenso e possui características variadas ao longo de sua extensão.',
      question: 'Qual das seguintes formações é uma característica comum do litoral nordestino brasileiro?',
      answers: ['Manguezais', 'Fiordes', 'Deltas', 'Falésias'],
      correct: 3, // Falésias
    },
    {
      id: 4,
      concept: 'A poluição dos corpos hídricos é um dos principais impactos ambientais que afetam a hidrografia global.',
      question: 'Qual dos seguintes poluentes é mais associado ao impacto ambiental conhecido como “eutrofização”?',
      answers: [
        'Hidrocarbonetos',
        'Fósforo e nitrogênio de fertilizantes',
        'Microplásticos',
        'Metais pesados como mercúrio',
      ],
      correct: 1, // Fósforo e nitrogênio de fertilizantes
    },

    // Verdadeiro ou falso
    {
      id: 5,
      concept: 'O aquífero Guarani é uma das maiores reservas subterrâneas de água doce do mundo.',
      question: 'O aquífero Guarani está localizado exclusivamente no território brasileiro.',
      answers: ['Verdadeiro', 'Falso'],
      correct: 1, // Falso
    },

    // Associação
    {
      id: 6,
      concept:
        'As bacias hidrográficas são importantes unidades de análise na hidrografia por representarem a área de drenagem de um rio principal e seus afluentes.',
      question: [
        'Associe as bacias hidrográficas aos seus principais rios:',
        '1. Bacia Platina.',
        '2. Bacia do São Francisco.',
        '3. Bacia Amazônica.',
        '',
        'Escolha a sequência correta:',
        '(A) Rio Paraná - Rio São Francisco - Rio Amazonas',
        '(B) Rio Amazonas - Rio Paraná - Rio São Francisco',
        '(C) Rio São Francisco - Rio Amazonas - Rio Paraná',
        '(D) Rio Paraná - Rio Amazonas - Rio São Francisco',
      ],
      answers: ['A', 'B', 'C', 'D'],
      correct: 0, // Rio Paraná - Rio São Francisco - Rio Amazonas
    },

    // Múltipla escolha
    {
      id: 7,
      concept: 'O ciclo hidrológico é o processo de movimentação e transformação da água na Terra.',
      question: 'Qual etapa do ciclo hidrológico é responsável pelo transporte de água da superfície terrestre para a atmosfera?',
      answers: ['Infiltração', 'Transpiração', 'Evaporação', 'Precipitação'],
      correct: 2, // Evaporação
    },
    {
      id: 8,
      concept: 'O impacto ambiental relacionado à água é amplamente discutido devido à sua importância para a sobrevivência humana e dos ecossistemas.',
      question: 'Qual das alternativas representa uma consequência direta da escassez de água em regiões áridas?',
      answers: [
        'Aumento da biodiversidade',
        'Avanço da desertificação',
        'Redução da salinidade dos solos',
        'Expansão de manguezais',
      ],
      correct: 1, // Avanço da desertificação
    },
  ],
}




  
    
  ];
  
  export default modulesData;
  