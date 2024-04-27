const contadores = document.querySelectorAll('.contador');

contadores.forEach(incrementingContador => {
    incrementingContador.innerText = '0';

    const carregandoContador = () => {
        const target = +incrementingContador.getAttribute('data-target');
        const cont = +incrementingContador.innerText;

        const incremento = target / 200;

        if(cont < target) {
            incrementingContador.innerText = `${Math.ceil(cont + incremento)}`
            setTimeout(carregandoContador, 1);
        } else {
            incrementingContador.innerText = target;
        }
    }

    carregandoContador();
});