var screen=document.getElementById("screenoutput");

function display(num){

 screen.value=screen.value+num;

}
function cl(){
    screen.value='';
}
function del(){
    screen.value=screen.value.slice(0,-1);
}
function calculate(){
       try{
        screen.value = eval(screen.value);
       }
       catch(error){
        alert("Invalid");
       }
}