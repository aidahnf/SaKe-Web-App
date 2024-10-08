    document.addEventListener('DOMContentLoaded', function() {
        var loginModal = document.getElementById("loginModal");
        var registerModal = document.getElementById("registerModal");
        var loginBtn = document.getElementById("loginBtn");
        var registerBtn = document.getElementById("registerBtn");
        var closeLoginBtn = document.getElementsByClassName("close")[0];
        var closeRegisterBtn = document.getElementsByClassName("close")[1];

        loginBtn.onclick = function() {
            loginModal.style.display = "block";
        }

        closeLoginBtn.onclick = function() {
            loginModal.style.display = "none";
        }

        document.getElementById("registerBtn").addEventListener("click", function(event) {
            event.preventDefault();
            loginModal.style.display = "none"; 
            registerModal.style.display = "block"; 
        });

        document.getElementById("loginBtn2").addEventListener("click", function(event) {
            event.preventDefault();
            loginModal.style.display = "block"; 
            registerModal.style.display = "none"; 
        });

        closeRegisterBtn.onclick = function() {
            registerModal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == loginModal) {
                loginModal.style.display = "none";
            }
            if (event.target == registerModal) {
                registerModal.style.display = "none";
            }
        }
    });

    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        // Validate NIK
        const nik = document.getElementById('nik').value;
        if (nik.length !== 16) {
            alert('NIK harus 16 karakter.');
            event.preventDefault();
            return;
        }

        // Validate Email
        const email = document.getElementById('email').value;
        const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        if (!emailPattern.test(email)) {
            alert('Email harus merupakan email @gmail.com yang valid.');
            event.preventDefault();
            return;
        }

        // Validate Phone Number
        const phone = document.getElementById('phone').value;
        if (!phone.startsWith('+62')) {
            alert('Nomor telepon harus berawalan +62.');
            event.preventDefault();
            return;
        }
    });

    const passwordField = document.getElementById("password");
    const togglePassword = document.querySelector(".password-toggle-icon i");

    togglePassword.addEventListener("click", function () {
        if (passwordField.type === "password") {
            passwordField.type = "text";
            togglePassword.classList.remove("fa-eye");
            togglePassword.classList.add("fa-eye-slash");
        } else {
            passwordField.type = "password";
            togglePassword.classList.remove("fa-eye-slash");
            togglePassword.classList.add("fa-eye");
        }
    });