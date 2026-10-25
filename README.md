# GatoSudokuAI

**GatoSudokuAI** é um jogo de Sudoku com identidade felina, pensado para celulares e computadores. O jogador escolhe o tamanho e a dificuldade do tabuleiro, personaliza a aparência dos números e avança em desafios que recompensam lógica, atenção e prática.

## O que o jogo oferece

- **Três tamanhos:** mini Sudoku 4×4, intermediário 6×6 e clássico 9×9.
- **Modos de jogo:** Clássico, Contra o tempo e Campanha do Reino dos Gatos.
- **Cinco estilos para os números:** Gatinhos com Números, Números Coloridos, Números Pretos, Números Gatosos e Gatos Números.
- **Tabuleiro personalizável:** aparência 2D ou 3D, temas e ajustes de tamanho das ilustrações.
- **Ferramentas de raciocínio:** anotações a lápis, candidatos, desfazer jogadas, conferências e dicas.
- **Progressão:** pontos, XP, níveis, estrelas de campanha, conquistas, recordes e marcos felinos.
- **Preferências de áudio:** efeitos sonoros, músicas e ajustes de volume.
- **Salvamento local:** as preferências e o progresso ficam salvos no dispositivo usado.
- **Contas opcionais:** jogar anonimamente, entrar com Google ou usar e-mail e senha. Recursos online, como ranking e acesso da conta, precisam de conexão.
- **PWA instalável:** pode ser adicionado à tela inicial e abrir em uma janela própria, com acesso aos recursos principais mesmo quando estiver offline após o primeiro carregamento.

## Como foi feito

O jogo foi desenvolvido como uma aplicação web responsiva em HTML, CSS e JavaScript, sem exigir instalação de um pacote tradicional. As ilustrações da identidade visual são incorporadas ao jogo, e as configurações, as partidas e o progresso são armazenados localmente no navegador.

A versão PWA inclui um manifesto com os dados do aplicativo, ícones para navegadores e diferentes tipos de instalação, além de um service worker que guarda os arquivos essenciais e permite abrir o jogo sem conexão depois de carregado.

## Publicar no GitHub Pages

1. Descompacte o pacote e envie **todos os arquivos e a pasta `icons`** para a raiz do repositório.
2. Confirme que `index.html`, `manifest.webmanifest`, `service-worker.js`, `browserconfig.xml` e `README.md` ficaram na raiz, junto da pasta `icons`, sem uma pasta extra envolvendo tudo. O arquivo `GatoSudokuAI1.4.html` acompanha a versão, mas o GitHub Pages usa `index.html` como entrada da PWA.
3. Nas configurações do repositório, ative o GitHub Pages para a branch e a pasta utilizadas pelo projeto.
4. Abra o endereço publicado em HTTPS e aguarde o primeiro carregamento completo. O service worker será registrado automaticamente.
5. Use o botão **Instalar app** na tela inicial do jogo ou a opção de instalação apresentada pelo navegador.

> Para a instalação PWA, acesse a versão publicada por HTTPS (o GitHub Pages já fornece HTTPS). Abrir o arquivo HTML diretamente pelo gerenciador de arquivos não permite instalar como PWA.

## Instalar no dispositivo

- **Android / Chrome:** toque em **Instalar app** no jogo ou use o menu do navegador e escolha instalar/adicionar à tela inicial.
- **Computador:** use o ícone de instalação na barra de endereço ou o menu do navegador, quando disponível.
- **iPhone / iPad:** abra o site no Safari, toque em **Compartilhar** e escolha **Adicionar à Tela de Início**.

O jogo reconhece quando é aberto em modo instalado e informa que já está instalado. A disponibilidade do prompt de instalação depende do navegador e dos critérios de cada plataforma.

## Observações

- A primeira visita ao site precisa de conexão para baixar os arquivos. Depois que o aplicativo tiver sido carregado e o service worker tiver sido instalado, a interface e o jogo principal ficam disponíveis offline.
- Login e recursos que dependem de dados online precisam de internet.
- O progresso local pertence ao navegador/dispositivo. Use o recurso de backup do jogo para exportar ou importar dados manualmente quando necessário.

**Autor:** Rofran Pires · 2026  
**Versão:** 1.4
