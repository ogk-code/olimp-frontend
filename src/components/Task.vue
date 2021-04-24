<template>
  <div>
    <h3 align="center">Завдання <span>1</span></h3>
    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda commodi consequatur cupiditate, dicta distinctio dolorum eos facere fugit harum, id inventore itaque nobis qui, ratione repellendus sed vel veritatis? Id.
</span>
    <br><br>

      <b>Виберіть одне:</b>
      <b-form-group v-slot="{ ariaDescribedby }">
          <b-form-radio-group
                  id="btn-radios-1"
                  v-model="selected"
                  :options="options"
                  :aria-describedby="ariaDescribedby"
                  name="radios-btn-default"
                  buttons
          ></b-form-radio-group>
      </b-form-group>


    <div style="margin-top: 20px" class="container">
      <div class="row">
        <div class="col">
          <button type="button" class="btn btn-dark">Назад</button>
        </div>

        <div class="col">
          <button v-on:click="postPost" type="button" class="btn btn-dark float-right">Вперед</button>
        </div>
      </div>
    </div>

      <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
      <!--<div>
          <ul v-if="errors && errors.length">
              <li v-for="error of errors">
                  {{error.message}}
              </li>
          </ul>
      </div>-->

  </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "Task",
        data() {
            return {
                selected: 'radio1',
                options: [
                    { text: 'Radio 1', value: 'radio1' },
                    { text: 'Radio 3', value: 'radio2' },
                    { text: 'Radio 4', value: 'radio4' }
                ],
                postBody: {
                    ex : 4,
                    answer : "hue"
                },
                /*errors: [] */
            }
        },


        methods: {
            postPost : function () {

                const str = JSON.stringify(this.postBody);
                axios.post('http://localhost:8000/', str)
                    .then((response) => {
                        console.log(response);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        }
    }
</script>


<style scoped>

</style>
