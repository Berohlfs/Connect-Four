var counter = 0
var divs = document.getElementsByClassName('inner');
for (i = 0; i < 9; i++) {
    divs[i].style.backgroundColor = 'darkblue';
}

function colorir(x) {
    if (divs[x].style.backgroundColor == 'darkblue') {
        if (counter % 2 == 0) {
            divs[x].style.backgroundColor = 'green'
            counter++
        }
        else {
            divs[x].style.backgroundColor = 'red'
            counter++
        }
    }
    // ====================
    if (divs[0].style.backgroundColor == 'red' && divs[1].style.backgroundColor == 'red' && divs[2].style.backgroundColor == 'red') {
        document.querySelector('h1').innerText = `Vencedor: Vermelho!`
    }
    if (divs[0].style.backgroundColor == 'green' && divs[1].style.backgroundColor == 'green' && divs[2].style.backgroundColor == 'green') {
        document.querySelector('h1').innerText = `Vencedor: Verde!`
    }
    // ====================
    if (divs[3].style.backgroundColor == 'red' && divs[4].style.backgroundColor == 'red' && divs[5].style.backgroundColor == 'red') {
        document.querySelector('h1').innerText = `Vencedor: Vermelho!`
    }
    if (divs[3].style.backgroundColor == 'green' && divs[4].style.backgroundColor == 'green' && divs[5].style.backgroundColor == 'green') {
        document.querySelector('h1').innerText = `Vencedor: Verde!`
    }
    // ====================
    if (divs[6].style.backgroundColor == 'red' && divs[7].style.backgroundColor == 'red' && divs[8].style.backgroundColor == 'red') {
        document.querySelector('h1').innerText = `Vencedor: Vermelho!`
    }
    if (divs[6].style.backgroundColor == 'green' && divs[7].style.backgroundColor == 'green' && divs[8].style.backgroundColor == 'green') {
        document.querySelector('h1').innerText = `Vencedor: Verde!`
    }
    // ====================
    if (divs[0].style.backgroundColor == 'red' && divs[3].style.backgroundColor == 'red' && divs[6].style.backgroundColor == 'red') {
        document.querySelector('h1').innerText = `Vencedor: Vermelho!`
    }
    if (divs[0].style.backgroundColor == 'green' && divs[3].style.backgroundColor == 'green' && divs[6].style.backgroundColor == 'green') {
        document.querySelector('h1').innerText = `Vencedor: Verde!`
    }
    // ====================
    if (divs[1].style.backgroundColor == 'red' && divs[4].style.backgroundColor == 'red' && divs[7].style.backgroundColor == 'red') {
        document.querySelector('h1').innerText = `Vencedor: Vermelho!`
    }
    if (divs[1].style.backgroundColor == 'green' && divs[4].style.backgroundColor == 'green' && divs[7].style.backgroundColor == 'green') {
        document.querySelector('h1').innerText = `Vencedor: Verde!`
    }
    // ====================
    if (divs[2].style.backgroundColor == 'red' && divs[5].style.backgroundColor == 'red' && divs[8].style.backgroundColor == 'red') {
        document.querySelector('h1').innerText = `Vencedor: Vermelho!`
    }
    if (divs[2].style.backgroundColor == 'green' && divs[5].style.backgroundColor == 'green' && divs[8].style.backgroundColor == 'green') {
        document.querySelector('h1').innerText = `Vencedor: Verde!`
    }
    // ====================
    if (divs[0].style.backgroundColor == 'red' && divs[4].style.backgroundColor == 'red' && divs[8].style.backgroundColor == 'red') {
        document.querySelector('h1').innerText = `Vencedor: Vermelho!`
    }
    if (divs[0].style.backgroundColor == 'green' && divs[4].style.backgroundColor == 'green' && divs[8].style.backgroundColor == 'green') {
        document.querySelector('h1').innerText = `Vencedor: Verde!`
    }
    // ====================
    if (divs[2].style.backgroundColor == 'red' && divs[4].style.backgroundColor == 'red' && divs[6].style.backgroundColor == 'red') {
        document.querySelector('h1').innerText = `Vencedor: Vermelho!`
    }
    if (divs[2].style.backgroundColor == 'green' && divs[4].style.backgroundColor == 'green' && divs[6].style.backgroundColor == 'green') {
        document.querySelector('h1').innerText = `Vencedor: Verde!`
    }
}