function selectLanguage(tLang){
    var lngEn = document.getElementById("lang1");
    var lngUa = document.getElementById("lang2");
    switch(tLang){
        case 1:
            
            lngEn.classList.add("menu-selected");
            lngUa.classList.remove("menu-selected")
            selectEn();

            console.log("нажатие на language");
            console.log("lngEn:"+lngEn.className);
            console.log("lngUa:"+lngUa.className);
            break;
        case 2:
            lngEn.classList.remove("menu-selected");
            lngUa.classList.add("menu-selected");
            selectUa();

            console.log("нажатие на мова");
            console.log("lngEn:"+lngEn.className);
            console.log("lngUa:"+lngUa.className);
            break;
    }
    selectStruct("stack");
}
function selectEn(){
    localStorage.setItem("lang", "en");
    var st1 = document.getElementById("st1");
    st1.innerHTML = "Stacks";
    var st2 = document.getElementById("st2");
    st2.innerHTML = "Queues";
    var h1 = document.getElementById("head1");
    h1.innerHTML = "Date structures";
    var h2 = document.getElementById("infoTitleH2");
    h2.innerHTML = "Data structure - stack";
}
function selectUa(){
    localStorage.setItem("lang", "ua");
    var st1 = document.getElementById("st1");
    st1.innerHTML = "Стеки";
    var st2 = document.getElementById("st2");
    st2.innerHTML = "Черги";
    var h1 = document.getElementById("head1");
    h1.innerHTML = "Структури диних";
    var h2 = document.getElementById("infoTitleH2");
    h2.innerHTML = "Структура даних - стек";
}

function uaContent(sStruct){

}
function enContent(sStruct){
    switch(sStruct){
        case "stack":
            break;
        case "queue":
            break;
    }

}
function errContent(){
    console.log("error content");
}
function selectStruct(sStruct){
    var valueLang = localStorage.getItem("lang");
    console.log("selected: "+valueLang);
    if(valueLang==="en"){

    } else if (valueLang==="ua"){

    }else{
        errContent();
    }
}