# Portfólio - Rainério Costa

Portfólio profissional construído com Next.js 16, Tailwind CSS e shadcn/ui.

## Tecnologias

- **Next.js 16** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utilitária
- **shadcn/ui** - Componentes UI acessíveis e customizáveis
- **Lucide React** - Ícones modernos

## Começando

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Instalação

1. Instale as dependências:

```bash
npm install
```

2. Execute o servidor de desenvolvimento:

```bash
npm run dev
```

3. Abra [http://localhost:3000](http://localhost:3000) no navegador para ver o resultado.

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria uma build de produção
- `npm start` - Inicia o servidor de produção (após build)
- `npm run lint` - Executa o linter ESLint

## Estrutura do Projeto

```
├── app/              # App Router do Next.js
│   ├── layout.tsx    # Layout principal
│   ├── page.tsx      # Página inicial
│   └── globals.css   # Estilos globais
├── components/       # Componentes React
│   ├── ui/          # Componentes shadcn/ui
│   └── ...          # Componentes customizados
├── lib/             # Utilitários e helpers
└── public/          # Arquivos estáticos
```

## Personalização

As cores da marca estão configuradas em `tailwind.config.ts` e podem ser ajustadas conforme necessário:

- `brand-coral`: #ff6450
- `brand-dark`: #0b0f1a
- `brand-navy`: #151b2d
- `brand-gray`: #9ca3af

## Deploy

O projeto pode ser facilmente deployado na [Vercel](https://vercel.com), plataforma criada pelos mesmos desenvolvedores do Next.js.
