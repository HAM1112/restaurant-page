

const renderHeader = ()=>{
    const contents = document.getElementById('content')
    
    
    const header = document.createElement('div')
    header.className = "header"
    
    const title = document.createElement('div')
    title.className = "title"
    title.innerHTML = "PIZ AZZ"
    header.appendChild(title)
    
    const navbar = document.createElement('div')
    navbar.className = "navbar"
    header.appendChild(navbar)
    
    const homeNavbar = document.createElement('div')
    homeNavbar.innerHTML = "Home"
    navbar.appendChild(homeNavbar)
    
    const menuNavbar = document.createElement('div')
    menuNavbar.innerHTML = "Menu"
    navbar.appendChild(menuNavbar)
    
    const contactNavbar = document.createElement('div')
    contactNavbar.innerHTML = "Contact"
    navbar.appendChild(contactNavbar)
    
    contents.appendChild(header)

}

export {renderHeader}