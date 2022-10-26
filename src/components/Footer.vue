<script>
import DiscordIcon from './icons/DiscordIcon.vue';
import EmailIcon from './icons/EmailIcon.vue';
import InstagramIcon from './icons/InstagramIcon.vue';

export default {
    components: {
        DiscordIcon,
        EmailIcon,
        InstagramIcon
    }
}
</script>

<template>
    <div class="container">    
        <footer class="py-3 my-4">
            <ul class="nav justify-content-center pb-3 mb-3">
                <li class=""><DiscordIcon :size="32"/></li>
                <li class="ms-3"><InstagramIcon :size="32"/></li>
                <li class="ms-3"><EmailIcon :size="32"/></li>
            </ul>
            <p class="text-center text-muted">© 2022 ISSA Subchapter UTD • Site by <a href="https://www.github.com/th3bala" class="text-decoration-none" target="_blank" rel="noopener noreferrer">@th3bala</a></p>
        </footer>
    </div>
</template>