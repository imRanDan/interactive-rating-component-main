const display = document.getElementsByClassName('rating-display')

document.getElementsByClassName('ratings').addEventListener('click', ({target}) => {
   console.log(target.innertext)
   display.innerHTML = target.innerText;
})