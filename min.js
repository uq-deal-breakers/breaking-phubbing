/* Range Sliders https://www.youtube.com/watch?v=BrpiNUf2XCk */

var slider = document.getElementById("sliderRange");
var output = document.getElementById("value");

output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
};

var start = slider.getAttribute("value");

var x = start;
var color = 'linear-gradient(90deg, rgb(255, 88, 100)' + x + '% , rgb(255, 223, 217)' + x + '%)';
slider.style.background = color;

slider.addEventListener("input", function() {
    var x = slider.value;
    var color = 'linear-gradient(90deg, rgb(255, 88, 100)' + x + '%, rgb(255, 223, 217)' + x + '%)';
    slider.style.background = color;
});

var myslider = document.getElementById("mysliderRange");
var myoutput = document.getElementById("myvalue");

myoutput.innerHTML = myslider.value;

myslider.oninput = function () {
    myoutput.innerHTML = this.value;
};

var start_range = myslider.getAttribute("value");

var y = start_range;
var color_range = 'linear-gradient(90deg, rgb(255, 88, 100)' + y + '% , rgb(255, 223, 217)' + y + '%)';
myslider.style.background = color_range;

myslider.addEventListener("input", function() {
    var y = myslider.value;
    var color_range = 'linear-gradient(90deg, rgb(255, 88, 100)' + y + '%, rgb(255, 223, 217)' + y + '%)';
    myslider.style.background = color_range;
});

/* Color Picker http://bgrins.github.io/spectrum/#modes */

$("#colorPalette1").spectrum({
    showPaletteOnly: true,
    showPalette:true,
    color: '#f7a6f0',
    palette: [
        ['#f8f53e', '#41eea6', '#18b5f3', '#f7a6f0']
    ]
});

$("#colorPalette2").spectrum({
    showPaletteOnly: true,
    showPalette:true,
    color: '#18b5f3',
    palette: [
        ['#f8f53e', '#41eea6', '#18b5f3', '#f7a6f0']
    ]
});
