let warning=document.getElementById('warning').style.display="none"

let success=document.getElementById('success').style.display="none"


let setValue=function generateRandomValue(){
    let value=Math.floor(1000 + Math.random() * 9000);
    var x=document.getElementById('generateInput').value=value
 }

 let generateButton=document.getElementById("generateButton")
 generateButton.addEventListener("click",setValue)



function calculate(x){
    let userInputBox=document.getElementById('userInputBox')
    inputValue=userInputBox.value
    userInputBox.value=inputValue+x
}

let submitButton=document.getElementById('submit')

submitButton.addEventListener("click",function(){

  let userValue=document.getElementById("userInputBox").value
  let randomValue=document.getElementById('generateInput').value

    if(userValue==randomValue){
        document.getElementById('success').style.display="block"
    }
    else{
        document.getElementById('warning').style.display="block"
    }

})

//Cancle Button

let cancleButton=document.getElementById('cancle')

cancleButton.addEventListener('click',function(){
    let cancleVal=document.getElementById('userInputBox').value
    var lastDigit =cancleVal.toString().split('').slice(0, -1).join('')
    document.getElementById('userInputBox').value=lastDigit

})


//Clear Button

let clearButton=document.getElementById('clear');

clearButton.addEventListener('click',function(){
    document.getElementById('userInputBox').value=""
})