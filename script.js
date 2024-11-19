var image ='';
var image_names=['1.jfif','2.jfif','3.jfif','4.jfif','5.jfif','6.jfif','7.jfif','8.jfif','9.jfif','10.jfif'];

image = `<div>
    <img src ="Images/${image_names[0]}" onclick=previewImages(this.src) >
</div>
<div>
    <img src ="Images/${image_names[1]}" onclick=previewImages(this.src) >
</div>
<div>
    <img src ="Images/${image_names[2]}" onclick=previewImages(this.src) >
</div>
<div>
    <img src ="Images/${image_names[3]}" onclick=previewImages(this.src) >
</div>
<div>
    <img src ="Images/${image_names[4]}" onclick=previewImages(this.src) >
</div>
<div>
    <img src ="Images/${image_names[5]}" onclick=previewImages(this.src) >
</div>
<div>
    <img src ="Images/${image_names[6]}" onclick=previewImages(this.src) >
</div>
<div>
    <img src ="Images/${image_names[7]}" onclick=previewImages(this.src) >
</div>
<div>
    <img src ="Images/${image_names[8]}" onclick=previewImages(this.src) >
</div>
<div>
    <img src ="Images/${image_names[9]}" onclick=previewImages(this.src) >
</div>
`;

document.getElementById('gallery_image').innerHTML =image;
    
function previewImages(image_data){
    document.getElementById('preview_image').setAttribute('src',image_data);
}   