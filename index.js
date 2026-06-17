const buttons = document.querySelector(".buttons")

const button_list = ["CE","C","X","/","7","8","9","*","4","5","6","-","1","2","3","+","+/-","0",".","="]


for(let i = 0; i < button_list.length; i++){
    const newButton = document.createElement("button")
    newButton.textContent = button_list[i]
    newButton.id = "btn-" + button_list[i]
    newButton.addEventListener("click", () => {compute(newButton.id)})
    buttons.appendChild(newButton)
}


function compute(id){
    const textArea = document.querySelector("textarea")
    const clicked_button = document.getElementById(id)
    
    if(clicked_button.id === "btn-CE"){
        textArea.value= ""
        return
    }
    if(clicked_button.id === "btn-C"){
        textArea.value = textArea.value.slice(0, -1);
        return
    }
    if (clicked_button.id === "btn-=") {
        
        textArea.value = doMath()
        return
    }

    textArea.value += clicked_button.textContent
}


function doMath(){
    let eqn = document.querySelector("textarea").value
    
    if (/^[+\-x\/*]|[+\-x\/*]$|^[^+\-x\/*]+$/.test(eqn)) return "ERROR";
    
    let result = Function(`return ${eqn}`)();

    return result
}
