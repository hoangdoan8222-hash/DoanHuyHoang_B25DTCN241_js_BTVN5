const rawAppointment = {
    appointmentCode: "APT-2026-1024",
    patientName: "   nguyen van hai   ",
    phone: "0912345678",
    appointmentDate: "02/10/2026",
    appointmentTime: "08:30",
    doctorName: "Nguyen Van Hai",
    department: "Khoa Tim Mach"
};

let patientName = rawAppointment.patientName.trim().toLowerCase();

const nameParts = patientName.split(" ");
let formattedName = "";

for (let i = 0; i < nameParts.length; i++) {
    if (nameParts[i] !== "") {
        formattedName += nameParts[i].charAt(0).toUpperCase();
        formattedName += nameParts[i].slice(1);

        if (i < nameParts.length - 1) {
            formattedName += " ";
        }
    }
}

let maskedPhone = "";

if (rawAppointment.phone.length === 10) {
    maskedPhone =
        rawAppointment.phone.slice(0, 3) +
        "***" +
        rawAppointment.phone.slice(6);
} else {
    maskedPhone = "So dien thoai khong hop le";
}

let smsMessage = "";

if (rawAppointment.phone.length !== 10) {
    smsMessage = "Khong the tao SMS: So dien thoai khong hop le.";
} else if (rawAppointment.department === "") {
    smsMessage = "Khong the tao SMS: Chua xac dinh chuyen khoa.";
} else {
    smsMessage = `Phong kham nhac lich: ${formattedName}, lich kham ${rawAppointment.appointmentDate} luc ${rawAppointment.appointmentTime}, BS ${rawAppointment.doctorName}, ${rawAppointment.department}. SDT: ${maskedPhone}. Ma lich: ${rawAppointment.appointmentCode}.`;
}

console.log("========== CLINIC SMS ==========");
console.log(smsMessage);
console.log("Do dai SMS:", smsMessage.length, "ky tu");

if (smsMessage.length <= 160) {
    console.log("Trang thai: Hop le");
} else {
    console.log("Trang thai: Vuot qua 160 ky tu");
}