<script>
import JumbotronBlog from '../components/jumbotrons/JumbotronBlog.vue';
import hackingintocsc10Thumb from '@/assets/hackingintocsc10/thumb.jpg'

export default {
    components: {
        JumbotronBlog
    },
    data() {
        return {
            posts: [
                { slug: "hackingintocsc10", title: "Hacking Into CSC10", date: "Sep 23, 2022", imgSrc: hackingintocsc10Thumb}
            ]
        }
    }
}
</script>

<template>
    <JumbotronBlog/>
    <section class="page-section" id="blogMenu">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-lg-4">
                    <RouterLink v-for="post in posts" :to="{name: 'blogpost', params: {slug: post.slug}}" style="textDecoration: none">
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