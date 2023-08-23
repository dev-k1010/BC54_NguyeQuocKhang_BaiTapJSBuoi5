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
    return tongDiem;
    // diemDatDuoc = `Đạt`;
    // document.getElementById("ketQua").innerText = diemDatDuoc;
  } else {
    document.getElementById("diemDatDuoc").innerHTML = tongDiem;
    return tongDiem;
    // diemDatDuoc = `Không Đạt`;
    // document.getElementById("ketQua").innerText = diemDatDuoc;
  }
}
