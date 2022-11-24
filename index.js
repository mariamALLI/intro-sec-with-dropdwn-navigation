//------------Arrow Navigation Icon JS Functionality 

const dropDown1 = document.querySelector(".dropdown_menu");
const dropDown2 =  document.querySelector(".dropdown-menu");
const arrowToggle1 = document.querySelector(".arrowicon1");
const arrowToggle2 = document.querySelector(".arrowicon2");


arrowToggle1.addEventListener('click', () => {
    const expand = dropDown1.getAttribute("data-visible");

    if(expand === "false") {
        dropDown1.setAttribute("data-visible", true)
        arrowToggle1.setAttribute("aria-expanded", true)
    }else if (expand === "true") {
        dropDown1.setAttribute("data-visible", false)
        arrowToggle1.setAttribute("aria-expanded", false)
    }
})

arrowToggle2.addEventListener('click', () => {
    const expand2 = dropDown2.getAttribute("data-visible");

    if(expand2 === "false"){
        dropDown2.setAttribute("data-visible", true)
        arrowToggle2.setAttribute("aria-expanded", true)
    }else if(expand2 === "true"){
        dropDown2.setAttribute("data-visible", false)
        arrowToggle2.setAttribute("aria-expanded", false)
    }
})

//--------------- Sidebar Menu JS Functionality---------------

const sideMenu = document.querySelector('#sidemenu')
const openMenu = document.getElementById("open_menu")

openMenu.addEventListener('click', function(){
    document.querySelector('#sidemenu').style.right = '0'
    })

function closeMenu(){
    sideMenu.style.right = "-240px"
}