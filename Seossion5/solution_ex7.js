const assignments = [
    "BS.nguyen_van_hai-KHOA_TIM_MACH-08:30-PHONG_302",
    "BS.tran_thi_lan-KHOA_NHI-09:00-PHONG_205",
    "BS.le_hoang_nam-KHOA_NOI_TONG_QUAT-10:30-PHONG_401"
];

for (let i = 0; i < assignments.length; i++) {
    const data = assignments[i].split("-");

    let doctorName = data[0].replace("BS.", "");
    doctorName = doctorName.replaceAll("_", " ");

    const doctorWords = doctorName.toLowerCase().split(" ");
    let formattedDoctorName = "";

    for (let j = 0; j < doctorWords.length; j++) {
        formattedDoctorName += doctorWords[j].charAt(0).toUpperCase() + doctorWords[j].slice(1);

        if (j < doctorWords.length - 1) {
            formattedDoctorName += " ";
        }
    }

    const department = data[1]
        .toLowerCase()
        .replaceAll("_", " ");

    const departmentWords = department.split(" ");
    let formattedDepartment = "";

    for (let j = 0; j < departmentWords.length; j++) {
        formattedDepartment += departmentWords[j].charAt(0).toUpperCase() + departmentWords[j].slice(1);

        if (j < departmentWords.length - 1) {
            formattedDepartment += " ";
        }
    }

    const examinationTime = data[2];

    const roomNumber = data[3].replace("PHONG_", "");
    const room = "Phòng " + roomNumber;

    console.log(`
========================================
       PHÂN CÔNG CA KHÁM
========================================
Bác sĩ       : ${formattedDoctorName}
Chuyên khoa  : ${formattedDepartment}
Giờ khám     : ${examinationTime}
Phòng khám   : ${room}
========================================
`);
}