const listadores = [];

const formulario = document.getElementById('Formulario');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const idade = document.getElementById('idade').value;
    const peso = document.getElementById('peso').value;
    const tiposanguineo = document.getElementById('tipo').value;
    const telefone = document.getElementById('telefone').value;
    const cidade = document.getElementById('cidade').value;
    const estado = document.getElementById('estado').value;

    const partesnome = nome.trim().split(" ");

    if (partesnome.length < 2 || partesnome[1] === "") {
        alert("Digite seu nome completo.")
    }
})