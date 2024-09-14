<template>
  <body>
    <header>
    </header>
    <div class="container">
      <div class="image-container">
        <img
          src="../assets/images/sanplast-avatar.jpg"
          alt="Sanplast Logo Avatar"
        />
      </div>
      <h1>@sanplastindustrialtda</h1>

      <a class="tile" href="http://sanplast.ind.br/produtos">
        <div class="icon">
          <font-awesome-icon :icon="['fas', 'house']" size="lg" />
        </div>
        <p>Sanplast</p>
        <div class="tile-share-button" link="http://sanplast.ind.br/produtos">
          <font-awesome-icon :icon="['fas', 'arrow-right-from-bracket']" />
        </div>
      </a>
      <a
        class="tile"
        href="https://www.linkedin.com/company/sanplast-industria-de-plasticos-ltda/"
      >
        <div class="icon">
          <font-awesome-icon :icon="['fab', 'linkedin']" size="xl" />
        </div>
        <p>Linkedin</p>
        <div
          class="tile-share-button"
          link="https://www.linkedin.com/company/sanplast-industria-de-plasticos-ltda/"
        >
          <font-awesome-icon :icon="['fas', 'arrow-right-from-bracket']" />
        </div>
      </a>
      <a
        class="tile"
        href="https://www.facebook.com/sanplastindustriadeplastico/"
      >
        <div class="icon">
          <font-awesome-icon :icon="['fab', 'facebook']" size="xl" />
        </div>
        <p>Facebook</p>
        <div
          class="tile-share-button"
          link="https://www.facebook.com/sanplastindustriadeplastico/"
        >
          <font-awesome-icon :icon="['fas', 'arrow-right-from-bracket']" />
        </div>
      </a>

      <a
        class="tile"
        href="https://api.whatsapp.com/send/?phone=5548996297511&text&type=phone_number&app_absent=0"
      >
        <div class="icon">
          <font-awesome-icon :icon="['fab', 'whatsapp']" size="xl"/>
        </div>
        <p>Whatsapp</p>
        <div
          class="tile-share-button"
          link="https://api.whatsapp.com/send/?phone=5548996297511&text&type=phone_number&app_absent=0"
        >
          <font-awesome-icon :icon="['fas', 'arrow-right-from-bracket']" />
        </div>
      </a>
    </div>
  </body>
</template>

<script setup>
const shareButtons = document.querySelectorAll('.tile-share-button');

async function copyText(e) {
  e.preventDefault();
  const link = this.getAttribute('link');

  try {
    await navigator.clipboard.writeText(link);
    alert('Texto copiado: ' + link);
  } catch (err) {
    console.error(err);
  }
}

shareButtons.forEach((shareButton) =>
  shareButton.addEventListener('click', copyText)
);
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background: white;
  color: black;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  background-image: url("../assets/images/sanplast-bg-visao.jpg");
  background-size: auto;
  background-repeat: no-repeat;
  background-position: left top;
}

header {
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 20px;
  background-color: white;
}

.share-button {
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: black;
}

.share-button svg {
  margin-left: 13px;
  margin-top: 12px;
  color: white;
}

.container {
  width: 91%;
  max-width: 680px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  font-size: 20px;
  margin-bottom: 30px;
  color: white;
}

a {
  text-decoration: none;
  color: white;
}

.tile {
  width: 100%;
  height: 56px;
  background-color: rgb(37, 37, 37);
  margin: 7px;
  border-radius: 17px;
  display: flex;
  justify-content: space-between;
}

.tile:hover {
  transition: cubic-bezier(0.07, 1.41, 0.82, 1.41) 0.2s;
  transform: scale(1.02);
}

.tile-share-button {
  margin: 8px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: rgb(52, 52, 52);
}

.tile-share-button svg {
  margin-left: 13px;
  margin-top: 12px;
}

.image-container {
  height: 96px;
  width: 96px;
  border-radius: 48px;
  overflow: hidden;
}

.image-container img {
  height: 100%;
}

.icon {
  margin: 16px 10px;
  width: 44px;
  height: 44px;
}
</style>
