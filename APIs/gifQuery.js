async function getGIFimage(query){
    const image = document.getElementById("image");
    try {
        const response = await
            fetch(`https://api.giphy.com/v1/gifs/translate?api_key=D9NxBLyF2ub7ZVfwWYcndjvYtCfOoRkH&s='${query}'`, {mode: 'cors'})
            .then(function(response){
                if(!response.ok){
                    throw new Error("Network response was not OK")
                }
                return response.json();
            })
            .then(function(response){
                image.src = response.data.images.original.url;
            })
            
    } catch (error) {
        console.error("There was a problem with FETCH operation", error)
    }
}

function submitQuery(){
    const display = document.getElementById("poster");
    const inputElement = document.getElementById('input');
    const input = inputElement.value;
    
    console.log(input);
    getGIFimage(input);
}
