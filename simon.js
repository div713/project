let game = [];
let seq= [];

let col=["pink","yellow","blue","green"];

let started=false;
let level=0;
let body=document.querySelector("body");
let highestScore=0;

let h2= document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started")
        started=true;

        levelUp();
    }
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)
};

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250)
};

function levelUp(){
    level++;
    h2.innerText = `Level ${level}`;

    //random button choose
    let idx= Math.floor(Math.random()*4);
    let randClass= document.querySelector(`.${col[idx]}`);

    //console.log(col[idx]);
    game.push(col[idx]);
    btnflash(randClass);

}
function restart(){
    level=0;
    started=false;
    score=0;
    game=[];
    seq=[];
}
function checkAns(){
    if(seq[seq.length-1] != game[seq.length-1]){
        if(level>highestScore){
            highestScore= level;
        }
        h2.innerText= `Game Over! \n Your current score is ${level} \nYour highest score is ${highestScore} \n Press any key to play again`;
        body.classList.add("redbg");
        setTimeout(function(){
            body.classList.remove("redbg");
        },500);
        restart();
    }
    else if(seq.length === game.length){
        setTimeout(levelUp,1000);
        while(seq.length > 0){
            seq.pop();
        }
    }
    
}
function btnpress(){
    
        
        let btn= this;

        let userCol= btn.getAttribute("id");
        seq.push(userCol);
        console.log(`User: ${seq}`);
        userflash(btn);
        
        checkAns();
    
}

let allBtns= document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click",btnpress);
}