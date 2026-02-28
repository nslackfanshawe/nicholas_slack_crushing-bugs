console.log("JavaScript File is linked");

const labels = document.querySelectorAll(".label");
const targetZones = document.querySelectorAll(".target-zone");
let currentDraggedElement = null;

//add variable for reset button;
//comment
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

