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
                    <img class="card-img-top" src="../assets/lunchandlearn.jpg" alt="Meeting image placeholder">
                    <ul class="list-group list-group-flush border border-0">
                            <li class="list-group-item border border-0 bg-dark text-white">
                                <ClockIcon :size="16"/>
                                <span class="ms-1"> Nov 17, 2022 11:30am-1pm</span>
                            </li>
                            <li class="list-group-item border border-0 bg-dark text-white" id="meetingLocation">
                                <LocationIcon :size="16"/>
                                <span class="ms-1"> Maggiano's Little Italy</span>
                            </li>
                        </ul>
                    <div class="d-flex flex-column card-body">
                        <h5 class="card-title">Lunch and Learn</h5>
                        <p class="card-text">
                            We're joining North Texas ISSA for their monthly lunch and learn. REGISTRATION REQUIRED as seating is limited.
                        </p>
                        <div class="row justify-content-center">
                            <div class="col-6">
                                <a class="btn btn-primary" href="https://www.eventbrite.com/e/lunch-and-learn-maggianos-november-17-2022-registration-460584158617" target="_blank" rel="noopener noreferrer" role="button">RSVP</a>
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