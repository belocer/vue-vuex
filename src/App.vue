<template>
    <div class="container text-center pt-5">
        <app-counter></app-counter>
        <appSecondCounter></appSecondCounter>
        <hr>
        <app-actions></app-actions>

        <hr>

        <h1>{{ title }}</h1>
    </div>
</template>

<script>
  import Counter from './Counter'
  import Actions from './Actions'
  import SecondCounter from './SecondCounter'

  export default {
    data() {
      return {
        counter: 0
      }
    },
    components: {
      appCounter: Counter,
      appActions: Actions,
      appSecondCounter: SecondCounter
    },
    computed: {
      title () {
        return this.$store.getters.title
      }
    }
  }
</script>
