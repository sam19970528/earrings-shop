<template>
  <div>
    <navbar2 />
    <background />
    <indexContent/>
    <indexItem />
    <indexFooter />
  </div>
</template>
<script>
import navbar2 from "./navbar2";
import background from "./background";
import indexContent from "./index-content";
import indexItem from "./index-item";
import indexFooter from "./index-footer";

export default {
  components: {
    navbar2,
    background,
    indexContent,
    indexItem,
    indexFooter
  },
};
</script>