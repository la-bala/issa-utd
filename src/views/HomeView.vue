<script>
import Jumbotron from '../components/Jumbotron.vue';
import Upcoming from '../components/Upcoming.vue';
import Latest from '../components/Latest.vue';

export default {
    components: {
        Jumbotron,
        Upcoming,
        Latest
    }
}

</script>

<template>
  <Jumbotron/>
  <Latest/>
  <Upcoming/>
</template>
