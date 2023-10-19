let mouseDown = false;
const color = "hotpink";

function createBlankCanvas(square){    
    const gridElement = document.getElementById('grid')
    gridElement.innerHTML = ''
    for(let i = 0; i < square; i++){
        const row = document.createElement("tr")
        for(let j = 0; j < square; j++){
            const cell = document.createElement("td")
            cell.className = "grid-cell"

            cell.addEventListener('mousedown', function(){
                mouseDown = true; //meaning leftClick is held "down"
                cell.style.backgroundColor = color;
            })
            cell.addEventListener('mouseup', function(){
                mouseDown = false; //meaning leftClick is released "up"
            })
            cell.addEventListener('mousemove', function(){
                if(mouseDown){cell.style.backgroundColor = color;}
            })

            row.appendChild(cell)
        }
        document.querySelector("tbody").appendChild(row)
    }
}

function createCustomGrid(){
    const rc = parseInt(document.getElementById('squaresize').value)
    console.log(rc);

    if(!isNaN(rc) && (rc > 15 && rc < 65)){
        createBlankCanvas(rc)
    }else{
        alert("Invalid size of canvas")
        createBlankCanvas(16);
    }
}

createBlankCanvas(16);
