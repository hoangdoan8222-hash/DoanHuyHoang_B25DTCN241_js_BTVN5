const rawTicketCode = " med-rhm-0815-bhyt ";

const cleanTicketCode = rawTicketCode.trim();
const normalizedCode = cleanTicketCode.toUpperCase();

const isValidCode = normalizedCode.startsWith("MED-");

const departmentCode = normalizedCode.slice(4, 7);
const appointmentNumber = normalizedCode.slice(8, 12);

const isBHYT = normalizedCode.includes("BHYT");

const originalFee = 150000;
let paymentAmount = originalFee;

if (isBHYT) {
    paymentAmount = originalFee * 20 / 100;
}

console.log("=".repeat(35));
console.log("       PHIẾU TIẾP ĐÓN");
console.log("=".repeat(35));

if (isValidCode) {
    console.log(`Mã phiếu       : ${normalizedCode}`);
    console.log(`Chuyên khoa    : ${departmentCode}`);
    console.log(`Số thứ tự      : ${appointmentNumber}`);
    console.log(`BHYT           : ${isBHYT ? "Có" : "Không"}`);
    console.log(`Giá khám       : ${originalFee.toLocaleString("vi-VN")} VNĐ`);
    console.log(`Thanh toán     : ${paymentAmount.toLocaleString("vi-VN")} VNĐ`);
} else {
    console.log("Mã phiếu không hợp lệ!");
}

console.log("=".repeat(35));

const errorCode = " abc-rhm-0815-bhyt ";

const cleanErrorCode = errorCode.trim();
const normalizedErrorCode = cleanErrorCode.toUpperCase();
const isErrorCodeValid = normalizedErrorCode.startsWith("MED-");

console.log("\n--- KIỂM TRA MÃ LỖI ---");
console.log(`Mã nhập vào    : ${normalizedErrorCode}`);
console.log(`Mã hợp lệ      : ${isErrorCodeValid}`);

if (!isErrorCodeValid) {
    console.log("Phản hồi       : Mã phiếu không hợp lệ!");
}