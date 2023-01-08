<script>
import JumbotronBlog from '../components/jumbotrons/JumbotronBlog.vue';
import hackingintocsc10Thumb from '@/assets/hackingintocsc10/thumb.jpg';
import nov2022lunchandlearnThumb from '@/assets/nov2022lunchandlearn/thumb.jpg';

export default {
    components: {
        JumbotronBlog
    },
    data() {
        return {
            posts: [
                { slug: "nov2022lunchandlearn", title: "Lunch and Learn @ Maggiano's", date: "Nov 17, 2022", tag: "Past Event", imgSrc: nov2022lunchandlearnThumb},
                { slug: "hackingintocsc10", title: "Hacking Into CSC10", date: "Sep 23, 2022", tag: "Past Event", imgSrc: hackingintocsc10Thumb}
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
                <div v-for="post in posts" class="col-md-6 col-lg-4">
                    <RouterLink :to="{name: 'blogpost', params: {slug: post.slug}}" style="textDecoration: none">
                        <div class="card bg-dark text-white">
                            <img :src="post.imgSrc" class="card-img-top" alt="NTX ISSA conference">
                            <div class="card-body">
                                <h5 class="card-title">{{post.title}}</h5>
                                <div class="d-flex flex-row justify-content-between">
                                    <p class="card-text mb-0"><small class="text-muted">{{post.date}}</small></p>
                                    <p class="card-text bg-primary rounded-pill px-2"><small class="text-white">{{post.tag}}</small></p>
                                </div>
                            </div>
                        </div>
                    </RouterLink>
                </div>
            </div>
        </div>
    </section>
</template>