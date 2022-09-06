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
const main = document.createElement('main')
main.classList = "lista container"
main.innerHTML = `
    <h1>Virtual Market</h1>    
    <header class="cabecalho">
        <span>Item</span>
        <span>Valor</span>            
    </header>
    <ul class="productList">    
    </ul>
    <section class="rodape">
    <div class="total">
        <span>Total</span>        
    </div>
    <button class="buttonEnd">Finalizar Compra</button>
    </section>
`
body.append(main)

const productList = document.querySelector('.productList')

for(let i in productsCart) {
    let produtoAtual = productsCart[i]
    let nomeProduto = produtoAtual.name
    let precoProduto = produtoAtual.price
    soma += precoProduto
    precoProduto = String(precoProduto)    
    const li = document.createElement('li')
    li.classList = "productDetails"
    li.innerHTML = `
        <span>${nomeProduto}</span>
        <span>${precoProduto.replace(".", ",")}
    `
    productList.appendChild(li)
    
}

const total = document.querySelector('.total')
const spanTotal = document.createElement('span')
soma = String(soma)
spanTotal.innerHTML = `R$ ${soma.replace(".", ",")}`
total.appendChild(spanTotal)