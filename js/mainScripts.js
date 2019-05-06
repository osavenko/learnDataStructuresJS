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
    selectStruct(localStorage.getItem("content"));
}
function selectEn(){
    localStorage.setItem("lang", "en");
    var st1 = document.getElementById("st1");
    st1.innerHTML = "Stacks";
    var st2 = document.getElementById("st2");
    st2.innerHTML = "Queues";
    var h1 = document.getElementById("head1");
    h1.innerHTML = "Date structures";
 /*   var h2 = document.getElementById("infoTitleH2");
    h2.innerHTML = "Data structure - stack";
*/
}
function selectUa(){
    localStorage.setItem("lang", "ua");

    var st1 = document.getElementById("st1");
    st1.innerHTML = "Стеки";
    var st2 = document.getElementById("st2");
    st2.innerHTML = "Черги";
    var h1 = document.getElementById("head1");
    h1.innerHTML = "Структури диних";
  /*  var h2 = document.getElementById("infoTitleH2");
    h2.innerHTML = "Структура даних - стек";
*/
}

function uaContent(sStruct){
    var iTitle = document.getElementById("infoTitleH2");
    var iContent = document.getElementById("infoContent");
    switch(sStruct){
        case "stack":
            //iTitle.innerHTML = "Структура даних стек";
            iContent.innerHTML = "Стек - це";
            break;
        case "queue":
            //iTitle.innerHTML = "Черга";
            iContent.innerHTML = "Черга - це";

            break;
    }
}
function enContent(sStruct){
    var iTitle = document.getElementById("infoTitle");
    var iContent = document.getElementById("infoContent");
    switch(sStruct){
        case "stack":
            //iTitle.innerHTML = "Data structure - stack";
            iContent.innerHTML = "Stack it is";
            break;
        case "queue":
            //iTitle.innerHTML = "Queue";
            iContent.innerHTML = "Queue it is";

            break;
    }
}
function errContent(){
    console.log("error content");
}
function selectStruct(sStruct){
    var valueLang = localStorage.getItem("lang");
    var struct1 = document.getElementById("struct1");
    var struct2 = document.getElementById("struct2");
    
    console.log("selected: "+valueLang);
    localStorage.setItem("content",sStruct);
    switch (sStruct){
        case "stack":
            struct1.classList.add("menu-selected");
            struct2.classList.remove("menu-selected")

            break;
        case "queue":
            struct2.classList.add("menu-selected");
            struct1.classList.remove("menu-selected")

            break;
    }
    if(valueLang==="en"){
        enContent(sStruct);
    } else if (valueLang==="ua"){
        uaContent(sStruct);
    }else{
        errContent();
    }
}