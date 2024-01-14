<template>
  <div id="pdf-containt">
    <div id="pdf-div">
      <div class="personal-info-div">
        <div class="profile-div">
          <img :src="getFormDetails.profileImage" alt="image" class="cv-dp" />
        </div>
        <div class="info-div">
          <div class="identity-info">
            <span class="identity-icon"
              ><img src="../../assets/badge.png" alt="" class="icon"
            /></span>
            <h5 class="identity">
              {{ getFormDetails.firstName + getFormDetails.lastName }}
            </h5>
          </div>
          <div class="identity-info">
            <span class="identity-icon"
              ><img src="../../assets/phone.png" alt="" class="icon"
            /></span>
            <h5 class="identity">{{ getFormDetails.phone }}</h5>
          </div>
          <div class="identity-info">
            <span class="identity-icon"
              ><img src="../../assets/email.png" alt="" class="icon"
            /></span>
            <h5 class="identity">{{ getFormDetails.email }}</h5>
          </div>
          <div class="identity-info">
            <span class="identity-icon"
              ><img src="../../assets/address.png" alt="" class="icon"
            /></span>
            <h5 class="identity">{{ getFormDetails.address }}</h5>
          </div>
        </div>
      </div>
      <div class="public-info-div">
        <div class="left-div">
          <div class="qualification">
            <div class="qualification-info">
              <span class="school"
                ><img src="../../assets/education.png" alt="school" /></span
              >{{ getFormDetails.secondary }}
            </div>
            <div class="qualification-info">
              <span class="school"
                ><img src="../../assets/college.png" alt="college" /></span
              >{{ getFormDetails.higherSecondary }}
            </div>
            <div class="qualification-info">
              <span class="school"
                ><img
                  src="../../assets/graduation.png"
                  alt="graduation" /></span
              >{{ getFormDetails.graduation }}
            </div>
          </div>
          <div class="skill">
            <div
              class="skill-list"
              v-for="(skill, index) in getFormDetails.skill"
              :key="index"
            >
              <h5>{{ skill }}</h5>
            </div>
          </div>
        </div>
        <div class="right-div">
          <div
            class="project-history"
            v-for="(project, index) in getFormDetails.projectDetails"
            :key="index"
          >
            <div class="project-heading">{{ project.projectHeading }}</div>
            <div class="project-description">{{ project.aboutProject }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="btn-div">
      <button id="download-btn" @click="downloadPdf">Download PDF</button>
    </div>
  </div>
</template>
<script>
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { mapGetters } from "vuex";
export default {
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getFormDetails"]),
  },
  created() {
    console.log("getters", this.getFormDetails);
  },
  methods: {
    downloadPdf() {
      html2canvas(document.querySelector("#pdf-div")).then(function (canvas) {
        let base64Image = canvas.toDataURL("image/png");

        let pdf = new jsPDF("p", "px", [782, 1176]);
        pdf.addImage(base64Image, "PNG", 5,5, 768, 931);
        pdf.save("cv_builder.pdf");
      });
    },
  },
};
</script>
<style scoped>
#pdf-div {
  display: flex;
  flex-direction: column;
  width: 766px;
  min-height: 88vh;
  border: 1px solid;
}
.profile-div {
  width: 251px;
  height: 149px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cv-dp {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 85%;
  height: 96%;
}
.info-div {
  width: 510px;
  height: 149px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
}
.identity-info {
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.identity {
  margin-left: 15px;
}
.icon {
  display: flex;
  justify-content: center;
  align-items: center;
}
.personal-info-div {
  border-bottom: 1px solid;
  display: flex;
  min-height: 115px;
  width: 100%;
  background: #fffcfc;
}
.public-info-div {
  display: flex;
  min-height: 567px;
}
.left-div {
  border-right: 1px solid;
  width: 250px;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.qualification {
  border: 1px solid;
  border-radius: 7px;
  min-height: 131px;
  margin: 7px;
  display: flex;
  justify-content: start;
  flex-direction: column;
}
.qualification-info {
  width: 100%;
  height: 15%;
  margin: 7px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 15px;
  color: black;
  text-align: left;
}
.skill {
  border: 1px solid;
  border-radius: 7px;
  min-height: 150px;
  margin: 7px;
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
}
.skill-list {
  border: 1px solid;
  width: 71px;
  height: 30px;
  border-radius: 7px;
  margin: 8px;
  font-size: 16px;
  font-style: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
}
.project-history {
  border-bottom: 1px solid;
  min-height: 96px;
  margin: 7px;
  display: flex;
  justify-content: start;
  flex-direction: column;
}
.project-heading {
  border-bottom: 1px solid;
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 6px;
  color: black;
}
.project-description {
  width: 95%;
  display: flex;
  align-items: start;
  justify-content: flex-start;
  margin: 0px 11px;
  text-align: justify;
  font-size: 13px;
  color: black;
}
.right-div {
  width: 510px;
  display: flex;
  flex-direction: column;
}
.btn-div {
  display: flex;
  justify-content: center;
  align-items: center;
}
#download-btn {
  width: 182px;
  height: 53px;
  margin: 11px;
  border-radius: 7px;
  font-size: 16px;
  font-family: "Playpen Sans";
}
#download-btn:active {
  background: #3299f7;
  color: white;
}
</style>
