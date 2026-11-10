/* ============================================================
   ROLETA — arquivo de configuração
   Edite este arquivo para montar a SUA roleta. Não precisa
   mexer no index.html.

   Cada rolo mostra: CATEGORIA | ITEM (para por último) | NICHO.
   O nicho é fixo por item: nunca sai uma combinação sem sentido.
   ============================================================ */
window.ROLETA_CONFIG = {

  /* Textos do cabeçalho e do rodapé */
  title:    'ROLETA',
  mark:     'RX',                      // sigla curta ao lado do título
  subtitle: 'desafios',
  footer:   'Progresso salvo só neste navegador.',

  /* Chave de salvamento no navegador (mude se tiver várias roletas no mesmo site) */
  storageKey: 'roleta-v1',

  /* Marco de progresso: quantos itens feitos para completar a barra */
  milestone: { n: 5, label: '5 itens antes de avaliar' },

  /* Etapas do roteiro mostrado no resultado: [nome, segundos]. */
  steps: [['Gancho', 3], ['Versão 1', 8], ['Crítica', 3], ['Refinada', 22], ['Por quê', 5], ['Chamada', 2]],

  /* "Modo difícil": uma restrição sorteada junto com o desafio.
     Deixe [] para desativar. */
  restrictions: [
    'Só com o que tenho em casa',
    'Orçamento de R$ 50',
    'Em 1 dia',
    'Sem biblioteca pronta'
  ],

  /* Som de fim de sorteio (opcional). Ponha seu arquivo mp3 na pasta
     e escreva o caminho, por exemplo 'assets/fim.mp3'.
     Vazio = um "ding" sintetizado. Use só áudio que você tem o direito de usar.
     (Funciona só em servidor http, não abrindo o arquivo direto do disco.) */
  endSound: '',

  /* Categorias (rolo da esquerda). Cada item tem:
       name  — nome que aparece no rolo do meio
       niche — nicho fixo do item (rolo da direita)
       pitch — frase "Ideia:" mostrada no resultado (opcional) */
  categories: [
    {
      id: 'ele', name: 'Eletrônica', short: 'ELETR.', color: '#3a86ff',
      hint: '<b>Refine:</b> esquema limpo, medidas reais e um teste que prove que funciona.',
      items: [
        { name: 'Luz de presença automática', niche: 'Casa',    pitch: 'Acende sozinha quando alguém passa' },
        { name: 'Medidor de qualidade do ar', niche: 'Saúde',   pitch: 'Mostra CO₂ e avisa quando abrir a janela' },
        { name: 'Placa de crachá',            niche: 'Eventos', pitch: 'Crachá com LEDs e tela' },
        { name: 'Controle de jogo caseiro',   niche: 'Games',   pitch: 'Um controle feito do zero' }
      ]
    },
    {
      id: 'sof', name: 'Software', short: 'SOFT', color: '#9aa3b4',
      hint: '<b>Refine:</b> mostre o código rodando, o caso em que falha e como corrigiu.',
      items: [
        { name: 'Painel de dados ao vivo',     niche: 'Esporte', pitch: 'Dashboard com dados reais de um jogo' },
        { name: 'Bot que avisa no celular',    niche: 'Casa',    pitch: 'Notificação quando algo acontece em casa' },
        { name: 'Jogo pequeno em um fim de semana', niche: 'Games', pitch: 'Do zero ao jogável em 48 horas' }
      ]
    },
    {
      id: 'des', name: 'Design 3D', short: '3D', color: '#7b8599',
      hint: '<b>Refine:</b> tolerâncias, render bonito e uma peça que imprime de primeira.',
      items: [
        { name: 'Suporte sob medida',    niche: 'Casa',  pitch: 'Resolve um problema real da sua mesa' },
        { name: 'Peça de jogo impressa', niche: 'Games', pitch: 'Uma peça de tabuleiro ou personagem' },
        { name: 'Caixa para um projeto', niche: 'Eventos', pitch: 'Case que combina com a placa' }
      ]
    }
  ]

  /* Nichos aparecem sozinhos a partir dos itens acima. Se quiser fixar a
     ordem deles no rolo, descomente e liste:
  , niches: ['Casa', 'Games', 'Saúde', 'Eventos', 'Esporte'] */
};
