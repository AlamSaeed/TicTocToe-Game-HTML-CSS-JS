let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let new1 = document.querySelector(".hide");
let msg = document.querySelector("#msg");
let newGame = document.querySelector("#new-btn")
let turnO = true;
let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const checkWin = () =>{
    for(let pattern of winPatterns){
        let firstP = boxes[pattern[0]].innerText;
        let secondP = boxes[pattern[1]].innerText;
        let thirdP = boxes[pattern[2]].innerText;
        if(firstP != "" && secondP!= "" && thirdP != ""){
            if(firstP == secondP && secondP == thirdP){
                disableBoxes();
                msg.innerText = `congratulation winner is ${firstP}`
                new1.classList.remove("hide");

            }
       }
    }
};
boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        if(turnO == true){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWin();
    });
});



let a = () =>{
    turnO = true;
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        new1.classList.add("hide");
    }
}
resetBtn.addEventListener("click",a);
newGame.addEventListener("click",a);




  