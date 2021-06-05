function preload(){
    }

function setup(){
    createcanvas(640,480);
    canvas.center();
    tint_color = "";
}

function draw(){   
 tint(tint_color)
}

function snap(){
    save('myfilterImage');
}

function filter(){
    tint_color  = document.getElementById("filter").value;
}