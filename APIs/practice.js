async function logWeatherData(){
        const responce = await
        fetch("http://api.weatherapi.com/v1/current.json?key=423571539616485aa81200537232710&q=new-york");
        const movies = await responce.json();
        console.log(movies);
        const data = movies.location
        console.log(data);
}

logWeatherData();

async function postData(url = "", data = {}) {
    const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        redirect: "follow",
        referrer: "no-referrer",
        body: JSON.stringify(data)
    });
    return response.json();
}

postData("http://api.weatherapi.com/v1/current.json?key=423571539616485aa81200537232710&q=new-york"
    , {answer: 42}).then((data) => console.log(data));

async function fetchImage(){
    try{
        const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=D9NxBLyF2ub7ZVfwWYcndjvYtCfOoRkH&s=cats', {mode: 'cors'} /** {mode: 'cors'} is necessary for API to work due to browser security*/)
        if(!response.ok){
            throw new Error("Network response was not OK")
        }
        const myBlob = await response.blob();
        myImage.src = URL.createObjectURL(myBlob);
    }catch(error){
        console.error("There was a problem with FETCH operation", error)
    }
}

fetchImage();