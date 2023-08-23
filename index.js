// QUẢN LÝ TUYỂN SINH
function tinhDiemTuyenSinh() {
  // lấy giá trị
  var diemChuan = document.getElementById("diemChuan").value * 1;
  var tongDiemBaMon = document.getElementById("tongDiemBaMon").value * 1;
  var diemKhuVuc = document.getElementById("diemKhuVuc").value * 1;
  var diemDoiTuong = document.getElementById("diemDoiTuong").value * 1;
  //   tính tổng điểm
  tongDiem = tongDiemBaMon + diemKhuVuc + diemDoiTuong;

  if (tongDiem >= diemChuan) {
    document.getElementById("diemDatDuoc").innerHTML = tongDiem;

    document.getElementById("ketQua").innerHTML = "Đạt";
  } else {
    document.getElementById("diemDatDuoc").innerHTML = tongDiem;
    document.getElementById("ketQua").innerHTML = "Không Đạt";
  }
}
// Tính Tiền Điện
function tinhTong() {
  var tenNguoiDung = document.getElementById("tenNguoiDung").value;
  var soKw = document.getElementById("soKw").value * 1;
  var tongTien = 0;
  if (soKw <= 50) {
    tongTien = Math.floor(soKw * 500);
  } else if (soKw <= 100) {
    tongTien = Math.floor(50 * 500 + (soKw - 50) * 650);
  } else if (soKw <= 200) {
    tongTien = Math.floor(50 * 500 + 50 * 650 + (soKw - 100) * 850);
  } else if (soKw <= 350) {
    tongTien = Math.floor(
      50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100
    );
  } else {
    tongTien = Math.floor(
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300
    );
  }
  document.getElementById(
    "tinhTienDien"
  ).innerHTML = ` ${tenNguoiDung} số tiền điện của bạn là: ${tongTien} VNĐ`;
}
// Tính thuế thu nhập
function tinhThue() {
  var tenUser = document.getElementById("userNguoiDung").value;
  var tongThuNhap = document.getElementById("thuNhapNam").value * 1;
  var soNguoi = document.getElementById("soNguoiPhuThuoc").value * 1;
  // var thueThuNhap = 0;
  if (tongThuNhap <= 60) {
    thueThuNhap = (tongThuNhap - 4 - soNguoi * 1.6) * 0.05;
  } else if (tongThuNhap <= 120) {
    thueThuNhap =
      (60 - 4 - soNguoi * 1.6) * 0.05 +
      (tongThuNhap - 60 - 4 - soNguoi * 1.6) * 0.1;
  } else if (tongThuNhap <= 210) {
    thueThuNhap =
      (60 - 4 - soNguoi * 1.6) * 0.05 +
      (59 - 4 - soNguoi * 1.6) * 0.1 +
      (tongThuNhap - 120 - 4 - soNguoi * 1.6) * 0.15;
  } else if (tongThuNhap <= 384) {
    thueThuNhap =
      (60 - 4 - soNguoi * 1.6) * 0.05 +
      (59 - 4 - soNguoi * 1.6) * 0.1 +
      (210 - 119 - 4 - soNguoi * 1.6) * 0.15 +
      (tongThuNhap - 4 - soNguoi * 1.6) * 0.2;
  } else if (tongThuNhap <= 624) {
    thueThuNhap =
      (60 - 4 - soNguoi * 1.6) * 0.05 +
      (59 - 4 - soNguoi * 1.6) * 0.1 +
      (210 - 119 - 4 - soNguoi * 1.6) * 0.15 +
      (384 - 209 - 4 - soNguoi * 1.6) * 0.2 +
      (tongThuNhap - 4 - soNguoi * 1.6) * 0.25;
  } else if (tongThuNhap <= 960) {
    thueThuNhap =
      (60 - 4 - soNguoi * 1.6) * 0.05 +
      (59 - 4 - soNguoi * 1.6) * 0.1 +
      (210 - 119 - 4 - soNguoi * 1.6) * 0.15 +
      (384 - 209 - 4 - soNguoi * 1.6) * 0.2 +
      (624 - 383 - 4 - soNguoi * 1.6) * 0.25 +
      (tongThuNhap - 4 - soNguoi * 1.6) * 0.3;
  } else {
    thueThuNhap =
      (60 - 4 - soNguoi * 1.6) * 0.05 +
      (59 - 4 - soNguoi * 1.6) * 0.1 +
      (210 - 119 - 4 - soNguoi * 1.6) * 0.15 +
      (384 - 209 - 4 - soNguoi * 1.6) * 0.2 +
      (624 - 383 - 4 - soNguoi * 1.6) * 0.25 +
      (960 - 623 - 4 - soNguoi * 1.6) * 0.3 +
      (tongThuNhap - 4 - soNguoi * 1.6) * 0.35;
  }
  document.getElementById(
    "tinhTienThue"
  ).innerHTML = `${tenUser} bạn phải đóng ${thueThuNhap} Triệu tiền thuế`;
}
// Tính tiền cáp
function tinhTienCap() {
  var soKenhThue = document.getElementById("loaiKhachHang").value * 1;
  var soKenh = document.getElementById("kenhThue").value * 1;
  var nhaDan = document.getElementById("nhaDan").value * 1;
  var doanhNghiep = document.getElementById("doanhNghiep").value * 1;
}
