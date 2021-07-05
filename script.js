function searchFunction() {
    var input, filter, ul, li, i, textValue
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    ul = document.getElementById("recipe");
    li = document.getElementsByTagName("li");
    
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        textValue = a.textContent || a.innerText;
        
        if(textValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
};