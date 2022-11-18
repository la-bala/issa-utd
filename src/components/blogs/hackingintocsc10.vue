<script>
import BlogPost from './BlogPost.vue';

export default {
    components: {
        BlogPost
    }
}
</script>

<template>
    <BlogPost>
        <template #title>Hacking Into CSC10</template>
        <template #description>Past event: Sep 23, 2022</template>
        <template #carousel>
            <div class="carousel-indicators">
                <button v-for="i in 3" type="button" data-bs-target="#carousel" :data-bs-slide-to=i-1 :class="i === 1 ? 'active' : ''" :aria-current="i === 1 ? 'true' : ''" :aria-label="'Slide ' + i"></button>
            </div>
            <div class="carousel-inner">
                <div class='carousel-item active'>
                    <img class="d-block w-100" src="../../assets/hackingintocsc10/0.jpg" alt="Slide 0">
                </div>
                <div class='carousel-item'>
                    <img class="d-block w-100" src="../../assets/hackingintocsc10/1.jpg" alt="Slide 1">
                </div>
                <div class='carousel-item'>
                    <img class="d-block w-100" src="../../assets/hackingintocsc10/2.jpg" alt="Slide 2">
                </div>
            </div>
        </template>
        <template #text>
            ISSA UTD joined over 500 attendees at North Texas ISSA's 10th annual Cybersecurity Conference at Collin College,
            where we had the opportunity to attend informative presentations and meet local information security leaders. <br/><br/>

            Our officers broke ground on getting the subchapter officially recognized by meeting with Dr. Alena 
            Funtikova-White, the student subchapter director. We also met with Collin College's student subchapter and
            discussed possible collaboration in the future. <br/><br/>

            The warm sense of community at the event and the amount of expertise there was in one building were impressive.
            We'll be back for more NTX ISSA events soon.
        </template>
    </BlogPost>
</template>