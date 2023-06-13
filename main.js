const form = document.getElementById('form-compara');

    form.addEventListener('submit', function (e) {
    e.preventDefault();
})

    document.addEventListener("DOMContentLoaded", function() {
        var campoA = document.getElementById("Campo-A");
        var campoB = document.getElementById("Campo-B");

        const mensagemSucesso = `O campo B é maior que o Campo A`
        const mensagemErro = `O campo B não é maior que o Campo A`
        const mensagemIguais = `Os valores Não podem ser iguais`
        
        document.getElementById("btn-compara").addEventListener("click", function() {
        if (campoB.value > campoA.value) {
            mensagemSucesso.innerHTML = mensagemSucesso;
            document.querySelector('.success-message').style.display = 'block';
            document.querySelector('.error-message').style.display = 'none';

            campoB.value = '';
            campoA.value = '';

        } 
        else if (campoB.value == campoA.value) {
            mensagemIguais.innerHTML = mensagemIguais;
            document.querySelector('.equal-message').style.display = 'block';
            document.querySelector('.error-message').style.display = 'none';
            document.querySelector('.success-message').style.display = 'none';
        }

        else {
            mensagemErro.innerHTML = mensagemErro;
            document.querySelector('.error-message').style.display = 'block';
            document.querySelector('.success-message').style.display = 'none';
        }

        });
    });

    