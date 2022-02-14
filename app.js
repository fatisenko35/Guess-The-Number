window.onload = () =>{
const guessNumber = document.querySelector(".number");
const inputArea = document.getElementsByClassName("input")[0];
const checkButton = document.querySelector(".submit");
const attempNumber = document.querySelector(".attemp");
const winner = document.querySelector(".winner");
let minNum = 1;
let maxNum = 100;
let c = 8;



    console.log("hi");
    const randomNumber = Math.floor(Math.random() * 100) + 1;
            checkButton.addEventListener("click",()=>{
            console.log(randomNumber);
            if (c == 0) {
                winner.innerHTML = "Game Over! Try again...";
                winner.style.color = "red";
                checkButton.disabled = true;
                inputArea.disabled = true;

            }else if (+inputArea.value == randomNumber) {
               winner.innerHTML = "Congrats!";
                checkButton.disabled = true;
                inputArea.disabled = true;

            }else if (+inputArea.value > randomNumber){
                maxNum = +inputArea.value;
                guessNumber.innerHTML = `(${minNum} - ${maxNum})`;
                c--;
                attempNumber.innerHTML = c;
            }else{
                minNum = +inputArea.value;
                guessNumber.innerHTML = `(${minNum} - ${maxNum})`;
                c--;
                attempNumber.innerHTML = c;
            };
        });

}