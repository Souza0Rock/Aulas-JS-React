// Tipos de variáveis

const boolean = true
const string = "abcd123"
const number = 10
const float = 10.1
const sem_resultado = undefined
const nula = null

// Estruturas comuns que englobam essas variáveis

const array = [] // lista
const objeto = {} // objeto que pode conter uma lista (uma lista também pode conter um objeto)

const celulas = [
    {
        lider: "fulano",
        numero_celula: 11,
        mais_de_10: true,
        membros: ["abreu"]
    },
    {
        lider: "fulano 2",
        numero_de_celula: 11,
        mais_de_10: false,
        membros: ["joao", "maria", "zezinho"]
    }
]

// Objeto celulas que contém uma lista, e dentro dessa lista temos dados, sendo um deles um objeto denominado membros.


// Exercício

// 1 - lista, 3 objetos, 7- dados, 3 string, 2 booleano, 1 number, 1 objeto (2 dados, string)

const dados_pessoais = [
    {
        nome: "fulano",
        idade: 18,
        genero: "masculino",
        estado_civil: "solteiro",
        possui_filhos: false,
        empregado: false,
        filiacao: {
            mae: "patricia",
            pai: "fernando"
        }
    },
    {
        nome: "beltrano",
        idade: 22,
        genero: "masculino",
        estado_civil: "casado",
        possui_filhos: true,
        empregado: true,
        filiacao: {
            mae: "tereza",
            pai: "ademir"
        }
    },    {
        nome: "joana",
        idade: 20,
        genero: "feminino",
        estado_civil: "solteira",
        possui_filhos: false,
        empregado: true,
        filiacao: {
            mae: "maria",
            pai: "joao"
        }
    }
]