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
        document.getElementById("output-value").innerText="";
    }
    else if(num == 0){
        document.getElementById("output-value").innerText="0";
    }
    else if(num =="-"){
        document.getElementById("output-value").innerText="-";
    }
    // else if(num == NaN){
    //     document.getElementById("output-value").innerText="0";
    // }
    else{
    document.getElementById("output-value").innerText=getformatednum(num);
    }
}
function getformatednum(num){
    // if(num =="-"){
    //     return ""; }
    //  if(num == 0){
    //     return 0;
    // }
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}
function reverseformatnum(num){
    return Number(num.replace(/,/g,''));
}

function clearhandler(){
    printhistory("");
    printoutput("");
}
function backspacehandler(){
    var output = reverseformatnum(getoutput()).toString();
    output = output.substring(0,output.length-1);
    printoutput(output);
    if(output == "-"){
        printoutput("");
    }
}

function numberhandler(){
    var output = reverseformatnum(getoutput());
    if(output==""|| output>0 || output<0){
        output= output+this.id;
        printoutput(output);
    }
}

function addhandler(){
    var output = reverseformatnum(getoutput());
    var history = gethistory();
    if(output!="" || output==0){
    output = output+"+";
    // var history= gethistory();
    printhistory(history+output);
    printoutput("");
    }
    else if(output==""&& history!=""){
        
        if(isNaN(history[history.length-1])){
            history = history.substring[0,history.length-1];
            history = history+"+";
        }
    }
}
function subhandler(){
    var output = reverseformatnum(getoutput());
    if(output!="" || output==0){
    output = output+"-";
    var history= gethistory();
    printhistory(history+output);
    printoutput("");
    }
}
function mulhandler(){
    var output = reverseformatnum(getoutput());
    var history = gethistory();
    if(output!="" ){
    output = output+"*";
    var history= gethistory();
    printhistory(history+output);
    printoutput("");
    }
}
function divhandler(){
    var output = reverseformatnum(getoutput());
    if(output!="" ){
    output = output+"/";
    var history= gethistory();
    printhistory(history+output);
    printoutput("");
    }
    
}
function perchandler(){
    var output = reverseformatnum(getoutput());
    var history = gethistory();
    var evalu = eval(history + output);
    console.log(evalu);
    var result = evalu*100;
    printoutput(result);
    printhistory("");
}
function equalhandler(){
    var output =reverseformatnum(getoutput());
    var history = gethistory();
    if(output!=""){
        var evalu =eval(history + output);
        if(evalu == 0){
            printoutput("0");
            printhistory("");
        }else{
        printoutput(evalu);
        printhistory("");
        }
        
    }
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
var add = document.getElementById("+").addEventListener("click",addhandler);
var sub = document.getElementById("-").addEventListener("click",subhandler);
var mul = document.getElementById("*").addEventListener("click",mulhandler);
var div = document.getElementById("/").addEventListener("click",divhandler);
var perc = document.getElementById("%").addEventListener("click",perchandler);
var clear = document.getElementById("clear").addEventListener("click",clearhandler);
var backspace = document.getElementById("backspace").addEventListener("click",backspacehandler);
var equal = document.getElementById("equal").addEventListener("click",equalhandler);
