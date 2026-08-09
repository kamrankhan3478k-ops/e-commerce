function toggleFields() {
    var field = document.getElementById("hidden-fields");
    if (field.style.display === "none" || field.style.display === "") {
        field.style.display = "block";
    } else {
        field.style.display = "none";
    }
}