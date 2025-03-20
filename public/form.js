const profile = document.querySelector(".user-profile");
const userDropdown = document.getElementById("userDropdown");
profile.addEventListener("click", ()=>{
    userDropdown.classList.toggle("hide");
});

