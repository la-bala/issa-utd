<script>
import JumbotronHome from '../components/jumbotrons/JumbotronHome.vue';
import NextEvent from '../components/NextEvent.vue';
import LatestEvent from '../components/LatestEvent.vue';

export default {
    components: {
        JumbotronHome,
        NextEvent,
        LatestEvent
    }
}

</script>

<template>
  <JumbotronHome/>
  <LatestEvent/>
  <NextEvent/>
</template>
