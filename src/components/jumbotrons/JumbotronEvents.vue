<script>
import Jumbotron from './Jumbotron.vue';

export default {
    components: {
        Jumbotron
    }
}
</script>

<template>
    <Jumbotron id="jumbotronEvents">
        <template #content>
            <div class="col-lg-7">
                <h1 class="display-4">Events</h1>
                <p class="lead">We're planning a lineup of events you won't want to miss, featuring leaders of the DFW security community.</p>
            </div>
        </template>
    </Jumbotron>
</template>

<style scoped>
#jumbotronEvents {
    background-image: url("../../assets/jumbotron-bg1.jpg");
}
</style>