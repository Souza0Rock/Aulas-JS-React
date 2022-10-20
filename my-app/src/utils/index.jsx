export  const Instrumentos = (instrumentoDigitado) => {
    if (instrumentoDigitado === 'Guitarra') {
        console.log('tem cordas')
    }
    else if (instrumentoDigitado === 'Bateria') {
        console.log('tem pedal')
    }
    else if (instrumentoDigitado === 'Microfone') {
        console.log('tem fios')
    }
    else {
        console.log('não existe esse instrumento')
    }
}

export const PaisesFabricantesCarro = (paisDigitado) => {
    switch(paisDigitado){
        case "Japão": console.log('Toyota, Nissan e Honda');  break;
        case "França": console.log('Renault, Pegeout e Citroen');   break;
        case "Estados Unidos":  console.log('Chevrolet, Dodge e Cadillac');   break;
        default:
            console.log('Não foi encontrado fabricantes nessa nacionalidade')
    }
}
