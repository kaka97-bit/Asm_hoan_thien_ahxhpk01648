var viTriHienTai = 0;
let danhSachItemSlider = document.getElementsByClassName('item-slider');
let chayauto = true;
// them su kien hover
let nodeSlider = document.getElementById('slider');

nodeSlider.addEventListener('mouseover',()=>{
    chayauto = !chayauto;
});
nodeSlider.addEventListener('mouseout',()=>{
    chayauto = !chayauto;
})

hienThiItemSlider(viTriHienTai);
loadChamTron();

setInterval(autoChuyenHinh,3000); // thời gian tính bằng milisecond, ví dụ : 1000 tương đương 1 giây
function autoChuyenHinh(){
    if(chayauto)
    XemAnhSau();
}

function xemAnhTruoc() {
    viTriHienTai = viTriHienTai - 1;
    if (viTriHienTai <0) {
        viTriHienTai = danhSachItemSlider.length -1;
    }
    
    hienThiItemSlider(viTriHienTai);
}

function XemAnhSau() {
    if (viTriHienTai == danhSachItemSlider.length - 1) {
        viTriHienTai = 0;
    }
    else {
        viTriHienTai = viTriHienTai + 1;
    }
    hienThiItemSlider(viTriHienTai);
}


function hienThiItemSlider(viTri) {

    for (var i = 0; i < danhSachItemSlider.length; i++) 
        danhSachItemSlider[i].style.display = 'none';
    
    danhSachItemSlider[viTri].style.display = 'block';
    
}

function loadChamTron(){
    let nodeCham = document.getElementById('khungChamTron');

    for (let i = 0; i < danhSachItemSlider.length; i++) {
        let nodeChamTron = document.createElement('div');
        nodeChamTron.className = 'nut-cham-tron';
        nodeChamTron.addEventListener('click',()=>{
            hienThiItemSlider(i);
        });
        nodeCham.append(nodeChamTron);
    }
}