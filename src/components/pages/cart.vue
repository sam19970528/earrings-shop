<template>
  <div>
    <navbar3 />
    <Alert/>
    <router-view></router-view>
    <indexFooter />
  </div>
</template>
<script>
import navbar3 from "../navbar3";
import Alert from '../alert'
import indexFooter from "../index-footer";
export default {
  components: {
    navbar3,
    indexFooter,
    Alert,
  },
};
</script>
