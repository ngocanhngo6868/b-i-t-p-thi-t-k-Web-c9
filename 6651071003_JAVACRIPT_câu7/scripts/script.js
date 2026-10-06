/* Lưu các file javascript (.js) */

// Sử dụng jQuery để xử lý sự kiện submit form và hiển thị hộp thoại xác nhận (confirm)
$(document).ready(function() {$('#linkForm').on('submit', function(event) {
        // Ngăn chặn hành vi load lại trang mặc định của form
        event.preventDefault();

        let url = $('#linkInput').val().trim();

        if (url === "") {
            alert("Vui lòng nhập đường link!");
            return;
        }

        // Đảm bảo URL có định dạng hợp lệ (thêm http:// nếu người dùng quên)
        if (!url.startsWith("http://") && !url.startsWith("https://")) {
            url = "https://" + url;
        }

        // Hiển thị dialog xác nhận (Windows dialog / confirm)[cite: 20]
        let userConfirmed = confirm(`Bạn có chắc chắn muốn chuyển hướng đến trang: ${url} không?`);

        // Nếu người dùng chọn OK thì chuyển đến trang liên kết, nếu Cancel thì không thực hiện gì cả[cite: 20]
        if (userConfirmed) {
            console.log(`Đã chuyển hướng đến: ${url}`);
            window.location.href = url;
        } else {
            console.log("Đã hủy chuyển hướng.");
        }
    });
});