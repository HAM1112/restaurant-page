
const renderContactPage = ()=>{

    const contents = document.getElementById('content')

    const contact = document.createElement('div')
    contact.className ="contact"

    const contactDiv = document.createElement('div')
    contact.appendChild(contactDiv)

    const contactHeading = document.createElement('h2')
    contactHeading.innerHTML = `Contact us`
    contactDiv.appendChild(contactHeading)

    const contactContent = document.createElement('p')
    contactContent.innerHTML = `Github : https://github.com/HAM1112<br><br>
                                Phone : (000)-000-0000<br><br>
                                Address : Holden Crater, Margaritifer Sinus, Mars`

    
    contactDiv.appendChild(contactContent)

    contents.appendChild(contact)

}


export {renderContactPage}
