<script>
import TeamMember from './TeamMember.vue';

export default {
    components: {
        TeamMember
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
            <div class="row">
                <TeamMember name="Akash Taduri" role="President"/>
                <TeamMember name="Marzia Cava" role="Vice President (External Affairs)"/>
                <TeamMember name="Justin Heo" role="Vice President (Internal Affairs), Secretary"/>
                <TeamMember name="Aravind Pallavoor" role="Treasurer"/>
                <TeamMember name="Mehak Dhawan" role="Marketer"/>
                <TeamMember name="Leo Bala" role="Head of Development"/>
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
            <div class = "row">
                <div class="col">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle" src="../assets/antonsobolev.png" alt="Anton Sobolev's picture" />
                        <h4 class="text-white">Anton Sobolev</h4>
                        <p class="text-muted">Assistant Professor of Political Economy and Cyber Policy</p>
                    </div>
                </div>
            </div>
            <div class="text-center text-white">
                <h2 class="section-heading">Featured Alumni</h2>
            </div>
            <div class = "row text-center">
                <div class="col md-6">
                    <a class="btn btn-outline-light" href="https://forms.gle/HCmthQK3XCK2J4D49" target="_blank" rel="noopener noreferrer" role="button">Request to Be Featured</a>
                </div>
            </div>
        </div>
    </section>
</template>