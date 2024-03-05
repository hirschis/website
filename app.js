let index = 1;

document.getElementById("1").style.display = "block";

document.addEventListener("mousemove", (event) => {
    const imgOffset = document.body.offsetWidth / 10;
    new_index = Math.max(Math.min(Math.ceil(event.pageX / imgOffset), 10),1);
    if (new_index != index) {
        document.getElementById(index.toString()).style.display = "none";
        index = new_index;
        document.getElementById(index.toString()).style.display = "block";
    }
});
//copyright linus ziegler


