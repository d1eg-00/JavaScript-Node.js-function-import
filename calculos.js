// Fazer maior nota e nome do aluno
let alunos_ordenados = [];


exports.ordenarNotas  = function (alunos){
    alunos_ordenados = alunos.sort(function(a, b) {
        //console.log(a.nota, b.nota)
        return a.nota - b.nota
    })
}
//console.log(ordenados)
//Criar a função e exportar ela
exports.maiorMenorNotas = function(alunos){
    //Aqui pegamos a maior nota
    console.log("O Aluno que obteve a maior nota" + alunos_ordenados[alunos_ordenados.length - 1]["nome"] + "e sua nota foi: " + alunos_ordenados[alunos_ordenados.length - 1]["nota"]);
    //Aqui pegamos a menor nota
    console.log(`O Aluno que obteve menor nota: ${alunos_ordenados[0]["nome"]} e sua nota foi:${alunos_ordenados[0]["nota"]}`);
}

exports.media = function (alunos){
    let soma = 0;
    for (i = 0; i < alunos.length; i ++){
      soma = soma + alunos[i].nota
    }
      //console.log(soma);
    
    let media;
    
    media = soma / alunos.length;
    
    console.log(`A média de todas as notas: ${media}`);
}

exports.AprovadosReprovados = function(alunos){
  let aprovados = 0;
  let reprovados = 0;

  for (let aluno of alunos){
    if(aluno.nota >= 60){ 
    aprovados = aprovados + 1;
    }else {
    reprovados = reprovados + 1;
  }
}
  console.log(`A quantidade de alunos aprovados foram: ${aprovados}`);
  console.log(`A quantidade de alunos reprovados foram: ${reprovados}`);
}
