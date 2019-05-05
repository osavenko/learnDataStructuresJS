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
}
function selectEn(){
    var st1 = document.getElementById("st1");
    st1.innerHTML = "Stacks";
    var st2 = document.getElementById("st2");
    st2.innerHTML = "Queues";

}
function selectUa(){
    var st1 = document.getElementById("st1");
    st1.innerHTML = "Стеки";
    var st2 = document.getElementById("st2");
    st2.innerHTML = "Черги";
}

function selectStruct(sStruct){

}