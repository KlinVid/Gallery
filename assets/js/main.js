let galleryItem = [

    {
        pic: 'mir.jpg',
        title: 'Мирский замок',
        text: 'Построенный в начале XVI в. магнатом Ю. И. Ильиничем замок стал первым частнособственническим замком на землях Белоруссии.',
        id: 'id1'
    },

    {
        pic: 'red.jpg',
        title: 'Красный костел',
        text: 'В храме святого Симеона и святой Елены находится полномасштабная копия Туринской Плащаницы.',
        id: 'id2'
    },

    {
        pic: 'troi.jpg',
        title: 'Троицкое предместье',
        text: 'Троицкое предместье — исторический район города Минска, расположенный в северо-восточной части исторического центра на левом берегу реки Свислочь.',
        id: 'id3'
    },

];

//Вывод  на экран браузера через цикл с перебором массива galleryItem с объектами внутри
for (i=0; i<galleryItem.length; i++){

    let item = `
    
        <div class="gallery__item">
            <div class="img__gallery">
                <img onclick="showImg('${galleryItem[i].pic}','${galleryItem[i].text}')" id='${galleryItem[i].id}' class="picture" src="assets/images/${galleryItem[i].pic}" alt="">
            </div>
            <div class="title__gallery">
                ${galleryItem[i].title}
            </div>
        </div>
    
    `;

    document.querySelector('#box').innerHTML += item;
};



function showImg(p,t) {
    let zoom  = `
        <div class="zoom__item" id='bigImg'>
            <div class="zoom__img">
                <img onclick="bigImg.innerHTML =''" src="assets/images/${p}" alt="" style="width: 1000px;">
            </div>
            <div class="zoom__text">
                ${t}    
            </div>
        </div>
    `;
    document.querySelector('.zoom__inner').innerHTML = zoom;
}