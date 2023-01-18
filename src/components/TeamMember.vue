<script>
import LinkedinIcon from './icons/LinkedinIcon.vue';
import SiteIcon from './icons/SiteIcon.vue';
import emptyProfilePic from '@/assets/emptyprofile.png';
import antonSobolevPic from '@/assets/antonsobolev.png';

export default {
    components: {
        LinkedinIcon,
        SiteIcon
    },
    props: {
        name: String,
        role: String,
        imgSrc: String,
    },
    data() {
        return {
            members: {
                "Akash Taduri": { avatar: emptyProfilePic, linkedin: "https://www.linkedin.com/in/akash-taduri", site: "" },
                "Marzia Cava": { avatar: emptyProfilePic, linkedin: "https://www.linkedin.com/in/marzia-cava/en", site: "" },
                "Justin Heo": { avatar: emptyProfilePic, linkedin: "https://www.linkedin.com/in/justin-heo", site: "" },
                "Aravind Pallavoor": { avatar: emptyProfilePic, linkedin: "https://www.linkedin.com/in/aravind-pallavoor", site: "" },
                "Mehak Dhawan": { avatar: emptyProfilePic, linkedin: "https://www.linkedin.com/in/mehakdhawan1", site: "" },
                "Leo Bala": { avatar: emptyProfilePic, linkedin: "https://www.linkedin.com/in/leobala/", site: "https://labala.us" },
                "Anton Sobolev": { avatar: antonSobolevPic, linkedin: "", site: "https://asobolev.com/" }
            }
        }
    }
}
</script>

<template>
    <div class="team-member">
        <div id="memberHeader">
            <div id="memberCircle">
                <img id="memberImage" class="rounded-circle" :src="members[name].avatar" :alt="name" />
                <div id="memberOverlay">
                    <div id="memberLinks" class="d-flex justify-content-center">
                        <SiteIcon v-if="members[name].site != ''" :size="32" :link="members[name].site"/>
                        <LinkedinIcon v-if="members[name].linkedin != ''" :size="32" :link="members[name].linkedin"/>
                    </div>
                </div>
            </div>
        </div>
        <h4 v-if="name != ''" class="text-white">{{name}}</h4>
        <p v-if="role != ''" class="text-muted">{{role}}</p>
    </div>
</template>

<style scoped>
#memberCircle {
    position: relative;
    left: 50%;
    margin-left: -5rem;
    width: 10rem;
}
#memberOverlay {
    width:100%;
    top:50%;
    margin-top: -13px;
    position: absolute;
    transition: all 0.2s ease;
    opacity: 0;
}
#memberLinks {
    gap: 12px;
}
#memberCircle:hover #memberOverlay {
    opacity: 1;
}
#memberCircle:hover #memberImage {
    opacity: .2;
}
.team-member {
    margin-bottom: 3rem;
    text-align: center;
}
#memberImage {
    width: 10rem;
    border: 0.4rem solid rgba(226, 226, 226, 0.352);
    transition: all 0.3s ease;
}
.team-member h4, .team-member .h4 {
    margin-top: 1.5rem;
    margin-bottom: 0;
}
</style>