import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAZMXBbStSpVC0cY3iZpWSgNnThXHjDRNE",
    authDomain: "adslzweb.firebaseapp.com",
    projectId: "adslzweb",
    storageBucket: "adslzweb.appspot.com",
    messagingSenderId: "728846463963",
    appId: "1:728846463963:web:ef72c03c782a36758d6dfe"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function carregarAnuncios() {
    console.log("🔄 Iniciando carregamento de anúncios...");

    const adContainer = document.getElementById("ad-container");
    adContainer.innerHTML = "<p>Carregando anúncios...</p>";

    try {
        const querySnapshot = await getDocs(collection(db, "anuncios"));
        console.log("QuerySnapshot:", querySnapshot); // Verifique se há documentos

        if (querySnapshot.empty) {
            adContainer.innerHTML = "<p>Nenhum anúncio disponível.</p>";
            console.warn("⚠ Nenhum anúncio encontrado no Firestore.");
            return;
        }

        adContainer.innerHTML = ""; // Limpa a mensagem de carregamento
        
        querySnapshot.forEach((doc) => {
            const anuncio = doc.data();
            console.log("Documento:", doc.id, "=>", anuncio); // Verifique os dados de cada documento

            const adCard = document.createElement("div");
            adCard.classList.add("ad-card");

            adCard.innerHTML = `
                <img src="${anuncio.imagem}" alt="Anúncio">
                <div class="ad-text">
                    <strong>${anuncio.titulo}</strong><br>
                    ${anuncio.descricao}
                </div>
                <a href="${anuncio.link}" target="_blank">Visitar</a>
            `;

            adContainer.appendChild(adCard);
        });

    } catch (error) {
        console.error("❌ Erro ao carregar anúncios:", error);
        adContainer.innerHTML = "<p>Erro ao carregar anúncios.</p>";
    }
}

carregarAnuncios();
