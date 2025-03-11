class Pessoa{
    constructor(nome, cargo) {
        this.nome = nome;
        this.cargo = cargo;
    }
    apresentar = () => console.log(`Olá eu sou ${this.nome}`)
}
class Médico extends Pessoa{
    apresentar = () => console.log(`${this.nome} está atendendo um paciente.`)
}

class Paciente extends Pessoa{
    apresentar = () => console.log(`${this.nome} está sendo atendido.`)
}

class Psicologa extends Pessoa{
    apresentar = () => console.log(`${this.nome} está atendendo um paciente`)
}

class Faxineiro extends Pessoa{
    apresentar = () => console.log(`${this.nome} está limpando as privadas`)
}

class Administrador extends Pessoa{
    apresentar = () => console.log(`${this.nome} está administrando a recepção`)
}

class Cirurgião extends Pessoa{
    apresentar = () => console.log(`${this.nome} está na sala de cirurgia`)
}

class Socorrista extends Pessoa{
    apresentar = () => console.log(`${this.nome} está na Ambulancia`)
}

const yago = new Médico('Yago')
const raul = new Paciente('Raul')
const natalia = new Psicologa('Natalia')
const lucas = new Faxineiro('Lucas Comparini')
const morette = new Administrador('Lucas Morette')
const hernandes = new Cirurgião ('Matheus Hernandes')
const curps = new Socorrista ('Curps')


    yago.apresentar();
    raul.apresentar();
    natalia.apresentar();
    lucas.apresentar();
    morette.apresentar();
    hernandes.apresentar();
    curps.apresentar();


    document.getElementById("saida").innerText = `Olá eu sou ${yago.nome}  
    e estou atendendo um paciente. 
    ${raul.nome} está sendo atendido. 
    ${natalia.nome} está atendendo um paciente. 
    ${lucas.nome} está limpando as privadas.
     ${morette.nome} está administrando a recepção.
      ${hernandes.nome} está na sala de cirurgia. 
      ${curps.nome} está na Ambulancia.`