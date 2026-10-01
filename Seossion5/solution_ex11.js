const patientCode = "MED-2026-HN";

const medicalCode = patientCode.slice(0, 3);
const year = patientCode.slice(4, 8);
const location = patientCode.slice(9, 11);

console.log("Mã hồ sơ:", patientCode);
console.log("Mã y tế:", medicalCode);
console.log("Năm:", year);
console.log("Khu vực:", location);