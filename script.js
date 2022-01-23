function gethistory(){
    return document.getElementById("history-value").innerText;
}
function printhistory(num){
    document.getElementById("history-value").innerText=num;
}
function getoutput(){
    return document.getElementById("output-value").innerText;
}
function printoutput(num){
    if(num == ""){
        document.getElementById("output-value").innerText=""
    }else{
    document.getElementById("output-value").innerText=getformatednum(num);
    }
}
function getformatednum(num){
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}
function reverseformatnum(num){
    return Number(num.replace(/,/g,''));
}
function numberhandler(){
    var output = reverseformatnum(getoutput());
    if(output != NaN){
        output= output+this.id;
        printoutput(output);
    }
}
function clearhandler(){
    printhistory("");
    printoutput("");
}
function backspacehandler(){
    var output = reverseformatnum(getoutput()).toString();
    output = output.substring(0,output.length-1);
    printoutput(output);
}
var one = document.getElementById("1").addEventListener("click",numberhandler);
var two = document.getElementById("2").addEventListener("click",numberhandler);
var three = document.getElementById("3").addEventListener("click",numberhandler);
var four = document.getElementById("4").addEventListener("click",numberhandler);
var five = document.getElementById("5").addEventListener("click",numberhandler);
var six = document.getElementById("6").addEventListener("click",numberhandler);
var seven = document.getElementById("7").addEventListener("click",numberhandler);
var eight = document.getElementById("8").addEventListener("click",numberhandler);
var nine = document.getElementById("9").addEventListener("click",numberhandler);
var zero = document.getElementById("0").addEventListener("click",numberhandler);
var clear = document.getElementById("clear").addEventListener("click",clearhandler);
var backspace = document.getElementById("backspace").addEventListener("click",backspacehandler);

