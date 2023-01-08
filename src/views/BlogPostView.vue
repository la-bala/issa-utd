<script>
import hackingintocsc10 from '../components/blogs/hackingintocsc10.vue';
import nov2022lunchandlearn from '../components/blogs/nov2022lunchandlearn.vue';

export default {
    components: {
        hackingintocsc10,
        nov2022lunchandlearn
    }
}
</script>

<template>
    <component :is="$route.params.slug"></component>
</template>