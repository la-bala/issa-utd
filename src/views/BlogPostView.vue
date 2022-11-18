<script>
import hackingintocsc10 from '../components/blogs/hackingintocsc10.vue';;

export default {
    components: {
        hackingintocsc10
    }
}
</script>

<template>
    <component :is="$route.params.slug"></component>
</template>