<template >
  <div id="app" >
    <div class="">
      <div >
        <router-view 
          :key="$route.fullPath"
          class="d-flex justify-content-center" style="margin-right: 0px;margin-left: 0px;"
        />
      </div>
    </div>
  </div>

</template>
<script >
export default{
};
</script>
<style >
</style>
