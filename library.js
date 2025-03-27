document.addEventListener("DOMContentLoaded", function () {
    let libraryContent = document.getElementById("libraryContent");
    let likedBooks = JSON.parse(localStorage.getItem("library")) || [];

    function updateLibrary() {
        localStorage.setItem("library", JSON.stringify(likedBooks));
        displayBooks();
    }

    function displayBooks() {
        libraryContent.innerHTML = "";
        if (likedBooks.length === 0) {
            libraryContent.innerHTML = "<p style='text-align: center;'>No books liked yet.</p>";
            return;
        }
        likedBooks.forEach((book, index) => {
            let bookDiv = document.createElement("div");
            bookDiv.classList.add("book");
            bookDiv.innerHTML = `
                <img src="${book.image}" alt="${book.title}" style="width:150px;height:auto;">
                <h3>${book.title}</h3>
                <p>by ${book.author}</p>
                <button class="remove-btn" data-index="${index}">Remove</button>
            `;

            // Remove book from library when "Remove" button is clicked
            bookDiv.querySelector(".remove-btn").addEventListener("click", function (event) {
                event.stopPropagation(); // Prevent any unwanted clicks on the bookDiv
                likedBooks.splice(index, 1);
                updateLibrary();
            });

            libraryContent.appendChild(bookDiv);
        });
    }

    displayBooks();
});
