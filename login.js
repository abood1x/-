const adminCredentials = {
    username: "admin",
    password: "password123"
};

document.getElementById('login-btn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === adminCredentials.username && password === adminCredentials.password) {
        sessionStorage.setItem('loggedIn', 'true'); // تخزين حالة تسجيل الدخول
        window.location.href = 'admin.html';
    } else {
        document.getElementById('login-message').innerText = 'اسم المستخدم أو كلمة المرور غير صحيحة.';
    }
});
