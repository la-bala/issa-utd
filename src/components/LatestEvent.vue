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
                        <img src="../assets/holidays.jpeg">
                        <ul class="list-group list-group-flush border border-0">
                            <li class="list-group-item border border-0 bg-dark text-white">
                                <ClockIcon :size="16"/>
                                <span class="ms-1"> Dec 7, 2022</span>
                            </li>
                            <li class="list-group-item border border-0 bg-dark text-white" id="meetingLocation">
                                <LocationIcon :size="16"/>
                                <span class="ms-1"> Pinstack Plano</span>
                            </li>
                        </ul>
                        <div class="d-flex flex-column card-body">
                            <h5 class="card-title">Holiday Party</h5>
                            <p class="card-text">
                                ISSA UTD ringed in the upcoming holiday season with drinks, food, and bowling at NTX ISSA's Holiday Party!
                            </p>
                            <div class="row justify-content-center">
                                <div class="col-6">
                                    <RouterLink to="">
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