document.addEventListener("DOMContentLoaded", () => {
    console.log("🔄 Iniciando carregamento manual de anúncios...");

    const container = document.getElementById("ad-container");

    if (!container) {
        console.error("❌ ERRO: O container do anúncio não foi encontrado no HTML.");
        return;
    }

    const anuncio = {
        descricao: "Anuncie aqui",
        imagem: "https://firebasestorage.googleapis.com/v0/b/adslzweb.appspot.com/o/anuncio01.png?alt=media",
        link: "https://www.google.com.br/",
        titulo: "Oferta Especial"
    };

    container.innerHTML = `
        <div style="display: flex; align-items: center; border: 1px solid #ddd; padding: 10px; max-width: 320px;">
            <img src="${anuncio.imagem}" alt="Anúncio" style="width: 50px; height: 50px; margin-right: 10px;" 
                onerror="this.src='https://via.placeholder.com/50x50?text=Erro';">
            <div>
                <h3 style="margin: 0; font-size: 14px;">${anuncio.titulo}</h3>
                <p style="margin: 0; font-size: 12px;">${anuncio.descricao}</p>
                <a href="${anuncio.link}" target="_blank" style="color: blue; text-decoration: none; font-size: 12px;">Ver mais</a>
            </div>
        </div>
    `;

    console.log("✅ Anúncio adicionado manualmente!");
});
