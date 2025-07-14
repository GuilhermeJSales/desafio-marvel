# Marvel Heroes Explorer

Aplicação desenvolvida com React que consome a API da Marvel para exibir heróis, seus quadrinhos e séries. Os usuários podem pesquisar por heróis, marcar seus favoritos e visualizar detalhes individuais. O projeto foi estruturado totalmente responsivo, com componentes reutilizáveis, contexto global e loading compartilhado.

![image](https://github.com/user-attachments/assets/0eb84912-ae26-4059-a125-1d9a7c590352)
![image](https://github.com/user-attachments/assets/1ed8660c-b070-4815-b7b2-777a346d72a8)

---

## Deploy

Acesse o projeto online:  
👉 [Deploy do projeto](https://desafio-marvel-eight.vercel.app/)
👉 [DEVLOG](https://github.com/GuilhermeJSales/desafio-marvel/blob/master/DEVLOG.md)

---

## Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [Crypto-js](https://www.npmjs.com/package/crypto-js)
- [Vite](https://vitejs.dev/)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [ESLint](https://eslint.org/)
- [Vercel](https://vercel.com/)

---

## Funcionalidades

- **Busca por heróis** por nome (com debounce para evitar chamadas excessivas)
- **Favoritar heróis** (limitado a 5, com save das infos no `localStorage`)
- **Exibição de quadrinhos e séries** mais recentes
- **Página detalhada do herói**, com imagem, descrição, últimos lançamentos e barra de busca
- **Componente de loading global** com `Context API`
- **Responsividade** em todas as páginas

---


## Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn
- Git

---

## Como usar

1. Clone o repositório:
```bash
git clone https://github.com/GuilhermeJSales/desafio-marvel.git
cd desafio-marvel

```

2. Instale as dependências:
```bash
npm install
code .
```

3. Configure as variaveis ambiente no arquivo .env.local:
```bash
VITE_API_PUBLIC_KEY=suachavepublica
VITE_API_PRIVATE_KEY=suachaveprivada
```


4. Rode o projeto localmente:
```bash
npm run dev
```
---

### A autenticação da API da Marvel requer a geração de um timestamp, apikey e hash com MD5 no seguinte formato:
ts=**timestamp**&apikey=**public_key**&hash=**md5(ts+private_key+public_key)**

- **Você pode criar sua conta e gerar suas chaves publicas e privadas no site:** https://developer.marvel.com/

---

## Observações
- O projeto utiliza apenas a **API oficial da Marvel**.
- O campo de busca exige o nome completo do herói.
- Futuras melhorias incluem: paginação, autocomplete de busca e acessibilidade.

---


## 🙋‍♂️ Autor
- Projeto desenvolvido para processo seletivo.
- Feito com 💙 por [Guilherme Jesus Sales](https://www.linkedin.com/in/guilherme-jesus-sales/)
- [Portfolio](https://portfolio.guijsweb.com.br/)





