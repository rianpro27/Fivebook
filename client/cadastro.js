
// Definindo a classe Livro

class Livro {

   constructor(titulo, autor, codigo, genero, editora) {
        this.titulo = titulo;
        this.autor = autor;
        this.codigo = codigo;
        this.genero = genero;
        this.editora = editora;
    }

}

// Criando um array para armazenar os livros cadastrados

let livros = [];



// Função para cadastrar um novo livro

 async function cadastrarLivro() {

 let titulo = prompt("Digite o título do livro:");

 let autor = prompt("Digite o nome do autor:");

 let codigo = prompt("Digite o código:");

 let genero = prompt("Digite o gênero:");
 
 let editora = prompt("Digite a editora:");




 let livro = new Livro(titulo, autor, codigo, genero, editora);

 alert(`
    Livro cadastrado com sucesso!
    Título: ${livro.titulo}
    Autor: ${livro.autor}
    Código: ${livro.codigo}
    Gênero: ${livro.genero}
    Editora: ${livro.editora}
`)
}



// Função para listar todos os livros cadastrados

function listarLivros() {

 console.log("Lista de livros cadastrados:");

 livros.forEach((livro) => {

 console.log(livro);

 });

}



// Função para pesquisar por um livro específico

function pesquisarLivro() {

 let titulo = prompt("Digite o título do livro que deseja pesquisar:");



 let livro = livros.find((livro) => livro.titulo === titulo);



 if (livro) {

 console.log("Livro encontrado:");

 console.log(livro);

 } else {

 console.log("Livro não encontrado.");

 }

}



// Função para remover um livro

function removerLivro() {

 let titulo = prompt("Digite o título do livro que deseja remover:");

 let index = livros.findIndex((livro) => livro.titulo === titulo);


if (index !== -1) {

    livros.splice(index, 1);

    console.log("Livro removido com sucesso!");

 } else {

 console.log("Livro não encontrado.");

 }

}



// Função para editar informações de um livro

function editarLivro() {

 let titulo = prompt("Digite o título do livro que deseja editar:");

 let livro = livros.find((livro) => livro.titulo === titulo);



if (livro) {

    let novoTitulo = prompt("Digite o novo título:");

    let novoAutor = prompt("Digite o novo autor:");

    let novoAnoPublicacao = prompt("Digite o novo ano de publicação:");

    let novoNumPaginas = prompt("Digite o novo número de páginas:");


livro.titulo = novoTitulo;

livro.autor = novoAutor;

livro.anoPublicacao = novoAnoPublicacao;

livro.numPaginas = novoNumPaginas;

console.log("Livro editado com sucesso!");

 
} else {

    console.log("Livro não encontrado.");

 }

}

cadastrarLivro()