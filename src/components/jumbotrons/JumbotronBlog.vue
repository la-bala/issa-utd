<script>
import Jumbotron from './Jumbotron.vue';

export default {
    components: {
        Jumbotron
    }
}
</script>

<template>
    <Jumbotron id="jumbotronBlog">
        <template #content>
            <div class="col-lg-7">
                <h1 class="display-4">Blog</h1>
            </div>
        </template>
    </Jumbotron>
</template>

<style scoped>
#jumbotronBlog {
    background-image: url("../../assets/jumbotron-bg3.jpg");
}
</style>