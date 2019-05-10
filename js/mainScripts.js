var stackTitleEn = "Data structure - stack";
var stackTitleUa = "Структура даних - стек";
var stackLinkTitleEn = "Learn stack";
var stackLinkTitleUa = "Вивчати стек";
var stackInfoEn = "A stack is an ordered collection of items that follows the last in, first out(LIFO) principle.";
var stackInfoUa = "Стек - це впорядкована колекція елементів, яка дотримується принципу LIFO.";
var stackLink = "html/stacks.html";



function selectLanguage(tLang){
    var lngEn = document.getElementById("lang1");
    var lngUa = document.getElementById("lang2");
    switch(tLang){
        case 1:
            
            lngEn.classList.add("menu-selected");
            lngUa.classList.remove("menu-selected")
            selectEn();

            break;
        case 2:
            lngEn.classList.remove("menu-selected");
            lngUa.classList.add("menu-selected");
            selectUa();

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
}
function selectUa(){
    localStorage.setItem("lang", "ua");

    var st1 = document.getElementById("st1");
    st1.innerHTML = "Стеки";
    var st2 = document.getElementById("st2");
    st2.innerHTML = "Черги";
    var h1 = document.getElementById("head1");
    h1.innerHTML = "Структури диних";
}

function uaContent(sStruct){
    var iTitle = document.getElementById("infoTitleValue");
    var iContent = document.getElementById("infoContent");
    var iLink = document.getElementById("infoLink");

    console.log("ch:  ----------------------->"+sStruct);
    switch(sStruct){
        case "stack":
            iTitle.innerHTML = stackTitleUa;
            iContent.innerHTML = stackInfoUa;
            iLink.innerHTML = stackLinkTitleUa;
            iLink.setAttribute('href',stackLink);
            break;
        case "queue":
            iTitle.innerHTML = "Черга";
            iContent.innerHTML = "Черга - це";
            iLink.innerHTML = "Робота з чергою";
            iLink.setAttribute('href','html/queue.html');
            break;
    }
}
function enContent(sStruct){
    var iTitle = document.getElementById("infoTitleValue");
    var iContent = document.getElementById("infoContent");
    var iLink = document.getElementById("infoLink");
    
    switch(sStruct){
        case "stack":
            iTitle.innerHTML = stackTitleEn;
            iContent.innerHTML = stackInfoEn;
            iLink.innerHTML = stackLinkTitleEn;
            iLink.setAttribute('href',stackLink);
            break;
        case "queue":
            iTitle.innerHTML = "Queue";
            iContent.innerHTML = "Queue it is";
            iLink.innerHTML = "Work whith queue";
            //iLink.setAttribute('href','html/queue.html');
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