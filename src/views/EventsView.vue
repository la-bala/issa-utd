<script>
import JumbotronEvents from '../components/jumbotrons/JumbotronEvents.vue';
import UpcomingEvents from '../components/UpcomingEvents.vue';
import Calendar from '../components/Calendar.vue';

export default {
    components: {
        JumbotronEvents,
        UpcomingEvents,
        Calendar
    }
}

</script>

<template>
    <JumbotronEvents/>
    <section class="page-section" id="calendar">
        <div class="container">
            <UpcomingEvents/>
            <Calendar/>
        </div>
    </section>
</template>