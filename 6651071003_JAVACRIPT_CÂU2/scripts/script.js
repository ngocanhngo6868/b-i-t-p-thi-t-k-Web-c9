

// Hàm xử lý DOM và jQuery để lấy giá trị First name và Last name khi submit form[cite: 17]
function getFormvalue(event) {
    // Ngăn chặn hành vi load lại trang mặc định của form submit
    event.preventDefault();

    // Sử dụng jQuery để lấy giá trị từ các input thông qua thuộc tính name
    let firstName = $('input[name="fname"]').val();
    let lastName = $('input[name="lname"]').val();

    let message = `Họ và tên: ${firstName} ${lastName}`;

    // Hiển thị kết quả ra giao diện web và console
    $('#result-text').text(message);
    console.log(message);
}

// Gắn sự kiện submit cho form sử dụng jQuery
$(document).ready(function() {$('#form1').on('submit', function(event) {
        getFormvalue(event);
    });
});