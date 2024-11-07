//input field
const inputData = document.getElementById("task");
//key press action =="enter" key
inputData.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        addTask()
    }
})

function addTask() {
    //grab data from input field
    data = inputData.value;
    if (data != "") {
        //create text node to add to list
        let li = document.createTextNode(data);
        let note = document.createElement("div");
        note.className = "note";
        note.appendChild(li);
        note.contentEditable = false;
        //create buttons
        let divbtn = document.createElement("div");
        divbtn.className = "btns";
        let btn = document.createElement("button");
        btn.innerText = "delete";
        //delete action
        btn.addEventListener("click", function () {
            task.remove();
        })

        let btn1 = document.createElement("button");
        btn1.innerText = "edit";
        //button actions
        btn1.addEventListener("click", function () {
            if (note.contentEditable = true && btn1.innerText === "save") {
                note.contentEditable = false;
                note.style.color = "black";
                btn1.innerText = "edit";
            } else if (note.style.textDecoration === "line-through") {
                note.contentEditable = false;
                note.style.color = "black";
                btn1.innerText = "edit";
            } else {
                note.contentEditable = true;
                note.style.color = "aliceblue";
                btn1.innerText = "save";
            }

        })
        //place buttons in div
        divbtn.appendChild(btn1);
        divbtn.appendChild(btn);
        //create checkbox 
        let chdiv = document.createElement("div");
        chdiv.className = "chkbtn";
        let chk = document.createElement("input");
        chk.className = "check";
        chk.type = "checkbox";
        chk.checked = false;
        let checker = document.createElement("div");
        checker.className = "checker";
        //checkbox actions
        chk.addEventListener("click", function () {
            if (chk.checked = true && note.style.textDecoration === "line-through") {
                chk.checked = false;
                note.style.textDecoration = "none";
                checker.style.backgroundColor = "white";
            } else if (btn1.innerText === "save") {
                chk.checked = false;
            } else {
                chk.checked = true;
                checker.style.backgroundColor = "green";
                note.style.textDecoration = "line-through";

            }
        })
        //place checkmarker in div
        chdiv.appendChild(checker);
        chdiv.appendChild(chk);
        //create div to hold task
        let task = document.createElement("div");
        task.className = "task";

        //add task to list
        task.appendChild(chdiv);
        task.appendChild(note);
        task.appendChild(divbtn);
        document.getElementById("list").appendChild(task);
        //clear input field
        inputData.value = '';

    }
    else {
        alert("Invalid, please add task");
    }

}