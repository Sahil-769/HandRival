let elements = ["rock", "paper", "scissors"];
let msg=document.querySelector(".msg");
let playerCount = document.querySelector(".your-count");
let yourWin = parseInt(playerCount.innerText);
let ComputerCount = document.querySelector(".comp-count");
let CompWin = parseInt(ComputerCount.innerText);
let result_container = document.querySelector(".result-container");
const showMsg = (e,color) => {
    msg.innerHTML = e;
    result_container.style.backgroundColor=color;
}
const increaseYou = () => {
    yourWin += 1;
    playerCount.innerHTML = yourWin;
}
const increaseComp = () => {
    CompWin += 1;
    ComputerCount.innerHTML = CompWin;
}
const generateNumber=()=>{
    return Math.floor(Math.random() * 3);
}
const checkWinner = (e) => {
    ComputerNumber=generateNumber();
    // for rock
    console.log(elements[ComputerNumber]);
    if (e == 0) {
        if (ComputerNumber == e) {
            showMsg("You are Tie because both are Rock ","blue");
            
        }
        else if (ComputerNumber == 2) {
            showMsg("You Win!! Rock breaks the Scissors","green");
            increaseYou();
        }
        else if (ComputerNumber == 1) {
            showMsg("Computer Won!! Paper is Catches the Rock","red");
            increaseComp();
        }
    }
    // for paper
    else if (e == 1) {
        if (ComputerNumber == e) {
            showMsg("You are Tie because both are Paper","blue");
        }
        else if (ComputerNumber == 0) {
            showMsg("You Win!! Paper is Catches the Rock","green");
            increaseYou();
        }
        else if (ComputerNumber == 2) {
            showMsg("Computer Won!! Scissor Cut the Paper into Smaller Pieces","red");
            increaseComp();
        }
    }
    // for Scissor
    else if (e == 2) {
        if (ComputerNumber == e) {
            showMsg("You are Tie because both are Scissor","blue");
        }
        else if (ComputerNumber == 1) {
            showMsg("You Win!! Scissor Cut the Paper into Smaller Pieces","green");
            increaseYou();
        }
        else if (ComputerNumber == 0) {
            showMsg("Computer Won!! Rock Crushes the Scissor","red");
            increaseComp();
        }
    }
}
const rock = () => {
    checkWinner(0);
}
const paper = () => {
    checkWinner(1)
}
const scissors = () => {
    checkWinner(2)
}