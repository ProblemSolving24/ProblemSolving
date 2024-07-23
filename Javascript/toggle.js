function showDescription(id) {
    var descriptions = document.getElementsByClassName("description");
    for (var i = 0; i < descriptions.length; i++) {
        descriptions[i].style.display = "none";
    }
    var description = document.getElementById(id);
    if (description.style.display === "none") {
        description.style.display = "block";
    } else {
        description.style.display = "none";
    }
}