function mostrarDica() {
    const dicas = [
        "🐞 Utilize inimigos naturais para controlar as pragas.",
        "🌿 Faça rotação de culturas para reduzir infestações.",
        "📊 Monitore a lavoura regularmente.",
        "🚜 Adote o Manejo Integrado de Pragas (MIP).",
        "💧 Mantenha a irrigação equilibrada para evitar doenças."
    ];

    const numeroAleatorio = Math.floor(Math.random() * dicas.length);

    alert(dicas[numeroAleatorio]);
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("Site de Controle de Pragas carregado com sucesso!");
});
