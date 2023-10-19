const container = document.querySelector('#container');
//will seclet the #container div 

console.dir(container.firstElementChild);
//will select the first child of #containers => .display div

const controls = document.querySelector('.controls');
//selects the .controls div

console.dir(controls.previousElementSibling);
//selects the prior siblings => .display div

/**
 * this process is based on identifying a specific node based on 
 * its relation with other nodes
 */

const div = document.createElement('div')

div.innerHTML= '<h1>Hello World</h1>'

div.style.color = 'blue'

div.style.cssText = 'color: blue; background: white;'

div.setAttribute('style', 'color: blue; background: white;')
