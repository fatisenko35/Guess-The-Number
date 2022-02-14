window.onload = () =>{
const guessNumber = document.querySelector(".number");
const inputArea = document.getElementsByClassName("input")[0];
const checkButton = document.querySelector(".submit");
const attempNumber = document.querySelector(".attemp");
const winner = document.querySelector(".winner");
const restart = document.querySelector(".restart");
let minNum = 1;
let maxNum = 100;
let c = 8;

    const randomNumber = Math.floor(Math.random() * 100) + 1;
            checkButton.addEventListener("click",()=>{
            if (c == 0) {
                winner.innerHTML = "Game Over! Try again";
                winner.style.color = "red";
                checkButton.disabled = true;
                inputArea.disabled = true;

            }else if (+inputArea.value == randomNumber) {
               winner.innerHTML = "Congrats! You Find The Number";
                checkButton.disabled = true;
                inputArea.disabled = true;

            }else if (+inputArea.value > randomNumber && +inputArea.value < maxNum){
                c--;
                attempNumber.innerHTML = c;
                maxNum = +inputArea.value;
                guessNumber.innerHTML = `(${minNum} - ${maxNum})`;
                
            }else if (+inputArea.value < randomNumber && +inputArea.value > minNum){
                c--;
                attempNumber.innerHTML = c;
                minNum = +inputArea.value;
                guessNumber.innerHTML = `(${minNum} - ${maxNum})`;
                
            };
        });
        restart.addEventListener("click", ()=>{
            window.location.reload(false);
        });

}

