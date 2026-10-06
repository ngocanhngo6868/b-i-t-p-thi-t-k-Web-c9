/* Lưu các file javascript (.js) */

// Hàm áp dụng DOM và jQuery để xóa giá trị đang chọn khỏi dropdown list khi nhấn nút[cite: 18]
function removecolor() {
    // Lấy option đang được chọn trong #colorSelect sử dụng jQuery
    let selectedOption = $('#colorSelect option:selected');

    // Kiểm tra xem có phần tử nào được chọn hay không
    if (selectedOption.length === 0) {
        alert("Vui lòng chọn một mục cần xóa!");
        return;
    }

    let removedText = selectedOption.text();

    // Xóa option đang chọn khỏi dropdown list bằng jQuery
    selectedOption.remove();

    // Xuất thông báo kiểm tra qua Console
    console.log(`Đã xóa thành công mục: ${removedText} bằng jQuery!`);
}

// Gắn sự kiện click cho nút bằng jQuery khi tài liệu đã sẵn sàng
$(document).ready(function() {$('#removeBtn').on('click', function() {
        removecolor();
    });
});