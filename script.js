let aiscore=document.getElementById('ai-score');
let playerscore=document.getElementById('player-score');
let rockP=document.getElementById('p-rock');
let paperP=document.getElementById('p-paper');
let scissorP=document.getElementById('p-scissor');
let rockA=document.getElementById('a-rock');
let paperA=document.getElementById('a-paper');
let scissorA=document.getElementById('a-scissor');
let background=document.querySelector('#main');
let rounds=document.getElementById('roundspan');
let playerimages=document.getElementById('player-images');


let win_ai=0;
let win_player=0;
let round=0;
let choice=-1;



let rock=()=>{
    choice=0
    rockP.classList.add('show');
    playerimages.classList.add('pointerevents');
    setTimeout(() => {
        rockP.classList.remove('show')
        playerimages.classList.remove('pointerevents');
    }, 2000);
    
    game();
    
}
let paper=()=>{
    choice=1
    game();
    paperP.classList.add('show')
    playerimages.classList.add('pointerevents');
    setTimeout(() => {
        paperP.classList.remove('show')
        playerimages.classList.remove('pointerevents');
    }, 2000);
}
let scissor=()=>{
    choice=2
    game();
    scissorP.classList.add('show')
    playerimages.classList.add('pointerevents');
    setTimeout(() => {
        scissorP.classList.remove('show')
        playerimages.classList.remove('pointerevents');
    }, 2000);
}

function game(){
    
    let Aichoice=Math.floor(Math.random()*3);
    console.log(Aichoice)

if(Aichoice==0)
{
    rockA.classList.add('ashow')
    setTimeout(() => {
        rockA.classList.remove('ashow');
    }, 2000);
}
else if(Aichoice==1)
{
    paperA.classList.add('ashow')
    setTimeout(() => {
        paperA.classList.remove('ashow');
    }, 2000);
}
else if(Aichoice==2)
{
    scissorA.classList.add('ashow')
    setTimeout(() => {
        scissorA.classList.remove('ashow');
    }, 2000);
}

if((choice==0)&&(Aichoice==0))
{
    tie();
}
else if((choice==0)&&(Aichoice==1))
{
    AiWin();
}
else if((choice==0)&&(Aichoice==2))
{
    PlayerWin();
}
else if((choice==1)&&(Aichoice==0))
{
    PlayerWin();
}
else if((choice==1)&&(Aichoice==1))
{
    tie();
}
else if((choice==1)&&(Aichoice==2))
{
    AiWin();
}
else if((choice==2)&&(Aichoice==0))
{
    AiWin();
}
else if((choice==2)&&(Aichoice==1))
{
    PlayerWin();
}
else if((choice==2)&&(Aichoice==2))
{
    tie();
}

function tie(){
    background.classList.add('yellow');
    setTimeout(() => {
        background.classList.remove('yellow');
    }, 2000);
    round++;
    rounds.innerHTML=round;
}
function PlayerWin(){
    background.classList.add('green');
    win_player++;
    playerscore.innerHTML=win_player;
    setTimeout(() => {
        background.classList.remove('green');
    }, 2000);
    round++;
    rounds.innerHTML=round;
    
}
function AiWin(){
    background.classList.add('red');
    win_ai++;
    aiscore.innerHTML=win_ai;
    setTimeout(() => {
        background.classList.remove('red');
    }, 2000);
    round++;
    rounds.innerHTML=round;
}

setTimeout(() => {
    if(win_ai==3)
{
    alert(" AI has Won the Match ,Refresh the page to Play Again");
    
}
else if(win_player==3)
{
    alert(" Congratulations You Won the Match ,Refresh the page to Play Again");
    
}
}, 800);
}