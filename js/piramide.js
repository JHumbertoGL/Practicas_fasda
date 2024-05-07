function crearPiramide(altura) {
    for (let i = 0; i < altura; i++) {
        const espacios = ' '.repeat(altura - i - 1);
        const asteriscos = '*'.repeat(2 * i + 1);
        const nivel = espacios + asteriscos;
        console.log(nivel);
    }    
}

let altura = 5;
crearPiramide(altura);




