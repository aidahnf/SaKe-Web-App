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

document.addEventListener("DOMContentLoaded", function() {
    const dropdownButton = document.querySelector(".custom");
    const dropdownMenu = document.querySelector(".dropdown");
    const selectButton = document.querySelector(".select-btn");
    const checkboxes = document.querySelectorAll(".dropdown input[type='checkbox']");
    const boxes = document.querySelectorAll(".box1");



    dropdownButton.addEventListener("click", function() {
        dropdownMenu.classList.toggle("show");
    });

    selectButton.addEventListener("click", function() {
        const selectedLocations = Array.from(checkboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.name);

        if (selectedLocations.length === 0) {
            // Jika tidak ada lokasi yang dipilih, tampilkan semua elemen
            boxes.forEach(box => {
                box.style.display = "block";
            });
        } else {
            // Tampilkan elemen berdasarkan lokasi yang dipilih
            boxes.forEach(box => {
                const boxLocation = box.getAttribute("data-location");
                if (selectedLocations.includes(boxLocation)) {
                    box.style.display = "block";
                } else {
                    box.style.display = "none";
                }
            });
        }

        

        dropdownMenu.classList.remove("show");
    });
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


document.getElementById('searchInput').addEventListener('input', function() {
    let searchValue = this.value.toLowerCase();
    let results = document.querySelectorAll('.box1');

    results.forEach(function(result) {
        let name = result.getAttribute('data-name').toLowerCase();
        let location = result.getAttribute('data-location').toLowerCase();
        if (name.includes(searchValue) || location.includes(searchValue)) {
            result.classList.add('show');
        } else {
            result.classList.remove('show');
        }
    });
});

document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    let searchValue = document.getElementById('searchInput').value.toLowerCase();
    let results = document.querySelectorAll('.box1');

    results.forEach(function(result) {
        let name = result.getAttribute('data-name').toLowerCase();
        let location = result.getAttribute('data-location').toLowerCase();
        if (name.includes(searchValue) || location.includes(searchValue)) {
            result.classList.add('show');
        } else {
            result.classList.remove('show');
        }
    });
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

    // // Validate Phone Number
    // const phone = document.getElementById('phone').value;
    // if (!phone.startsWith('+62')) {
    //     alert('Nomor telepon harus berawalan +62.');
    //     event.preventDefault();
    //     return;
    // }
});


