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
<section class="page-section">
    <div class="container">
        <div class="text-center text-white">
            <h2 class="section-heading">Next Event</h2>
        </div>
        <div class="row justify-content-center">
            <div class="py-4 col-md-8 col-xl-6">
                <div class="card bg-dark text-white border border-secondary">
                    <img class="card-img-top" src="../assets/launch.jpg" alt="Meeting image placeholder">
                    <ul class="list-group list-group-flush border border-0">
                        <li class="list-group-item border border-0 bg-dark text-white">
                            <ClockIcon :size="16"/>
                            Spring 2023 - TBD
                        </li>
                        <li class="list-group-item border border-0 bg-dark text-white" id="meetingLocation">
                            <LocationIcon :size="16"/>
                            TBD
                        </li>
                    </ul>
                    <div class="d-flex flex-column card-body">
                        <h5 class="card-title">ISSA UTD Kickoff</h5>
                        <p class="card-text">
                            After approval from NTX ISSA and the UTD SOC, ISSA UTD is ready to join the UTD community by officially kicking off next semester!
                        </p>
                        <div class="row justify-content-center">
                            <div class="col-6">
                                <a class="btn btn-primary" role="button">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row text-center justify-content-center">
            <div class="col-md-8 col-xl-6 my-4">
                <RouterLink class="btn btn-outline-light rounded-pill" to="/events" role="button" id="allUpcomingEventsBtn">All Upcoming Events</RouterLink>
            </div>
        </div>
    </div>
</section>
</template>