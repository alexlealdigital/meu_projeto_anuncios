document.addEventListener("DOMContentLoaded", function () {
    console.log("🔄 Teste manual de anúncio iniciado...");

    const container = document.getElementById("ad-container");
    container.innerHTML = ""; // Limpa qualquer conteúdo anterior

    // Simulação de um anúncio (dados estáticos)
    const anuncioTeste = {
        titulo: "Oferta Especial",
        descricao: "Anuncie aqui!",
        imagem: "https://firebasestorage.googleapis.com/v0/b/adslzweb.appspot.com/o/anuncio01.png?alt=media&token=4c27ccc1-8cdf-405f-a070-742a710e9028",
        link: "https://www.google.com.br/"
    };

    // Criando um card de anúncio
    const adCard = document.createElement("div");
    adCard.classList.add("ad-card");

    adCard.innerHTML = `
        <div style="display: flex; align-items: center; border: 1px solid #ddd; padding: 10px; max-width: 350px; border-radius: 8px; background-color: #f9f9f9;">
            <img src="${anuncioTeste.imagem}" alt="${anuncioTeste.titulo}" onerror="this.src='https://placehold.co/100x100?text=Erro'" style="width: 50px; height: 50px; border-radius: 8px; margin-right: 10px;">
            <div style="flex-grow: 1;">
                <h2 style="font-size: 14px; margin: 0;">${anuncioTeste.titulo}</h2>
                <p style="font-size: 12px; color: #555; margin: 0;">${anuncioTeste.descricao}</p>
            </div>
            <a href="${anuncioTeste.link}" target="_blank" style="background-color: #007bff; color: white; padding: 8px 12px; border-radius: 5px; text-decoration: none; font-size: 12px;">Visitar</a>
        </div>
    `;

    container.appendChild(adCard);
    console.log("✅ Teste manual concluído: Anúncio carregado.");
});
