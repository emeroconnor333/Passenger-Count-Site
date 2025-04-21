function changeMode(){
    if (document.body.id === "dark-mode"){
        // Change to light mode
        document.body.id = "light-mode";
    }
    else{
        // Change to dark mode
        document.body.id = "dark-mode";
    }
}

let count = 0
function increment(){
    count += 1
    document.getElementById("count-el").innerText = count
}

let saveEl = document.getElementById("save-el");
function save() {
    saveEl.textContent += count + " - ";
    count = 0;
    document.getElementById("count-el").innerText = 0;
}