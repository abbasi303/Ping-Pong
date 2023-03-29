const p1Button = document.querySelector('#p1');
const p2Button = document.querySelector('#p2');
const p1Disp = document.querySelector('#p1score');
const p2Disp= document.querySelector('#p2score');
const resetButton = document.querySelector('#reset');

const winningscoreSelect = document.querySelector('#playto');




let p1Scores = 0;
let p2Scores = 0;
let winningscore= 3;
let isGmaeover = false;

p1Button.addEventListener('click',function () {
    if(!isGmaeover){
        p1Scores += 1;
    
    if (p1Scores===winningscore){
        isGmaeover= true;
        p1Disp.classList.add('winner');
        p2Disp.classList.add('loser');

    }
    p1Disp.textContent =p1Scores;
    }
})
p2Button.addEventListener('click',function () {
    if(!isGmaeover){
        p2Scores += 1;
    
    if (p2Scores===winningscore){
        isGmaeover= true;
        p1Disp.classList.add('loser');
        p2Disp.classList.add('winner');
    }
    p2Disp.textContent =p2Scores;
    }
})

winningscoreSelect.addEventListener('change',function(){
    winningscore =parseInt(this.value);
    reset();
})


resetButton.addEventListener('click',reset)
function reset(){
    isGmaeover=false;
    p1Scores = 0;
    p2Scores = 0;
    p1Disp.textContent = 0;
    p2Disp.textContent = 0;

}