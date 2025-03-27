document.addEventListener("DOMContentLoaded", function () {
    const pdfUrl = "Pride_and_prejudice_Jane_austine.pdf";

    document.getElementById("readNow").addEventListener("click", function () {
        window.open(pdfUrl, "_blank");
    });

    document.getElementById("downloadNow").addEventListener("click", function () {
        const anchor = document.createElement("a");
        anchor.href = pdfUrl;
        anchor.download = "Pride_and_prejudice_Jane_austine.pdf";
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
    });

    document.getElementById("likeButton").addEventListener("click", function () {
        let likedBooks = JSON.parse(localStorage.getItem("library")) || [];
        let book = {
            title: "Pride and prejudice",
            author: "Jane Austine",
            image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1668566890i/63331519.jpg",
            page: "pap.html"
        };

        if (!likedBooks.some(b => b.title === book.title)) {
            likedBooks.push(book);
            localStorage.setItem("library", JSON.stringify(likedBooks));
            alert("Book added to your library! 📚");
        } else {
            alert("This book is already in your library.");
        }
    });
});