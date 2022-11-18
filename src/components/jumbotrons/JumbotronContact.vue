<script>
import Jumbotron from './Jumbotron.vue';

export default {
    components: {
        Jumbotron
    }
}
</script>

<template>
    <Jumbotron id="jumbotronContact">
        <template #content>
            <div class="col-lg-7">
                <h1 class="display-4">Contact ISSA UTD</h1>
                <p class="lead">Join our <a href="https://discord.gg/K9YRJZVCkn" class="text-decoration-none" target="_blank" rel="noopener noreferrer">Discord</a>, follow us on <a href="https://twitter.com/utd_issa" class="text-decoration-none" target="_blank" rel="noopener noreferrer">Twitter</a> or <a href="https://instagram.com/issa_utd" class="text-decoration-none" target="_blank" rel="noopener noreferrer">Instagram</a>, or shoot us an <a href="mailto: utdissa@gmail.com" class="text-decoration-none" target="_blank" rel="noopener noreferrer">email.</a> We're eager to hear from you!</p>
            </div>
        </template>
    </Jumbotron>
</template>

<style scoped>
#jumbotronContact {
    background-image: url("../../assets/jumbotron-bg2.jpg");
}
</style>