document.addEventListener("DOMContentLoaded", function () {
    console.log("🔄 Teste manual de anúncio iniciado...");

    const container = document.getElementById("ad-container");
    container.innerHTML = ""; // Limpa qualquer conteúdo anterior

    // Simulação de um anúncio (dados estáticos)
    const anuncioTeste = {
        titulo: "Oferta Especial",
        descricao: "Anuncie aqui",
        imagem: "https://firebasestorage.googleapis.com/v0/b/adslzweb.appspot.com/o/anuncio01.png?alt=media&token=4c27ccc1-8cdf-405f-a070-742a710e9028",
        link: "https://www.google.com.br/"
    };

    // Criando um card de anúncio
    const adCard = document.createElement("div");
    adCard.classList.add("ad-card");
    
    adCard.innerHTML = `
        <img src="${anuncioTeste.imagem}" alt="${anuncioTeste.titulo}" onerror="this.src='https://via.placeholder.com/100x100?text=Erro';">
        <div class="ad-content">
            <h2 class="ad-title">${anuncioTeste.titulo}</h2>
            <p class="ad-description">${anuncioTeste.descricao}</p>
        </div>
        <a class="ad-button" href="${anuncioTeste.link}" target="_blank">Visitar</a>
    `;

    container.appendChild(adCard);
    console.log("✅ Teste manual concluído: Anúncio carregado.");
});
