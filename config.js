/* Minha versão (projeto NEXUS): desafios de vídeo de robótica, PCB, 3D, hack e visão.
   Para uma roleta em branco, copie o config.example.js por cima deste arquivo. */
window.ROLETA_CONFIG = {
  "title": "ROLETA",
  "mark": "RX",
  "subtitle": "desafios",
  "footer": "Progresso salvo só neste navegador. Em hardware hacking, trabalhe apenas em equipamento seu.",
  "storageKey": "roleta-nexus-v1",
  "milestone": {
    "n": 5,
    "label": "5 episódios antes de avaliar"
  },
  "steps": [
    [
      "Hook",
      3
    ],
    [
      "1ª vers.",
      8
    ],
    [
      "Crít.",
      3
    ],
    [
      "Refinada",
      22
    ],
    [
      "Por quê",
      5
    ],
    [
      "CTA",
      2
    ]
  ],
  "restrictions": [
    "Com o que tenho em casa",
    "Orçamento de R$ 50",
    "Em 1 dia de bancada",
    "Zero compra: só simulação",
    "Sem biblioteca pronta"
  ],
  "endSound": "",
  "niches": [
    "Motorsport",
    "Gamer",
    "Segurança",
    "Robótica",
    "Sports",
    "Space",
    "Eventos"
  ],
  "categories": [
    {
      "id": "pcb",
      "name": "PCB",
      "short": "PCB",
      "color": "var(--ax)",
      "hint": "<b>Refine:</b> roteamento limpo, plano de terra, silkscreen legível e DRC zerado.",
      "items": [
        {
          "name": "Crachá DEF CON",
          "niche": "Eventos",
          "pitch": "Crachá de hacker de conferência que pisca"
        },
        {
          "name": "Macropad",
          "niche": "Gamer",
          "pitch": "Teclas de atalho para skills e itens do Dota"
        },
        {
          "name": "Pendrive que digita sozinho",
          "niche": "Segurança",
          "pitch": "Mostrar o ataque e como se proteger dele"
        },
        {
          "name": "Shift-light de RPM",
          "niche": "Motorsport",
          "pitch": "LEDs de troca de marcha no volante"
        },
        {
          "name": "Flipper",
          "niche": "Segurança",
          "pitch": "Ferramenta de rádio e NFC, só no seu equipamento"
        },
        {
          "name": "Paraquedas automático",
          "niche": "Space",
          "pitch": "Solta o paraquedas do foguete no ponto mais alto"
        },
        {
          "name": "Balão meteorológico",
          "niche": "Space",
          "pitch": "Sonda que sobe, mede e transmite sozinha"
        }
      ]
    },
    {
      "id": "d3",
      "name": "Design 3D",
      "short": "3D",
      "color": "#c3c9d4",
      "hint": "<b>Refine:</b> tolerâncias e folgas de encaixe, render bonito e uma peça que imprime de primeira.",
      "items": [
        {
          "name": "Braço robótico",
          "niche": "Robótica",
          "pitch": "Braço articulado de vários eixos"
        },
        {
          "name": "Mão com dedos",
          "niche": "Robótica",
          "pitch": "Mão articulada com tendões"
        },
        {
          "name": "Perna",
          "niche": "Robótica",
          "pitch": "Perna que se adapta a terreno irregular"
        },
        {
          "name": "Roda que vira perna",
          "niche": "Robótica",
          "pitch": "Robô que muda de roda para perna"
        },
        {
          "name": "Garra Manip",
          "niche": "Robótica",
          "pitch": "Garra que se adapta ao objeto"
        },
        {
          "name": "Cabeça com câmera",
          "niche": "Robótica",
          "pitch": "Cabeça de robô que acompanha rostos"
        },
        {
          "name": "Hexápode",
          "niche": "Robótica",
          "pitch": "Robô de seis patas"
        },
        {
          "name": "Mars Rover",
          "niche": "Robótica",
          "pitch": "Rover com a suspensão dos da NASA"
        },
        {
          "name": "Drone FPV próprio",
          "niche": "Space",
          "pitch": "Quadro impresso em 3D e controladora sua"
        },
        {
          "name": "Personagem",
          "niche": "Robótica",
          "pitch": "Personagem articulado que se mexe"
        }
      ]
    },
    {
      "id": "hk",
      "name": "Hardware hacking",
      "short": "HACK",
      "color": "#9aa3b4",
      "hint": "<b>Refine:</b> documente o protocolo e mostre o sinal no analisador lógico. Só em equipamento seu.",
      "items": [
        {
          "name": "Clonar controle",
          "niche": "Segurança",
          "pitch": "Cópia do controle do seu próprio portão"
        },
        {
          "name": "Replicar chave de carro",
          "niche": "Segurança",
          "pitch": "Entender o rolling code da chave do seu carro"
        },
        {
          "name": "Decodificar protocolo",
          "niche": "Segurança",
          "pitch": "Decifrar um protocolo sem documentação"
        },
        {
          "name": "Controle do seu robô",
          "niche": "Segurança",
          "pitch": "Tomar o controle do seu robô por outro canal"
        },
        {
          "name": "Ler serial de aparelho",
          "niche": "Segurança",
          "pitch": "Achar a porta serial escondida em um aparelho seu"
        },
        {
          "name": "Controle de drone",
          "niche": "Segurança",
          "pitch": "Controle com joystick para pilotar um drone"
        }
      ]
    },
    {
      "id": "cv",
      "name": "Visão computacional",
      "short": "VISÃO",
      "color": "#7b8599",
      "hint": "<b>Refine:</b> latência baixa, interface limpa, mostre a taxa de quadros e o caso em que falha.",
      "items": [
        {
          "name": "Jogo por gesto",
          "niche": "Gamer",
          "pitch": "Jogar com as mãos, sem controle"
        },
        {
          "name": "Câmera que aponta objeto",
          "niche": "Robótica",
          "pitch": "Câmera que aponta para o objeto escolhido"
        },
        {
          "name": "Sistema que segue pessoa",
          "niche": "Robótica",
          "pitch": "Robô que segue uma pessoa"
        },
        {
          "name": "Velocidade por câmera",
          "niche": "Robótica",
          "pitch": "Medir a velocidade de um carrinho na pista"
        },
        {
          "name": "AR com bola virtual",
          "niche": "Sports",
          "pitch": "Bola virtual quicando na quadra real"
        },
        {
          "name": "Detector de rostos",
          "niche": "Segurança",
          "pitch": "Câmera que reconhece quem chega"
        },
        {
          "name": "Leitor de placas",
          "niche": "Robótica",
          "pitch": "Portão que abre ao ler a placa do seu carro"
        },
        {
          "name": "Drone por gesto",
          "niche": "Robótica",
          "pitch": "Pilotar o drone com a mão"
        },
        {
          "name": "Drone que segue pessoa",
          "niche": "Robótica",
          "pitch": "Drone que acompanha você sozinho"
        }
      ]
    },
    {
      "id": "dd",
      "name": "Cotidiano",
      "short": "DIA A DIA",
      "color": "#5f697d",
      "hint": "<b>Refine:</b> painel legível de longe, dados reais e estado de erro tratado.",
      "items": [
        {
          "name": "Cronômetro de volta",
          "niche": "Motorsport",
          "pitch": "Cronometrar voltas com sensor óptico"
        },
        {
          "name": "Rádio de equipe",
          "niche": "Motorsport",
          "pitch": "Aviso do pit wall para o piloto"
        },
        {
          "name": "Telemetria",
          "niche": "Motorsport",
          "pitch": "Dados do carro ao vivo no painel, sem fio"
        },
        {
          "name": "Estação de solo",
          "niche": "Space",
          "pitch": "Painel que recebe a telemetria ao vivo"
        }
      ]
    }
  ]
};
