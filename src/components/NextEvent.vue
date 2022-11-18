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
                                <span class="ms-1"> Spring 2023 - TBD</span>
                            </li>
                            <li class="list-group-item border border-0 bg-dark text-white" id="meetingLocation">
                                <LocationIcon :size="16"/>
                                <span class="ms-1"> UTD Campus - TBD</span>
                            </li>
                        </ul>
                    <div class="d-flex flex-column card-body">
                        <h5 class="card-title">ISSA UTD Kickoff</h5>
                        <p class="card-text">
                            ISSA UTD is ready to officially join the UTD community with a kickoff event in Spring 2023! Date and location TBD.
                        </p>
                        <div class="row justify-content-center">
                            <div class="col-6">
                                <a class="btn btn-primary" href="https://forms.gle/ia2mQmjxkFjtSsSB9" target="_blank" rel="noopener noreferrer" role="button">I'm Interested</a>
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