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
    <header class="jumbotron jumbotron-fluid">
        <div class="container">
            <div class="row">
                <div class="col-lg-7">
                    <h1 class="display-4">Hi! We're the student subchapter of <a href="https://www.ntxissa.org" class="text-decoration-none" target="_blank" rel="noopener noreferrer">North Texas ISSA</a> at <a href="https://www.utdallas.edu" class="text-decoration-none" target="_blank" rel="noopener noreferrer">UT Dallas.</a></h1>
                    <p class="lead">The <a href="https://www.issa.org" class="text-decoration-none" target="_blank" rel="noopener noreferrer">Information Systems Security Association (ISSA)</a> is an internationally recognized organization for cybersecurity professionals. We're connecting ISSA to the UTD community to spread cybersecurity awareness and knowledge by exploring the integration of business, IT, and security. No matter your background, let's grow our future careers together.</p>
                </div>
                <div class="col-lg-2 mb-3">
                    <p class="lead fst-italic">connect with us!</p>
                    <DiscordIcon :width="32" :height="32"/>
                    <InstagramIcon :width="32" :height="32"/>
                    <EmailIcon :width="32" :height="32"/>
                </div>
                <div class="col-lg-2">
                    <p class="lead fst-italic">join us!</p>
                    <a class="btn btn-outline-light" href="https://forms.gle/ia2mQmjxkFjtSsSB9" target="_blank" rel="noopener noreferrer" role="button">Join ISSA UTD</a>
                </div>
            </div>
        </div>
    </header>
</template>