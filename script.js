import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAZMXBbStSpVC0cY3iZpWSgNnThXHjDRNE",
    authDomain: "adslzweb.firebaseapp.com",
    projectId: "adslzweb",
    storageBucket: "adslzweb.firebasestorage.app",
    messagingSenderId: "728846463963",
    appId: "1:728846463963:web:ef72c03c782a36758d6dfe"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function carregarAnuncios() {
    console.log("🔄 Iniciando carregamento de anúncios...");

    const adContainer = document.getElementById("ad-container");
    adContainer.innerHTML = "<p>Carregando anúncios...</p>";

    try {
        const querySnapshot = await getDocs(collection(db, "anuncios_v2"));

        if (querySnapshot.empty) {
            adContainer.innerHTML = "<p>Nenhum anúncio disponível.</p>";
            console.warn("⚠ Nenhum anúncio encontrado no Firestore.");
            return;
        }

        adContainer.innerHTML = ""; // Limpa a mensagem de carregamento

        querySnapshot.forEach((doc) => {
            const anuncio = doc.data();
            console.log("✅ Anúncio carregado:", anuncio);

            // Criando o layout do anúncio
            const adCard = document.createElement("div");
            adCard.classList.add("ad-card");

            adCard.innerHTML = `
                <div class="ad-container">
                    <img class="ad-img" src="${anuncio.imagem}" alt="${anuncio.titulo}">
                    <div class="ad-info">
                        <h2>${anuncio.titulo}</h2>
                        <p>${anuncio.descricao}</p>
                    </div>
                    <a class="ad-button" href="${anuncio.link}" target="_blank">Visitar</a>
                </div>
            `;

            adContainer.appendChild(adCard);
        });

    } catch (error) {
        console.error("❌ Erro ao carregar anúncios:", error);
        adContainer.innerHTML = "<p>Erro ao carregar anúncios.</p>";
    }
}

carregarAnuncios();
