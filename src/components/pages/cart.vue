<template>
  <div>
    <navbar3 />
    <router-view></router-view>
    <indexFooter />
  </div>
</template>
<script>
import navbar3 from "../navbar3";
import indexFooter from "../index-footer";
export default {
  components: {
    navbar3,
    indexFooter
  },
};
</script>
