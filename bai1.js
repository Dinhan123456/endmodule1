let n = +prompt("Nhập số phần tử của mảng (n <= 50):");
let arr = [];
for (let i = 0; i < n; i++) {
    let num = +prompt(`Nhập phần tử thứ ${i + 1}:`);
    arr[i] = +(num);
}
let sum = 0;
let count = 0;
for (let i = 0; i < n; i++) {
    if (i % 2 === 0 && arr[i] % 2 !== 0) {
        sum += arr[i];
        count++;
    }
}
let average = 0;
if (count > 0) {
    average = sum / count;
}
if (count > 0) {
    document.write("Trung bình cộng các số lẻ ở vị trí chẵn là: " + average);
} else {
    document.write("Không có số lẻ ở vị trí chẵn.");
}