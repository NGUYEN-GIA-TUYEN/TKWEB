function findMax(arr) {
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
if (arr[i] > max) {
max = arr[i];
}
}
return max;
}

// Ví dụ sử dụng
console.log(timGiaTriLonNhat([5, 8, 3, 2, 9])); // Kết quả: 9
