

const renderHeader = ()=>{
    console.log('hearder rendering');
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
    homeNavbar.setAttribute('id','home')
    navbar.appendChild(homeNavbar)
    
    const menuNavbar = document.createElement('div')
    menuNavbar.innerHTML = "Menu"
    menuNavbar.setAttribute('id','menu')
    navbar.appendChild(menuNavbar)
    
    const contactNavbar = document.createElement('div')
    contactNavbar.innerHTML = "Contact"
    contactNavbar.setAttribute('id','contact')
    navbar.appendChild(contactNavbar)
    
    contents.appendChild(header)

}

export {renderHeader}