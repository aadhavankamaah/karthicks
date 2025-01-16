const registerBtn = document.querySelector(".search button");
const formPage = document.querySelector(".detail-form-container");
const closeBtn = document.querySelector(".detail-form-container a")
registerBtn.addEventListener("click",() => {
    formPage.style.display = "flex";
});
closeBtn.addEventListener("click", () => {
    formPage.style.display = "none";
})
console.log(document.querySelector(".search input").value);
