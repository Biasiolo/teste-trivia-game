const modulesData = [
    {
      id: 1,
      name: 'Introdução ao Pensamento Geográfico',
      videoUrl: 'https://www.youtube.com/embed/xn_rU45f0l8?si=C6IY5EZ1KzTi-6-P', // Link para vídeo aula específica
      questions: [
        {
          id: 1,
          concept: 'O pensamento geográfico busca compreender como o espaço é produzido e transformado pelas relações humanas e naturais.',
          question: 'Qual conceito se refere à interação entre diferentes lugares no espaço geográfico?',
          answers: ['Lugar', 'Região', 'Território', 'Interação espacial'],
          correct: 3,
        },
        {
          id: 2,
          concept: 'A cartografia é uma ciência fundamental na geografia, pois permite a representação gráfica do espaço.',
          question: 'Qual é o instrumento mais utilizado para representar o espaço geográfico?',
          answers: ['Mapa', 'Globo terrestre', 'Bússola', 'Satélite'],
          correct: 0,
        },
        {
          id: 3,
          concept: 'A paisagem é um conceito central na geografia, pois reúne os aspectos naturais e culturais de um espaço.',
          question: 'Qual das opções abaixo é um exemplo de paisagem cultural?',
          answers: ['Floresta Amazônica', 'Deserto do Saara', 'Muralha da China', 'Monte Everest'],
          correct: 2,
        },
        {
          id: 4,
          concept: 'O território é um espaço delimitado por fronteiras, onde há exercício de poder.',
          question: 'Qual conceito se refere ao espaço delimitado por fronteiras e dominado por uma autoridade?',
          answers: ['Território', 'Lugar', 'Paisagem', 'Região'],
          correct: 0,
        },
        {
          id: 5,
          concept: 'A escala geográfica é uma ferramenta essencial para analisar eventos locais e globais.',
          question: 'Qual escala é usada para compreender fenômenos que ocorrem em nível global?',
          answers: ['Escala local', 'Escala regional', 'Escala global', 'Escala continental'],
          correct: 2,
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
          concept: 'Rochas sedimentares são formadas pela compactação de sedimentos, frequentemente em ambientes aquáticos como mares rasos, onde ocorre deposição de materiais orgânicos e inorgânicos.',
          question: 'Qual rocha sedimentar é composta principalmente por calcita, formada a partir de organismos marinhos?',
          answers: ['Calcário', 'Dolomita', 'Arenito', 'Carvão'],
          correct: 0,
        },
        {
          id: 2,
          concept: 'A escala de Mohs é usada para medir a dureza relativa de minerais, com o talco representando o valor mais baixo (1) e o diamante o mais alto (10).',
          question: 'Qual mineral, utilizado em joalheria e na indústria, possui o valor mais alto na escala de Mohs?',
          answers: ['Diamante', 'Coríndon', 'Quartzo', 'Berilo'],
          correct: 0,
        },
        {
          id: 3,
          concept: 'O núcleo externo da Terra é líquido devido à alta temperatura que impede a solidificação, diferentemente do núcleo interno que é sólido devido à pressão extrema.',
          question: 'Qual camada da Terra apresenta comportamento líquido e é composta majoritariamente por ferro e níquel?',
          answers: ['Manto', 'Núcleo externo', 'Astenosfera', 'Núcleo interno'],
          correct: 1,
        },
        {
          id: 4,
          concept: 'Rochas ígneas são classificadas em intrusivas, quando o magma esfria lentamente no interior da crosta, e extrusivas, quando o resfriamento ocorre rapidamente na superfície.',
          question: 'Qual rocha ígnea extrusiva é formada pelo resfriamento rápido de lava e é amplamente encontrada em regiões vulcânicas?',
          answers: ['Basalto', 'Granito', 'Gabro', 'Diorito'],
          correct: 0,
        },
        {
          id: 5,
          concept: 'O granito é uma rocha plutônica rica em minerais como quartzo e feldspato, sendo amplamente utilizado na construção civil por sua durabilidade.',
          question: 'Entre os minerais abaixo, qual é o mais abundante na composição típica do granito?',
          answers: ['Feldspato', 'Mica', 'Quartzo', 'Calcita'],
          correct: 0,
        },
        {
          id: 6,
          concept: 'A tectônica de placas explica a movimentação da litosfera terrestre, resultando em terremotos, formação de montanhas e vulcões.',
          question: 'Qual é o nome da teoria que descreve a movimentação das placas tectônicas?',
          answers: ['Tectônica de Placas', 'Deriva Continental', 'Isostasia', 'Subducção'],
          correct: 0,
        },
        {
          id: 7,
          concept: 'Os oceanos cobrem cerca de 71% da superfície da Terra e são divididos em cinco grandes massas de água interconectadas.',
          question: 'Qual é o maior oceano do mundo em termos de área?',
          answers: ['Oceano Atlântico', 'Oceano Índico', 'Oceano Pacífico', 'Oceano Ártico'],
          correct: 2,
        },
        {
          id: 8,
          concept: 'Os recursos hídricos renováveis incluem rios, lagos e aquíferos que se regeneram ao longo do tempo devido ao ciclo hidrológico.',
          question: 'Qual aquífero é conhecido como a maior reserva subterrânea de água doce do mundo?',
          answers: ['Aquífero Guarani', 'Aquífero Alter do Chão', 'Aquífero Nubiano', 'Aquífero Ogallala'],
          correct: 0,
        },
        {
          id: 9,
          concept: 'O clima equatorial é caracterizado por temperaturas altas e chuvas frequentes ao longo do ano, sendo predominante em regiões próximas ao equador.',
          question: 'Qual das opções abaixo representa um exemplo de floresta localizada em uma região de clima equatorial?',
          answers: ['Floresta Amazônica', 'Savanas Africanas', 'Floresta Boreal', 'Deserto do Saara'],
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
          concept: 'O meridiano de Greenwich é a linha de longitude 0°, usada como referência para calcular fusos horários.',
          question: 'Qual é o nome do fuso horário baseado no meridiano de Greenwich?',
          answers: ['GMT (Greenwich Mean Time)', 'UTC (Universal Time Coordinated)', 'ZULU Time', 'Todos os anteriores'],
          correct: 3,
        },
        {
          id: 6,
          concept: 'A linha internacional de mudança de data está localizada próxima ao meridiano oposto ao de Greenwich, a 180°.',
          question: 'O que ocorre ao cruzar a linha internacional de mudança de data de oeste para leste?',
          answers: [
            'Adiciona-se um dia ao calendário',
            'Subtrai-se um dia do calendário',
            'O horário avança uma hora',
            'O horário retrocede uma hora',
          ],
          correct: 1,
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
        
      ],
    }
    
  ];
  
  export default modulesData;
  