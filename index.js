const productsCart = [
    {
        id: 1,
        name: "Uva Crimson",
        price: 44.99
    },
    {
        id: 2,
        name: "Vinho Canção",
        price: 17.98
    },
    {
        id: 3,
        name: "Água de coco",
        price: 8.99
    },
    {
        id: 4,
        name: "mamão",
        price: 9.98
    },
    {
        id: 5,
        name: "Água Tônica",
        price: 17.98
    }
]

let soma = 0
const body = document.querySelector('body')
//main
const main = document.createElement('main')
main.classList = "lista container"
//h1
const h1 = document.createElement('h1')
h1.innerText = 'Virtual Market'
main.appendChild(h1)
//cabecalho
const header = document.createElement('header')
header.classList = "cabecalho"
const itemCabecalho = document.createElement('span')
const valorCabecalho = document.createElement('span')
itemCabecalho.innerText = 'Item'
valorCabecalho.innerText = 'Valor'
header.append(itemCabecalho, valorCabecalho)
main.appendChild(header)

//UL
const ul = document.createElement('ul')
ul.classList = 'productList'
main.append(ul)
inserirItens(productsCart)

//section
const section = document.createElement('section')
section.classList = 'rodape'

const divSection = document.createElement('div')
divSection.classList = 'total'

const spanTotal = document.createElement('span')
const spanValorTotal = document.createElement('span')
spanTotal.innerText = 'Total'
spanValorTotal.innerText = somarValores(productsCart)

const button = document.createElement('button')
button.classList = 'buttonEnd'
button.innerText = 'Finalizar Compra'

divSection.append(spanTotal, spanValorTotal)
section.append(divSection, button)

main.append(section)
body.append(main)


function inserirItens(arrObj) {
        
    for(let i in arrObj) {
        let produtoAtual = productsCart[i]
        let nomeProduto = produtoAtual.name
        let precoProduto = produtoAtual.price
                
        const li = document.createElement('li')
        li.classList = "productDetails"
       
        const spanNome = document.createElement('span')
        const spanPreco = document.createElement('span')
        spanNome.innerText = nomeProduto
        spanPreco.innerText = convertePontoVirgula(precoProduto)               

        li.append(spanNome, spanPreco)
        ul.append(li)
    }    
}

function convertePontoVirgula(valor) {
    let numeroString = String(valor)
    return numeroString.replace('.',',')
}

function somarValores(arr) {
    for(let i in arr) {
        let precoAtual = arr[i].price
        soma += precoAtual
    }
    return convertePontoVirgula(soma)

}