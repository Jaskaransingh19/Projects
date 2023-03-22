let http = new XMLHttpRequest();

http.open('get', 'article.json', true);

http.send();

http.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        let article = JSON.parse(this.responseText);
        let output = "";
        for(let item of article){
            output += `
            <div class ="article">
                    <p class="title_1">${item.title_1}</p>
                    <p class="date_published">${item.date_published}</p>
                    <img src="${item.lead_image_url}" alt="${item.lead_image_url}"></a>
                    <p></p>
                    <p class="content_1">${item.content_1}</p>
            </div>
            `;
        }
        document.querySelector(".article").innerHTML = output;
    }
}
