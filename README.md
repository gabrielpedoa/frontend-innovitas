# Frontend Innovitas

O **Frontend Innovitas** é uma aplicação web desenvolvida como solução para o desafio Full Stack da Innovitas. Trata-se de um portal de personagens da série **Rick & Morty**, permitindo aos usuários explorar personagens, salvar favoritos, gerenciar uma coleção pessoal e visualizar estatísticas em um dashboard.

A aplicação se integra com uma **API REST backend** hospedada em `http://localhost:3000/api`, que fornece autenticação, gerenciamento de personagens, dados de dashboard e integração com a API externa do Rick & Morty.

# Setup do Projeto

1. **Clonar o repositório**

```bash
git clone <url-do-repositorio>
cd frontend
```

2. **Instalar dependências**

```bash
npm install
```

3. **Configurar a API**

A aplicação espera um backend rodando em `http://localhost:3000/api`. Certifique-se de que o backend está ativo antes de iniciar o frontend.

Se necessário, altere a `baseURL` em `src/services/api.ts` ou utilize variáveis de ambiente (veja seção abaixo).

4. **Rodar o projeto**

```bash
npm run dev
```

O servidor de desenvolvimento será iniciado (geralmente em `http://localhost:5173`).

---

# Tecnologias Utilizadas

- **React 19** – Biblioteca para construção da interface
- **TypeScript** – Tipagem estática
- **Vite 7** – Build tool e dev server
- **React Router DOM 7** – Roteamento client-side
- **Material UI (MUI) 7** – Componentes de UI (ThemeProvider, TextField, Button, Typography, CircularProgress)
- **Styled Components** – Estilização CSS-in-JS
- **Emotion** – Dependência do MUI para estilos
- **Axios** – Cliente HTTP para requisições à API

---

# Arquitetura do Frontend

O projeto segue uma arquitetura baseada em **responsabilidades**, organizando o código em pastas bem definidas:

| Pasta        | Responsabilidade                                                             |
| ------------ | ---------------------------------------------------------------------------- |
| `components` | Componentes reutilizáveis (Navbar, Loading)                                  |
| `pages`      | Páginas da aplicação com seus hooks e estilos próprios                       |
| `layouts`    | Layouts que estruturam páginas (AppLayout com navbar, AuthLayout sem navbar) |
| `hooks`      | Hooks customizados globais (useAuthContext, useFetching, useVerifyAuth)      |
| `services`   | Camada de comunicação com a API                                              |
| `context`    | Context API para autenticação (AuthProvider, AuthContext)                    |
| `routes`     | Definição centralizada de rotas                                              |
| `styles`     | Estilos globais e tema                                                       |
| `utils`      | Funções utilitárias (tratamento de erros)                                    |
| `@types`     | Definições de tipos TypeScript                                               |

O fluxo de dados segue o padrão: **pages** utilizam **hooks** que consomem **services** e **context**, enquanto os **layouts** orquestram a renderização das páginas e componentes compartilhados.

---

# Estrutura de Pastas

