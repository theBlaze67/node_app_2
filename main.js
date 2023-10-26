let navLists = document.querySelector('.nav-lists');
let menuBtn = document.querySelector('.ri-menu-line');
menuBtn.addEventListener('click',()=>{
    navLists.classList.toggle('show');
    console.log(navLists.classList);
});
console.log(navLists.classList);