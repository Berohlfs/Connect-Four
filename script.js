var toogle_color = true;
var pode_colorir = true;
var counter_draw;
const divs = document.getElementsByClassName('inner');
const div = document.getElementById('pai');
const red = 'red'
const green = 'green'
const win_situations = [
    [0,1,2,3],
    [1,2,3,4],
    [5,6,7,8],
    [6,7,8,9],
    [10,11,12,13],
    [11,12,13,14],
    [15,16,17,18],
    [16,17,18,19],
    [20,21,22,23],
    [21,22,23,24],
    [0,5,10,15],
    [5,10,15,20],
    [1,6,11,16],
    [6,11,16,21],
    [2,7,12,17],
    [7,12,17,22],
    [3,8,13,18],
    [8,13,18,23],
    [4,9,14,19],
    [9,14,19,24],
    [5,11,17,23],
    [0,6,12,18],
    [6,12,18,24],
    [1,7,13,19],
    [3,7,11,15],
    [4,8,12,16],
    [8,12,16,20],
    [9,13,17,21]
]

function fill(){
    div.innerHTML = ``
    for (i = 0; i < 25; i++) {
        div.innerHTML += `<div class="inner" onclick="colorir(${i})"></div>`
        divs[i].style.backgroundColor = 'darkblue';
    }
    document.querySelector('h2').innerText = `Winner :`
    pode_colorir = true;
    counter_draw = 0;
}

function colorir(x) {
    if (pode_colorir && divs[x].style.backgroundColor == 'darkblue') {
        if (toogle_color) {
            divs[x].style.backgroundColor = green;
            toogle_color=false;
        }
        else {
            divs[x].style.backgroundColor = red;
            toogle_color=true;
        }
        isWin();
        counter_draw++
    }
    if(counter_draw == divs.length){
        document.querySelector('h2').innerText = `Draw!`
    }
}

function isWin(){
    let counter_win;
    let turn;
    for(i=0;i<2;i++){
        i == 0 ? turn = green : turn = red;
        for(j=0; j<win_situations.length; j++){
            if(counter_win == win_situations[0].length){
                break;
            }
            counter_win = 0;
            for(k=0; k < win_situations[j].length; k++){
                divs[win_situations[j][k]].style.backgroundColor == turn && counter_win++ 
                if(counter_win == win_situations[j].length){
                    document.querySelector('h2').innerText = `Winner : ${turn}!`
                    pode_colorir = false;
                }
            }
        }
    }
}