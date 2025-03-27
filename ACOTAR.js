document.addEventListener("DOMContentLoaded", function () {
    const pdfUrl = "ACOTAR.pdf";

    document.getElementById("readNow").addEventListener("click", function () {
        window.open(pdfUrl, "_blank");
    });

    document.getElementById("downloadNow").addEventListener("click", function () {
        const anchor = document.createElement("a");
        anchor.href = pdfUrl;
        anchor.download = "ACOTAR.pdf";
        anchor.click();
    });

    document.getElementById("likeButton").addEventListener("click", function () {
        let likedBooks = JSON.parse(localStorage.getItem("library")) || [];
        let book = {
            title: "A Court Of Thorns And Roses",
            author: "Sarah J Maas",
            image: "https://tse4.mm.bing.net/th?id=OIP.3sIe21xgmAt4GWKdu2VgXQHaLX&pid=Api&P=0&h=220.jpg",
            page: window.location.origin + "/book_info/ACOTAR.html" // Dynamic path
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