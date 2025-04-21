let count = 0
function increment(){
    count += 1
    document.getElementById("count-el").innerText = count
}

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