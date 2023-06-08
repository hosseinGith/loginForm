const container    = document.querySelector('#container')
const BtnContainer = document.querySelector('#hide')
const header       = document.querySelector('.header')
const signUpBtn    = document.querySelector('.signUpLoginBtn')
const signUptext   = document.querySelector('.svg')
const loginIcon   = document.querySelector('.login_Icon')
const textLogin    = document.querySelector('.changer')
const num          = document.querySelector('.num')
const email        = document.querySelector('.email')
const pass         = document.querySelector('.pass')
const loading = document.querySelector('.loading')
const body = document.querySelector('body')

let trFls = false
let Login = false

const hossein = {name:'hossein',passd:'123456789'}

//-------------------------------function---------------------------------

function showAlert(){
    header.style.display = 'none'
    container.style.opacity = '1'
    container.style.transform = 'translateY(0px)'
}


function hideAlert(){
    header.style.display = 'flex'
    container.style.opacity = '0'
    container.style.transform = 'translateY(-800px)'
}


//-----------------------------arow-function----------------------------

signUptext.addEventListener('click',()=>{
    if(!trFls){
        email.classList.add('showB')
        signUpBtn.innerHTML = 'sign Up'
        signUptext.style.display = 'none' 
        loginIcon.style.display = 'flex'
        Login = true
        trFls = true
    }
}) 
loginIcon.addEventListener('click',()=>{
    Login = false
    trFls = false
        signUpBtn.innerHTML = 'Login'
        email.classList.remove('showB')
        signUptext.style.display = 'flex' 
        loginIcon.style.display = 'none'
})

signUpBtn.addEventListener('click',()=>{
    
    if(!Login){
            showAlert()
            document.body.style.zIndex = '1'
    }else{
        
    }
    
   
})
window.addEventListener('click',(e)=>{
    if(e.target ==document.body){
    hideAlert()}

})
BtnContainer.addEventListener('click',()=>{
    hideAlert()
})
let load = false
function lod(){
    load = true
}
window.addEventListener('load',()=>{
    if(!load)return
    loading.style.display = 'none'
})
