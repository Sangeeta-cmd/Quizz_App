let  Que  = document.querySelector(".que");
let  opts = document.querySelectorAll(".opt");
let  opt1 = document.querySelector(".opt1");
let  opt2 = document.querySelector(".opt2");
let  opt3 = document.querySelector(".opt3");
let  opt4 = document.querySelector(".opt4");
let  welcome = document.querySelector(".welcome")
let  body = document.querySelector(".container")
let  scoreBoard = document.querySelector(".score-board")
let score = document.querySelector(".msg")

let  btn1  = document.querySelector(".btn1");
let  btn2  = document.querySelector(".btn2");
let  btn3  = document.querySelector(".btn3");
let  q = 0,count = 0;

function addQue(q){
   if(q<MCQ.length){
        Que.innerText  = MCQ[q]['question'];
        opt1.innerText = MCQ[q]['option1'];
        opt2.innerText = MCQ[q]['option2'];
        opt3.innerText = MCQ[q]['option3'];
        opt4.innerText = MCQ[q]['option4']; 
    }else{
        body.classList.add("hide");
        scoreBoard.classList.remove("hide");
        score.innerText = `Your Score : ${count}/5`;
    }
    opts.forEach((option)=>{
        option.addEventListener("click" ,()=>{
            if(option.innerText === MCQ[q]['currOpt']){
                console.log("right ans")
                option.style.backgroundColor = 'rgb(89, 240, 89)';
                count++;
            }else{
                option.style.backgroundColor = 'rgb(243, 94, 86)';
            }
        })
        if(option.style.backgroundColor === 'rgb(89, 240, 89)' || option.style.backgroundColor === 'rgb(243, 94, 86)'){
            option.style.backgroundColor = 'rgb(249, 249, 248)';
        }
    })  
}



btn1.addEventListener("click" , ()=>{
    q=0;
    welcome.classList.add("hide");
    body.classList.remove("hide");
    addQue(q);
})

function check(q){
   
}

btn2.addEventListener("click" , ()=>{
    addQue(q++);
});


btn3.addEventListener("click", ()=>{
    scoreBoard.classList.add("hide");
    welcome.classList.remove("hide");
})
