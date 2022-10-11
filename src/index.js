
import {renderHeader} from "./header";
import {homePageContent} from "./home"
import {renderMenuPage} from "./menu"
import {renderContactPage} from "./contact"
 


renderHeader()
homePageContent()
// renderMenuPage()
// renderContactPage()



function render(){
    const contents = document.getElementById('content')
    let removeContent = contents.childNodes[1]
    while(removeContent){
        contents.removeChild(removeContent)
        removeContent = contents.childNodes[1]
    }
}



const buttons = ["home","menu","contact"]

buttons.forEach(btn => {
    let button = document.getElementById(btn)
    button.addEventListener('click',()=>{
        render()
        checkId(btn)
        console.log(btn);
    })
});


function checkId(item) {
    if(item === "home"){return homePageContent()}
    if(item === "menu"){return renderMenuPage()}
    if(item === "contact"){return renderContactPage()}
}

// const homeBtn = document.getElementById('home')
// homeBtn.addEventListener('click', ()=>{
//     render()
//     homePageContent()
// })

// const menuBtn = document.getElementById('menu')
// menuBtn.addEventListener('click', ()=>{
//     render()
//     renderMenuPage()
// })

// const contactBtn = document.getElementById('contact')
// contactBtn.addEventListener('click', ()=>{
//     render()
//     renderContactPage()
// })
