const btnOpen = document.getElementById('navOpen')
const btnClose = document.getElementById('navClose')
const nav = document.getElementById('nav')

btnOpen.addEventListener('click',() => {
    console.log('btn active')
    nav.classList.remove('btn_close')
    nav.classList.remove('navNoActive')
    nav.classList.add('navActive')
})

btnClose.addEventListener('click',()=> {
    console.log('btn no active')
    nav.classList.remove('navActive')
    nav.classList.add('navNoActive')
})