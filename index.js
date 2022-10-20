let characters = ["1","2", "3", "4","5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",  "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "}", "[", "]", "|", ";", ":", "'", "/", "?", ".", ",", "<", ">"  ]
let Btn = document.getElementById("btn");
Btn.addEventListener("click", getPassword)

function getPassword(e){
 let firstPara = document.getElementById("paraEl");
 let secondPara = document.getElementById("paraEl2");
 firstPara.textContent = getRandomNum()
 secondPara.textContent = getRandonNum2()

 e.preventDefault()
}

function getRandomNum(){
   
 let randomNum1 = ""
 for (let i = 0; i < 16; i++){
    let randomNumIndex = Math.floor(Math.random() * 89)
   randomNum1 += characters[randomNumIndex]
   
 }
 return randomNum1

}


function getRandonNum2(){
    let randomNum2 = ""
    for(let i = 0; i < 16; i++){
        let randomNumIndexs = Math.floor(Math.random() * 89)
    randomNum2 += characters[randomNumIndexs]
    
    }
    return randomNum2
}