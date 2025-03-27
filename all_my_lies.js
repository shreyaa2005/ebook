document.addEventListener("DOMContentLoaded", function () {
    const pdfUrl = "All_my_lies_Nelle_Lamarr.pdf";

    document.getElementById("readNow").addEventListener("click", function () {
        window.open(pdfUrl, "_blank");
    });

    document.getElementById("downloadNow").addEventListener("click", function () {
        const anchor = document.createElement("a");
        anchor.href = pdfUrl;
        anchor.download = "All_my_lies_Nelle_Lamarr.pdf";
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
    });

    document.getElementById("likeButton").addEventListener("click", function () {
        let likedBooks = JSON.parse(localStorage.getItem("library")) || [];
        let book = {
            title: "All My Lies",
            author: "Nelle Lamarr",
            image: "https://media.oceanofpdf.com/2025/03/PDF-EPUB-All-My-Lies-by-Nelle-Lamarr-Download.jpg",
            page: "all_my_lies.html"
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