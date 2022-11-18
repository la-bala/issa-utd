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
    <section class="page-section" id="calendar">
        <div class="container">
            <div class="text-center text-white">
                <h2 class="section-heading">Upcoming Events</h2>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <div class="card text-white ps-2">
                        <div class="row g-0" style="height:100%">
                            <div class="col-4 my-auto">
                                <img src="../assets/launch.jpg" class="img-fluid rounded" alt="ISSA kickoff picture">
                            </div>
                            <div class="col-8">
                                <div class="card-body">
                                    <h5 class="card-title fw-bold">ISSA UTD Kickoff</h5>
                                    <p class="card-text">ISSA UTD is ready to officially join the UTD community with a kickoff event in Spring 2023! Date and location TBD.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6" hidden>
                    <a class="text-decoration-none" href="#" target="_blank" rel="noopener noreferrer"> 
                        <div class="card text-white ps-2">
                            <div class="row g-0" style="height:100%">
                                <div class="col-4 my-auto">
                                    <img src="../assets/meetingimageplaceholder.jpg" class="img-fluid rounded" alt="Event thumbnail">
                                </div>
                                <div class="col-8">
                                    <div class="card-body">
                                        <h5 class="card-title fw-bold">Next meeting</h5>
                                        <p class="card-text">It's a meeting</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div class="text-center text-white mt-5">
                <h2 class="section-heading">Calendar</h2>
            </div>
            <div class="d-flex justify-content-center">
                <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FChicago&showTitle=0&mode=MONTH&showTabs=1&showCalendars=0&showTz=1&showDate=1&showNav=1&showPrint=0&src=ZmEzZTY2MmJjNDZiYWJiMzQ2ZGMxNzhlZDEyYTIxYjVhM2ZmOGM3ZjMyNjQ5N2ZjMTU0NWFlOWFhNWFjODc2ZEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23F6BF26" style="border-width:0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
            </div>
        </div>
    </section>
</template>