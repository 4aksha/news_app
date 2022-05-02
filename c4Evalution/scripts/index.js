// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page


import { navbar } from "../components/navbar.js";

let nav = document.getElementById("navbar")
nav.innerHTML = navbar();




import { serachdnews,append } from "./fetch.js";

let search = (e) =>{

    if(e.key==="Enter")
       {
           console.log(data)

        let query = document.getElementById("query").value
        

        serachdnews (query).then((data) =>{
               window.location.href = "search.html"
            let container = document.getElementById("query")

            append(data.results,container)
        }) 


    }

}

document.getElementById("query").addEventListener("keydown",search)




