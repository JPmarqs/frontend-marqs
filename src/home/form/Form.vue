<template>
  <div class="form-container">
    <div class="form-content">
      <h3 class="title-form">
        Detalhe seu projeto, que em breve entraremos em contato.
      </h3>
      <input type="text" placeholder=" Nome" />
      <input type="text" placeholder=" E-mail" />
      <input type="text" placeholder=" telefone" />
      <textarea placeholder="Detalhes do projeto"></textarea>
      <button class="button-form">Enviar</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-image: url("../../assets/carousel/google-search.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
}
.form-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  width: 70%;
  height: 100%;
  margin: 20px 0 20px 0;
  background-color: rgba(225, 140, 0, 0.5);
  border-radius: 30px;
}
.title-form {
  font-size: 20px;
  margin-bottom: 30px;
  text-align: center;
  font-weight: bold;
  color: #fdfdfd;
}
input {
  margin-bottom: 10px;
  width: 70%;
  height: 30px;
  border-radius: 5px;
  border: white 2px solid;
  background-color: rgba(255, 255, 255, 0.5);
}
textarea {
  margin-bottom: 20px;
  width: 70%;
  height: 30px;
  border-radius: 5px;
  border: white 2px solid;
  background-color: rgba(255, 255, 255, 0.5);
}
button {
  margin-top: 20px;
  width: 70%;
  height: 30px;
  border-radius: 5px;
  background-color: #0248a7;
  color: white;
  margin-bottom: 20px;
}
</style>
