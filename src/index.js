
import {renderHeader} from "./header";
import {homePageContent} from "./home"
import{render, checkId} from "./helper"
 

renderHeader()
homePageContent()

const buttons = ["home","menu","contact"]

buttons.forEach((btn, index) => {


    let button = document.getElementById(btn)
    button.addEventListener('click',()=>{
        buttons.forEach(btnA =>{
            document.getElementById(btnA).classList.remove('selected');
        })
        button.classList.add("selected")
        render()
        checkId(btn)
    })
});
