# CRISTIANFLIX - Fullstack Challenge Cristian Correia

<div align="center">
  <span align="center">
    <img src="https://github.com/CristianWesleyFront/CristianFlix/blob/master/movie-web/src/assets/logoCristianFlix.png" width="300" alt="CristianFlix Logo" />
  </span>

  <img src="https://media.giphy.com/media/3c6KOO1LKYVSgIyExI/giphy.gif" width="85%"> 
</div>

---

## 🚀 Indice

- 📓 [Sobre](#-Sobre)
- 👨‍💻 [Tecnologias utilizadas](#-Tecnologias-utilizadas)
- 📦 [Como baixar o projeto](#-Como-baixar-o-projeto)
- 🤝 [Considerações](#-Considerações)

## 📓 Sobre

Referência do projeto **Desafio vaga Full Stack Pleno** do [**Atlântico**](https://www.atlantico.com.br/)

Essa é uma aplicação de pesquisa e visualização de informações sobre filmes, o design utilizado na aplicação faz referência a plataforma de filmes [Netflix](https://www.netflix.com/browse), onde tentei ser bem fiel a forma que as informações são apresentadas para usuário.

### 🥂 **Observação para os avaliadores**

Peço desculpas antecipadas por alguns pontos impostos no teste que, por conta do layout e design que optei por fazer, possam ter sido levemente modificados.

- **O resultado da pesquisa será uma lista de filmes que devem ser exibidos para o usuário nessa mesma página Home** : Como optei por seguir a experiência que o usuário tem no site da Netflix, ao realizar uma pesquisa, o usuário é redirecionado para uma pagina de "/search", e é feito as demais pesquisas na pagina por um campo de input que é encontrado no Header.

- **Os filmes marcados como "Gostei" devem aparecer no início da lista** : Como estratégia de sanar esse ponto , optei por criar uma listagem na tela de Home, onde o usuário pode ver todos os filmes que deu "Like", porem também é possível ver que um filme esta como "liked" ao passar o mouse em cima do poster na tela de "/search".

### 🧱 **Funcionalidades da aplicação**

- É possível pesquisar por filmes através da barra de pesquisa que se encontra na Home e no icone de pesquisa que se encontra no Header.

- Todo filme ao passar o mouse por cima, apresenta 2 opções, uma de dar um like e outra de visualizar informações.

- Todo usuário pode ter uma lista de inifitos filmes como "liked", essa lista é apresentada na tela de Home e fica armazenada no navegador do usuário.

# 👨‍💻 Tecnologias utilizadas

### Front End

- [React](https://pt-br.reactjs.org/)
- [React-boilerplate-cra-template](https://github.com/react-boilerplate/react-boilerplate-cra-template)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)
- [Redux](https://redux.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Redux Saga](https://styled-components.com/)
- [React Router](https://reactrouter.com/)

### Back End

- [Java](https://www.java.com/pt-BR/)
- [Spring Boot](https://spring.io/projects/spring-boot)
- [OMDb API](http://www.omdbapi.com/)

### DevOps

- [Docker](https://www.docker.com/)

---

## 📦 Como baixar o projeto

### Com **[Docker](https://www.docker.com/)** :

```bash

 # Clonar o repositório
 $ git clone https://github.com/CristianWesleyFront/CristianFlix

 # Entrar no diretorio
 $ cd fullstack-challenge-cristian_correa

 # Instalar as dependências
 $ docker-compose up --build

 # Entrar no navegar e acessar http://localhost:3000


```

---

## 🤝 Considerações

Agradeço a oportunidade de realizar esse desafio, foi muito gratificante aplicar tantos conhecimentos que venho estudando nos últimos anos e me desafiar a apreender coisas novas como o spring boot (Que se assemelha em vários conceitos ao [NestJs](https://nestjs.com/) framework backend que utilizo hoje) e rever tecnologias como o java. Espero que tenha sido um bom teste, me diverti muito de fazer o "CristianFix" e gostaria, se caso for possível, um feedback sobre o projeto para saber em que pontos melhorar. 😁
