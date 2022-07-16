let screen= document.getElementById('screen');
let buttons= document.querySelectorAll('.btn');
let equal=document.querySelector('.btn-equal');
let clear=document.querySelector('.btn-clear');

buttons.forEach(function(button){
    
    button.addEventListener('click', function(e){
        if(screen.value==="0"){
            
            screen.value="";
        }
        let value= e.target.dataset.item;
        screen.value+=value;
    })
})
equal.addEventListener('click',function(e){
    
    if(screen === ""){
        screen.value=""; // this is beacause to clear zero from scrren if someone click on clear button
    }
    else{
        let answer= eval(screen.value);
        screen.value = answer;
    }
})
clear.addEventListener('click',function(e){
    screen.value=0;
})