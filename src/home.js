
const homePageContent = ()=>{
    const contents = document.getElementById('content')
    const HomePageContent = document.createElement('div')
    HomePageContent.className = "home"

    const homeDiv = document.createElement('div')
    HomePageContent.appendChild(homeDiv)

    const homeDivHeading = document.createElement('h2')
    homeDivHeading.innerHTML = "Piz azz"
    homeDiv.appendChild(homeDivHeading)

    const homeDivcontent = document.createElement('p')
    homeDivcontent.innerHTML = `That dreamy slice may be your top pick because 
                                of the specialty crust, but it isn’t only great because 
                                of the crust. If the sauce, cheese, or toppings don’t work, 
                                a savoury crust goes to waste. It’s the glorious harmony 
                                of these key ingredients that makes the perfect pie.`
    homeDiv.appendChild(homeDivcontent)

    const timeDiv = document.createElement('div')
    HomePageContent.appendChild(timeDiv)

    const timeDivHeading = document.createElement('h2');
    timeDivHeading.innerHTML = `Hours`
    timeDiv.appendChild(timeDivHeading)

    const timeDivContents = document.createElement('p')
    timeDivContents.innerHTML = `Sunday: 8am - 8pm<br>

                                Monday: 6am - 6pm<br>

                                Tuesday: 6am - 6pm<br>

                                Wednesday: 6am - 6pm<br>

                                Thursday: 6am - 10pm<br>

                                Friday: 6am - 10pm<br>

                                Saturday: 8am - 10pm<br>`
    timeDiv.appendChild(timeDivContents)

    const locationDiv = document.createElement('div')
    HomePageContent.appendChild(locationDiv)

    const locationDivHeading = document.createElement('h2')
    locationDivHeading.innerHTML = `Location`
    locationDiv.appendChild(locationDivHeading)

    const locationDivContent = document.createElement('p')
    locationDivContent.innerHTML = `Holden Crater, Margaritifer Sinus, Mars`
    locationDiv.appendChild(locationDivContent)


    contents.appendChild(HomePageContent)
}

export {homePageContent}