```
src/
├── @types/                 # Tipos TypeScript (auth, characters, dashboard, user, useFetching)
├── components/             # Componentes reutilizáveis
│   ├── Loading.tsx
│   └── Navbar/
│       ├── Index.tsx
│       ├── components/
│       │   └── HamburguerComponent.tsx
│       └── styles.ts
├── context/                # Context API
│   ├── AuthContext.tsx
│   └── AuthProvider.tsx
├── hooks/                  # Hooks customizados globais
│   ├── useAuthContext.ts
│   ├── useFetching.ts
│   └── useVerifyAuth.ts
├── layouts/
│   ├── AppLayout.tsx       # Layout com Navbar
│   ├── AuthLayout.tsx      # Layout sem Navbar (login)
│   └── styles.ts
├── pages/
│   ├── characters/         # Listagem de personagens
│   │   ├── Characters.tsx
│   │   ├── hooks/
│   │   │   └── useCharacterHook.tsx
│   │   └── styles.ts
│   ├── characterDetails/   # Detalhes do personagem
│   │   ├── CharacterDetails.tsx
│   │   ├── components/
│   │   │   └── CharactersField.tsx
│   │   ├── hooks/
│   │   │   └── useCharacterDetailsHook.ts
│   │   └── styles.ts
│   ├── home/               # Dashboard
│   │   ├── Home.tsx
│   │   ├── hooks/
│   │   │   └── useHomeHook.tsx
│   │   └── styles.ts
│   ├── login/              # Login e cadastro
│   │   ├── Login.tsx
│   │   ├── hooks/
│   │   │   └── useLoginHook.tsx
│   │   └── styles.ts
│   └── myCharacters/       # Coleção do usuário
│       ├── MyCharacters.tsx
│       ├── hooks/
│       │   └── useMyCharactersHook.ts
│       └── styles.ts
├── services/               # Serviços de API
│   ├── api.ts              # Instância Axios
│   ├── auth.ts
│   ├── characters.ts
│   └── dashboard.ts
├── styles/
│   └── global.ts           # Estilos globais e tema MUI
├── utils/
│   └── handleApiError.ts
├── App.tsx
├── main.tsx
└── routes.tsx
```

---

# Sistema de Rotas

O roteamento é implementado com **React Router DOM v7** e organizado da seguinte forma:

### Layouts

- **AppLayout** – Exibe a Navbar e envolve as rotas principais (Home, Personagens, Meus Personagens, Detalhes do Personagem)
- **AuthLayout** – Layout minimalista sem navbar para `/auth/login`

### Rotas

| Rota                | Componente        | Autenticação   |
| ------------------- | ----------------- | -------------- |
| `/`                 | Home              | Pública        |
| `/personagens`      | Characters        | Pública        |
| `/personagem/:id`   | CharacterDetails  | Pública        |
| `/meus-personagens` | MyCharacters      | Requer login\* |
| `/auth/login`       | Login             | Pública        |
| `*`                 | Redirect para `/` | -              |

\*O acesso à rota `/meus-personagens` não é bloqueado por guard; a proteção é feita via Navbar, que redireciona usuários não autenticados para `/auth/login` ao clicar em "Meus Personagens".

### Navegação

- A **Navbar** contém links para Home, Personagens e Meus Personagens
- Menu hambúrguer responsivo em dispositivos móveis
- Exibição de saudação e botão "Sair" para usuários logados; "Login | Cadastro" para visitantes

---

# Gerenciamento de Estado

### Context API

O estado global é gerenciado via **Context API** para autenticação:

- **AuthProvider** – Provê `user`, `loading`, `login`, `logout` e `createUser`
- **AuthContext** – Armazena o valor do contexto
- **useAuthContext** – Hook para consumir o contexto (com validação de uso dentro do Provider)

### Estados locais

- Cada página utiliza **hooks customizados** (`useHomeHook`, `useCharacterHook`, etc.) que encapsulam lógica e estado local
- Estados como `loading`, `error`, `form`, `page` e `search` são gerenciados dentro desses hooks
- O hook **useFetching** centraliza o padrão de requisições GET com estado de `data`, `loading`, `error` e `refetch`

Não há uso de Redux, Zustand ou outras bibliotecas de estado global além do Context para autenticação.

---

# Comunicação com API

### Cliente Axios

A aplicação utiliza **Axios** com uma instância configurada em `services/api.ts`:

- `baseURL`: `http://localhost:3000/api`
- `withCredentials: true` – Envio de cookies para sessão

### Organização dos services

Cada domínio possui seu próprio arquivo de serviço:

- **auth.ts** – `loginService`, `logoutService`, `createUserService`, `loadCharactersByUserIdService`
- **characters.ts** – `createCharacterService`, `updateCharacterService`, `loadCharacterService`, `deleteCharacterService`
- **dashboard.ts** – `dashboardAuthService`, `dashboardNotAuthService`

### Tratamento de erros

