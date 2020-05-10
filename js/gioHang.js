var keyLocalStorageItemGioHang = 'danhSachItemGioHang';
// y/c theem sản phẩm vào giỏ hàng
// input : idSanPham, gio hàng cũ
// output:giỏ hàng sau khi đc thêm

function themSanPhamVaoGioHang(idSanPham, gioHang){
    /*thêm sp vào giỏ: in: id sanphaamr ............ out: giỏ hàng */
    var gioHangSauKhiDuocThem = gioHang;
    var itemGioHang =  taoDoiTuongitemGioHang(idSanPham, 1);   
    gioHangSauKhiDuocThem.push(itemGioHang);
    return gioHangSauKhiDuocThem;
}

// tạo ra đối tượng
function taoDoiTuongitemGioHang(idSanPham, soLuong) {
    var itemGioHang = new Object();
    itemGioHang.idSanPham = idSanPham;
    itemGioHang.soLuong = soLuong;

    return itemGioHang;
}
// lấy d/s item giỏ hàng
// y/c lấy giỏ hàng từ local storage
function layDanhSachItemGioHang() {
    var danhSachItemGioHang = new Array();

    var jsonDanhSachItemGioHang = localStorage.getItem(keyLocalStorageItemGioHang);
    if (jsonDanhSachItemGioHang != null)
        danhSachItemGioHang = JSON.parse(jsonDanhSachItemGioHang);

    return danhSachItemGioHang;
}
// y/c luu trữ giỏ hàng xuống local
// input gioHang
function luuDanhSachItemGioHangVaoLocalStorege(danhSachItemGioHang) {
    // B1.chuyển giỏ hang thành json
    var jsonDanhSachItemGioHang = JSON.stringify(danhSachItemGioHang);

    localStorage.setItem(keyLocalStorageItemGioHang, jsonDanhSachItemGioHang);
}
function remove(idSanPham){
    var itemGioHang = this.layDanhSachItemGioHang();
    var xoaItemGioHang = new Array();
    for(let i =0; i< itemGioHang.length; i++){
        var item = itemGioHang[i];
        if(item.id != idSanPham){
            xoaItemGioHang.push(item);
        }
    }
    this.luuDanhSachItemGioHangVaoLocalStorege(xoaItemGioHang);
    return xoaItemGioHang;
}
function dangKi(){
    if (kiemTraFormDangKi() == true ){
        console.log("thực hiện đăng kí");
        alert("Bạn đã đăng kí thành công .");
    }else{
        alert("Mời bạn kiểm tra lại .");
    }
    
}

// kiểm tra form đk hợp lệ hay kh
function kiemTraFormDangKi(){
    var hopLe = true;
    // kiểm tra
    // b1.truy cập node
    var nodeHoTen = document.getElementById("hoTen");
    var nodeSoDienThoai = document.getElementById("soDienThoai");
    var nodeDiaChi = document.getElementById("diaChi");
    var nodeEmail = document.getElementById("Email");
    var nodePass = document.getElementById("Pass");
    var hoTen = nodeHoTen.value;
    var soDienThoai = nodeSoDienThoai.value;
    var diaChi = nodeDiaChi.value;
    var Email = nodeEmail.value;
    var Pass = nodePass.value;
    console.log("Họ tên là : " + hoTen);
    console.log("Số điện thoại là : " + soDienThoai);
    console.log("địa chỉ là : " + diaChi);
    console.log("Email là : " + Email);
    console.log("Pass là : " + Pass);

    var nodeThongBaoLoiHoTen = document.getElementById("thongBaoLoiHoTen");
    var nodeThongBaoLoiSoDienThoai = document.getElementById("thongBaoLoiSoDienThoai");
    var nodeThongBaoLoiDiaChi = document.getElementById("thongBaoLoiDiaChi");
    var nodeThongBaoLoiEmail = document.getElementById("thongBaoLoiEmail");
    var nodeThongBaoLoiPass = document.getElementById("thongBaoLoiPass"); 
    nodeThongBaoLoiHoTen.innerHTML = '';
    nodeThongBaoLoiSoDienThoai.innerHTML = '';
    nodeThongBaoLoiDiaChi.innerHTML = '';
    nodeThongBaoLoiEmail.innerHTML = '';
    nodeThongBaoLoiPass.innerHTML = '';
    


    // b2.kiểm tra dữ liệu có hợp lệ kh
    if (hoTen.length > 5 && hoTen.length < 50) {
        nodeThongBaoLoiHoTen.innerHTML = "";
    }
    else {
        nodeThongBaoLoiHoTen.innerHTML = "Họ và tên phải lớn hơn 5 kí tự và nhỏ hơn 50 kí tự";
        hopLe = false;
    }

    var setPhone = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    if (setPhone.test(soDienThoai)) {
        nodeThongBaoLoiSoDienThoai.innerHTML = "";
    }
    else {
        nodeThongBaoLoiSoDienThoai.innerHTML = "Số điện thoại không đúng";
        hopLe = false;
    }

    if (nodeDiaChi == null || diaChi.length < 5 || diaChi.length > 50) {
        nodeThongBaoLoiDiaChi.innerHTML = "Địa chỉ không đúng";
        hopLe = false;
    }

    var setEmail = /^([a-zA-Z0-9])+\@(([a-zA-Z0-9])+\.)+([a-zA-Z0-9]{2,4})$/;
    if (setEmail.test(Email)) {
        nodeThongBaoLoiEmail.innerHTML = "";
    }
    else {
        nodeThongBaoLoiEmail.innerHTML = "Email không tồn tại";
        hopLe = false;
    }

    var setPassword = /^.*(?=.{5,})(?=..*[0-9])(?=.*[a-z])(?=.*[A-Z]).*$/;
    if (setPassword.test(Pass)) {
        nodeThongBaoLoiPass.innerHTML = "";
    }
    else {
        nodeThongBaoLoiPass.innerHTML = "Password phải có 1 kí tự hoa, 1 kí tự số, 1 chữ thường";
        hopLe = false;
    }
    return hopLe;
}