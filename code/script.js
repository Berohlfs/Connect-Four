var counter_color = 0;
const divs = document.getElementsByClassName('inner');
const red = 'red'
const green = 'green'

for (i = 0; i < 9; i++) {
    divs[i].style.backgroundColor = 'darkblue';
}

function colorir(x) {
    if (divs[x].style.backgroundColor == 'darkblue') {
        if (counter_color % 2 == 0) {
            divs[x].style.backgroundColor = green;
            counter_color++;
        }
        else {
            divs[x].style.backgroundColor = red;
            counter_color++;
        }
    }
    winsituation();
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

function winsituation(){
    var counter_win;
    var turn;
    for(i=0;i<2;i++){
        i == 0 ? turn = green : turn = red;
        for(j=0;j<9;j++){
            if(counter_win == 3){
                break;
            }
            counter_win = 0;
            for(k=0;k<3;k++){
                divs[win[j][k]].style.backgroundColor == turn && counter_win++ 
                if(counter_win == 3){
                    document.querySelector('h1').innerText = `Vencedor : ${turn}!`
                    break;
                }
            }
        }
    }
}