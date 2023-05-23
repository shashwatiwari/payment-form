function showPopup() {
    document.getElementById("popup").style.display = "block";
    document.getElementById("content").style.display = "none";
}

function hidePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("content").style.display = "block";
}

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username === "example" && password === "password") {
        window.location.href = "paymentForm.html"
        hidePopup();
    } else {
        alert("Incorrect username or password.");
    }
});
