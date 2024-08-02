class Fotografo {
  constructor(nome, telefone) { //Função construtora
    this.nome = nome;
    this.telefone = telefone;
    this.fotos = []; //Lista para fotos
  }
  adicionarFoto(titulo, data) { //Adicionar a Foto
    const novaFoto = new Fotografo.Foto(titulo, data);
    this.fotos.push(novaFoto);
  }
  deletarFoto(titulo){ //Deletar a Foto
    for (let i = 0; i < this.fotos.length; i++) {
      if (this.fotos[i].titulo === titulo) {
          this.fotos.splice(i, 1);
          console.log(`Foto com título "${titulo}" deletada com sucesso!`);
          return;
      }
    }
    console.log(`Foto com título "${titulo}" não encontrada.`);
  }
  getFotografo() { //Exibir Fotografo
      return `Nome: ${this.nome}, Telefone: ${this.telefone}`;
  }
  getFotosInfo() { //Exibir Fotos
    return console.log(this.fotos);// Falou a foto certinho
  }
  getInfo() { //Exibir Fotos TESTEEEEEEEEEEEEEEEEEEE
    return `Título: ${this.titulo}, Data: ${this.data}`;
  }
  atualizarFoto(titulo,novoTitulo,novaData){
    const foto = this.fotos.find(f => f.titulo === titulo);
    if(foto){
      foto.titulo = novoTitulo;
      foto.data = novaData;
      console.log("Foto Atualizada com Sucesso!!!");
    }
    else{
      console.log("A Foto nao foi encontrada!!!");
    }
  }
  static Foto = class {
    constructor(titulo, data) {
      this.titulo = titulo;
      this.data = data;
    }
  };
}

function atualizarFoto(fotografo){
  menuListarFoto(fotografo);
  const titulo = readline.question("Digite o titulo da foto a ser Editada: ");
  const novoTitulo = readline.question("Digite o novo Titulo da Foto: ");
  const novaData = readline.question("Digite a nova Data da Foto (DD-MM-AAAA): ");
  fotografo.atualizarFoto(titulo,novoTitulo,novaData);
}
function atualizarFotografo(fotografo) { //Atualizar Fotografo
  const novoNome = readline.question("Digite o novo Nome do Fotografo: ");
  const novoTelefone = readline.question("Digite o novo Telefone do Fotografo: ");

  fotografo.nome = novoNome || fotografo.nome;
  fotografo.telefone = novoTelefone || fotografo.telefone;
  console.log("Fotografo Atualizado com sucesso!!!");
}
function menuListarFoto(fotografo){
  console.log("\nInformações do Fotógrafo:");
  console.log(fotografo.getFotografo());
  console.log("\nFotos:");
  console.log(fotografo.getFotosInfo());
}
function menuDeletarFoto(fotografo){ //Menu Remover foto
  menuListarFoto(fotografo);
  const titulo = readline.question("Digite o titulo da foto a ser deletada: ");
  fotografo.deletarFoto(titulo);
}
function menuAdicionarFoto(fotografo){ //Menu ADD foto
  const titulo = readline.question('Digite o titulo da foto: ');
  const data = readline.question('Digite a data da foto (DD-MM-AAA): ');
  fotografo.adicionarFoto(titulo, data);
}
function adicionarFotografo(){ // ADD Fotografo
  const nome = readline.question("Digite o nome do Fotografo: ");
  const telefone = readline.question("Digite o telefone do Fotografo: ");
  return new Fotografo(nome, telefone) //Função construtora
}
function exibirFotografos(fotografos){ //Exibir os Fotografos
  console.log("Esse sao os Fotografos:");
  fotografos.forEach((fotografo, index) => {
      console.log(`${index + 1}. ${fotografo.getFotografo()}`);
  });
}
function validarFotografo(fotografos){ //Validar se Existe Fotografos Cadastrados
  if(fotografos.length === 0){    
      console.log("Nao existe nenhum Fotografo Cadastrado!!!");
      return false;
  }
  return true;
}  
function removerFotografo(fotografos){ //Remover Fotografo
  const cond = true;
  while(cond == true){
      console.log("Qual Fotografo voce deseja Remover: ");
      exibirFotografos(fotografos);
      const escolhaFotografo = parseInt(readline.question("Digite o Index do Fotografo:"));
      if(escolhaFotografo > 0 && escolhaFotografo <= fotografos.length){
          fotografos.splice(escolhaFotografo - 1, 1); //Para Remover na Lista
          console.log("Fotografo Removido com sucesso!");
          break;
      }else{
          console.log("Fotografo invalido, tente novamente");
      }
  }
}
function gerenciarFotografo(fotografos){ //Gerenciar Fotografo
  const cond = true;
  while(cond == true){
      console.log("Qual Fotografo voce deseja Gerenciar: ");
      exibirFotografos(fotografos);
      const escolhaFotografo = parseInt(readline.question("Digite o Index do Fotografo:"));
      if(escolhaFotografo > 0 && escolhaFotografo <= fotografos.length){
          const fotografoEscolhido = fotografos[escolhaFotografo - 1];
          menuGerenciar(fotografoEscolhido);
          break;
      }else{
          console.log("Fotografo invalido, tente novamente");
      }
  }
}
function menuGerenciar(fotografo){
  console.log(fotografo);
  opcao = true;
  while(opcao == true){
    console.log("=== Gerenciamento do Fotografo: ");
    console.log("=== Qual a sua escolha: ");
    console.log("=== 1 - Adicionar um Foto ");
    console.log("=== 2 - Remover um Foto");
    console.log("=== 3 - Editar um Foto ");
    console.log("=== 4 - Exibir todas as Fotos ");
    console.log("=== 5 - Voltar ao Menu Principal ");
    let escolha = parseInt(readline.question("Qual a sua escolha: "));
    switch (escolha) {
      case 1: //Adicionar uma Foto
        menuAdicionarFoto(fotografo);
        console.log("A Foto foi adicionado com sucesso!!!");
        break;
      case 2: //Remover uma Foto
        menuDeletarFoto(fotografo);
        console.log("Foto Deletado com sucesso!!!");
        break;
      case 3: //Editar uma Foto
        atualizarFoto(fotografo);
        break;
      case 4: //Exibir todas as Fotos
        menuListarFoto(fotografo);
        break;
      case 5: //Voltar ao Menu Principal
        opcao = false;
        break;  
      default: //Se escolher a escolha Invalida
        console.log("Esse escolha não existe, tente novamente!!!");
        break;
    }
  }
}

