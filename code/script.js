var counter_color = 0;
var divs = document.getElementsByClassName('inner');
for (i = 0; i < 9; i++) {
    divs[i].style.backgroundColor = 'darkblue';
}

function colorir(x) {
    if (divs[x].style.backgroundColor == 'darkblue') {
        if (counter_color % 2 == 0) {
            divs[x].style.backgroundColor = 'green';
            counter_color++;
        }
        else {
            divs[x].style.backgroundColor = 'red';
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
    for(i=0;i<9;i++){
        var counter_win = 0;
        for(j=0;j<3;j++){
            divs[win[i][j]].style.backgroundColor == 'red' && counter_win++ 
            if(counter_win == 3){
                document.querySelector('h1').innerText = 'Vencedor : Vermelho!'
            }
        }
    }
    for(i=0;i<9;i++){
        var counter_win = 0;
        for(j=0;j<3;j++){
            divs[win[i][j]].style.backgroundColor == 'green' && counter_win++ 
            if(counter_win == 3){
                document.querySelector('h1').innerText = 'Vencedor : Verde!'
            }
        }
    }
}