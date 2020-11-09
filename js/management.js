
console.log('test');
function loadImage(obj) {
    document.getElementById('preview').innerHTML = '<p>preview</p>';
    var fileReader = new FileReader();
    fileReader.onload = (function (e) {
        document.getElementById('preview').innerHTML += '<img id="preview_image" src="' + e.target.result + '">';
    });
    fileReader.readAsDataURL(obj.files[0]);
}