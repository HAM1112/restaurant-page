
    const pizzas = [
        {
            name: "BBQ Pizza",
            caption: "One must have a BBQ skewer in both hands to have a well-balanced diet.",
            price: "4.8",
            image: "./img/chickenpizza.jpg"
        },
        {
            name: "BBQ Pizza",
            caption: "One must have a BBQ skewer in both hands to have a well-balanced diet.",
            price: "4.8",
            image: "./img/chickenpizza.jpg"
        },
        {
            name: "BBQ Pizza",
            caption: "One must have a BBQ skewer in both hands to have a well-balanced diet.",
            price: "4.8",
            image: "./img/chickenpizza.jpg"
        },
        {
            name: "BBQ Pizza",
            caption: "One must have a BBQ skewer in both hands to have a well-balanced diet.",
            price: "4.8",
            image: "./img/chickenpizza.jpg"
        },
    ]

const contents = document.getElementById('content')


const renderMenuPage = ()=>{
    pizzas.forEach(pizza => {
        

        const menu = document.createElement('div');
        menu.className = "menu"
    
        const menuContentDiv = document.createElement('div')
        menu.appendChild(menuContentDiv)
    
        const menuImg = document.createElement('img')
        menuImg.setAttribute("src", pizza.image)
        menuContentDiv.appendChild(menuImg)
    
        const menuDivInsideContentDiv = document.createElement('div')
        menuContentDiv.appendChild(menuDivInsideContentDiv)
    
        const menuHeading = document.createElement('h2')
        menuHeading.innerHTML = `${pizza.name}`
        menuDivInsideContentDiv.appendChild(menuHeading)
    
        const menuCaption = document.createElement('p')
        menuCaption.innerHTML = `${pizza.caption}`
        menuDivInsideContentDiv.appendChild(menuCaption)
    
        const price = document.createElement('span')
        price.innerHTML = `$${pizza.price}`
        menuDivInsideContentDiv.appendChild(price)
        
        contents.appendChild(menu)
    });

}

export {renderMenuPage}