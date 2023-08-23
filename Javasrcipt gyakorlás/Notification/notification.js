const button = document.querySelector('button');
button.addEventListener("click", () => {
    Notification.requestPermission().then(perm =>{
        //alert(perm)
        if (perm === "granted") {
            new Notification("Ne nyúlkálj a gépemhez!",{
                body: "100% veszély, kicsi Barnus a gépet piszkálja!", 
                tag: "Figyelmeztetés",
                icon: "http://onlinetabla.hu/1159-2807-thickbox/altalanos-veszely.jpg"
            })
        }
    })
})
