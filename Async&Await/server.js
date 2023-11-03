const server = {
    people: [
        {
            name: "Ayman Haque",
            age: 21
        },
        {
            name: "Jordan Belfort",
            age: 56
        },
        {
            name: "Leonardo DiCaprio",
            age: 53
        },    
    ],

    getPeople(){
        return new Promise((resolve, reject) => {
            //simulating delay from network call to the server
            setTimeout(() => {
                resolve(this.people)
            }, 2000)
        })
    }
}

function log(){
    console.log(server.getPeople());
}