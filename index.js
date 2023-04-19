
const prompt = require('prompt-sync')();
const calculos = require('./calculos');
const alunos = [];

for (i = 0; i < 10; i ++){
   
  let nome = prompt(`Digite o nome do Aluno: `);
  let nota = parseFloat(prompt(`Digite a nota do Aluno: `));

  const aluno = {
    nome: nome,
    nota: nota
  }
  alunos.push(aluno);
}
calculos.ordenarNotas(alunos);
calculos.media(alunos);
calculos.maiorMenorNotas(alunos);
calculos.AprovadosReprovados(alunos);
