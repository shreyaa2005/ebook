document.addEventListener("DOMContentLoaded", function () {
    const pdfUrl = "the_deal_elle_kenedy.pdf";

    document.getElementById("readNow").addEventListener("click", function () {
        window.open(pdfUrl, "_blank");
    });

    document.getElementById("downloadNow").addEventListener("click", function () {
        const anchor = document.createElement("a");
        anchor.href = pdfUrl;
        anchor.download = "the_deal_elle_kenedy.pdf";
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
    });

    document.getElementById("likeButton").addEventListener("click", function () {
        let likedBooks = JSON.parse(localStorage.getItem("library")) || [];
        let book = {
            title: "The Deal",
            author: "Elle Kennedy",
            image: "https://tse4.mm.bing.net/th?id=OIP.3sIe21xgmAt4GWKdu2VgXQHaLX&pid=Api&P=0&h=220.jpg",
            page: "the_deal.html"
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