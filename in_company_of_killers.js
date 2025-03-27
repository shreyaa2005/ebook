document.addEventListener("DOMContentLoaded", function () {
    const pdfUrl = "In_the_Company_of_Killers_Elora_Cook.pdf";

    document.getElementById("readNow").addEventListener("click", function () {
        window.open(pdfUrl, "_blank");
    });

    document.getElementById("downloadNow").addEventListener("click", function () {
        const anchor = document.createElement("a");
        anchor.href = pdfUrl;
        anchor.download = "In_the_Company_of_Killers_Elora_Cook.pdf";
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
    });

    document.getElementById("likeButton").addEventListener("click", function () {
        let likedBooks = JSON.parse(localStorage.getItem("library")) || [];
        let book = {
            title: "In the Company of Killers",
            author: "Elora Cook",
            image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1721323658i/215749849.jpg",
            page: "in_company_of_killers.html"
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