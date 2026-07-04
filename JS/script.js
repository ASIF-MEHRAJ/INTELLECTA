const menubtn = document.querySelector('.ri-menu-line');
const MobileView = document.querySelector('.mobile-menu');
const loginBtn = document.querySelector('.loginBtn')
const loginPage = document.querySelector('.login-page')
const registerPage = document.querySelector('.register-page')
const registerNow = document.querySelector('.register')
const loginNow = document.querySelector('.login')
const main = document.querySelector('main')

menubtn.addEventListener('click' , ()=>{
    MobileView.classList.add('active');
});

document.addEventListener("click" , (event) =>{
    if(!MobileView.contains(event.target)&& !menubtn.contains(event.target))
        MobileView.classList.remove('active')
})

loginBtn.addEventListener('click', () =>{
    loginPage.classList.add('active')
})

registerNow.addEventListener('click', () =>{
    event.stopPropagation();
    registerPage.classList.add('active'),
    loginPage.classList.remove('active')
    
})
loginNow.addEventListener('click', () =>{
    event.stopPropagation();
    loginPage.classList.add('active'),
    registerPage.classList.remove('active')  
})
document.addEventListener("click" , (event) =>{
    if(!loginPage.contains(event.target)&& !loginBtn.contains(event.target))
        loginPage.classList.remove('active')
})
document.addEventListener("click" , (event) =>{
    if(!registerPage.contains(event.target)&& !registerNow.contains(event.target))
        registerPage.classList.remove('active')
})