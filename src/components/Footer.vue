<script>
import DiscordIcon from './icons/DiscordIcon.vue';
import EmailIcon from './icons/EmailIcon.vue';
import InstagramIcon from './icons/InstagramIcon.vue';
import TwitterIcon from './icons/TwitterIcon.vue';

export default {
    components: {
        DiscordIcon,
        EmailIcon,
        InstagramIcon,
        TwitterIcon
    }
}
</script>

<template>
    <div class="container">    
        <footer class="py-3 my-4">
            <ul class="nav justify-content-center pb-3 mb-3">
                <li><DiscordIcon :size="36"/></li>
                <li><InstagramIcon :size="36"/></li>
                <li><TwitterIcon :size="36"/></li>
                <li><EmailIcon :size="36"/></li>
            </ul>
            <p class="text-center text-muted">© 2023 ISSA UTD Subchapter • Site by <a href="https://www.github.com/th3bala" class="link text-decoration-none" target="_blank" rel="noopener noreferrer">@th3bala</a></p>
        </footer>
    </div>
</template>

<style scoped>
.nav {
    gap: 40px;
}
</style>