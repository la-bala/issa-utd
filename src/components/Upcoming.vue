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
            <h2 class="section-heading">Upcoming</h2>
        </div>
        <div class="row justify-content-center">
            <div class="py-4 col-md-8 col-xl-6">
                <div class="card bg-dark text-white border border-secondary">
                    <img class="card-img-top" src="../assets/launch.jpg" alt="Meeting image placeholder">
                    <ul class="list-group list-group-flush border border-0">
                        <li class="list-group-item border border-0 bg-dark text-white">
                            <ClockIcon :size="16"/>
                            TBD
                        </li>
                        <li class="list-group-item border border-0 bg-dark text-white" id="meetingLocation">
                            <LocationIcon :size="16"/>
                            TBD
                        </li>
                    </ul>
                    <div class="d-flex flex-column card-body">
                        <h5 class="card-title">ISSA Kickoff</h5>
                        <p class="card-text">
                            After official approval from NTX ISSA and the UTD SOC, ISSA UTD is ready to join the UTD community by kicking off next semester!
                        </p>
                        <div class="row justify-content-center">
                            <div class="col-6">
                                <a class="btn btn-primary" role="button">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>