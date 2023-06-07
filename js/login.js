const container    = document.querySelector('#container')
const BtnContainer = document.querySelector('#hide')
const header       = document.querySelector('.header')
const signUpBtn    = document.querySelector('.signUpLoginBtn')
const signUptext   = document.querySelector('.signUp')
const textLogin    = document.querySelector('.changer')
const num          = document.querySelector('#num')
const email        = document.querySelector('#e-mail')
const pass         = document.querySelector('#pass')
const labelpass    = document.querySelector('.email')

let trFls = false
let Login = false

const hossein = {name:'hossein',passd:'123456789'}

signUptext.addEventListener('click',()=>{
    if(!trFls){
        signUptext.innerHTML = 'Login'
        signUpBtn.innerHTML = 'Sign Up'
        textLogin.innerHTML = 'For Login:'
        labelpass.classList.add('showB')
        Login = true
        trFls = true
    }else{
        signUptext.innerHTML = 'Sign Up'
        signUpBtn.innerHTML = 'Login'
        textLogin.innerHTML = 'don`t have the account:'
        labelpass.classList.remove('showB')
        Login = false
        trFls = false
        }
})

signUpBtn.addEventListener('click',()=>{
    
    if(!Login){
            header.style.opacity = '.2'
            container.style.opacity = '1'
            container.style.transform = 'translateY(0px)'
    }else{
        
    }
    
   
})

BtnContainer.addEventListener('click',()=>{
    header.style.opacity = '1'
    container.style.opacity = '0'
    container.style.transform = 'translateY(-800px)'
})
