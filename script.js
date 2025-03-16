// 🔥 Importando Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

// 🔥 Configuração Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAZMXBbStSpVC0cY3iZpWSgNnThXHjDRNE",
    authDomain: "adslzweb.firebaseapp.com",
    projectId: "adslzweb",
    storageBucket: "adslzweb.appspot.com",
    messagingSenderId: "728846463963",
    appId: "1:728846463963:web:ef72c03c782a36758d6dfe"
};

// 🔥 Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 🔥 Função para carregar anúncios
async function carregarAnuncios() {
    console.log("🚀 Iniciando carregamento de anúncios...");
    
    const container = document.getElementById("ad-container");
    if (!container) {
        console.error("❌ ERRO: Elemento #ad-container não encontrado no HTML.");
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
            console.log("✅ Anúncio carregado:", data);

            // 🔥 Criando a estrutura do anúncio dinamicamente
            const ad = document.createElement("div");
            ad.classList.add("ad-card");

            ad.innerHTML = `
                <h2>${data.titulo}</h2>
                <p>${data.descricao}</p>
                <img src="${data.imagem}" alt="Anúncio" onerror="this.src='https://via.placeholder.com/320x50?text=Erro+na+Imagem';">
                <a href="${data.link}" target="_blank">Ver mais</a>
            `;

            container.appendChild(ad);
        });

    } catch (error) {
        container.innerHTML = `<p>Erro ao carregar anúncios: ${error.message}</p>`;
        console.error("❌ Erro ao carregar anúncios:", error);
    }
}

// 🔥 Chama a função quando a página é carregada
document.addEventListener("DOMContentLoaded", () => {
    carregarAnuncios();
});
