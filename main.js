(()=>{"use strict";const e=()=>{const e=document.getElementById("content"),n=document.createElement("div");n.className="home";const t=document.createElement("div");n.appendChild(t);const a=document.createElement("h2");a.innerHTML="Piz azz",t.appendChild(a);const c=document.createElement("p");c.innerHTML="That dreamy slice may be your top pick because \n                                of the specialty crust, but it isn’t only great because \n                                of the crust. If the sauce, cheese, or toppings don’t work, \n                                a savoury crust goes to waste. It’s the glorious harmony \n                                of these key ingredients that makes the perfect pie.",t.appendChild(c);const d=document.createElement("div");n.appendChild(d);const i=document.createElement("h2");i.innerHTML="Hours",d.appendChild(i);const o=document.createElement("p");o.innerHTML="Sunday: 8am - 8pm<br>\n\n                                Monday: 6am - 6pm<br>\n\n                                Tuesday: 6am - 6pm<br>\n\n                                Wednesday: 6am - 6pm<br>\n\n                                Thursday: 6am - 10pm<br>\n\n                                Friday: 6am - 10pm<br>\n\n                                Saturday: 8am - 10pm<br>",d.appendChild(o);const m=document.createElement("div");n.appendChild(m);const r=document.createElement("h2");r.innerHTML="Location",m.appendChild(r);const s=document.createElement("p");s.innerHTML="Holden Crater, Margaritifer Sinus, Mars",m.appendChild(s),e.appendChild(n)},n=[{name:"BBQ Pizza",caption:"One must have a BBQ skewer in both hands to have a well-balanced diet.",price:"4.8",image:"../img/chickenpizza.jpg"},{name:"BBQ Pizza",caption:"One must have a BBQ skewer in both hands to have a well-balanced diet.",price:"4.8",image:"../img/chickenpizza.jpg"},{name:"BBQ Pizza",caption:"One must have a BBQ skewer in both hands to have a well-balanced diet.",price:"4.8",image:"../img/chickenpizza.jpg"},{name:"BBQ Pizza",caption:"One must have a BBQ skewer in both hands to have a well-balanced diet.",price:"4.8",image:"../img/chickenpizza.jpg"}],t=document.getElementById("content");(()=>{const e=document.getElementById("content"),n=document.createElement("div");n.className="header";const t=document.createElement("div");t.className="title",t.innerHTML="PIZ AZZ",n.appendChild(t);const a=document.createElement("div");a.className="navbar",n.appendChild(a);const c=document.createElement("div");c.innerHTML="Home",c.setAttribute("id","home"),a.appendChild(c);const d=document.createElement("div");d.innerHTML="Menu",d.setAttribute("id","menu"),a.appendChild(d);const i=document.createElement("div");i.innerHTML="Contact",i.setAttribute("id","contact"),a.appendChild(i),e.appendChild(n)})(),e(),["home","menu","contact"].forEach((a=>{document.getElementById(a).addEventListener("click",(()=>{var c;(()=>{const e=document.getElementById("content");let n=e.childNodes[1];for(;n;)e.removeChild(n),n=e.childNodes[1]})(),"home"===(c=a)?e():"menu"!==c?"contact"===c&&(()=>{const e=document.getElementById("content"),n=document.createElement("div");n.className="contact";const t=document.createElement("div");n.appendChild(t);const a=document.createElement("h2");a.innerHTML="Contact us",t.appendChild(a);const c=document.createElement("p");c.innerHTML="Github : https://github.com/HAM1112<br><br>\n                                Phone : (000)-000-0000<br><br>\n                                Address : Holden Crater, Margaritifer Sinus, Mars",t.appendChild(c),e.appendChild(n)})():n.forEach((e=>{const n=document.createElement("div");n.className="menu";const a=document.createElement("div");n.appendChild(a);const c=document.createElement("img");c.setAttribute("src",e.image),a.appendChild(c);const d=document.createElement("div");a.appendChild(d);const i=document.createElement("h2");i.innerHTML=`${e.name}`,d.appendChild(i);const o=document.createElement("p");o.innerHTML=`${e.caption}`,d.appendChild(o);const m=document.createElement("span");m.innerHTML=`$${e.price}`,d.appendChild(m),t.appendChild(n)}))}))}))})();