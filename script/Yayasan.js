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


