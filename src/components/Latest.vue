<script>
export default {
    data() {
        return {
            links: [
                {
                    id: 0,
                    src: '../assets/ntxissaconf/0.png',
                    name: 'Home'
                },
                {
                    id: 1,
                    to: '/about',
                    name: 'About'
                },
                {
                    id: 2,
                    to: '/contact',
                    name: 'Contact'
                },
                {
                    id: 3,
                    to: '/calendar',
                    name: 'Calendar'
                },
            ]
        }
    }
}
</script>

<template>
    <section class="page-section" id="meetings">
        <div class="container">
            <div class="text-center text-white">
                <h2 class="section-heading">Latest</h2>
            </div>
            <div class="row justify-content-center">
                <div class="py-2 col-lg-7">
                    <div class="card bg-dark text-white border border-secondary">
                        <div id="carousel" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                                <div v-for="i in 3" :class="i === 1 ? 'carousel-item active' : 'carousel-item'">
                                    <img class="d-block w-100" :src="'/src/assets/ntxissaconf/' + i + '.png'" :alt="'Slide ' + i">
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                                </svg>
                                Sep 23, 2022
                            </li>
                            <li class="list-group-item border border-0 bg-dark text-white" id="meetingLocation">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                </svg>
                                Collin College - Spring Creek Campus
                            </li>
                        </ul>
                        <div class="d-flex flex-column card-body">
                            <h5 class="card-title">NTX ISSA CSC10</h5>
                            <p class="card-text">
                                ISSA UTD joined the DFW security community for North Texas ISSA's 10th Annual Cybersecurity Conference! Students attended presentations, networked with cybersecurity leaders, and met with the student subchapter director to plan the official launch of ISSA UTD in Spring '23!
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