<template>
  <body>
    <main>
      <div class="fullscreen">
        <div class="card">{{nome}}</div>
      </div>
    </main>
  </body>
  <footer>

  </footer>
</template>

<style>
body{
  margin: 0;
  padding: 0;
}

.fullscreen{
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: white;
}

.card{
  box-sizing: border-box;
  width: 470px;
  height: 100%;
  border-radius: 5px;
  box-shadow: 0 0 10px 5px gray;
  
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: gray;
}
</style>

<script setup>
const nome = "Geison";
</script>