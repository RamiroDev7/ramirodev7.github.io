const apps = [
  {
    name: "Unir Boletas C.Argentino",
    icon: "images/unir_boletas.webp",
    qr: "images/qr.png",
    playStoreLink: "https://play.google.com/store/apps/details?id=unir.boletas",
    appStoreLink: "#",
  },
  {
    name: "Unir Boletas C.Argentino",
    icon: "images/unir_boletas.webp",
    qr: "images/qr.png",
    playStoreLink: "https://play.google.com/store/apps/details?id=unir.boletas",
    appStoreLink: "#",
  },
];

function createAppCard(app) {
  const card = document.createElement("div");
  card.className = "card";

  const contentApp = document.createElement("div");
  contentApp.className = "contentApp";

  const icon = document.createElement("img");
  icon.src = app.icon;
  icon.alt = `Icono de ${app.name}`;
  icon.className = "icon";

  const title = document.createElement("h2");
  title.innerHTML = app.name;

  const qr = document.createElement("img");
  qr.src = app.qr;
  qr.alt = `Código QR de ${app.name}`;
  qr.className = "qr-code";

  contentApp.appendChild(icon);
  contentApp.appendChild(title);
  contentApp.appendChild(qr);

  const contentDownload = document.createElement("div");
  contentDownload.className = "contentDownload";

  const playStoreButton = document.createElement("a");
  playStoreButton.href = app.playStoreLink;
  playStoreButton.className = "store-button google-play";
  playStoreButton.target = "_blank";

  const playStoreImg = document.createElement("img");
  playStoreImg.src = "images/download_google_play.jpg";
  playStoreImg.alt = "Google Play";

  playStoreButton.appendChild(playStoreImg);

  const appStoreButton = document.createElement("a");
  appStoreButton.href = app.appStoreLink;
  appStoreButton.className = "store-button app-store";
  appStoreButton.target = "_blank";

  const appStoreImg = document.createElement("img");
  appStoreImg.src = "images/download_app_store.jpg";
  appStoreImg.alt = "App Store";

  appStoreButton.appendChild(appStoreImg);

  contentDownload.appendChild(playStoreButton);
  contentDownload.appendChild(appStoreButton);

  card.appendChild(contentApp);
  card.appendChild(contentDownload);

  return card;
}

const container = document.getElementById("apps");
apps.forEach((app) => {
  container.appendChild(createAppCard(app));
});
