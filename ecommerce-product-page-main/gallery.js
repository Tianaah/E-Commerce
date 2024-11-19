const mainImages = document.querySelectorAll(".default .main-img img");
const thumbnails = document.querySelectorAll(".default .thumb-list div");

const changeImage = (index, mainImages, thumbnails) => {
    mainImages.forEach((img) =>{
        img.classList.remove("active"); 
    });

    thumbnails.forEach((thumb) =>{
        thumb-list.classList.remove("active"); 
    });

    mainImages[index].classList.add("active");
    thumbnails[index].classList.add("active"); 
};


thumbnails.forEach((thumb, index) =>{
thumb-list.addEventListener('click', () =>{
    changeImage(index, mainImages, thumbnails)
});
});