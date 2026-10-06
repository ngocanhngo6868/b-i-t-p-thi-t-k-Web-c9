/* Lưu các file javascript (.js) */

$(document).ready(function() {
    // 1. Nút "Clear": Xóa toàn bộ dữ liệu đã nhập[cite: 6]
    $('#btnClear').on('click', function() {
        $('#regForm')[0].reset();
        console.log("Đã xóa tất cả dữ liệu trên form.");
    });

    // 2. Nút "Finished": Kiểm tra validate dữ liệu[cite: 6]
    $('#btnFinished').on('click', function() {
        let name = $('#txtName').val().trim();
        let sex = $('input[name="sex"]:checked').val();
        let email = $('#txtEmail').val().trim();
        let birthday = $('#txtBirthday').val().trim();
        let address = $('#txtAddress').val().trim();
        let city = $('#txtCity').val().trim();
        let region = $('#selectRegion').val();
        let zip = $('#txtZip').val().trim();

        // Kiểm tra các trường có dấu * không được rỗng hoặc chưa chọn[cite: 6]
        if (name === "") {
            alert("Vui lòng nhập tên (Enter name)!");
            $('#txtName').focus();
            return;
        }
        if (!sex) {
            alert("Vui lòng chọn giới tính (Sex)!");
            return;
        }
        if (email === "") {
            alert("Vui lòng nhập địa chỉ email!");
            $('#txtEmail').focus();
            return;
        }

        // Kiểm tra định dạng Email: phải có duy nhất 1 dấu '@'. Phía trước có tên account (nhiều nhất 1 dấu chấm). Phía sau có domain (ít nhất 1 dấu chấm)[cite: 6]
        let atIndex = email.indexOf('@');
        let lastAtIndex = email.lastIndexOf('@');
        if (atIndex === -1 || atIndex !== lastAtIndex || atIndex === 0 || atIndex === email.length - 1) {
            alert("Email không hợp lệ (sai cấu trúc dấu @)!");
            $('#txtEmail').focus();
            return;
        }
        let accountPart = email.substring(0, atIndex);
        let domainPart = email.substring(atIndex + 1);
        
        // Account có nhiều nhất 1 dấu chấm
        let dotCountInAccount = (accountPart.match(/\./g) || []).length;
        if (dotCountInAccount > 1) {
            alert("Phần tên account trước dấu @ có nhiều nhất 1 dấu chấm!");
            $('#txtEmail').focus();
            return;
        }
        // Domain phải có ít nhất 1 dấu chấm và không nằm ở đầu/cuối domain
        let dotCountInDomain = (domainPart.match(/\./g) || []).length;
        if (dotCountInDomain < 1 || domainPart.startsWith('.') || domainPart.endsWith('.')) {
            alert("Phần domain phía sau dấu @ phải có ít nhất 1 dấu chấm hợp lệ!");
            $('#txtEmail').focus();
            return;
        }

        // Kiểm tra Ngày tháng năm sinh: dạng mm/dd/yyyy hoặc mm-dd-yyyy (tháng 1-12, năm nhỏ hơn năm hiện tại)[cite: 6]
        if (birthday === "") {
            alert("Vui lòng nhập ngày sinh!");
            $('#txtBirthday').focus();
            return;
        }
        let dateRegex = /^(\d{2})([\/-])(\d{2})\2(\d{4})$/;
        let dateMatch = birthday.match(dateRegex);
        if (!dateMatch) {
            alert("Ngày sinh phải đúng định dạng MM/DD/YYYY hoặc MM-DD-YYYY!");
            $('#txtBirthday').focus();
            return;
        }
        let month = parseInt(dateMatch[1], 10);
        let day = parseInt(dateMatch[3], 10);
        let year = parseInt(dateMatch[4], 10);
        let currentYear = new Date().getFullYear();

        if (month < 1 || month > 12 || day < 1 || day > 31) {
            alert("Tháng phải từ 1-12 và ngày phải hợp lệ!");
            $('#txtBirthday').focus();
            return;
        }
        if (year >= currentYear) {
            alert("Năm sinh phải nhỏ hơn năm hiện tại (" + currentYear + ")!");
            $('#txtBirthday').focus();
            return;
        }

        // Kiểm tra các trường thông tin bắt buộc còn lại
        if (address === "") {
            alert("Vui lòng nhập địa chỉ đường (Street address)!");
            $('#txtAddress').focus();
            return;
        }
        if (city === "") {
            alert("Vui lòng nhập thành phố (City)!");
            $('#txtCity').focus();
            return;
        }
        if (region === "") {
            alert("Vui lòng chọn vùng (Region)!");
            return;
        }

        // Kiểm tra Zip code: có đúng 5 chữ số[cite: 6]
        let zipRegex = /^\d{5}$/;
        if (!zipRegex.test(zip)) {
            alert("ZIP code phải có đúng 5 chữ số!");
            $('#txtZip').focus();
            return;
        }

        // Nếu tất cả hợp lệ
        alert("Đăng ký thành công! Dữ liệu hợp lệ.");
        console.log("Form validation thành công và được gửi đi.");
    });
});