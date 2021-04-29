<template>
  <div>
    <h1 align="center">Обласна Олімпіада з англійської мови закладів фахової передвищої  освіти Одеської області</h1>
    <br>
    <div style="width: 400px;margin: 0 auto;">
    <ol class="rectangle">
      <li><span>Олімпіада складається з 4 частин, в кожній частині по кілька завдань.</span></li>
      <li><span>У кожному завданні потрібно вибрати тільки один варіант відповіді.</span></li>
      <li><span>Олімпіада триває 2 години (до 13:00).</span></li>
	    <li><span>Вирішені завдання після закінчення олімпіади не будуть зараховані.</span></li>
    </ol>
      <br>
    <Login/>
  </div>
  </div>
</template>

<script>
  import Login from './Login.vue'
export default {
  name: 'Index',
  components: {
    Login
  }
}
</script>


<style scoped>
  .rectangle {
    counter-reset: li;
    list-style: none;
    font: 14px "Trebuchet MS", "Lucida Sans";
    padding: 0;
    text-shadow: 0 1px 0 rgba(255,255,255,.5);
  }
  .rectangle span {
    position: relative;
    display: block;
    padding: .4em .4em .4em .8em;
    margin: .5em 0 .5em 2.5em;
    background: #D3D4DA;
    color: #444;
    text-decoration: none;
    transition: all .3s ease-out;
  }
  .rectangle span:hover {background: #DCDDE1;}
  .rectangle span:before {
    content: counter(li);
    counter-increment: li;
    position: absolute;
    left: -2.5em;
    top: 50%;
    margin-top: -1em;
    background: #9097A2;
    height: 2em;
    width: 2em;
    line-height: 2em;
    text-align: center;
    font-weight: bold;
  }
  .rectangle span:after {
    position: absolute;
    content: "";
    border: .5em solid transparent;
    left: -1em;
    top: 50%;
    margin-top: -.5em;
    transition: all .3s ease-out;
  }
  .rectangle span:hover:after {
    left: -.5em;
    border-left-color: #9097A2;
  }
</style>
