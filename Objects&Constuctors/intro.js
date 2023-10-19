const myObject = {
    property: 'Value!',
    otherProperties: 77,
    "obnoxious property" : function(){
        console.log("Complex Property");
    }
}

const l = myObject["obnoxious property"];

console.log(myObject.property)