// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import nav from "/components/navbar.js";

document.getElementById("navbar").innerHTML = nav();

document.getElementById("search_input").addEventListener("keypress", searchNews);

function searchNews(){
        if(event.key == "Enter"){
            event.preventDefault();
            // console.log(`hello`)
            let query = document.getElementById("search_input").value;
            console.log(query)
    
            let api = `https://masai-mock-api.herokuapp.com/news?q=${query}`
            fetch(api)
                .then(response => response.json())
                .then(data => {
                    localStorage.setItem('news',JSON.stringify(data.articles));
                    window.location.href = "search.html";
                });
        }
}
    


let data = JSON.parse(localStorage.getItem('news')) || [];
show(data)


function show(data){
        let results = document.getElementById("results")
        results.innerHTML = null;
                data.map(function(ele){
                
                let news = document.createElement("div");
                news.className = "news";
        
                let img =  document.createElement("img");
                img.src = ele.urlToImage
        
                let div = document.createElement("div")
                div.className = "title"
        
                        let titl = document.createElement("h4");
                        titl.innerText = ele.title
        
                        let disciptio = document.createElement("p");
                        disciptio.innerText = ele.description
        
                div.append(titl, disciptio)
                news.append(img, div)
                results.append(news)
        });
        
} 