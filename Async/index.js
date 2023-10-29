/**
 * callback functions is a function that is passed into another function as an 
 * argument which is then invoked inside the outer function to complete 
 * somekind of routine or action
 */

MyDiv.addeventlistener('click', function(){
    //go fetch data from an api 
    //clean it up a bit and return as an object
    return data;
})

/**
 * in this example the it may take some time to fetch data from the API 
 * but unless we specify that it WILL take some time, the function will
 * assume that the data will be available instantly 
 */

const myData = getData()
const pieceOfData = myData['whatever']

/**
 * here myData['whatever'] will be computed instantly regaurdless if the 
 * data returns NULL or not. With a Promise, we can make it so that 
 * the function awaits a result before returning a potentially NULL value
 */

const myData = getData() //if this is refactored to return a promise...
myData.then(function(data){ //...then() tells it to wait until the promise is resolved  
    const pieceOfData = data['whatever'] //and THEN run the function inside 
})