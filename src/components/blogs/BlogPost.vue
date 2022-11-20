<script>
</script>

<template>
    <section class="page-section" id="blogPost">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-xl-6">
                    <h2 class="blog-post-title text-white">
                        <span style="font-size:.8em"><RouterLink to="/blog" class="link text-decoration-none">Blog</RouterLink> > </span>
                        <slot name="title"></slot>
                    </h2>
                    <p class="text-muted">
                        <slot name="description"></slot>
                    </p>
                    <div id="carousel" class="carousel slide my-4" data-ride="carousel">
                        <slot name="carousel"></slot>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    <p class="text-white">
                        <slot name="text"></slot>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.blog-post-title {
    font-size: 2rem;
    margin-top: 4rem;
}
</style>