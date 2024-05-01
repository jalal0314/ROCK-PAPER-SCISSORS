let userScore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#computer-score");
const gencomputerchoice=()=>{
    const options=["rock","papper","scissors"];
    const randidx=Math.floor(Math.random() * 3);
    return options[randidx];
}

 const drawgame=()=>{
    console.log("draw is game");
    msg.innerText="DRAW PLAY AGAIN !";
 };

 const showwinner=(userwin)=>{
    if(userwin){
        userScore++;
        userscorepara.innerText=userScore;
        msg.innerText="YOU WIN";
        msg.style.backgroundColor="green";
    }else{
        msg.innerText="YOU LOSE";
        msg.style.backgroundColor="red";
        compscore++;
        compscorepara.innerText=compscore;
    }
 };


const playgame=(userchoice)=>{
    //generrate computer choices
    const compchoice=gencomputerchoice();

    //draw game
    if(userchoice===compchoice){
        drawgame();
    }else{
        let userwin=true;
        if(userchoice==="rock"){
            //scissors,papper
          userwin=  compchoice==="papper" ? false:true;
        }else if(userchoice==="papper"){
           userwin= compchoice==="scissors" ? false:true;
        }else{
            //rock,papper
           userwin= compchoice==="rock"? false: true;
        }
       showwinner(userwin); 
    }

};



choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});