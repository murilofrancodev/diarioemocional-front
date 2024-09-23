# Diário de Emoções

Um aplicativo web para auto-reflexão e registro emocional, permitindo que os usuários registrem suas emoções diárias, reflitam sobre suas experiências e melhorem seu bem-estar psicológico.

## Índice

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Funcionalidades](#funcionalidades)
- [Instalação](#instalação)
- [Uso](#uso)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Tecnologias Utilizadas

- **Angular**: Framework para construção de aplicações web.
- **Bootstrap**: Framework CSS para design responsivo.
- **Angular Material**: Biblioteca de componentes UI para Angular.
- **date-fns**: Biblioteca para manipulação de datas.

## Funcionalidades

- **Registro de Emoções**: Os usuários podem registrar suas emoções diárias.
- **Auto-reflexão**: Perguntas guiadas para ajudar os usuários a refletirem sobre suas experiências.
- **Calendário**: Visualização das emoções registradas em um calendário.
- **Interface Responsiva**: Design adaptável para diferentes tamanhos de tela.

## Instalação

Para instalar e executar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/diario-de-emocoes.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd diario-de-emocoes
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   ng serve
   ```

5. Acesse o aplicativo no navegador:
   ```
   http://localhost:4200
   ```

## Uso

- **Login**: Os usuários podem fazer login usando um nome de usuário e senha fictícios.
- **Notas**: Os usuários podem adicionar, editar e visualizar suas notas emocionais.
- **Reflexão**: Os usuários podem responder a perguntas guiadas para auto-reflexão.
- **Calendário**: Os usuários podem visualizar suas emoções registradas em um calendário interativo.

## Estrutura do Projeto

src/
├── app/
│ ├── pages/
│ │ ├── auth/ # Módulo de autenticação
│ │ ├── notes/ # Módulo de notas
│ │ ├── self-reflection/ # Módulo de auto-reflexão
│ ├── shared/ # Componentes compartilhados
│ ├── app.module.ts # Módulo principal da aplicação
│ └── app-routing.module.ts # Configuração de rotas
├── assets/ # Imagens e outros ativos
└── index.html # Arquivo HTML principal


## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.