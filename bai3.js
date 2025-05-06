let danhSachSach = [];

function themSach() {
    let ma = document.getElementById("maSach").value.trim();
    let ten = document.getElementById("tenSach").value.trim();
    let nam = +(document.getElementById("namXB").value);
    let so = +(document.getElementById("soQuyen").value);
    let tinhTrang = document.getElementById("tinhTrang").value === "true";

    if (ma.length !== 5) {
        alert("Mã sách phải đúng 5 ký tự: ");
        return;
    }

    let kyTuDau = +ma.charAt(0);
    let bonKyTuSau = ma.slice(1);

    if (isNaN(kyTuDau)) {
        alert("Ký tự đầu tiên phải là số từ 1 đến 5.");
        return;
    }

    if (isNaN(bonKyTuSau) || bonKyTuSau.length !== 4) {
        alert("4 ký tự sau phải là chữ số.");
        return;
    }
    if (ten === "") {
        alert("Tên sách không được để trống.");
        return;
    }

    if (isNaN(nam) || nam < 1000 || nam > new Date().getFullYear()) {
        alert("Năm xuất bản không hợp lệ.");
        return;
    }

    if (isNaN(so) || so <= 0) {
        alert("Số quyển phải là số lớn hơn 0.");
        return;
    }

    danhSachSach.push({
        maSach: ma,
        tenSach: ten,
        namXB: nam,
        soQuyen: so,
        tinhTrang: tinhTrang
    });

    hienThiDanhSach(danhSachSach);

    document.getElementById("maSach").value = "";
    document.getElementById("tenSach").value = "";
    document.getElementById("namXB").value = "";
    document.getElementById("soQuyen").value = "";
    document.getElementById("tinhTrang").value = "true";

    alert("Thêm sách thành công!");
}

function hienThiDanhSach(ds) {
    let tbody = document.getElementById("noiDungBang");
    tbody.innerHTML = "";
    ds.forEach(sach => {
        let row = `<tr>
                    <td>${sach.maSach}</td>
                    <td>${sach.tenSach}</td>
                    <td>${sach.namXB}</td>
                    <td>${sach.soQuyen}</td>
                    <td>${sach.tinhTrang ? "Chưa mượn" : "Đã mượn"}</td>
                </tr>`;
        tbody.innerHTML += row;
    });
}

function hienThiSachChuaMuon() {
    let loc = danhSachSach.filter(sach => sach.tinhTrang === true);
    hienThiDanhSach(loc);
}

function hienThiToanBo() {
    hienThiDanhSach(danhSachSach);
}