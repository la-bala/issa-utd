<script>
export default {
    data() {
        return {
            posts: [
                { slug: "csc10", title: "Our Visit to NTX ISSA's CSC10", date: "Sep 23, 2022", imgSrc: "../src/assets/csc10/thumb.jpg"}
            ]
        }
    }
}
</script>

<template>
    <section class = "page-section">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-lg-4">
                    <RouterLink v-for="post in posts" :to="{name: 'blogpost', params: {slug: post.slug}}">
                        <div class="card bg-dark text-white">
                            <img :src="post.imgSrc" class="card-img-top" alt="NTX ISSA conference">
                            <div class="card-body">
                                <h5 class="card-title">{{post.title}}</h5>
                                <p class="card-text"><small class="text-muted">{{post.date}}</small></p>
                            </div>
                        </div>
                    </RouterLink>
                </div>
            </div>
        </div>
    </section>
</template>