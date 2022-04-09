function change() {
    let text = document.getElementById("p-input").value;
    document.getElementById("p-input").value = "";
    document.getElementById("new-paragraph").innerHTML = text;
    }