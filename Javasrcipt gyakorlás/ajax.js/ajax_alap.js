document.getElementById("fetch-post").onclick = function () {
    //XMLHttpReques egy objektum, szerveroldali kérdést reprezentál, kulcsait használhatod a kérés küldésre
    var xhr = new XMLHttpRequest();
    //onreadystatechange eseményre kell reagálni, ez mindig lefut ha kérés érkezik, 4 szádiuma van. de a 4.érdekes nekünl
    xhr.onreadystatechange = function () {
        //Ez azért kell mert minket a sikeres kérések érdekelnek azaz a 4. stádium
        if (xhr.readyState === 4 && xhr.status === 200) {
            //JSON.parse parancsal alakítod olvashatóvá a választ
            var posts = JSON.parse(xhr.responseText);

            var postsListHTML = '';
            for (var post of posts) {
                postsListHTML += '<p>' + post.title + '</p><small>' + post.body + '<small/>'
            }
            //Ez a lényeg
            document.getElementById('post-list-container').innerHTML = postsListHTML;
        }
    }
    //Ezzel mondod, hogy hova küldje a kérést!
    xhr.open('GET', 'http://jsonplaceholder.typicode.com/posts')
    xhr.send();

}