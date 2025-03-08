function showGuidance() {
    let component = document.getElementById("component").value;
    let guidanceText = "";

    switch(component) {
        case "resistor":
            guidanceText = `🟤 Điện trở:\n- Chỉnh đồng hồ về chế độ đo điện trở (Ω).\n- Kẹp hai que đo vào hai đầu điện trở.\n- Đọc giá trị hiển thị trên màn hình.`;
            break;
        case "capacitor":
            guidanceText = `🟡 Tụ điện:\n- Chọn chế độ đo điện dung.\n- Kẹp hai que đo vào hai chân tụ.\n- Nếu giá trị gần đúng thì tụ còn tốt.`;
            break;
        case "inductor":
            guidanceText = `🟢 Cuộn cảm:\n- Dùng LCR meter để đo chính xác.\n- Nếu không có, kiểm tra bằng cách đo điện trở cuộn dây.`;
            break;
        case "diode":
            guidanceText = `🔴 Điốt:\n- Chọn chế độ đo diode.\n- Kẹp que đỏ vào Anode, que đen vào Cathode.\n- Nếu có giá trị hiển thị là diode còn tốt.`;
            break;
        case "transistor":
            guidanceText = `🔵 Transistor:\n- Đo điện áp Base-Emitter để kiểm tra.\n- MOSFET: Kiểm tra thay đổi điện trở Drain-Source.`;
            break;
        default:
            guidanceText = "⚠️ Hãy chọn một loại linh kiện để xem hướng dẫn.";
    }

    document.getElementById("guidance").innerText = guidanceText;
}

function checkValue() {
    let component = document.getElementById("component").value;
    let value = parseFloat(document.getElementById("measuredValue").value);
    let resultText = "";

    if (isNaN(value) || value <= 0) {
        resultText = "⚠️ Giá trị đo không hợp lệ!";
    } else {
        switch(component) {
            case "resistor":
                resultText = value >= 1 && value <= 1e6 ? "✅ Điện trở hợp lý!" : "⚠️ Điện trở không hợp lệ!";
                break;
            case "capacitor":
                resultText = value >= 1e-12 && value <= 1e-3 ? "✅ Điện dung hợp lý!" : "⚠️ Tụ điện không hợp lệ!";
                break;
            case "inductor":
                resultText = value >= 1e-6 && value <= 1 ? "✅ Cuộn cảm hợp lý!" : "⚠️ Cuộn cảm không hợp lệ!";
                break;
            case "diode":
                resultText = value >= 0.1 && value <= 0.7 ? "✅ Điện áp thuận hợp lý!" : "⚠️ Điốt có vấn đề!";
                break;
            case "transistor":
                resultText = value >= 0.6 && value <= 0.7 ? "✅ Điện áp Base-Emitter hợp lý!" : "⚠️ Transistor có vấn đề!";
                break;
            default:
                resultText = "⚠️ Hãy chọn linh kiện trước!";
        }
    }

    document.getElementById("checkResult").innerText = resultText;
}
