const container = document.querySelector('#container');

const content = document.createElement('div')
content.classList.add('content')
content.textContent = 'This is the glorious text-content';

container.appendChild(content)

//-----------------------------------------------

const heyImRed = document.createElement('p')
heyImRed.classList.add('pTag')
heyImRed.textContent = 'Hey Im Red'
heyImRed.setAttribute('style', 'color: red;')
container.appendChild(heyImRed)

const blueh3 = document.createElement('h3')
blueh3.classList.add('blueh3')
blueh3.textContent = `I'm a blue h3`
blueh3.setAttribute('style', 'color: blue; font-family: monospace;')
container.appendChild(blueh3)

//-----------------------------------------------

const wrapper = document.createElement('div')
wrapper.classList.add('complex')
wrapper.setAttribute('style', 'border: 1px solid black; background-color: pink;')
container.appendChild(wrapper)

const ImADiv = document.createElement('h1')
ImADiv.classList.add('h1div')
ImADiv.textContent = `I'm in a div`
wrapper.appendChild(ImADiv)//this will nest the div inside the wrapper

const meToo = document.createElement('p')
meToo.classList.add('me2')
meToo.textContent = `ME TOO!`
wrapper.appendChild(meToo)