O utilitário `handleApiError` em `utils/handleApiError.ts` padroniza o tratamento de erros da API:

- Erros em formato de array (validação) são convertidos em mensagem legível
- Erros em string são repassados
- Erro genérico para falhas inesperadas

Os serviços chamam `handleApiError` em blocos `catch`, que lança uma `Error` para ser tratada pelo componente ou hook que invocou o serviço.

### Hooks de fetching

O hook **useFetching** encapsula requisições GET com:

- `url` e `dependeces` para refetch quando necessário
- Estados `data`, `loading`, `error`
- Funções `refetch` e `updateData`

---

# Componentização

### Padrões utilizados

- **Separação lógica/apresentação** – Cada página delega lógica a um hook próprio (ex.: `useHomeHook`, `useCharacterDetailsHook`)
- **Componentes reutilizáveis** – `Loading`, `Navbar`, `CharacterField` (dentro de `CharacterDetails`)
- **Estrutura por feature** – Cada página possui sua pasta com `ComponentePrincipal.tsx`, `hooks/` e `styles.ts`

### Organização

- **components/** – Componentes usados em múltiplas páginas
- **pages/** – Cada página com seu próprio subdiretório de hooks e estilos
- Os hooks retornam objetos como `{ states, handlers }` ou `{ data, handlers, states }` para facilitar o consumo nos componentes

---

# Estilização

O projeto utiliza duas estratégias combinadas:

### Styled Components

- Estilos por componente em arquivos `styles.ts` dentro de cada módulo
- Uso de `createGlobalStyle` em `styles/global.ts` para reset de `margin`, `padding`, `box-sizing` e `font-family`
- Estilos responsivos com `@media` em breakpoints como 768px e 480px

### Material UI (MUI)

- **ThemeProvider** com tema customizado em `styles/global.ts`
- Fonte: **Inconsolata**
- Componentes: `TextField`, `Button`, `Typography`, `CircularProgress`

### Tema e estilos globais

- Tema MUI definido com `createTheme` (tipografia)
- `GlobalStyle` aplica estilos globais e altura 100% para `html`, `body` e `#root`
- Background fixo no `AppLayout` via imagem (`defaultBg.jpg`)

---

---

# Scripts Disponíveis

| Script    | Comando           | Descrição                                       |
| --------- | ----------------- | ----------------------------------------------- |
| `dev`     | `npm run dev`     | Inicia o servidor de desenvolvimento com Vite   |
| `build`   | `npm run build`   | Compila o TypeScript e gera o build de produção |
| `preview` | `npm run preview` | Preview do build de produção localmente         |
| `lint`    | `npm run lint`    | Executa o ESLint no projeto                     |

---

# Boas Práticas Utilizadas

- **Tipagem forte com TypeScript** – Interfaces em `@types/` e tipagem em services e hooks
- **Separação de responsabilidades** – Services para API, hooks para lógica, componentes para UI
- **Hooks customizados** – Reutilização de lógica (useFetching, useAuthContext, useVerifyAuth)
- **Arquitetura escalável** – Estrutura por features facilita crescimento do projeto
- **Tratamento de erros padronizado** – `handleApiError` para respostas da API
- **Layouts reutilizáveis** – AppLayout e AuthLayout evitam repetição de estrutura
- **Estilização consistente** – Tema MUI + Styled Components com padrão de arquivos `styles.ts`
- **Validação de uso de Context** – `useAuthContext` lança erro se usado fora do AuthProvider

---

# Considerações Finais

O **Frontend Innovitas** é uma aplicação React moderna que explora personagens da série Rick & Morty, permitindo autenticação, listagem, favoritos e gestão de uma coleção pessoal. A arquitetura é clara e escalável, com organização por features, uso de Context para autenticação, services centralizados para API e hooks para encapsular lógica de negócio. A combinação de Material UI e Styled Components oferece consistência visual e flexibilidade de estilização. O projeto está preparado para evolução mantendo boas práticas de tipagem, componentização e separação de responsabilidades.
