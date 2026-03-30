const apps = [
  {
    name: "WhatsApp",
    category: "Comunicacao",
    type: "usados",
    rating: "★★★★★",
    badge: "💬",
    desc: "Converse com qualquer pessoa",
    img: "https://cdn-icons-png.flaticon.com/512/5968/5968841.png",
    link: "https://play.google.com/store/apps/details?id=com.whatsapp",
    referral: "https://web.whatsapp.com/"
  },
  {
    name: "PayPal",
    category: "Dinheiro",
    type: "diferente",
    rating: "★★★★★",
    badge: "💰",
    desc: "Pague e receba online",
    img: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
    link: "https://play.google.com/store/search?q=paypal&c=apps",
    referral: "https://www.paypal.com/br/home"
  },
  {
    name: "Spotify",
    category: "Entretenimento",
    type: "usados",
    rating: "★★★★★",
    badge: "🎵",
    desc: "Ouça músicas",
    img: "https://cdn-icons-png.flaticon.com/512/174/174872.png",
    link: "https://play.google.com/store/apps/details?id=com.spotify.music",
    referral: "https://open.spotify.com/intl-pt/"
  },
  {
    name: "Duolingo",
    category: "Estudo",
    type: "tendencia",
    badge: "📚",
    rating: "★★★★★",
    desc: "Aprenda idiomas",
    img: "assets/duolingo.png",
    link: "https://play.google.com/store/apps/details?id=com.duolingo",
    referral: "https://www.duolingo.com/"
  },

  {
    name: "ChatGPT",
    category: "IA",
    type: "tendencia",
    badge: "🔥",
    rating: "★★★★★",
    desc: "Aprenda inteligência artificial",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    link: "https://play.google.com/store/apps/details?id=com.openai.chatgpt",
    referral: "https://chatgpt.com/d=kwd-73942727915398:loc-20&c_ims=&c_pms=146941&c_nw=o&c_dvc=c&msclkid=1f83be022f1e11afa5bcd7c8dccd07d8"
  },
  {
    name: "Opinion App",
    category: "Dinheiro", // ou estudo, entretenimento...
    type: "renda", // usados, tendencia, diferente...
    badge: "💰", // opcional
    rating: "★★★★★",
    desc: "Ganhe dinheiro respondendo pesquisas",
    img: "assets/opinion.png",
    link: "https://play.google.com/store/apps/details?id=com.primeopinion.appname",
    referral: "https://primeopinion.com/register?ref=a12b158a-1107-4101-9563-5be2e7a55e10"
  },

  {
    name: "Telegram App",
    category: "Comunicacao", // ou estudo, entretenimento...
    type: "diferente", // usados, tendencia, diferente...
    badge: " 💬", // opcional
    rating: "★★★★★",
    desc: "Converse com qualquer pessoa, e ganhe dinheiro com canais de Telegram",
    img: "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg",
    link: "https://play.google.com/store/search?q=telegram&c=apps",
    referral: "https://web.telegram.org/k/"
  },
  {
    name: "TikTok App",
    category: "Dinheiro", // ou estudo, entretenimento...
    type: "renda", // usados, tendencia, diferente...
    badge: "💰", // opcional
    rating: "★★★★★",
    desc: "Ganhe dinheiro criando conteúdo no TikTok",
    img: "https://logo.svgcdn.com/logos/tiktok.png",
    link: "https://play.google.com/store/search?q=tiktok&c=apps",
    referral: "https://www.tiktok.com/d/1/ZS98hUatMNed8-ISVkJ/"
  }

];
function sendSuggestion() {
  const input = document.getElementById("suggestion").value;

  let suggestions = JSON.parse(localStorage.getItem("suggestions")) || [];

  suggestions.push(input);

  localStorage.setItem("suggestions", JSON.stringify(suggestions));

  alert("Salvo!");
}

function renderApps() {
  const container = document.getElementById("apps");
  const search = document.getElementById("search").value.toLowerCase();
  const filter = document.getElementById("filter").value;

  container.innerHTML = "";

  apps
    .filter(app =>
      app.name.toLowerCase().includes(search) &&
      (filter === "all" || app.type === filter)
    )
    .forEach(app => {
      container.innerHTML += `
        <div class="card">
          <img src="${app.img}">
          <div class="category">${app.category}</div>
          <div class="badge">${app.badge}</div>
          <h2>${app.name}</h2>
          <div class="rating">${app.rating}</div>
          <p>${app.desc}</p>
          <div class="buttons">
  <a class="btn" href="${app.link}" target="_blank">Baixar</a>
  ${app.referral ? `<a class="btn secondary" href="${app.referral}" target="_blank">Cadastro</a>` : ""}
</div>
        </div>
      `;
    });
}

document.getElementById("search").addEventListener("input", renderApps);
document.getElementById("filter").addEventListener("change", renderApps);

renderApps();
