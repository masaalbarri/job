document.querySelectorAll('.accordion-header').forEach(item => {
    item.addEventListener('click', () => {
        const panel = document.getElementById(item.dataset.target);
        document.querySelectorAll('.accordion-panel').forEach(p => p.style.display = "none");
        panel.style.display = panel.style.display === "block" ? "none" : "block";
    });
});
