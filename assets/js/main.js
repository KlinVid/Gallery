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
                <img id='${galleryItem[i].id}' class="picture" src="assets/images/${galleryItem[i].pic}" alt="">
            </div>
            <div class="title__gallery">
                ${galleryItem[i].title}
            </div>
        </div>
    
    `;

    document.querySelector('#box').innerHTML += item;
};



// выполнение события onclick при нажатии на одну их трех картинок 
document.getElementById('id1').addEventListener('click', pic1);
document.getElementById('id2').addEventListener('click', pic2);
document.getElementById('id3').addEventListener('click', pic3);
let zoom = '';
      
//добавление ниже увеличенной картинки mir.jpg с тесктом
function pic1() {
    zoom = `
            <div class="zoom__item">
                <div class="zoom__img">
                    <img class="zoom__pic" src="assets/images/${galleryItem[0].pic}" alt="">
                </div>
                <div class="zoom__text">
                    ${galleryItem[0].text}
                </div>
            </div>
            `;

    document.querySelector('.zoom__inner').innerHTML = zoom;

    // удаление увеличенной картинки, если на неё нажать
    let del = document.querySelector('.zoom__pic');
    if (del){
        del.addEventListener('click', delPic);
        function delPic(){
            zoom = '';
            document.querySelector('.zoom__inner').innerHTML = zoom;
        };
    }
};

//добавление ниже увеличенной картинки red.jpg с тесктом
function pic2() {
    zoom = `
            <div class="zoom__item">
                <div class="zoom__img">
                    <img class="zoom__pic" src="assets/images/${galleryItem[1].pic}" alt="">
                </div>
                <div class="zoom__text">
                    ${galleryItem[1].text}
                </div>
            </div>
            `;

    document.querySelector('.zoom__inner').innerHTML = zoom;

    // удаление увеличенной картинки, если на неё нажать
    let del = document.querySelector('.zoom__pic');
    if (del){
        del.addEventListener('click', delPic);
        function delPic(){
            zoom = '';
            document.querySelector('.zoom__inner').innerHTML = zoom;
        };
    }
};

//добавление ниже увеличенной картинки troi.jpg с тесктом
function pic3() {
    zoom = `
            <div class="zoom__item">
                <div class="zoom__img">
                    <img class="zoom__pic" src="assets/images/${galleryItem[2].pic}" alt="">
                </div>
                <div class="zoom__text">
                    ${galleryItem[2].text}
                </div>
            </div>
            `;  

    document.querySelector('.zoom__inner').innerHTML = zoom;

    // удаление увеличенной картинки, если на неё нажать
    let del = document.querySelector('.zoom__pic');
    if (del){
        del.addEventListener('click', delPic);
        function delPic(){
            zoom = '';
            document.querySelector('.zoom__inner').innerHTML = zoom;
        };
    }

};



