<script>
import TeamMember from './TeamMember.vue';
import Alumni from './Alumni.vue';

export default {
    components: {
        TeamMember,
        Alumni
    }
}
</script>

<template>
    <section class="page-section" id="team">
        <div class="container">
            <div class="text-center text-white">
                <h1 class="section-heading">Our Team</h1>
            </div>
            <div class="text-center text-white">
                <h2 class="section-heading">Officers</h2>
            </div>
            <div class="row justify-content-center">
                <div class="col-6 col-md-4 col-xl-2">
                    <TeamMember name="Akash Taduri" role="President"/>
                </div>
                <div class="col-6 col-md-4 col-xl-2">
                    <TeamMember name="Marzia Cava" role="Vice President (External Affairs)"/>
                </div>
                <div class="col-6 col-md-4 col-xl-2">
                    <TeamMember name="Justin Heo" role="Vice President (Internal Affairs), Secretary"/>
                </div>
                <div class="col-6 col-md-4 col-xl-2">
                    <TeamMember name="Aravind Pallavoor" role="Treasurer"/>
                </div>
                <div class="col-6 col-md-4 col-xl-2">
                    <TeamMember name="Mehak Dhawan" role="Marketer"/>
                </div>
                <div class="col-6 col-md-4 col-xl-2">
                    <TeamMember name="Leo Bala" role="Head of Development"/>
                </div>
            </div>
            <div class="text-center text-white">
                <h2 class="section-heading">Members</h2>
            </div>
            <div class = "row text-center">
                <div class="col md-6">
                    <a class="btn btn-outline-light" href="https://forms.gle/ia2mQmjxkFjtSsSB9" target="_blank" rel="noopener noreferrer" role="button">Join ISSA UTD</a>
                </div>
            </div>
            <div class="text-center text-white">
                <h2 class="section-heading">Faculty Sponsor</h2>
            </div>
            <div class = "row justify-content-center">
                <div class="col">
                    <TeamMember name="Anton Sobolev" role="Assistant Professor of Political Economy and Cyber Policy"/>
                </div>
            </div>
            <div class="text-center text-white">
                <h2 class="section-heading">Featured Alumni</h2>
            </div>
            <Alumni name="Tahlla Taylor"/>
            <div class = "row text-center">
                <div class="col md-6">
                    <a class="btn btn-outline-light" href="https://forms.gle/HCmthQK3XCK2J4D49" target="_blank" rel="noopener noreferrer" role="button">Request to Be Featured</a>
                </div>
            </div>
        </div>
    </section>
</template>