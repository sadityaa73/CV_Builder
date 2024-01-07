<template>
  <div id="header-div">
    <div id="left-container">
        <h5 class="header-navigation">Home</h5>
    </div>
    <div id="right-container">
        <h5 class="header-navigation">Contact-us</h5>
        <h5 class="header-navigation">About-us</h5>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
#header-div{
    display: flex;
    justify-content: space-between;
    border: 1px solid;
    margin: 2px;
    height: 45px;
    border-radius: 3px;
    background: #1399fc;
}
#left-container{
    height: 100%;
    width: 8%;
    margin-left: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.header-navigation{
    color: white;
    font-size: 17px;
    font-family: Playpen Sans;
}
#right-container{
    height: 100%;
    width: 27%;
    margin-left: 18px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
</style>
