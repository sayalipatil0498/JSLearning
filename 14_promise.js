let isSirAvailable = true;
let promiseForNotes = new Promise(function(resolve,reject){
    if(isSirAvailable){
        resolve("sir shared notes...");
    }else{
        reject("sir can not shared notes.....");
    }
}
);

promiseForNotes.then(function(success){
    console.log(success,"I got the notes let so resd it..........");
}).catch(function(failure){
    console.log(failure,"Are yaar.. kaise teacher hai ye.........");
}).finally(function(){
    console.log("You should have always have youres notes...........");
});
