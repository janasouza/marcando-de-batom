# Documentação

- [Introdução](#introducao)
- [Como utilizar o blog localmente](#como-utilizar-o-blog-localmente)
- [Arquivos e pastas](#arquivos-e-pastas)
- [Inserindo um novo post](#inserindo-um-novo-post)
- [Fazendo deploy](#fazendo-deploy)

## Introdução
Utilizamos uma stack baseada em [NodeJS](https://nodejs.org/en/) com as seguintes tecnologias:

- **[Docpad](http://docpad.org/)** - Para gerar as páginas estáticas e os Posts.
- **[Eco](https://github.com/docpad/docpad-plugin-eco)** - Como template engine de HTML.
- **[Stylus](https://www.npmjs.com/package/docpad-plugin-stylus)** - Como pré-processador de CSS.

Para deploy utilizamos um [plugin](https://github.com/docpad/docpad-plugin-ghpages) do próprio Docpad para [gh-pages](https://pages.github.com/).

## Como Utilizar o blog localmente

**1 - instale a NodeJS**

- [NodeJS](https://nodejs.org/en/)

**2 - Clone este repositório**

****
```sh
$ git clone https://github.com/janasouza/marcando-de-batom.git
$ cd marcando-de-batom/blog
```

**3 - Instale todas as dependências do proejto**
```sh
$ npm install
$ npm install -g docpad
```

**4 - Inicie o projeto com o comando abaixo e veja em  http://127.0.0.1:9778/**
```sh
$ docpad run
```

## Arquivos e pastas
	.
	├── README.md
	├── DOCUMENTATION.md
	├── LICENCE.md
	├── img/
	├── em-construcao/
	├── blog/
	|   ├── out/
	|   ├── src/
	|   |   ├── documents/
	|   |   |   ├── styles/
	|   |   |   |   ├── vendors/
	|   |   |   |   └── style.css.styl
	|   |   |   ├── posts/
	|   |   |   |   └── *.html.eco
	|   |   |   ├── CNAME
	|   |   |   ├── cabelo.html.eco
	|   |   |   ├── comprinhas.html.eco
	|   |   |   ├── dia a dia.html.eco
	|   |   |   ├── livros.html.eco
	|   |   |   ├── maquiagem.html.eco
	|   |   |   ├── contato.html.eco
	|   |   |   ├── sobre.html.eco
	|   |   |   └── index.html.eco
	|   |   ├── files/
	|   |   |   ├── images/
	|   |   |   └── js/
	|   |   └── layouts/
	|   ├── docpad.coffee
	|   ├── Gruntfile.js
	|   └── package.json
	└── .gitignore

### Arquivos básicos

- `README.md` **==>** Arquivo com as informações básicas do projeto.
- `DOCUMENTATION.md` **==>** *Documentação completa do projeto.*
- `LICENCE.md` **==>** *Licença do projeto.*
- `img/` **==>** *Imagens utilizadas no README.md*
- `em-construcao/` **==>** *Página provisória.*
- `blog/` **==>** *Arquivos que não são adicionados ao git.*
- `.gitignore` **==>** *Arquivos que não são adicionados ao git.*

### Sobre o diretório `out/`

Contém os arquivos finais gerados pelo docpad, são esses arquivos que vão para produção.

### Sobre o diretório `src/`

Contém os arquivos a serem renderizados para a pasta out, como as paginas e assets. Os arquivos são organizados em três pastas:

- `layouts/`
- `documents/`
- `files/`

**Sobre o diretório `src/layouts/`**

Contém os templates de paginas baseadas em [Eco](https://github.com/docpad/docpad-plugin-eco).

**Sobre o diretório `src/documents/`**

Contém os arquivos que precisam ser compilados antes de ir para a pasta `out/`.

Subdiretórios:

- `styles/` **==>** *Arquivos .styl*
- `posts/` **==>** *Contém todos os posts do blog.*

**Sobre o diretório `src/files/`**

Contém os arquivos estáticos, que não precisão ser compilados, como os .js e as imagens.

Subdiretórios:

- `images/` **==>** *Todas as imagens do blog.*
- `js/` **==>** *Arquivos javascript.*

### Sobre o arquivo `docpad.coffee`

Este arquivo define as configurações do DocPad.

### Sobre o arquivo `package.json`

Este arquivo é necessário para qualquer aplicação em Node. Ele define os dados do seu projeto, a versão do DocPad, além dos plugins que serão utilizados.

## Inserindo um novo post

**1 - Vá até a pasta blog e execute o comando `docpad run`, em seguida abra o projeto em http://0.0.0.0:9778/**
```sh
$ cd marcando-de-batom/blog
$ docpad run
```

**2 - Crie um novo arquivo no diretório `src/documents/post` com a seguinte extrtura:**

Nome do arquivo: `nome-do-post.html.md`

Conteúdo (cabeçalho + conteúdo):

	---
	layout: post
	post: true
	title: Titulo do post
	palavras_chave: exemplo, exemplo
	descricao: exemplo de descrição
	categoria: maquiagem
	date: 2015-10-20
	---

	# Exemplo de conteúdo escrito em markdown.

## Fazendo deploy

**Vá até a pasta blog e execute o comando para deploy**

```sh
$ cd marcando-de-batom/blog
$ npm install
$ grunt deploy
```
