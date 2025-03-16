// Importa Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Configuração Firebase
const firebaseConfig = {
    apiKey: "SUA_API_KEY",
    authDomain: "adslzweb.firebaseapp.com",
    projectId: "adslzweb",
    storageBucket: "adslzweb.appspot.com",
    messagingSenderId: "728846463963",
    appId: "1:728846463963:web:ef72c03c782a36758d6dfe"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Função para carregar anúncios
async function carregarAnuncios() {
    const adContainer = document.getElementById("ad-container");
    adContainer.innerHTML = "<p>Carregando anúncios...</p>";

    try {
        const querySnapshot = await getDocs(collection(db, "anuncios"));
        if (!querySnapshot.empty) {
            adContainer.innerHTML = ""; // Limpa conteúdo antes de exibir

            querySnapshot.forEach((doc) => {
                const ad = doc.data();
                console.log("Anúncio carregado:", ad);

                // Criando o layout do anúncio
                const adElement = document.createElement("div");
                adElement.classList.add("ad-card");

                adElement.innerHTML = `
                    <img src="${ad.imagem}" alt="Anúncio">
                    <div class="ad-text">
                        <h2>${ad.titulo}</h2>
                        <p>${ad.descricao}</p>
                    </div>
                    <a href="${ad.link}" target="_blank">Visitar</a>
                `;

                adContainer.appendChild(adElement);
            });
        } else {
            adContainer.innerHTML = "<p>Nenhum anúncio disponível.</p>";
        }
    } catch (error) {
        console.error("Erro ao carregar anúncios:", error);
        adContainer.innerHTML = "<p>Erro ao carregar anúncios.</p>";
    }
}

// Chama a função ao carregar a página
carregarAnuncios();
