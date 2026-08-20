const win = document.getElementById("window");
const title = document.getElementById("windowTitle");
const content = document.getElementById("windowContent");

function openApp(app) {

  win.classList.remove("hidden");

  if (app === "games") {

    title.textContent = "🎮 Jogos";

    content.innerHTML = `
      <h2>Central de Jogos</h2>

      <div class="game">
        <h3>🎮 Roblox</h3>
        <p>Conecte um PC remoto para jogar.</p>

        <button class="action" onclick="connectPC()">
          🔌 Conectar ao PC
        </button>
      </div>

      <div class="game">
        <h3>🕹️ Outros jogos</h3>
        <p>Disponível quando o PC remoto estiver conectado.</p>
      </div>
    `;

  }

  if (app === "files") {

    title.textContent = "📁 Arquivos";

    content.innerHTML = `
      <h2>Este PC</h2>

      <div class="option">💾 Disco Virtual</div>
      <div class="option">📂 Downloads</div>
      <div class="option">📂 Documentos</div>
      <div class="option">🖼️ Imagens</div>
    `;

  }

  if (app === "browser") {

    title.textContent = "🌐 Navegador";

    content.innerHTML = `
      <h2>Navegador</h2>

      <br>

      <input
        id="url"
        placeholder="Digite um endereço..."
        style="
          width:100%;
          padding:13px;
          border:0;
          border-radius:8px;
        "
      >

      <button class="action" onclick="openSite()">
        Abrir
      </button>

      <p id="browserResult" style="margin-top:20px"></p>
    `;

  }

  if (app === "settings") {

    title.textContent = "⚙️ Configurações";

    content.innerHTML = `
      <h2>Desempenho</h2>

      <div class="option">
        ⚡ Modo desempenho

        <br><br>

        <button class="action" onclick="performanceMode()">
          Ativar
        </button>
      </div>

      <div class="option">
        📱 Modo celular

        <br><br>

        Interface otimizada para telas pequenas.
      </div>

      <div class="option">
        🔲 Tela cheia

        <br><br>

        <button class="action" onclick="fullscreen()">
          Ativar
        </button>
      </div>
    `;
  }
}

function closeApp() {
  win.classList.add("hidden");
}

function connectPC() {

  alert(
    "PC remoto ainda não conectado.\n\n" +
    "A interface está pronta para receber uma conexão."
  );

}

function performanceMode() {

  document.getElementById("status").innerHTML =
    "⚡ DESEMPENHO";

}

function fullscreen() {

  document.documentElement.requestFullscreen?.();

}

function openSite() {

  const url = document.getElementById("url").value;

  if (!url) {
    document.getElementById("browserResult").textContent =
      "Digite um endereço.";
    return;
  }

  document.getElementById("browserResult").textContent =
    "Endereço: " + url;
}

function updateClock() {

  document.getElementById("clock").textContent =
    new Date().toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit"
    });

}

setInterval(updateClock, 1000);
updateClock();
