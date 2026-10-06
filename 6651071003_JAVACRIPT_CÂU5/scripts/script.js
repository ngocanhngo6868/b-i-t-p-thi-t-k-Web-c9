/* Lưu các file javascript (.js) */

// Danh sách các hình ảnh theo yêu cầu đề bài gồm URL, chiều rộng và chiều cao[cite: 18]
const imagesArray = [
    {
        url: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
        width: "240",
        height: "160"
    },
    {
        url: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
        width: "320",
        height: "195"
    },
    {
        url: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
        width: "500",
        height: "343"
    }
];

// Hàm hiển thị hình ảnh ngẫu nhiên khi nhấp vào nút "Show Image" sử dụng jQuery[cite: 18]
function display_random_image() {
    // Chọn ngẫu nhiên một phần tử trong mảng imagesArray
    let randomIndex = Math.floor(Math.random() * imagesArray.length);
    let selectedImage = imagesArray[randomIndex];

    // Tạo thẻ img thông qua jQuery
    let $imgElement =$('<img>', {
        src: selectedImage.url,
        width: selectedImage.width,
        height: selectedImage.height,
        alt: "Random Image"
    });

    let $container =$('#image-container');
    
    // Xóa ảnh cũ và chèn ảnh mới vào khung chứa trên giao diện bằng jQuery
    $container.empty().append($imgElement);

    // Xuất thông báo kiểm tra qua Console
    console.log(`Đã hiển thị ngẫu nhiên ảnh bằng jQuery: ${selectedImage.url}`);
}

// Gắn sự kiện click cho nút bằng jQuery khi tài liệu đã sẵn sàng
$(document).ready(function() {$('#jsstyle').on('click', function() {
        display_random_image();
    });
});