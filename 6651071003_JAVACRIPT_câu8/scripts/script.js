/* Lưu các file javascript (.js) */

$(document).ready(function() {
    let selectedOperator = "+"; // Mặc định là phép cộng

    // Xử lý chọn toán tử (+, -, *, /)
    $('.op-btn').on('click', function() {
        $('.op-btn').removeClass('active');$(this).addClass('active');
        selectedOperator = $(this).attr('data-op');
    });

    // Kích hoạt mặc định nút cộng
    $('.op-btn[data-op="+"]').addClass('active');

    // Xử lý tính toán khi nhấn nút
    $('#btnCalculate').on('click', function() {
        let num1Val = $('#num1').val().trim();
        let num2Val = $('#num2').val().trim();

        // Kiểm tra validate dữ liệu nhập vào
        if (num1Val === "" || num2Val === "" || isNaN(num1Val) || isNaN(num2Val)) {
            alert("Vui lòng nhập đầy đủ hai số hợp lệ!");
            return;
        }

        let num1 = parseFloat(num1Val);
        let num2 = parseFloat(num2Val);
        let calculationResult = 0;

        // Thực hiện phép tính dựa trên toán tử được chọn
        switch (selectedOperator) {
            case "+":
                calculationResult = num1 + num2;
                break;
            case "-":
                calculationResult = num1 - num2;
                break;
            case "*":
                calculationResult = num1 * num2;
                break;
            case "/":
                if (num2 === 0) {
                    alert("Không thể chia cho số 0!");
                    return;
                }
                calculationResult = num1 / num2;
                break;
        }

        // Hiển thị kết quả ra giao diện và console
        $('#result').text(calculationResult);
        console.log(`Phép tính: ${num1} ${selectedOperator} ${num2} = ${calculationResult}`);
    });
});