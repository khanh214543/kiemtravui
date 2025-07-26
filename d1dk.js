document.getElementById('register').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('new-username').value.trim();
    const password = document.getElementById('new-password').value.trim();

    if (!username && !password) {
        alert('Xin vui lòng điền thông tin');
    } else if (!username) {
        alert('Xin vui lòng điền tên');
    } else if (!password) {
        alert('Xin vui lòng nhập mật khẩu');
    } else {
        alert('Đăng ký thành công!');
    }
});
window.addEventListener('load', function() {
    document.body.classList.add('fade-in');
});

