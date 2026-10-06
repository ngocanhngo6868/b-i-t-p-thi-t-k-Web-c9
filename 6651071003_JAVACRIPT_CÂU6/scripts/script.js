


// Hàm áp dụng DOM và jQuery để đếm và xuất tất cả các mục trong dropdown list ra cửa sổ thông báo[cite: 19]
function getOptions() {
    let $options =$('#mySelect option');
    let count = $options.length;
    let itemsText = [];

    // Duyệt qua từng option để lấy nội dung văn bản bằng jQuery
    $options.each(function() {
        itemsText.push($(this).text());
    });

    // Tạo chuỗi thông báo kết quả
    let message = `Tổng số lượng mục: ${count}\nCác mục gồm: ${itemsText.join(', ')}`;

    // Hiển thị ra cửa sổ cảnh báo (alert) của trình duyệt
    alert(message);

    // Xuất thông báo kiểm tra qua Console
    console.log(message);
}

// Gắn sự kiện click cho nút bằng jQuery khi tài liệu đã sẵn sàng
$(document).ready(function() {$('#countBtn').on('click', function() {
        getOptions();
    });
});