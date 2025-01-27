const modulesData = [
  {
    id: 1,
    name: 'Introdução ao Pensamento Geográfico',
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
        question: 'Associe os fenômenos às escalas geográficas correspondentes:\n' +
          '1. Desmatamento na Amazônia.\n' +
          '2. Tráfego em uma cidade.\n' +
          '3. Aquecimento global.\n\n' +
          'Escolha a sequência correta:\n' +
          '(A) Local - Regional - Global\n' +
          '(B) Regional - Local - Global\n' +
          '(C) Global - Local - Regional\n' +
          '(D) Local - Global - Regional',
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
        question: 'Associe corretamente os tipos de limites tectônicos aos fenômenos abaixo:\n\n' +
          '1. Vulcões.\n' +
          '2. Terremotos em falhas transformantes.\n' +
          '3. Formação de novas crostas oceânicas.\n\n' +
          'Escolha a sequência correta:\n' +
          '(A) Convergente - Transformante - Divergente\n' +
          '(B) Divergente - Convergente - Transformante\n' +
          '(C) Transformante - Divergente - Convergente\n' +
          '(D) Convergente - Divergente - Transformante',
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
    id: 3,
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
  }
  
    
  ];
  
  export default modulesData;
  