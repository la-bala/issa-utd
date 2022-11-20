<script>
import Jumbotron from './Jumbotron.vue';

export default {
    components: {
        Jumbotron
    }
}
</script>

<template>
    <Jumbotron id="jumbotronAbout">
        <template #content>
            <div class="col-lg-4">
                <h1 class="display-5">What is ISSA?</h1>
                <p class="lead">The <a href="https://www.issa.org" class="link text-decoration-none" target="_blank" rel="noopener noreferrer">Information Systems Security Association (ISSA)®</a> is a not-for-profit, international organization of information security professionals and practitioners. It provides educational forums, publications, and peer interaction opportunities that enhance the knowledge, skill, and professional growth of its members. Our local chapter is <a href="https://www.ntxissa.org" class="link text-decoration-none" target="_blank" rel="noopener noreferrer">North Texas ISSA.</a></p>
            </div>
            <div class="col-lg-4">
                <h1 class="display-5">What is ISSA UTD?</h1>
                <p class="lead">
                    As the official student subchapter of North Texas ISSA at <a href="https://www.utdallas.edu" class="link text-decoration-none" target="_blank" rel="noopener noreferrer">UT Dallas</a>,
                    we are a uniquely networking-based security organization. We're kicking off in Spring 2023 to build a campus community where students of all experience levels can explore the dynamic field of information security, backed by the extensive resources of ISSA.
                </p>
            </div>
            <div class="col-lg-4">
                <h1 class="display-5">Why join ISSA UTD?</h1>
                <p class="lead">We'll attend and host educational events with accomplished professionals from North Texas ISSA and the broader cybersecurity community on campus. In addition, members of our subchapter will be eligible to obtain a discounted ISSA membership, which offers a huge advantage for your early career and big discounts on NTX ISSA events. We welcome all students interested in business, IT, or security to <a class="link text-decoration-none" href="https://forms.gle/ia2mQmjxkFjtSsSB9" target="_blank" rel="noopener noreferrer">join!</a></p>
            </div>
        </template>
    </Jumbotron>
</template>

<style scoped>
#jumbotronAbout {
    background-image: url("../../assets/jumbotron-bg4.jpg");
}
</style>