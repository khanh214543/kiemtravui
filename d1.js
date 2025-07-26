document.getElementById("login").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "123") {
        window.location.href = "kiemtravui.html"; // Trang chuyển đến nếu đăng nhập thành công
    } else {
        alert("Sai tên đăng nhập hoặc mật khẩu!");
    }
});
document.querySelector('.Dk').addEventListener('click', function() {
    window.location.href = 'd1dk.html'; // hoặc '../d1-register.html' nếu bạn đổi tên file
});
// Chờ trang tải xong thì thêm class "fade-in" cho body
window.addEventListener('load', function() {
    document.body.classList.add('fade-in');
});
