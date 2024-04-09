let btns = document.querySelectorAll(".btn1");
let resetBtn = document.querySelector(".reset-btn");
let msg = document.querySelector(".msg");
let newbtn = document.querySelector(".newbtn");
let masgContenner = document.querySelector(".masgContenner");

let trunO = true;

const winnerPatterns = [
    [0,3,6],[0,4,8],[0,1,2],
    [1,4,7],[2,5,8],[3,4,5],
    [6,7,8],[2,4,6]
];
const resetGame = () =>{
    trunO = true;
    masgContenner.classList.add("hide");

    enbBox();
    
  
}
btns.forEach((btn1)  =>{
    btn1.addEventListener("click",()=>{
        console.log("buttun are click");
        btn1.innerText = "O";
        if(trunO){
            btn1.innerText = "O";
            trunO = false;
        }
        else{
            btn1.innerText = "X";
            trunO = true;
        }
        btn1.disabled = true;
        cheakWinner();
    });
});

const enbBox = () =>{
    for(let btn1 of btns){
     btn1.disabled = false;
     btn1.innerText = "";
    }
  };

  const disBox = () =>{
    for(let btn1 of btns){
     btn1.disabled = true;
    }
  };

const showWinner = (winner) =>{
    msg.innerText = `Congratulation
     winner is ${winner}` ;
    masgContenner.classList.remove("hide");
    disBox();
};
const  cheakWinner = ()=> {
    for ( let pattern of winnerPatterns){
            let position1 =btns[pattern[0]].innerText
            let position2 =btns[pattern[1]].innerText
            let position3 =btns[pattern[2]].innerText;
            if(position1 !=""&& position2 !=""&& position3 != ""){
                if(position1 === position2 && position2 === position3){
                        console.log("winar",position1);
                        showWinner(position1);
                    }
            }
    }
};
  newbtn.addEventListener("click",resetGame);
  resetBtn.addEventListener("click",resetGame); 