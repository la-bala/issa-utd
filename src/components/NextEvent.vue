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
                    <img class="card-img-top" src="../assets/cybertrends.jpeg" alt="Cybersecurity stock photo">
                    <ul class="list-group list-group-flush border border-0">
                            <li class="list-group-item border border-0 bg-dark text-white">
                                <ClockIcon :size="16"/>
                                <span class="ms-1"> 3-4PM, January 25, 2023</span>
                            </li>
                            <li class="list-group-item border border-0 bg-dark text-white" id="meetingLocation">
                                <LocationIcon :size="16"/>
                                <span class="ms-1"> GR 2.326 (San Antonio Room)</span>
                            </li>
                        </ul>
                    <div class="d-flex flex-column card-body">
                        <h5 class="card-title">Cybersecurity Guest Talk: Jenny Menna</h5>
                        <p class="card-text">
                            Before the Spring kickoff, join us for a guest talk with Jenny Menna, VP of Threat Management & Response at Humana, board member of the FS-ISAC, and a former senior government executive. Joined by cloud security expert James Binford, she will give a talk on cybersecurity threats, trends, and careers across industry and government!
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
        <div hidden class="row justify-content-center">
            <div class="py-4 col-md-8 col-xl-6">
                <div class="card bg-dark text-white border border-secondary">
                    <img class="card-img-top" src="../assets/launch.jpg" alt="Meeting image placeholder">
                    <ul class="list-group list-group-flush border border-0">
                            <li class="list-group-item border border-0 bg-dark text-white">
                                <ClockIcon :size="16"/>
                                <span class="ms-1"> 7PM, January 31, 2023</span>
                            </li>
                            <li class="list-group-item border border-0 bg-dark text-white" id="meetingLocation">
                                <LocationIcon :size="16"/>
                                <span class="ms-1"> SSA 12.471</span>
                            </li>
                        </ul>
                    <div class="d-flex flex-column card-body">
                        <h5 class="card-title">ISSA UTD Kickoff</h5>
                        <p class="card-text">
                            Join NTX ISSA president Sean Richards, subchapter director Alena Funtikova-White, and other UTD students interested in cybersecurity for our Spring kickoff! Free food will be provided!
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