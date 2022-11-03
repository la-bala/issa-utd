<script>
import ClockIcon from './icons/ClockIcon.vue';
import LocationIcon from './icons/LocationIcon.vue';

export default {
    components: {
        ClockIcon,
        LocationIcon
    }
}
</script>

<template>
    <section class="page-section" id="meetings">
        <div class="container">
            <div class="text-center text-white">
                <h2 class="section-heading">Latest Event</h2>
            </div>
            <div class="row justify-content-center">
                <div class="py-2 col-md-8 col-xl-6">
                    <div class="card bg-dark text-white border border-secondary">
                        <div id="carousel" class="carousel slide" data-ride="carousel">
                            <div class="carousel-indicators">
                                <button v-for="i in 3" type="button" data-bs-target="#carousel" :data-bs-slide-to=i-1 :class="i === 1 ? 'active' : ''" :aria-current="i === 1 ? 'true' : ''" :aria-label="'Slide ' + i"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class='carousel-item active'>
                                    <img class="d-block w-100" src="../assets/hackingintocsc10/0.jpg" alt="Slide 0">
                                </div>
                                <div class='carousel-item'>
                                    <img class="d-block w-100" src="../assets/hackingintocsc10/1.jpg" alt="Slide 1">
                                </div>
                                <div class='carousel-item'>
                                    <img class="d-block w-100" src="../assets/hackingintocsc10/2.jpg" alt="Slide 2">
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <ul class="list-group list-group-flush border border-0">
                            <li class="list-group-item border border-0 bg-dark text-white">
                                <ClockIcon :size="16"/>
                                <span class="ms-1"> Sep 23, 2022</span>
                            </li>
                            <li class="list-group-item border border-0 bg-dark text-white" id="meetingLocation">
                                <LocationIcon :size="16"/>
                                <span class="ms-1"> Collin College - Spring Creek Campus</span>
                            </li>
                        </ul>
                        <div class="d-flex flex-column card-body">
                            <h5 class="card-title">NTX ISSA CSC10</h5>
                            <p class="card-text">
                                ISSA UTD joined the DFW security community for North Texas ISSA's 10th Annual Cybersecurity Conference! Students attended presentations, networked with cybersecurity leaders, and met with the student subchapter director to plan the official launch of ISSA UTD in Spring '23!
                            </p>
                            <div class="row justify-content-center">
                                <div class="col-6">
                                    <RouterLink to="/blog/hackingintocsc10">
                                        <a class="btn btn-primary" role="button">Read More</a>
                                    </RouterLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </template>