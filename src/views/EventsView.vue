<script>
import Calendar from '../components/Calendar.vue';
import JumbotronEvents from '../components/jumbotrons/JumbotronEvents.vue';

export default {
    components: {
        Calendar,
        JumbotronEvents
    }
}

</script>

<template>
    <JumbotronEvents/>
    <Calendar/>
</template>