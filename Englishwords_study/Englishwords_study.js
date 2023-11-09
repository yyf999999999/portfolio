const word=document.getElementById("word");
const button=document.getElementById("button");
const savedWord=document.getElementById("savedWord");
const url=document.getElementById("url");
const table=document.getElementById("table");
const translatedWord=document.getElementById("translatedWord");
const synthesis=document.getElementById("synthesis");
const tableWord=document.getElementById("tableWord");
const makingTable=document.getElementById("makingTable");
const errorProblem=document.getElementById("errorProblem");
const buttonProblem=document.getElementById("buttonProblem");
const choice=document.getElementById("choice");
//const answer2=document.getElementById("answer");
const writeAnswer=document.getElementById("writeAnswer");
const answerConfirmation=document.getElementById("answerConfirmation");
word.addEventListener("keypress",keyPress,false);
//answer2.addEventListener("keypress",keyPress2,false);
var text,i,row,wordInTable,tableText,answer={number:0,english:"",japanese:"",fake:"",faketest:"",answers:[],collect:0};
function keepWords(){
    wordInTable=word.value;
    savedWord.innerHTML+=wordInTable;
    word.value="";
    text=url.href.split("&");
    i=0;
    while (!text[i].match("text")){
        i++;
    }
    text[i]="text="+savedWord.innerHTML;
    url.href=text[0];
    for (i=1;i<text.length;i++){
        url.href+="&"+text[i];
    }
    savedWord.innerHTML+=",";
}
function keyPress(e){
    if (e.key==="Enter"){
        keepWords();
    }
}
function synthesisWords(){
    tableWord.value="";
    tableText={e:savedWord.innerHTML.split(","),j:translatedWord.value.split("、")};
    for (i=0;i<tableText.e.length-1;i++){
        tableWord.value+=tableText.e[i]+","+tableText.j[i]+",";
    }
}
function tableMaker(){
    while (table.rows.length>1){
        table.deleteRow(1);
    }
    tableText=tableWord.value.split(",");
    for (i=1;i<tableText.length/2;i++){
        row=table.insertRow();
        for (index=0;index<2;index++){
            row.insertCell();
        }
        table.rows[i].cells[0].innerHTML=tableText[2*i-2];
        table.rows[i].cells[1].innerHTML=tableText[2*i-1];
    }
    
}
function makeProblem(){
    answer.faketest=answer.japanese
        while (answer.fake.includes(answer.faketest)||answer.faketest===answer.japanese){
            answer.faketest=table.rows[Math.floor(Math.random()*(table.rows.length-1)+1)].cells[1].innerHTML;
            /*alert(Math.floor(Math.random()*(table.rows.length-1)+1));
            alert(table.rows[Math.floor(Math.random()*(table.rows.length-1)+1)].cells[1].innerHTML);
            alert(answer.faketest);
            alert(answer.faketest===answer.japanese);
            alert(answer.fake.includes(answer.faketest));*/
        }
        answer.fake+=String(i+1)+"."+answer.faketest+" ";
        answer.answers[i]=answer.faketest;
}
function problem(){
    if (table.rows.length>4){
        //answerConfirmation.innerHTML="";
        errorProblem.innerHTML="";
        //answer2.value="";
        answer.number=Math.floor(Math.random()*(table.rows.length-1)+1);
        answer.english=table.rows[answer.number].cells[0].innerHTML;
        answer.japanese=table.rows[answer.number].cells[1].innerHTML;
        answer.number=Math.floor(Math.random()*4);
        answer.fake="";
        for (i=0;i<answer.number;i++){
            makeProblem();
        }
        answer.fake+=String(i+1)+"."+answer.japanese+" ";
        answer.answers[i]=answer.japanese;
        for (i+=1;i<4;i++){
            makeProblem();
        }
        choice.innerHTML=answer.english+"<br>"+answer.fake;
    }else{
        errorProblem.innerHTML="*4つ以上単語を入力してください";
    }
}
function answerWrite(answerNumber){
    /*if (answer.japanese===answer.answers[answer2.value-1]){
        answer.collect+=1;
        answerConfirmation.innerHTML=String(answer.collect)+"連続正解";
        problem();
    }else{
        answer2.value="";
        answerConfirmation.innerHTML="不正解 記録"+String(answer.collect)+"連続正解";
        answer.collect=0;
    }*/
    if (answer.japanese===answer.answers[answerNumber-1]){
        answer.collect+=1;
        answerConfirmation.innerHTML=String(answer.collect)+"連続正解";
        problem();
    }else{
        //answer2.value="";
        answerConfirmation.innerHTML="不正解 記録"+String(answer.collect)+"連続正解";
        answer.collect=0;
    }
}
function keyPress2(e){
    if (e.key==="Enter"){
        answerWrite();
    }
}