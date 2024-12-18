const button = document.getElementById("button");
document.getElementById("input").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addbutton();
        event.preventDefault();
    }
});

button.addEventListener("click", addbutton);

function addbutton() {
    const input = document.getElementById("input").value.trim();

    if (input !== "") {
        const listItem = document.createElement("li");
        listItem.className = "todo-item";

        const taskText = document.createElement("span");
        taskText.textContent = input;

        const delButton = document.createElement("button");
        delButton.textContent = "x";
        delButton.className = "delete-btn";

        delButton.addEventListener("click", function () {
            listItem.remove();
        });

        listItem.appendChild(taskText);
        listItem.appendChild(delButton);
        document.getElementById("container").appendChild(listItem);

        document.getElementById("input").value = "";
    } else {
        alert("Nothing has been entered!");
    }
}

document.getElementById("container").addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
    }
});
