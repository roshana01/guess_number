//?Varibale
const checkBtn = document.querySelector('.check');
const resetBtn = document.querySelector('.reset')
const inputCheck = document.querySelector('.input_check');
const boxconsole = document.querySelector('.box-Log');
const scores = document.querySelector('.score');
const HighScores = document.querySelector('.HighScore');
const errorMessage = document.querySelector('#error-message');
//?Varible default
let score = 20;
console.log(score);
let HighScore = 0;
//number random 1 and 20
let guess = Math.floor((Math.random() * 20) + 1);
//?functions...

const checkBtnHandler = (e) => {
  
  errorMessage.style.display = 'none';
  e.preventDefault();
  if (inputCheck.value === '') {
    //* Error handler code
    errorMessage.style.display = 'block';

  } else {
    const scoreValue = scores.textContent = (score--) - 1
    errorMessage.style.display = 'none'
    if (guess === +inputCheck.value) {
      boxconsole.innerHTML = '';
      console.log('you fantastic🤩');
      const html = `
      <span class="text-lg lg:text-2xl animate-bounce font-semibold">You Guessd Correct Number${inputCheck.value}✅🤖</span>`
      boxconsole.insertAdjacentHTML('beforeend', html);
      boxconsole.classList.add('style');
      HighScores.textContent = scoreValue
      checkBtn.disabled = true

    } else if (guess <= +inputCheck.value) {
      const html = `
      <h1>📈You guess of ${inputCheck.value} is <span class="font-bold">too high!</span></h1>`;
      boxconsole.insertAdjacentHTML('beforeend', html);
      boxconsole.classList.remove('style');
    } else {
      const html = `
      <h1>📉 You guess of ${inputCheck.value} is <span class="font-bold">too low!</span></h1>`;
      boxconsole.insertAdjacentHTML('beforeend', html);
      boxconsole.classList.remove('style');

    }
  }
}

const resetBtnHandler = () => {
  guess = Math.floor((Math.random() * 20) + 1);
  score = 20;
  inputCheck.value = '';
  boxconsole.innerHTML = '';
  scores.textContent = score;
  console.log(score);
  HighScores.textContent = 0;
  checkBtn.disabled = false;
}

//?event

checkBtn.addEventListener('click', checkBtnHandler);
resetBtn.addEventListener('click', resetBtnHandler);