

// Hàm áp dụng DOM và jQuery để thêm 1 hàng vào table khi người dùng nhấn nút "Insert Row"
function insert_Row() {
    // Đếm số lượng hàng hiện tại trong bảng để tạo nội dung tự động tương ứng
    let rowCount = $('#sampleTable tr').length + 1;

    // Sử dụng jQuery để thêm hàng mới (tr) kèm các ô (td) vào cuối bảng (#sampleTable)
    $('#sampleTable').append(`<tr><td>Row${rowCount} cell1</td><td>Row${rowCount} cell2</td></tr>`);

    // Xuất thông báo kiểm tra qua Console
    console.log(`Đã thêm thành công hàng thứ ${rowCount} vào bảng bằng jQuery!`);
}

// Gắn sự kiện click cho nút "Insert Row" sử dụng jQuery khi tài liệu đã sẵn sàng
$(document).ready(function() {$('#insertBtn').on('click', function() {
        insert_Row();
    });
});