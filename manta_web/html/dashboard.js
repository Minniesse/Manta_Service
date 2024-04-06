document.querySelectorAll(".dock img").forEach(img => {
    img.addEventListener("click", e => {
        e.currentTarget.classList.add("loading");
    });

    img.addEventListener("mousemove", e => {
        let item = e.target;
        let itemRect = item.getBoundingClientRect();
        let offset = Math.abs(e.clientX - itemRect.left) / itemRect.width;

        let prev = item.previousElementSibling || null;
        let next = item.nextElementSibling || null;

        let scale = 0.6;

        document.querySelectorAll(".dock img").forEach(img => {
            img.style.setProperty("--scale", 1);
        });

        if (prev) {
            prev.style.setProperty("--scale", 1 + scale);
        }
        item.style.setProperty("--scale", 1 + scale);
        if (next) {
            next.style.setProperty("--scale", 1 + scale);
        }
    });
});

document.querySelector(".dock").addEventListener("mouseleave", e => {
    resetScale();
});

function resetScale() {
    document.querySelectorAll(".dock img").forEach(img => {
        img.style.setProperty("--scale", 1);
    });
}
