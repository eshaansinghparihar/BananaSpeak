var btnTranslate = document.querySelector("#translate-btn");
var englishInput = document.querySelector("#english-input");
var bananaOutput = document.querySelector("#output");


var url="https://api.funtranslations.com/translate/minion.json";

function getTranslationData(input){
    return url + "?" + "text=" + input
}

function errorHandler(input){
    // console.log("error occured");
    // // alert("Error Occured !"+ error.message);
    // bananaOutput.innerText="Error : "+error;

    fetch(getTranslationData(input))
    .then(response=>response.json())
    .then(data=>{
        var errorMssg=data.error.message;
        bananaOutput.innerText="Error : "+errorMssg;
    })
}

function clickHandler(){
    var input=englishInput.value;
    
    fetch(getTranslationData(input))
    .then(response=>response.json())
    .then(data=>{
        var translatedText=data.contents.translated;
        bananaOutput.innerText=translatedText;
    })
    .catch(errorHandler(input))

}

btnTranslate.addEventListener("click", clickHandler);