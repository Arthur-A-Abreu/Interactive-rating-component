
const botoes = document.querySelectorAll(".classification button")
const botaoselecionado = document.getElementById('escolha');

botoes.forEach(function(botao) {
    botao.addEventListener("click", function() {
        
        botoes.forEach(function(b) {
            b.classList.remove("selecionado");
        })

        botao.classList.add("selecionado")

        const escolha = botao.textContent;
        botaoselecionado.textContent = escolha;

    });
    
});

const submite = document.getElementById("submit");

const pagina1 = document.getElementById("pagina1");

const pagina2 = document.getElementById("pagina2");

submite.addEventListener("click", function() {
    const isActive = [...botoes].some(button => button.classList.contains('selecionado'));
    
    if (isActive) {
        if (pagina1.classList.contains("selected")) {
        
        pagina1.classList.remove("selected");

        pagina2.classList.add("selected");

        }
    } else {
        alert("Please select a rating before submitting.")
    }
});




