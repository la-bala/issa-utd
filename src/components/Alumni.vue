<script>
import LinkedinIcon from './icons/LinkedinIcon.vue';
import tahllaTaylorPic from '@/assets/tahllataylor.jpg';

export default {
    components: {
        LinkedinIcon
    },
    props: {
        name: String
    },
    data() {
        return {
            members: {
                "Tahlla Taylor": { avatar: tahllaTaylorPic, linkedin: "https://www.linkedin.com/in/tahlla-taylor-1750194b", site: "" }
            }
        }
    }
}
</script>

<template>
    <div class="team-member card mb-3 bg-transparent">
        <div class="row justify-content-center">
            <div class="col-lg-2">
                <div id="memberHeader">
                    <div id="memberCircle">
                        <img id="memberImage" class="rounded-circle" :src="members[name].avatar" :alt="name" />
                        <div id="memberOverlay">
                            <div id="memberLinks" class="d-flex justify-content-center">
                                <LinkedinIcon v-if="members[name].linkedin != ''" :size="32" :link="members[name].linkedin"/>
                            </div>
                        </div>
                    </div>
                </div>
                <h4 class="text-white fs-4 mb-1">Tahlla Taylor</h4>
                <h5 class="fs-6 text-muted">President and Founder</h5>
                <h6 class="fs-6 text-muted">MS Cybersecurity, Technology, and Policy '22</h6>
            </div>
            <div class="col-lg-8">
            <div class="card-body text-white">
                <p style="color: #eeeeee" class="card-text fs-7">"I founded ISSA UTD in hopes to build a professional group within UTD that would bring professional development and cybersecurity skill type workshops to other students at UTD. Along with that, I founded the organization to provide cybersecurity students with a network of cybersecurity professionals that can mentor and provide opportunities to students post graduation as well. My favorite memory is hosting and planning the Speed Interviewing workshop. In this workshop we collected the resumes of students prior and provided them to the cybersecurity professionals helping with the workshop. We did this so that the interviewers could make custom questions to ask the interviewee during the workshop. We received positive feedback from attendees and the interviewers had a blast as well! I am looking forward to seeing how ISSA UTD will grow under its future leaders."</p>
            </div>
            </div>
        </div>
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
.team-member h4 {
    margin-top: 1rem;
    margin-bottom: 0;
}
</style>