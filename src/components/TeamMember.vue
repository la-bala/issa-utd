<script>
import emptyProfilePic from '@/assets/emptyprofile.png'

export default {
    props: {
        name: String,
        role: String,
        imgSrc: String
    },
    data() {
        return {
            avatars: {
                "Akash Taduri": emptyProfilePic,
                "Marzia Cava": emptyProfilePic,
                "Justin Heo": emptyProfilePic,
                "Aravind Pallavoor": emptyProfilePic,
                "Mehak Dhawan": emptyProfilePic,
                "Leo Bala": emptyProfilePic
            }
        }
    }
}
</script>

<template>
    <div class="col-6 col-md-4 col-xl-2">
        <div class="team-member">
            <img class="mx-auto rounded-circle" :src="avatars[name]" :alt="name" />
            <h4 class="text-white">{{name}}</h4>
            <p class="text-muted">{{role}}</p>
        </div>
    </div>
</template>

<style>
.team-member {
    margin-bottom: 3rem;
    text-align: center;
}
.team-member img {
    width: 10rem;
    height: 10rem;
    border: 0.4rem solid rgba(226, 226, 226, 0.352);
}
.team-member h4, .team-member .h4 {
    margin-top: 1.5rem;
    margin-bottom: 0;
}
</style>