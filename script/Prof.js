document.addEventListener('DOMContentLoaded', function() {
    var changesModal = document.getElementById("changesModal");
    var ubahBtn = document.getElementById("UbahBtn");
    var closeBtn = document.getElementById("close");

    ubahBtn.onclick = function() {
        changesModal.style.display = "block";
    }

    closeBtn.onclick = function() {
        changesModal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == changesModal) {
            changesModal.style.display = "none";
        }
    }
});

  document.getElementById('bars').addEventListener('click', function() {
        const menu = document.getElementById('navbarMenu');
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }
    });

function showMessage() {
    alert("Data berhasil disimpan!");
    setTimeout(function() {
        window.location.href = "Prof.html";
    }, 10); // Redirect after 1 second (1000 milliseconds)
}

