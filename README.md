# GatoSudokuAI — Sudoku Felino

O **GatoSudokuAI** combina o raciocínio do Sudoku com uma identidade visual de gatinhos, uma campanha de exploração e recursos de personalização. A proposta é permitir tanto partidas rápidas e descontraídas quanto desafios mais exigentes, com dicas opcionais e acompanhamento da evolução do jogador.

## Como funciona o Sudoku

O objetivo é preencher todas as casas sem repetir números em uma mesma linha, coluna ou região.

- **Mini Sudoku 4×4:** usa números de 1 a 4 e regiões de 2×2. É a opção mais simples para aprender as regras.
- **Sudoku 6×6:** usa números de 1 a 6 e regiões de 2×3. Oferece uma dificuldade intermediária e partidas mais curtas.
- **Sudoku clássico 9×9:** usa números de 1 a 9 e regiões de 3×3, com desafios de dificuldade Fácil, Médio e Difícil.

Cada quebra-cabeça é gerado para a partida, e o gerador verifica que existe uma única solução. Os números que já aparecem no início são fixos; as demais casas podem ser preenchidas pelo jogador.

## Modos de jogo

### Clássico

Resolva no seu ritmo, sem uma contagem regressiva obrigatória. É possível ajustar o tamanho e a dificuldade padrão e usar recursos de assistência quando quiser.

### Contra o tempo

Uma partida rápida de três minutos. O objetivo é completar o tabuleiro antes do cronômetro zerar e melhorar os próprios resultados. Avisos sonoros ajudam a perceber quando resta pouco tempo. A partida pode ser pausada; enquanto estiver pausada, o relógio fica parado.

### Campanha — Reino dos Gatos

A campanha tem **16 fases** organizadas em regiões que evoluem do aprendizado inicial até os desafios mais avançados. As primeiras etapas apresentam o Mini Sudoku; depois surgem tabuleiros 6×6 e 9×9, com dificuldades maiores. Ao concluir uma fase, o jogador recebe estrelas e recompensas, libera novos trechos do mapa e pode retornar a fases anteriores para melhorar seu desempenho. Também é possível escolher um gato companheiro para acompanhar a jornada.

## Personalização visual

O tabuleiro separa o estilo das peças da aparência da grade. Assim, o jogador pode combinar números ilustrados e layouts diferentes.

### Estilos de peças

A seleção inclui **Gatinhos com Números**, **Números coloridos**, **Números pretos**, **Números Gatosos** e **Gatos Números**, além de coleções adicionais, como Gato Feliz, Gato Halloween, Números de Madeira, Pedra e Gesso. Nos estilos ilustrados, cada algarismo corresponde a uma imagem própria, permitindo reconhecer os números durante a partida.

### Layouts e profundidade

Há quatro layouts de grade: Clássico, Blocos coloridos, Cartões e Papel. O modo **2D** apresenta um visual plano e nítido. O modo **3D** acrescenta volume, bordas elevadas e sombras, exceto no layout Papel, que mantém sua aparência de impressão. A pessoa também pode ajustar o tamanho das ilustrações, usar tema escuro e reduzir animações.

O seletor de estilo pode ser aberto durante a partida por meio do botão de paleta. A partida fica pausada enquanto a janela de escolha estiver aberta, para que seja possível comparar os visuais sem perder tempo de jogo.

## Ferramentas para resolver

- **Destaque de linha, coluna e região:** facilita visualizar quais casas estão relacionadas à célula selecionada.
- **Realce do mesmo número e indicação de conflitos:** ajuda a perceber repetições que quebram as regras.
- **Modo lápis:** registra candidatos temporários em uma célula. O tamanho das anotações pode ser Pequeno, Médio ou Grande.
- **Candidatos automáticos:** mostra os números que ainda podem caber nas casas vazias, conforme as regras atuais.
- **Desfazer:** permite reverter uma jogada recente.
- **Dica de lógica:** aponta uma dedução possível e explica a relação entre linha, coluna e região.
- **Revelar número:** preenche uma casa com o valor da solução.
- **Conferir célula ou tabuleiro:** ajuda a identificar respostas corretas e incorretas. Os recursos de conferência e revelação podem consumir pontos.
- **Penalidade por erro:** é uma opção configurável; quando ligada, uma resposta errada desconta pontos. Anotações a lápis não são penalizadas.

A pausa esconde o tabuleiro com forte desfoque e bloqueia as jogadas. Nela, é possível continuar, mudar o visual, abrir as configurações ou sair para a tela inicial. As configurações acessadas pela pausa mantêm o relógio parado até o retorno à partida.

## Pontos, experiência e conquistas

O jogo possui três formas complementares de acompanhar a evolução:

- **Pontos:** saldo que pode ser gasto em determinadas dicas e conferências.
- **Experiência (XP) e níveis:** representam a progressão geral do jogador e aumentam ao concluir desafios.
- **Estrelas, recordes e marcos felinos:** registram o desempenho em fases e partidas, incluindo vitórias, melhores tempos e conquistas.

As recompensas de conclusão podem considerar tamanho do tabuleiro, dificuldade, precisão, uso de dicas e tempo gasto. A campanha também usa estrelas para registrar a conclusão das fases.

## Música, sons e interface

O GatoSudokuAI oferece efeitos sonoros para ações, acertos, erros, dicas, conclusão de regiões, alertas de tempo e vitórias. Há três trilhas instrumentais de fundo e uma opção sem música, com controle de volume independente dos efeitos.

A interface adapta o tabuleiro e os controles a telas menores e maiores. A navegação inclui a barra inferior opcional, menu lateral, gestos entre telas e abas, e uma tela flutuante para escolhas contextuais. As preferências visuais e de jogabilidade são mantidas entre sessões.

## Progresso e conta

O jogo pode ser usado como **Convidado**, sem precisar criar uma conta. Também oferece acesso por **Google** ou por **e-mail e senha**. O perfil pode mostrar o nome escolhido pelo jogador, e uma conta conectada permite participar do ranking online. O endereço de e-mail não é exibido publicamente no ranking.

As partidas, preferências e progresso básico são salvos automaticamente no dispositivo. É possível exportar uma cópia dos dados e importá-la posteriormente. Recursos que dependem da conta ou do ranking online precisam de conexão; a resolução de Sudoku e os dados locais não dependem de login.

## Como foi feito

O GatoSudokuAI foi desenvolvido como um aplicativo web responsivo, com estrutura de interface, estilos visuais e lógica de jogo integrados. A geração dos tabuleiros, a verificação de solução única, as anotações, as dicas, a pontuação e a campanha funcionam dentro do próprio aplicativo. As artes dos gatinhos e dos números são usadas como peças individuais, e os efeitos sonoros e as músicas são produzidos dinamicamente pelo navegador. O armazenamento local preserva o progresso entre sessões, enquanto as funções de conta e ranking podem usar serviços online.

**GatoSudokuAI** — raciocínio, gatos e uma jornada de números.  
Autor: Rofran Pires · 2026
