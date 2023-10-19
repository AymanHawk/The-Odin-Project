const btn = document.querySelector('#btn')
btn.onclick = () => {
    alert('Hello World!');
}

const btn2 = document.querySelector("#btn2")
btn2.addEventListener('click', () => {
    alert('Whats up');
})

function alertFunction(){
    alert('using onclick with functions!')
}

btn.addEventListener('click', function (e){
    e.target.style.background = 'blue'
    console.log(e)
})

const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id)
    })
})