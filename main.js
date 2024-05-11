//sticky navigation bar on scroll
const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    const scrollY = window.scrollY;
    if(scrollY > 0){
        header.classList.add("sticky");
    }else{
        header.classList.remove("sticky");
    }
})

//hamnburger menu
const menu = document.querySelector('#menu-icon');
const navmenu = document.querySelector('.navmenu');
let isOpen = false; // Flag to track menu state

menu.addEventListener('click', function() {
  if (!isOpen) {
    menu.classList.add('bx-x');  // Add "bx-x" class for open state icon
    navmenu.classList.add('open'); // Add "open" class to show menu
    isOpen = true;  // Update flag to indicate menu is open
  } else {
    menu.classList.remove('bx-x'); // Remove "bx-x" class for closed state icon
    navmenu.classList.remove('open'); // Remove "open" class to hide menu
    isOpen = false; // Update flag to indicate menu is closed
  }
});

