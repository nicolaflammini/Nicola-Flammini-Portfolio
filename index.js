//RESPONSIVE DESIGN
if (document.documentElement.clientWidth < 1200) {
    document.querySelector(".title-dom").innerHTML = "Ciao! Sono <span class='title-span'>Nicola</span>, Un <span class='title-span'>Web Designer.</span>";
    document.querySelector(".img-2").innerHTML = " ";
} else {
    document.querySelector(".title-dom").innerHTML = "Ciao! <br> Sono <span class='title-span'>Nicola</span> <br> Un <span class='title-span'>Web Designer.</span>";
    document.querySelector(".img-2").innerHTML = "<img class='images img-2' id='second-img' src='Images/Folder.png' alt='image2'>";
}