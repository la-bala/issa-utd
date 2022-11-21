<script>
export default {
    mounted() {
      let twitterScript = document.createElement('script')
      twitterScript.setAttribute('src', 'https://platform.twitter.com/widgets.js')
      twitterScript.setAttribute('charset', 'utf-8')
      document.head.appendChild(twitterScript)
    }
}
</script>

<template>
<section class="page-section">
    <div class="text-center text-white">
        <h2 class="section-heading">Latest Tweets</h2>
    </div>
    <div class="container">
        <a class="twitter-timeline" data-theme="dark" href="https://twitter.com/utd_issa?ref_src=twsrc%5Etfw">Tweets (Turn off content blockers to view!)</a>
    </div>
</section>
</template>