document.addEventListener("DOMContentLoaded", function () {
    const pdfUrl = "The_Quantum_World-Quantum_Physics_for_Everyone_Kenneth_W_Ford.pdf";

    document.getElementById("readNow").addEventListener("click", function () {
        window.open(pdfUrl, "_blank");
    });

    document.getElementById("downloadNow").addEventListener("click", function () {
        const anchor = document.createElement("a");
        anchor.href = pdfUrl;
        anchor.download = "The_Quantum_World-Quantum_Physics_for_Everyone_Kenneth_W_Ford.pdf";
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
    });

    document.getElementById("likeButton").addEventListener("click", function () {
        let likedBooks = JSON.parse(localStorage.getItem("library")) || [];
        let book = {
            title: "The Quantum World Quantum Physics for Everyone",
            author: "Kenneth W Ford",
            image: "https://media.oceanofpdf.com/2025/03/PDF-EPUB-The-Quantum-World-Quantum-Physics-for-Everyone-by-Kenneth-W.-Ford-Download.jpg",
            page: "physics.html"
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