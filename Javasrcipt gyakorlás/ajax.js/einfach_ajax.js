/*
 * AJAX kérések
 * Asynchronous JavaScript and XML
 */

document.getElementById('fetch-post').onclick = function () {
    var url = 'http://jsonplaceholder.typicode.com/posts';
    //ide ezek a sendRequest paraméterei miatt kellenek!
  sendRequest(url, GET,null, function(posts){

    var postListHTML = '';
    for (var post of posts) {
    postListHTML += '<p>'+ post.title + '</p><small>' + post.body + '</small>'
    }
    
    document.getElementById('post-list-container').innerHTML = postListHTML;
                

  });
}

//request küldő function (az alsó komment álltalánosított veruiója)
    //kell paraméter
function sendRequest(url, method, body,callback) {
    var xhr = new XMLHttpRequest;

    //200 kell! (különben nem jó)
        xhr.onreadystatechange = function () {
            if(xhr.readyState ===4 && xhr.status === 200) {
                callback (JSON.parse(xhr.responseText));


    
            }
        }
    
        xhr.open('method', 'url');
        xhr.send(body);
}




//Ez volt az eredeti, de ez túl specifikus, ezért álltalanosítjuk a sendRequest functionben
/*
var xhr = new XMLHttpRequest;

//200 kell! (különben nem jó)
    xhr.onreadystatechange = function () {
        if(xhr.readyState ===4 && xhr.status === 200) {
            var posts = JSON.parse(xhr.responseText);
var postListHTML = '';
for (var post of posts) {
postListHTML += '<p>'+ post.title + '</p><small>' + post.body + '</small>'
}

            document.getElementById('post-list-container').innerHTML = postListHTML;
        }
    }

    xhr.open('GET', 'http://jsonplaceholder.typicode.com/posts');
    xhr.send();
    */