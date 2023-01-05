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
}

const win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]