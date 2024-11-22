const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const elementos = document.querySelectorAll('.hidden');

elementos.forEach((elemento) => myObserver.observe(elemento));

let trilho = document.getElementById('trilho')
let body = document.querySelector('body')
let section = document.querySelector('section')


trilho.addEventListener('click', ()=>{
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')
    section.classList.toggle('dark')
    


})

var btn = document.querySelector(".github-container");

btn.onmousemove = function(e) {
    var x = e.pageX - btn.offsetLeft;
    var y = e.pageY - btn.offsetTop;

    btn.style.setProperty('--eixoX', x + 'px');
    btn.style.setProperty('--eixoY', y + 'px');
};


// Seleciona os elementos do rodapé
var developer = document.getElementById('developer');
var contacts = document.getElementById('contacts');

// Adiciona evento de clique ao elemento "Desenvolvedor"
developer.addEventListener('click', function() {
    alert('Obrigado por visitar! Entre em contato se precisar de algo.');
});

// Adiciona evento de clique ao elemento "CONTATOS"
contacts.addEventListener('click', function() {
    var userContact = prompt('Por favor, insira seu contato para que possamos retornar:');
    if (userContact) {
        alert('Obrigado! Entraremos em contato em breve.');
    } else {
        alert('Nenhum contato inserido.');
    }
});
