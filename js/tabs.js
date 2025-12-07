const sections = {
    ontem: ["section-ontem", "section-ontem2"],
    hoje: ["section-hoje", "section-hoje2"],
    amanha: ["section-amanha", "section-amanha2"]
};

function mostrarSecao(id) {
    for (const key in sections) {
        sections[key].forEach(sec => {
            document.getElementById(sec).style.display = (key === id) ? "block" : "none";
            let titulo = document.querySelector(`#${key} h2`);
            if (key === id) {
                titulo.style.background = "green";
            } else {
                titulo.style.background = "rgba(0,0,0,0.6)";
            }
        });
    }
}

document.getElementById("ontem").addEventListener("click", () => mostrarSecao("ontem"));
document.getElementById("hoje").addEventListener("click", () => mostrarSecao("hoje"));
document.getElementById("amanha").addEventListener("click", () => mostrarSecao("amanha"));

mostrarSecao("ontem");
