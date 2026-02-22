const addTask = document.getElementById("addTask");
const container = document.getElementById("taskAddContainer");
const textarea = document.getElementById("taskInput");
const saveButton = document.getElementById("saveButton");
const cancelButton = document.getElementById("cancelButton");
const taskList = document.getElementById("taskList");

addTask.addEventListener("click", function () {
    container.style.display = "block";
    addTask.style.display = "none";
});

cancelButton.addEventListener("click", function() {
    container.style.display = "none";
    addTask.style.display = "inline-block";
    textarea.value = "";
});

saveButton.addEventListener("click", function () {
    const taskText = textarea.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    li.appendChild(span);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    editButton.addEventListener("click", function () {
        const currentText = span.textContent;
        const input = document.createElement("input");
        input.type = "text";
        input.value = currentText;

        const saveEditButton = document.createElement("button");
        saveEditButton.textContent = "Save";

        li.innerHTML = "";
        li.appendChild(input);
        li.appendChild(saveEditButton);

        saveEditButton.addEventListener("click", function () {
            const updatedText = input.value.trim();
            if (updatedText === "") return;

            span.textContent = updatedText;

            li.innerHTML = "";
            li.appendChild(span);
            li.appendChild(editButton);
            li.appendChild(deleteButton);
        });
    });

    deleteButton.addEventListener("click", function () {
        li.remove();
    });

    textarea.value = "";
    container.style.display = "none";
    addTask.style.display = "inline-block";
});