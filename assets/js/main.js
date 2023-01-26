let galleryItem = [

    {
        arrPic: ['mir1.jpg', 'mir2.jpg', 'mir3.jpg'],
        title: 'Мирский замок',
        text: 'Построенный в начале XVI в. магнатом Ю. И. Ильиничем замок стал первым частнособственническим замком на землях Белоруссии.',
    },

    {
        arrPic: ['red1.jpg', 'red2.jpg', 'red3.jpg'],
        title: 'Красный костел',
        text: 'В храме святого Симеона и святой Елены находится полномасштабная копия Туринской Плащаницы.',
    },

    {
        arrPic:  ['troi1.jpg', 'troi2.jpg', 'troi3.jpg'],
        title: 'Троицкое предместье',
        text: 'Троицкое предместье — исторический район города Минска, расположенный в северо-восточной части исторического центра на левом берегу реки Свислочь.',
    },

];

// вывод картинок из объекта
function slide() {

// onmouseover="timerId = setTimeout('changeSlide(${i})', 1000)" - срабатывание функции changeSlide через одну секунду после наведения курсора мыши на картинку
// onmouseout="clearTimeout(timerId) - прекращение смены картинок функцией changeSlide после отведения курсора мыши от картинки
    let item = '';

    for (i=0; i<galleryItem.length; i++){
        
        item += `
        
            <div class="gallery__item">
            <div class="img__gallery" id='id${i}'>
            <img onclick="showImg('${galleryItem[i].arrPic[0]}','${galleryItem[i].text}')"  src="assets/images/${galleryItem[i].arrPic[0]}" onmouseover="timerId = setTimeout('changeSlide(${i})', 1000)" onmouseout="clearTimeout(timerId)">
            </div>
            <div class="title__gallery">
            ${galleryItem[i].title}
            </div>
            </div>
        
        `;
        
        document.querySelector('#box').innerHTML = item;
    };

}


    
let n = 0, max = 2;

function changeSlide(k) {
    if (++n > max){
        n = 0;
    }

    let idImg = document.getElementById(`id${k}`);

    // onclick="showImg('${galleryItem[k].arrPic[n]}','${galleryItem[k].text}')"  - увеличение картинки при клике
    // onmouseout="stop()" - прекращение смены картинок 
    idImg.innerHTML = `
    <img onclick="showImg('${galleryItem[k].arrPic[n]}','${galleryItem[k].text}')"  src="assets/images/${galleryItem[k].arrPic[n]}" onmouseout="stop()"></img>
    `;
    
    timerId = setTimeout(`changeSlide(${k})`, 1000);

}



function stop() {
    clearTimeout(timerId);
    slide(); 
}

function showImg(p,t) {
    let zoom  = `
    <div class="zoom__item" id='bigImg'>
    <div class="zoom__img">
    <img onclick="bigImg.innerHTML =''" src="assets/images/${p}">
    </div>
    <div class="zoom__text">
    ${t}    
    </div>
    </div>
    `;
    document.querySelector('.zoom__inner').innerHTML = zoom;
}