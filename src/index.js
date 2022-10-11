
import {renderHeader} from "./header";
import {homePageContent} from "./home"
import{render, checkId} from "./helper"
 


renderHeader()
homePageContent()
// renderMenuPage()
// renderContactPage()





const buttons = ["home","menu","contact"]

buttons.forEach(btn => {
    let button = document.getElementById(btn)
    button.addEventListener('click',()=>{
        render()
        checkId(btn)
    })
});




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
