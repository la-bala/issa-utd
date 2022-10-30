<script>
import JumbotronHome from '../components/JumbotronHome.vue';
import NextEvent from '../components/NextEvent.vue';
import Latest from '../components/Latest.vue';

export default {
    components: {
        JumbotronHome,
        NextEvent,
        Latest
    }
}

</script>

<template>
  <JumbotronHome/>
  <Latest/>
  <NextEvent/>
</template>
