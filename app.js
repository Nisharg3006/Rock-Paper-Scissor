let user=0;
let comp=0; 

const choices=document.querySelectorAll(".choice")

choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        console.log("Button was Clicked");
    })
});