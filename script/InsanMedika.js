function myFunction() {
    var x = document.getElementById("myNav");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
  }
  let menu = document.querySelector('#bars');
  let navbar = document.querySelector('.navbar');

//   let popupContainer = document.querySelector('.sectionB .pop-up');
// //   let popupBox = popupContainer.querySelector('.popup')
//   let closeButton = popupContainer.querySelector('.bx-x');

//     document.querySelector('.btn').onclick = () => {
//         // console.log('Button clicked');
//         popupContainer.classList.toggle('active');
//     };

//     closeButton.onclick = () => {
//         // console.log('ClosedButton clicked');
//         popupContainer.classList.remove('active');
//     };

// Get the elements needed for the popup functionality
document.addEventListener('DOMContentLoaded', () => {
    let popupContainer = document.querySelector('.pop-up');
    let popupBox = popupContainer ? popupContainer.querySelector('.popup') : null;

    let uploadButton = document.querySelector('.btn');
    if (uploadButton && popupContainer && popupBox) {
        uploadButton.onclick = () => {
            popupContainer.style.display = 'flex';
            popupBox.classList.add('active');
        };

        let closeButton = popupBox.querySelector('.bx-x');
        if (closeButton) {
            closeButton.onclick = () => {
                popupBox.classList.remove('active');
                popupContainer.style.display = 'none';
            };
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab-btn');
    const all_content = document.querySelectorAll('.tab_content');
    const foot = document.querySelector('.footer');

    tabs[0].classList.add('active');
    all_content[0].style.display = 'block';
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            tabs.forEach(tab => {
                tab.classList.remove('active')
            });
            tab.classList.add('active');
            all_content.forEach(content => {
                content.style.display = 'none'; 
            });
            all_content[index].style.display = 'block'; 
            if(index === 1){
                foot.classList.add('active');
            }else{
                foot.classList.remove('active');
            }
        })
    })
});

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




//   let popupContainer = document.querySelector('.pop-up');
//   let popupBox = popupContainer.querySelectorAll('.popup');
  
//   document.querySelectorAll('.food-box .food').forEach(food =>{
//       food.onclick = () =>{
//        popupContainer.style.display = 'flex';
//           let name = food.getAttribute('data-name');
//           popupBox.forEach(popup =>{
//               let target = popup.getAttribute('data-target');
//               if(name == target){
//                   popup.classList.add('active');
//               }
//           });
//       };
//   });
  
//   popupBox.forEach(close =>{
//       close.querySelector('.bx-x').onclick = () =>{
//           close.classList.remove('active');
//           popupContainer.style.display = 'none';
//       }
//   });

