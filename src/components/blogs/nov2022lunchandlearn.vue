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
        <template #title>Lunch and Learn @ Maggiano's</template>
        <template #description>Past event: Nov 17, 2022</template>
        <template #carousel>
            <div class="carousel-indicators">
                <button v-for="i in 3" type="button" data-bs-target="#carousel" :data-bs-slide-to=i-1 :class="i === 1 ? 'active' : ''" :aria-current="i === 1 ? 'true' : ''" :aria-label="'Slide ' + i"></button>
            </div>
            <div class="carousel-inner">
                <div class='carousel-item active'>
                    <img class="d-block w-100" src="../../assets/nov2022lunchandlearn/0.png" alt="Slide 0">
                </div>
                <div class='carousel-item'>
                    <img class="d-block w-100" src="../../assets/nov2022lunchandlearn/1.png" alt="Slide 1">
                </div>
                <div class='carousel-item'>
                    <img class="d-block w-100" src="../../assets/nov2022lunchandlearn/2.png" alt="Slide 2">
                </div>
            </div>
        </template>
        <template #text>
            ISSA UTD joined the DFW security community for a pairing of Italian lunch and 
            cybersecurity discussion at North Texas ISSA's November Lunch and Learn at Maggiano's.
            <br/><br/>
            We shared the meal with security professionals as well as a fellow student leader - 
            Michael Reschman of UT Arlington's ISSA subchapter.
            We then took the floor to announce the official formation of our subchapter at UTD!
            <br/><br/>
            North Texas ISSA's Lunch and Learns are held monthly, at a discounted price for ISSA members.
            The events include special guest speakers and door prizes. We'll be back for more, so be sure to 
            <RouterLink class="link" to="/contact">follow us</RouterLink> to stay updated.
        </template>
    </BlogPost>
</template>