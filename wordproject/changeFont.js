

document.addEventListener('DOMContentLoaded', function() {
    displayFonts(fonts);
});


function displayFonts(fonts) {
    const titleFonts = document.getElementById('fonts'); 
    titleFonts.innerHTML = '';
    fonts.forEach((font) => {
        const option = document.createElement('option');
        option.textContent = font;
        option.style.fontFamily = font;
        titleFonts.appendChild(option);
    });

    const textFonts = document.getElementById('text_fonts'); 
    textFonts.innerHTML = '';
    fonts.forEach((font) => {
        const option = document.createElement('option');
        option.textContent = font;
        option.style.fontFamily = font;
        textFonts.appendChild(option);
    });
}


var selectTitle = document.getElementById("fonts");
selectTitle.addEventListener("change", function() {
    var selectedFont = selectTitle.value;
    document.getElementById("title").style.fontFamily = selectedFont;
});


var select = document.getElementById("text_fonts");
select.addEventListener("change", function() {
    var selectedFont = select.value;
    document.getElementById("freeform").style.fontFamily = selectedFont;
});