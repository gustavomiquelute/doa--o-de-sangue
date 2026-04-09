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

    if (partesnome.length < 2) {
        alert("Digite seu nome completo.");
        return;
    }
    
    if (Number(idade) < 16) {
        alert("Idade minima 16 anos.");
        return;
    }

    if (Number(peso) < 50) {
        alert("Peso minimo 50kg.");
        return;
    }

    const novodoador = {
        nome: nome,
        email: email,
        idade: idade,
        peso: peso,
        tiposanguineo: tiposanguineo,
        telefone: telefone,
        cidade: cidade,
        estado: estado
    };

    listadores.push(novodoador);

    console.log("doador adicionado", novodoador);
    console.log("lista completa atualizada:", listadores);


    localStorage.setItem("doadorlogado", JSON.stringify(novodoador));
    window.location.href = "sucesso.html";
    formulario.reset();
});