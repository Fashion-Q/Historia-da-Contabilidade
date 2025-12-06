const sections = {
    ontem: ["section-ontem", "section-ontem2"],
    hoje: ["section-hoje", "section-hoje2"],
    amanha: ["section-amanha", "section-amanha2"]
};

function mostrarSecao(id) {
    for (const key in sections) {
        sections[key].forEach(sec => {
            document.getElementById(sec).style.display = (key === id) ? "block" : "none";
        });
    }
}

// BOTÕES (imagens clicáveis)

document.getElementById("ontem").addEventListener("click", () => mostrarSecao("ontem"));
document.getElementById("hoje").addEventListener("click", () => mostrarSecao("hoje"));
document.getElementById("amanha").addEventListener("click", () => mostrarSecao("amanha"));


// Estado inicial -> mostrar somente "Hoje"
mostrarSecao("hoje");
