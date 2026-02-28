console.log("JavaScript File is linked");

const labels = document.querySelectorAll(".label");
const targetZones = document.querySelectorAll(".target-zone");
const resetButton = document.querySelector("#reset-btn");
const labelBox = document.querySelector("#label-box");
const originalLabels = Array.from(labels);
let currentDraggedElement = null;

//add variable for reset button;
//event listeners
labels.forEach(label => {
    label.addEventListener("dragstart", dragStart);
})

function dragStart() {
    console.log("Started Dragging");
    currentDraggedElement = this;
}

targetZones.forEach(zone => {
    zone.addEventListener("dragover", dragOver);
    zone.addEventListener("drop", dropped);
})

function dragOver(e){
    console.log("Drag over called")
    e.preventDefault();
}

function dropped(e) {
    e.preventDefault();
    console.log("dropped");

    
    if(this.firstElementChild){
        return;
    }

    this.appendChild(currentDraggedElement);
    currentDraggedElement = null;
}

function moveLabelBack(label) {
    labelBox.appendChild(label);
}

function resetLabels() {
    originalLabels.forEach(moveLabelBack);
}

resetButton.addEventListener("click", resetLabels);