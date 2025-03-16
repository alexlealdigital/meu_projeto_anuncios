// Importa o Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "SUA_API_KEY",
    authDomain: "adslzweb.firebaseapp.com",
    projectId: "adslzweb",
    storageBucket: "adslzweb.appspot.com",
    messagingSenderId: "728846463963",
    appId: "1:728846463963:web:ef72c03c782a36758d6dfe"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 🔥 Função para carregar anúncios do Firestore
async function carregarAnuncios() {
    console.log("🔄 Buscando anúncios do Firestore...");
    const container = document.getElementById("ad-container");

    if (!container) {
        console.error("❌ ERRO: Container do anúncio não encontrado.");
        return;
    }

    try {
        const querySnapshot = await getDocs(collection(db, "anuncios"));
        container.innerHTML = ""; // Limpa antes de carregar

        if (querySnapshot.empty) {
            container.innerHTML = "<p>Nenhum anúncio encontrado.</p>";
            return;
        }

        querySnapshot.forEach((doc) => {
            const anuncio = doc.data();

            container.innerHTML += `
                <div style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    border: 1px solid #ddd;
                    padding: 10px;
                    max-width: 320px;
                    background: #fff;
                    border-radius: 8px;
                    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
                    margin-bottom: 10px;
                ">
                    <img src="${anuncio.imagem}" alt="Anúncio" style="width: 50px; height: 50px; border-radius: 4px; margin-right: 10px;"
                        onerror="this.src='https://via.placeholder.com/50x50?text=Erro';">
                    
                    <div style="flex-grow: 1; text-align: center;">
                        <h3 style="margin: 0; font-size: 14px; color: #333;">${anuncio.titulo}</h3>
                        <p style="margin: 0; font-size: 12px; color: #777;">${anuncio.descricao}</p>
                    </div>

                    <a href="${anuncio.link}" target="_blank" style="
                        background: #007bff;
                        color: white;
                        padding: 5px 10px;
                        border-radius: 4px;
                        text-decoration: none;
                        font-size: 12px;
                    ">Ver</a>
                </div>
            `;

            console.log("✅ Anúncio carregado:", anuncio);
        });

    } catch (error) {
        console.error("❌ Erro ao buscar anúncios:", error);
        container.innerHTML = "<p>Erro ao carregar anúncios.</p>";
    }
}

// Chama a função ao carregar a página
document.addEventListener("DOMContentLoaded", carregarAnuncios);
