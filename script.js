document.addEventListener("DOMContentLoaded", function () {
    let canvas = document.getElementById("scratchCanvas");
    let ctx = canvas.getContext("2d");

    canvas.width = 300;
    canvas.height = 150;

    // Fill canvas with a scratchable layer
    ctx.fillStyle = "#bbb";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Load text under the scratch layer
    let hiddenText = "Your Challenge: Save ₹500 in 3 Days!";
    ctx.font = "18px Arial";
    ctx.fillStyle = "black";
    ctx.fillText(hiddenText, 50, 75);

    let isScratching = false;

    function scratch(e) {
        if (!isScratching) return;
        let rect = canvas.getBoundingClientRect();
        let x = e.touches ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
        let y = e.touches ? e.touches[0].clientY - rect.top : e.clientY - rect.top;

        ctx.globalCompositeOperation = "destination-out";
        ctx.beginPath();
        ctx.arc(x, y, 15, 0, Math.PI * 2);
        ctx.fill();
    }

    canvas.addEventListener("mousedown", () => (isScratching = true));
    canvas.addEventListener("mouseup", () => (isScratching = false));
    canvas.addEventListener("mousemove", scratch);
});
