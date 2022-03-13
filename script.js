
let count = 1 

init()

function init() {
  let dadosCerveja1 = localStorage.getItem("cerveja1");
  if (dadosCerveja1) {
    dadosCerveja1 = JSON.parse(dadosCerveja1);
    count += 1;
    const numero = document.getElementById("numeroDaCerveja");
    numero.innerHTML = count;
    proximo.classList.add("hidden");
    const btn = document.getElementById("calculate");
    btn.classList.remove("hidden");
  }
  let dadosCerveja2 = localStorage.getItem("cerveja2");
  if (dadosCerveja2) {
    dadosCerveja2 = JSON.parse(dadosCerveja2);
    count += 1;
    const form = document.getElementById("form-dados")
    form.classList.add("hidden")
    const result = document.getElementById("resultado")
    if (dadosCerveja1.total > dadosCerveja2.total) {
      result.innerHTML = dadosCerveja2.nome;
    } else {
      result.innerHTML = dadosCerveja1.nome;
    }
    const div = document.getElementById("final");
    div.classList.remove("hidden");
  }
}

function next() { 
    const nomeCerveja = document.getElementById("name")
    const precoCerveja = document.getElementById("price")
    const qtdml = document.getElementById("qtd")
    const proximo = document.getElementById("proximo")
    const n1 = nomeCerveja.value
    const n2 = Number(precoCerveja.value)
    const n3 = Number(qtdml.value)
    const s =  (n2/n3)
    //next.innerHTML = `Os valor do custo por ML de sua primeira Cerveja é ${s}`
    const obj = JSON.stringify({nome: n1, preco: n2, quantidade: n3, total: s})
     localStorage.setItem("cerveja1", obj)
     count += 1
     proximo.classList.add("hidden")
     const btn = document.getElementById("calculate")
     btn.classList.remove("hidden")
    const numero = document.getElementById("numeroDaCerveja")
    numero.innerHTML = count
    const form = document.getElementById("form-dados")
    form.reset()
}

function calcular() {
    const nomeCerveja = document.getElementById("name")
    const precoCerveja = document.getElementById("price")
    const qtdml = document.getElementById("qtd")
    const proximo = document.getElementById("proximo")
    const n1 = nomeCerveja.value
    const n2 = Number(precoCerveja.value)
    const n3 = Number(qtdml.value)
    const s =  (n2/n3)
    const dadosCerveja2 = ({nome: n1, preco: n2, quantidade: n3, total: s})
    localStorage.setItem("cerveja2", JSON.stringify(dadosCerveja2))
    let dadosCerveja1 = localStorage.getItem("cerveja1")
    dadosCerveja1 = JSON.parse(dadosCerveja1)
    const form = document.getElementById("form-dados")
    form.classList.add("hidden")
    const result = document.getElementById("resultado")
    if(dadosCerveja1.total > dadosCerveja2.total){
        result.innerHTML = dadosCerveja2.nome
    } else { 
        result.innerHTML = dadosCerveja1.nome
    } 
    const div = document.getElementById("final")
    div.classList.remove("hidden")

}

function limpar(){
    localStorage.clear()
    location.reload()
}


