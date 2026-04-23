function markAttendance() {
    const name = document.getElementById("name").value;
    
    if (name === "") {
        alert("Enter name");
        return;
    }

    const list = document.getElementById("list");

    const li = document.createElement("li");
    li.textContent = name + " - Present";

    list.appendChild(li);

    document.getElementById("name").value = "";
}