//Tem que fazer, Adicionar/Remover/Editar/Listar
const readline = require("readline-sync");
opcao = true;
const fotografos = []; //Lista de fotografos

while (opcao == true) { // Ficar no loop
  console.log("=== Bem vindo ao sistema de gerenciamento de fotos!!! ");
  console.log("=== 1 - Adicionar um Fotografo ");
  console.log("=== 2 - Remover um Fotografo ");
  console.log("=== 3 - Editar um Fotografo ");
  console.log("=== 4 - Exibir todos os Fotografos ");
  console.log("=== 5 - Gerenciar um Fotografo ");
  console.log("=== 6 - Sair do programa ");
  let escolha = parseInt(readline.question("Qual a sua escolha: "));
  switch (escolha) {
    case 1: //Adicionar um Fotografo
      const novoFotografo = adicionarFotografo();
      fotografos.push(novoFotografo); // Por na lista
      console.log("O Fotografo foi adicionado com sucesso!!!");
      break;
    case 2: //Remover um Fotografo
      const respR = validarFotografo(fotografos);
      if(respR == false){
          break;
      }
      removerFotografo(fotografos);
      break;
    case 3: //Editar um Fotografo
      if (fotografos.length === 0) {
        console.log("Nenhum fotógrafo disponível. Adicione um fotógrafo primeiro.");
        break;
      }
      console.log("Escolha um fotógrafo para atualizar:");
      fotografos.forEach((fotografo, index) => {
      console.log(`${index + 1}. ${fotografo.getFotografo()}`);
      });
      const indiceAtualizar = readline.questionInt("Digite o Numero do Fotografo: ") - 1;
       if (indiceAtualizar >= 0 && indiceAtualizar < fotografos.length) {
          const fotografoSelecionado = fotografos[indiceAtualizar];
          atualizarFotografo(fotografoSelecionado);
       } else {
          console.log("Fotografo invalido!");
      }
      break;
    case 4: //Exibir todos os Fotografos
      exibirFotografos(fotografos);
      break;
    case 5: //Gerenciar um Fotografo
      const respG = validarFotografo(fotografos);
      if(respG == false){
          break;
      }
      gerenciarFotografo(fotografos);
      opcao = true;
      break;  
    case 6: //Se for Sair do Programa
      opcao = false;
      break;
    default: //Se escolher Invalido
      console.log("Esse escolha não existe, tente novamente!!!");
      break;
  }
}