// Criando a classe Aluno
class Aluno {
    #nota
      constructor(nome, idade , nota) {
        // O constructor deve ser um método tradicional
        this.nome = nome;
        this.idade = idade;
        this.#nota = nota;
      };
      verNota = () => this.#nota
  }
  const raul = new Aluno("Raul" , 27 , 70)
  console.log(raul.nome)
  console.log(raul.verNota());