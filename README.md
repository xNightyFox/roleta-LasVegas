# Roleta

Uma roleta de caça-níquel para sortear o próximo desafio de projeto (ou vídeo, estudo, treino, o que você quiser).
Três rolos: **categoria | item | nicho**. O item para por último, e o nicho é fixo por item, então nunca sai uma combinação sem sentido.

Um único arquivo `index.html`, sem framework e sem build. Você personaliza só o `config.js`.

## Usar

1. Faça um fork ou baixe este repositório.
2. Edite o `config.js`: título, categorias, itens, nichos, etapas do roteiro.
3. Abra o `index.html` no navegador, ou publique no GitHub Pages (Settings → Pages → branch `main`, pasta `/root`).

Para testar local com som personalizado, use um servidor simples:

```bash
python3 -m http.server 8000
```

## O que dá para configurar (`config.js`)

| Campo | Para que serve |
|---|---|
| `title`, `mark`, `subtitle`, `footer` | Textos do cabeçalho e rodapé |
| `categories[]` | Rolo da esquerda. Cada uma tem `id`, `name`, `short`, `color`, `hint` e `items` |
| `items[]` | `name` (rolo do meio), `niche` (rolo da direita, fixo) e `pitch` (frase "Ideia") |
| `steps` | Etapas do roteiro e quantos segundos cada uma dura |
| `restrictions` | Restrições sorteadas no "modo difícil" (`[]` desativa) |
| `milestone` | Marco de progresso (quantos itens feitos completam a barra) |
| `endSound` | Caminho para um mp3 tocado no fim do sorteio (vazio = som sintetizado) |
| `storageKey` | Chave de salvamento no navegador |

Os nichos aparecem sozinhos a partir dos itens. Dicas: nomes curtos cabem melhor no celular; mantenha no máximo uns 8 nichos.

## Detalhes

- O progresso (itens marcados como feitos, histórico) fica no `localStorage`, só no seu navegador.
- Funciona em celular e iPad. O som começa desligado (botão **SOM**).
- A fonte dos rolos vem do Google Fonts (Racing Sans One / Orbitron).
- A interface está em português do Brasil. Traduções são bem-vindas por pull request.

## Licença

MIT. Se usar um áudio próprio no `endSound`, garanta que você tem o direito de usá-lo.
