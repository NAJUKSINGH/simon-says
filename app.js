let body = document.querySelector("body")
let level = document.querySelector("h3")
let playground = document.querySelector(".playground")
let boxes = document.querySelectorAll(".box")
let helpBtn = document.querySelector(".help")

let started = false;
let memArr =[]
let userArr = []
let levelNum =0

let num =0;
let clicks =0;
let score = 0

playground.addEventListener('click', (event) => {
    if(started){
        if(event.target.className == 'box'){
            clicks++;
            userArr.push(event.target.id)
            console.log(userArr);
            console.log("clicked");
}
}
})

function checker (){
    if(userArr[clicks -1] != memArr[clicks -1 ]){
        level.innerText = `you have lost the game, your score is ${score}`
        started = false;
        userArr = [];
        memArr = [];
        clicks = 0;
        num = 0;

        levelNum = 1;
    }else{
        num++; //num ==1
    }
    if(num == memArr.length && num !=0){

    }

}
// body.addEventListener('keydown' , () => {
//     if(started == false){
//         started = true;
//     }
// })
body.addEventListener('keydowm', () => {
    if(started == false){
        started = true;
        selectBox();
    }
})
function selectBox(){
    level.innerText = `Level ${levelNum}`
    levelNum++;

    let randVal = Math.floor((Math.random()*4))
    flashRand(randVal)
    memArr.push(boxes[randVal].id)
}

function flashRand(randVal){
    boxes[randVal].classList.add('memFlash')

    setTimeout(() => {
        boxes[randVal].classList.remove('memoryFlash')
    } ,[250])
}