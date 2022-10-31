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
    <header id="j-home" class="jumbotron jumbotron-fluid">
        <div class="container" crossorigin="anonymous">
            <div class="row">
                <div class="col-lg-7">
                    <h1 class="display-4">Hi! We're the student subchapter of <a href="https://www.ntxissa.org" class="text-decoration-none" target="_blank" rel="noopener noreferrer">North Texas ISSA</a> at <a href="https://www.utdallas.edu" class="text-decoration-none" target="_blank" rel="noopener noreferrer">UT Dallas.</a></h1>
                    <p class="lead">We're a community dedicated to developing and connecting UTD's future cybersecurity leaders. No matter your background, let's kickstart our careers together.</p>
                </div>
                <div class="col-lg-2 mb-3">
                    <p class="lead fst-italic">connect with us!</p>
                    <DiscordIcon :size="32"/>
                    <InstagramIcon :size="32"/>
                    <TwitterIcon :size="32"/>
                    <EmailIcon :size="32"/>
                </div>
                <div class="col-lg-2">
                    <p class="lead fst-italic">join us!</p>
                    <a class="btn btn-outline-light" href="https://forms.gle/ia2mQmjxkFjtSsSB9" target="_blank" rel="noopener noreferrer" role="button">Join ISSA UTD</a>
                </div>
            </div>
        </div>
    </header>
</template>