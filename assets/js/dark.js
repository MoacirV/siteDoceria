let interruptor = document.getElementById('interruptor')
let body = document.querySelector('body')

interruptor.addEventListener('click', ()=>{
    interruptor.classList.toggle('dark')
    body.classList.toggle('dark')
})