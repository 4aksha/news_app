




let serachdnews = async (query)=>{

    try{
      
        let res =  await fetch(`https://masai-mock-api.herokuapp.com/news?q={query}`)
          
        let data = res.json()
        return data

    }catch(err){
        console.log(err)
    }


}


let append = (data,container) =>{

data.forEach((el)=>{
let div = document.createElement("div")

let img = document.createElement("img")

let h3 = document.createElement("h3")

let p = document.createElement("p")

img.src = el.img
 h3.innerText = el.Title
 p.innerText=el.short


 div.append(img,h3,p)
 container.append(div)


})

}


export{serachdnews,append}