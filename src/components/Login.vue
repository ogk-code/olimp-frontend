<template>
  <div>
    <form class="login" @submit.prevent="login">
      <h3 align="center">Введіть ID та пароль, який було выслано вам на email. Якщо данні не вірні або або лист за
        данними не прийшов зверніться до слежби підтримки</h3>
      <!--<label>Email</label>
      <input required v-model="email" type="email" placeholder="Name"/>
      <label>Password</label>
      <input required v-model="password" type="password" placeholder="Password"/>
      <button type="submit">Login</button>-->

      <div class="form-group">
        <label for="exampleInputEmail1">ID</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Id">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Password">
      </div>
      <button v-on:click="Start" type="submit" class="btn btn-dark">Почати олімпіаду</button>
    </form>
  </div>
</template>

<script>

export default {
  name: 'Login',
  methods: {
    Start: function () {


    }
  }

}
</script>

<style scoped>
.login {
  width: 400px;
  margin: 0 auto;
  text-align: center;
}
</style>