<template>
    <div>
<h3 align="center">Підсумки</h3>
<br>
        <b-table striped hover :items="items"></b-table>
    </div>
</template>

<script>
    export default {
        name: "Results",
        data() {
            return {
                items: [

                ]
            }
        },
      methods:{

          serializeRes(json){
            let rows = [];
            for(let index in json){
              rows[index]={"#":(parseInt(index)+1), "ПІБ":json[index].profile, "Набраний бал":json[index].ebal}
            }
            return rows
          },
       async getResults(){
         let object = this;
         const axios = require('axios').default;
         await axios({
           method: "get",
           url: "https://olimp-english.herokuapp.com/api/v1/res",
         }).then(function (response, obj = object) {
           console.log(response)
           obj.items = obj.serializeRes(response.data)
         })
        }

      },
    beforeMount() {
      this.getResults()
    }
    }
</script>

<style scoped>

</style>