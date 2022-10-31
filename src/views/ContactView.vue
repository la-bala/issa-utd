<script>
import JumbotronContact from '../components/JumbotronContact.vue';
import Socials from '../components/Socials.vue';

export default {
    components: {
        JumbotronContact,
        Socials
    },
    mounted() {
      let twitterScript = document.createElement('script')
      twitterScript.setAttribute('src', 'https://platform.twitter.com/widgets.js')
      twitterScript.setAttribute('charset', 'utf-8')
      document.head.appendChild(twitterScript)
    }
}
</script>

<template>
    <JumbotronContact/>
    <Socials/>
</template>