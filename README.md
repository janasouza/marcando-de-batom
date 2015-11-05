# ![Marcando de Batom](https://rawgit.com/janasouza/marcando-de-batom/master/img/marcando-de-batom.svg)

> Aqui entrerá a descrição do blog.

Visite o blog em: [marcandodebatom.com](http://marcandodebatom.com/)

## Como funciona:
Toda a documentação de como utilizar o projeto está no arquivo [DUCUMENTATION.md](DUCUMENTATION.md), incluindo:

- [Introdução](DOCUMENTATION.md#introducao)
- [Como utilizar o blog localmente](DOCUMENTATION.md#como-utilizar-o-blog-localmente)
- [Arquivos e pastas](DOCUMENTATION.md#arquivos-e-pastas)
- [Inserindo um novo post](DOCUMENTATION.md#inserindo-um-novo-post)
- [Fazendo deploy](DOCUMENTATION.md#fazendo-deploy)

**Dica:** Os posts são escritos em markdown, em caso de dúvidas consulte este [guia prático](https://daringfireball.net/projects/markdown/syntax).

## Resumo técnico:
Utilizamos uma stack baseada em [NodeJS](https://nodejs.org/en/) com as seguintes tecnologias:

- [Docpad](http://docpad.org/) - Para gerar as páginas estáticas e os Posts.
- [Eco](https://github.com/docpad/docpad-plugin-eco) - Como template engine de HTML.
- [Stylus](https://www.npmjs.com/package/docpad-plugin-stylus) - Como pré-processador de CSS.
- [Flex Grid Framework](http://flexgridframework.com/) - Como sistema de grid baseado em flexbox.

Para deploy utilizamos um [plugin](https://github.com/docpad/docpad-plugin-ghpages) do próprio Docpad para [gh-pages](https://pages.github.com/).

## Licença
[MIT Licence](https://github.com/janasouza/marcando-de-batom/blob/master/LICENCE.md) © Janaina Souza
