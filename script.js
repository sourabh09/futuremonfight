const sources = "engadget,techcrunch,techradar,wired,the-verge,the-next-web";

function getData() {
    $('.dummy').show();
    const app = document.getElementById('root')

    const container = document.createElement('div')
    container.setAttribute('class', 'container')

    app.appendChild(container)

    var request = new XMLHttpRequest()
    var apikey = "4c0e168fd8b44dd4b06c4521d4e5b2d2";
    request.open('GET', 'https://newsapi.org/v2/top-headlines?sources=' + sources + '&pageSize=100&apiKey=4c0e168fd8b44dd4b06c4521d4e5b2d2', true);
    request.onload = function() {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response)
        var articles = data.articles;

        if (request.status >= 200 && request.status < 400) {
            console.log(data);
            $('.dummy').hide();
            $('.info').hide();
            //alert(articles.length)

            if (articles.length == 0) {
                alert("No articles found!")
                return false
            }
            /*const selectedcategory = document.createElement('div')
            selectedcategory.setAttribute('class', 'selectedcategory')
            container.appendChild(selectedcategory)
            selectedcategory.innerHTML = category;*/
            /*$(".articles_number").html("Total "+articles.length+" articles");*/

            articles.forEach(articles => {
                //console.log(articles.title);
                /*$('#root').append("<div class='main'><div class='img'><img src='"+articles.urlToImage+"'></div><div class='title'>"+articles.title+"</div><div class='content'>"+articles.description+
                  "</div><div class='viewmore'><a target='_blank' href='"+articles.url+"'>View more</a></div></div>");*/


                const card = document.createElement('div')
                card.setAttribute('class', 'card')

                const imgclass = document.createElement('div')
                imgclass.setAttribute('class', 'imgclass')

                const imageHolder = document.createElement('div')
                imageHolder.setAttribute('class', 'imageHolder')

                const img = document.createElement('img')

                if (articles.urlToImage == null) {
                    img.setAttribute('src', "default.png")
                } else {
                    img.setAttribute('src', articles.urlToImage)
                }


                const h3 = document.createElement('h5')
                h3.textContent = articles.title

                const p = document.createElement('p')
                p.textContent = articles.description;

                const a = document.createElement('a')
                a.innerHTML = "<br>Read more on " + articles.source.name;
                a.setAttribute('href', articles.url)
                a.setAttribute('target', "_blank")

                container.appendChild(card)
                card.appendChild(imgclass)
                imgclass.appendChild(imageHolder)
                imageHolder.appendChild(img)
                card.appendChild(h3)
                card.appendChild(p)
                p.appendChild(a)

            })

        } else {
            console.log('error')
        }

    }


    request.send()


}


function info() {

    $("#myModal").css('display', 'block');

};


$(document).ready(function() {

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 200);
        return false;
    });

})

function closeModel() {
    $("#myModal").hide();
}
