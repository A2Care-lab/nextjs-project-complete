# NextJS Project

Este é um projeto Next.js completo com TypeScript, Tailwind CSS e componentes UI.

## Estrutura do Projeto

```
/
├── app/
│   ├── admin/
│   │   ├── gestao/
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── ui/
│       ├── button.tsx
│       ├── card.tsx
│       └── input.tsx
├── lib/
│   └── utils.ts
├── .env
├── .yarnrc.yml
├── next.config.js
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## Funcionalidades

- ✅ Next.js 14 com App Router
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ Componentes UI reutilizáveis
- ✅ Área administrativa
- ✅ Sistema de gestão
- ✅ Layout responsivo

## Como executar

1. Instale as dependências:
```bash
npm install
# ou
yarn install
```

2. Execute o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

3. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## Páginas Disponíveis

- `/` - Página inicial
- `/admin` - Área administrativa
- `/admin/gestao` - Sistema de gestão

## Tecnologias Utilizadas

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- ESLint

## Estrutura de Componentes

### Componentes UI
- `Button` - Botão reutilizável com variantes
- `Card` - Componente de cartão
- `Input` - Campo de entrada

### Páginas
- Página inicial com navegação
- Área administrativa com dashboard
- Sistema de gestão com abas interativas

## Configuração

O projeto inclui:
- Configuração do TypeScript
- Configuração do Tailwind CSS
- Configuração do ESLint
- Variáveis de ambiente (.env)
- Configuração do Yarn (.yarnrc.yml)

## Deploy

Para fazer deploy do projeto:

1. Build do projeto:
```bash
npm run build
```

2. Inicie o servidor de produção:
```bash
npm start
```

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.