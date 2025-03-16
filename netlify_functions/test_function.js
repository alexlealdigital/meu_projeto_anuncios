async function carregarAnuncios() {
    const container = document.getElementById("ad-container");
    if (!container) {
        console.error("Erro: Elemento #ad-container não encontrado no HTML.");
        return;
    }

    container.innerHTML = "<p>Carregando anúncios...</p>";

    try {
        const querySnapshot = await getDocs(collection(db, "anuncios_v2"));
        container.innerHTML = "";

        if (querySnapshot.empty) {
            container.innerHTML = "<p>Nenhum anúncio disponível.</p>";
            return;
        }

        querySnapshot.forEach((doc) => {
            const data = doc.data();
            console.log("Anúncio carregado:", data);

            const ad = document.createElement("div");
            ad.classList.add("ad-card");

            ad.innerHTML = `
                <h2>${data.titulo}</h2>
                <p>${data.descricao}</p>
                <img src="${data.imagem}" alt="Anúncio">
                <a href="${data.link}" target="_blank">Ver mais</a>
            `;
            container.appendChild(ad);
        });

    } catch (error) {
        container.innerHTML = `<p>Erro ao carregar anúncios: ${error.message}</p>`;
        console.error("Erro ao carregar anúncios:", error);
    }
}
