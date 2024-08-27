class User {
    constructor(nome, age, role) {
        this.nome = nome,
            this.age = age,
            this.role = role

    }

    codar() {
        return `${this.nome} sabe codar`
    }

    treinar() {
        return `${this.nome} sabe treinar`
    }

    cantar() {
        return `${this.nome} sabe cantar`
    }

    viajar() {
        return `${this.nome} sabe treinar`
    }

}

const pessoa1 = new User('Heloise', 22, 'engenheira da computação')
console.log(pessoa1)
const pessoa2 = new User('Simara', 35, 'engenheira de software')
console.log(pessoa2)
const pessoa3 = new User('Joicy', 21, 'engenheira da computação')
console.log(pessoa3)
