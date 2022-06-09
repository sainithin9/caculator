function square(side){
    return (side*side);
}
function triangle(height,base){
    return (0.5*height*base);
}
function rectangle(length,width){
    return (length*width);
}
function circle(radius){
    return (Math.PI*radius*radius);
}
function trig(){
    const v1=document.getElementById("nrm")
    const v2=document.getElementById("tr")
    const v3=document.getElementById("ars")
    v2.style.display="block"
    v3.style.display="none"
    v1.style.display="none";
}
function areea(){
    const v1=document.getElementById("nrm")
    const v2=document.getElementById("tr")
    const v3=document.getElementById("ars")
    v2.style.display="none"
    v3.style.display="block"
    v1.style.display="none";
}