var nome = window.prompt('seu nome:')

function abrirAlerta(numero){
    function clicar(event) {
        const posicao = event.target.value.split(" ")[1]; 
        window.alert(`Você clicou no ${posicao}`);
}
}
