<template>
  <section class="dashboard">
    <header>
      <h1 class="title is-4">{{ dayjs().format("ddd, DD MMM") }}</h1>
    </header>
  </section>
</template>

<script>
import Vue from 'vue';
import dayjs from 'dayjs';

export default Vue.extend({
  name: 'Home',

  computed: {
    dayjs() {
      return dayjs;
    },
  },
});
</script>
