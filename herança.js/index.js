class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    apresentar = () => console.log(`Olá eu sou ${this.nome}, tenho ${this.idade} anos de idade`)
}

class Aluno extends Pessoa{
    estudar = () => console.log(`${this.nome} está estudando.`)
}

class Professor extends Pessoa{
    darAula = () => console.log(`${this.nome} está dando aula.`)
}

const Comparini = new Aluno("Comparini" , 17)
const raul = new Professor("Raul" , 28)
const Hernandes = new Aluno("Hernandes", 17)
const nadja = new Professor("Nadja", 38)
const Felipe = new Aluno("Felipe", 10 )
const Morete = new Aluno("Morete, 17")

Comparini.estudar()
Hernandes.estudar()
Felipe.estudar()
raul.apresentar()
nadja.apresentar()
Morete.estudar()