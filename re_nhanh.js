console.log("Hello JS!")
console.log('\n== if/else if / else==');


const danhSachSV = [
  { name: 'Bình', score: 8.5, class: '10A' },
  { name: 'Đạt', score: 7.0, class: '10B' },
  { name: 'An', score: 8.5, class: '10A' },
  { name: 'Ánh', score: 4.5, class: '10B' },
  { name: 'Cường', score: 6.0, class: '10A' }
];

danhSachSV.forEach((sv) => {
  console.log(`   - ${sv.name} (${sv.score} điểm): ${xepLoai(sv.score)}`);
});
console.log('4) Nhóm theo lớp:', nhomTheoLop(danhSachSV));
console.log('5) Top 3 điểm cao nhất:', diemcao(danhSachSV, 3));

 function diemTrungBinh(ds) {
  if (ds.length === 0) return 0;
  return ds.reduce((tong, sv) => tong + sv.score, 0) / ds.length;
}

 function layTen(ds) {
  return ds.map((sv) => sv.name).toSorted((a, b) => a.localeCompare(b, 'vi'));
}
 

 function xepLoai(diem) {
  if (diem >= 8) return 'Giỏi';
  if (diem >= 6.5) return 'Khá';
  if (diem >= 5) return 'Trung bình';
  return 'Yếu';
}


function nhomTheoLop(ds) {
  return ds.reduce((kq, sv) => {
    kq[sv.class] = [...(kq[sv.class] || []), sv];
    return kq;
  }, {});
}


 function diemcao(ds, n) {
  return ds
    .toSorted((a, b) => b.score - a.score || a.name.localeCompare(b.name, 'vi'))
    .slice(0, n);
}


console.log('1) Điểm trung bình:', diemTrungBinh(danhSachSV));
console.log('2) Danh sách tên (A-Z):', layTen(danhSachSV));
console.log('3) Xếp loại từng sinh viên:');
danhSachSV.forEach((sv) => {
  console.log(`   - ${sv.name} (${sv.score} điểm): ${xepLoai(sv.score)}`);
});
console.log('4) Nhóm theo lớp:', nhomTheoLop(danhSachSV));
console.log('5) Top 3 điểm cao nhất:', diemcao(danhSachSV, 3));