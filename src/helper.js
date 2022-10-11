import {homePageContent} from "./home"
import {renderMenuPage} from "./menu"
import {renderContactPage} from "./contact"


const render = ()=>{
    const contents = document.getElementById('content')
    let removeContent = contents.childNodes[1]
    while(removeContent){
        contents.removeChild(removeContent)
        removeContent = contents.childNodes[1]
    }
}

const checkId = (item) => {
    if(item === "home"){return homePageContent()}
    if(item === "menu"){return renderMenuPage()}
    if(item === "contact"){return renderContactPage()}
}





export {render, checkId}