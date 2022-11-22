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
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <div class="text-center text-white">
                    <h2 class="section-heading">Discord Status</h2>
                </div>
                <div class="d-flex justify-content-center mb-5">
                    <iframe src="https://discord.com/widget?id=790627003056390144&theme=dark" width="100%" height="400" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="text-center text-white">
                    <h2 class="section-heading">Latest Tweets</h2>
                </div>
                <div class="text-center">
                    <a class="twitter-timeline" data-height="400" data-dnt="true" data-theme="dark" href="https://twitter.com/utd_issa?ref_src=twsrc%5Etfw">Tweets by utd_issa (turn off content blockers to view widget)</a>
                </div>
            </div>
        </div>
    </div>
</section>
</template>