<template>
    <div>
        <navbar2/>
        <Alert/>
        <background/>
                <mainproduct/>
        <indexFooter/>
    </div>
</template>
<script>
import navbar2 from '../navbar2';
import background from './products_bg';
import mainproduct from './mainproduct';
import Alert from "../alert";
import indexFooter from '../index-footer';
export default {
    components:{
    navbar2,
    background,
    mainproduct,
    Alert,
    indexFooter,

    }
}
</script>