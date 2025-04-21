let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "    // 1 -
    saveEl.textContent += countStr   // 1 - 2 - 3 -
   countEl.textContent = 0
   count = 0
    //console.log(saveEl)
}


