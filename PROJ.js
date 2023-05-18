// Event listener para o formulário de cadastro
var botaoAdicionar = document.getElementById("botaoAdicionar");
botaoAdicionar.addEventListener("click", adicionarJogador);
document.getElementById('cadastroForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    var nomeJogadorInput = document.getElementById('nomeJogador');
    var nomeJogador = nomeJogadorInput.value;
  
    // Obter dados do cadastro do localStorage (se existirem)
    var jogadores = localStorage.getItem('jogadores');
    if (jogadores) {
      jogadores = JSON.parse(jogadores);
    } else {
      jogadores = [];
    }
  
    // Adicionar novo jogador aos dados existentes
    jogadores.push(nomeJogador);
  
    // Armazenar os dados atualizados no localStorage
    localStorage.setItem('jogadores', JSON.stringify(jogadores));
  
    nomeJogadorInput.value = '';
    
  });
  


  var jogadores = [];

// Função para adicionar um jogador à lista
function adicionarJogador() {
  var nomeJogadorInput = document.getElementById("nomeJogador");
  var nomeJogador = nomeJogadorInput.value;


  var jogador = {
    nome: nomeJogador,

  };

  jogadores.push(jogador);

  var tabelaJogadores = document.getElementById("tabelaJogadores");
  var tr = document.createElement("tr");

  var tdNome = document.createElement("td");
  tdNome.textContent = nomeJogador;
  tr.appendChild(tdNome);

 

  tabelaJogadores.appendChild(tr);

  nomeJogadorInput.value = "";

}

// Função para sortear dois jogadores para uma partida de xadrez
function sortearJogadores() {
  var numeroJogadores = jogadores.length;

  if (numeroJogadores < 2) {
      alert("É necessário ter pelo menos dois jogadores cadastrados!");
      return;
  }

  var indiceSorteado1 = Math.floor(Math.random() * numeroJogadores);
  var indiceSorteado2;

  do {
      indiceSorteado2 = Math.floor(Math.random() * numeroJogadores);
  } while (indiceSorteado1 === indiceSorteado2);

  var jogadorBranco = jogadores[indiceSorteado1].nome;
  var jogadorPreto = jogadores[indiceSorteado2].nome;

  var jogadorBrancoElemento = document.getElementById("jogadorBranco");
  jogadorBrancoElemento.textContent = "Jogador das Brancas: " + jogadorBranco;

  var jogadorPretoElemento = document.getElementById("jogadorPreto");
  jogadorPretoElemento.textContent = "Jogador das Pretas: " + jogadorPreto;
}

// Event listener para o formulário de cadastro
var botaoAdicionar = document.getElementById("botaoAdicionar");
botaoAdicionar.addEventListener("click", adicionarJogador);

// Event listener para o botão de sorteio
var botaoSortear = document.getElementById("botaoSortear");
botaoSortear.addEventListener("click", sortearJogadores);
