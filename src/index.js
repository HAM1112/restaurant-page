
import {renderHeader} from "./header";
import {homePageContent} from "./home"
import{render, checkId} from "./helper"
 

renderHeader()
homePageContent()

const buttons = ["home","menu","contact"]

buttons.forEach(btn => {


    let button = document.getElementById(btn)
    button.addEventListener('click',()=>{
        //button.classList.add('selected')
        render()
        checkId(btn)
    })
});
