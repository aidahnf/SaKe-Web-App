document.addEventListener('DOMContentLoaded', function() {
    var buttonTambah = document.getElementById("buttonTambah");
    var closebuttonTambah = document.getElementsByClassName("close")[0];

    buttonTambah.onclick = function() {
        registerModal.style.display = "block";
    }

    closebuttonTambah.onclick = function() {
        registerModal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == registerModal) {
            registerModal.style.display = "none";
        }
    }
});

