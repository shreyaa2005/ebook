document.addEventListener("DOMContentLoaded", function () {
    const pdfUrl = "The_Descent_of_Man_Adrian_Desmond.pdf";

    document.getElementById("readNow").addEventListener("click", function () {
        window.open(pdfUrl, "_blank");
    });

    document.getElementById("downloadNow").addEventListener("click", function () {
        const anchor = document.createElement("a");
        anchor.href = pdfUrl;
        anchor.download = "The_Descent_of_Man_Adrian_Desmond.pdf";
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
    });

    document.getElementById("likeButton").addEventListener("click", function () {
        let likedBooks = JSON.parse(localStorage.getItem("library")) || [];
        let book = {
            title: "The Descent of Man",
            author: "Adrian Desmond",
            image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1458726385i/185407.jpg",
            page: "descent_of_man.html"
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