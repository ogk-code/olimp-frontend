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
                    { Номер: 1, ФІО: 'Dickerson', "Навчальний заклад": 'Macdonald', "Набрані бали": 11 },
                    { Номер: 2, ФІО: 'Larsen', "Навчальний заклад": 'Shaw', "Набрані бали": 11 },
                    { Номер: 3, ФІО: 'Geneva', "Навчальний заклад": 'Wilson', "Набрані бали": 11 },
                    { Номер: 4, ФІО: 'Jami', "Навчальний заклад": 'Carney', "Набрані бали": 11 }
                ]
            }
        }
    }
</script>

<style scoped>

</style>