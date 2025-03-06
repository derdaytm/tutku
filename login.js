function checkPassword() {
    const password = document.getElementById("password-input").value;
    const correctPassword = "durmuşilkeri..";  // Şifreyi istediğin gibi değiştir

    if (password === correctPassword) {
        window.location.href = "index.html"; // Ana sayfaya yönlendir
    } else {
        document.getElementById("error-message").style.display = "block";
    }
}

// Enter tuşuna basıldığında giriş yapmasını sağla
document.getElementById("password-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        checkPassword();
    }
});
