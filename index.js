let arr = [];
/*const div = document.createElement("div")
    div.setAttribute("id",item.id)
    div.innerText = item.title;
    main.appendChild(div)*/

fetch("blog.json")
  .then((response) => response.json())
  .then((lista) => {
    let main = document.getElementById("main");
    lista.noticias.map((item) => {
      main.innerHTML += `<div id="${item.id}" class="container_noticia">
    <div class="titulo">${item.title}</div>
    <div class="img_div"><img class="img" src="${item.url}"/></div>
    <div class="redator"><span>${item.redator}</span><div class="medias"><img class="medias_sociais" src="./images/facebook.png"/>
    <img  class="medias_sociais" src="./images/instagram.png"/>
    <img  class="medias_sociais" src="./images/whatsapp.png"/>
    <img  class="medias_sociais" src="./images/tiktok.png"/>
    </div>`;
    });
  });
