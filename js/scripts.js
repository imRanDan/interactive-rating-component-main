const submitBtn = document.getElementById("submit");
const mainContainer = document.querySelector(".container")
const thankYouContainer = document.querySelector(".thank-you-container")
const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".btn")


submitBtn.addEventListener("click", () => {
   thankYouContainer.classList.remove("hidden")
   mainContainer.style.display = "none"
})

rates.forEach((rate) => {
   rate.addEventListener("click", () => {
      rating.innerHTML = rate.innerHTML
   }) 
})