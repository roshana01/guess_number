//?Varibale

const checkBtn = document.querySelector('.check');
const inputCheck = document.querySelector('.input_check');
const boxconsole = document.querySelector('.box-Log');
const scores = document.querySelector('.box-Log');
const HighScores = document.querySelector('.box-Log');
//?functions

let score = 20;
let HighScore = 0;
let guess = Math.floor((Math.random() * 20) + 1);
console.log(guess); //number random 1 and 20

const checkBtnHandler = (e) => {

  e.preventDefault()
  
  if (guess === +inputCheck.value) {
    console.log('you fantastic🤩');
    boxconsole.innerHTML = ''
    boxconsole.classList.add('style')
    const html = `
    <span style =" " class="animate-bounce font-semibold">You Guessd Correct Number${inputCheck.value}✅🤖</span>`
    boxconsole.insertAdjacentHTML('beforeend', html);
    checkBtn.disabled = true

  } else if (guess <= +inputCheck.value) {
    const html = `
    <h1>📈You guess of ${inputCheck.value} is <span class="font-bold">too high!</span></h1>`
    boxconsole.insertAdjacentHTML('beforeend', html)
  } else {
    const html = `
    <h1>📉 You guess of ${inputCheck.value} is <span class="font-bold">too low!</span></h1>`
    boxconsole.insertAdjacentHTML('beforeend', html);
  }
}



//?event
checkBtn.addEventListener('click', checkBtnHandler);




