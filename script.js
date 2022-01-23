const burger=document.querySelector(".burger");
const closee=document.querySelector(".close");
const nav=document.querySelector(".navig");

burger.addEventListener('click', () => nav.classList.toggle('isactive'));
closee.addEventListener('click', () => nav.classList.remove('isactive'));

burger.addEventListener('click', () => closee.classList.remove('isclose'));
closee.addEventListener('click', () => burger.classList.remove('isclose'));

closee.addEventListener('click', () => closee.classList.toggle('isclose'));
burger.addEventListener('click', () => burger.classList.toggle('isclose'));

