

// Hàm xử lý sự kiện khi người dùng nhấn nút Submit/Style áp dụng DOM kết hợp jQuery[cite: 16]
function js_style() {
    // Sử dụng jQuery để chọn phần tử có id 'text' và thay đổi các thuộc tính style
    $('#text').css({
        'font-size': '24px',
        'font-family': 'Comic Sans MS, cursive, sans-serif',
        'color': '#e74c3c'
    });

    // Xuất thông báo kiểm tra qua Console
    console.log("Đã thay đổi style của đoạn văn bản thành công bằng jQuery!");
}

// Gắn sự kiện click trực tiếp bằng jQuery cho nút #jsstyle
$(document).ready(function() {
    $('#jsstyle').on('click', function() {
        js_style();
    });
});