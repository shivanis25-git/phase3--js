const questions = [
{question:"Capital of India?",options:["Mumbai","Delhi","Chennai","Kolkata"],answer:"Delhi"},
{question:"HTML stands for?",options:["Hyper Text Markup Language","High Text","Hyper Tool","None"],answer:"Hyper Text Markup Language"},
{question:"CSS used for?",options:["Structure","Styling","Database","Logic"],answer:"Styling"},
{question:"JS is?",options:["Language","Browser","Database","Server"],answer:"Language"},
{question:"2+2?",options:["3","4","5","6"],answer:"4"},
{question:"Array index starts from?",options:["0","1","-1","2"],answer:"0"},
{question:"console output method?",options:["print()","console.log()","echo()","write()"],answer:"console.log()"},
{question:"JS framework?",options:["React","Laravel","Django","Flask"],answer:"React"},
{question:"Backend runtime?",options:["Node.js","HTML","CSS","Bootstrap"],answer:"Node.js"},
{question:"Variable keyword?",options:["var","int","float","double"],answer:"var"},
{question:"Boolean values?",options:["true/false","yes/no","1/2","a/b"],answer:"true/false"},
{question:"Comment symbol?",options:["//","#","**","<!--"],answer:"//"},
{question:"DOM stands for?",options:["Document Object Model","Data Object","Desktop Mode","None"],answer:"Document Object Model"},
{question:"Tag for image?",options:["<img>","<image>","<pic>","<src>"],answer:"<img>"},
{question:"Styling language?",options:["CSS","HTML","JS","C++"],answer:"CSS"}
];

let current=0;
let score=0;
let timer;
let timeLeft=15;
let userAnswers=[];

const question=document.getElementById("question");
const options=document.querySelectorAll(".option-btn");
const nextBtn=document.getElementById("nextBtn");
const resultBox=document.getElementById("result-box");
const quizBox=document.getElementById("quiz-box");
const scoreText=document.getElementById("score");
const review=document.getElementById("review");
const restartBtn=document.getElementById("restartBtn");
const progressBar=document.getElementById("progressBar");
const timerText=document.getElementById("timer");
const darkToggle=document.getElementById("darkToggle");

questions.sort(()=>Math.random()-0.5);

function startTimer(){
    timeLeft=15;
    timerText.innerText="Time: "+timeLeft+"s";

    timer=setInterval(()=>{
        timeLeft--;
        timerText.innerText="Time: "+timeLeft+"s";

        if(timeLeft<=0){
            clearInterval(timer);
            nextBtn.click();
        }
    },1000);
}

function loadQuestion(){
    clearInterval(timer);
    startTimer();

    let q=questions[current];
    question.innerText=q.question;

    options.forEach((btn,index)=>{
        btn.innerText=q.options[index];
        btn.classList.remove("correct","wrong");
        btn.disabled=false;
    });

    progressBar.style.width=((current/questions.length)*100)+"%";
}

options.forEach(btn=>{
    btn.addEventListener("click",function(){
        clearInterval(timer);

        const correct=questions[current].answer;
        userAnswers[current]=this.innerText;

        if(this.innerText===correct){
            this.classList.add("correct");
            score++;
        }else{
            this.classList.add("wrong");
        }

        options.forEach(b=>b.disabled=true);
    });
});

nextBtn.addEventListener("click",()=>{
    current++;

    if(current<questions.length){
        loadQuestion();
    }else{
        showResult();
    }
});

function showResult(){
    clearInterval(timer);
    quizBox.classList.add("hide");
    resultBox.classList.remove("hide");

    scoreText.innerText=score+" / "+questions.length;

    review.innerHTML="";
    questions.forEach((q,index)=>{
        review.innerHTML+=`
        <p>
        <strong>${q.question}</strong><br>
        Correct: ${q.answer}<br>
        Your: ${userAnswers[index] || "Not Answered"}
        </p><hr>`;
    });

    progressBar.style.width="100%";
}

restartBtn.addEventListener("click",()=>{
    location.reload();
});

darkToggle.addEventListener("click",()=>{
    document.body.classList.toggle("dark-mode");
});

loadQuestion();