const inputstringEl = document.getElementById("inputstring");
const countEL = document.getElementById("count");
const remainingEL = document.getElementById("remaining");


inputstringEl.addEventListener("keyup", () => {
    updateCounter();
});
function updateCounter() {
    let r = 0;
    countEL.innerText = "Total Characters : " + inputstringEl.value.length;

    if (!(inputstringEl.value.length > 100)) {
        r = 100 - inputstringEl.value.length;
        console.log(r);
    }
    else {
        alert("OOPS!! you can't enter more than 100 Characters..");
        document.getElementById("inputstring").value = "";
    }
    remainingEL.innerText = "Remaining : " + r;
}