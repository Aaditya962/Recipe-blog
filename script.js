const checkbx=document.querySelectorAll(".checkbox");
checkbx.forEach(check => {
    check.addEventListener('click', () => {check.classList.toggle("check")});
})

