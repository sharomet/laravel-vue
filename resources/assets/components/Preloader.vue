<template>
    <div v-bind:class="[ !preLoader ? 'hidePreloader' : '' ]" class="preloader-bg">
        <div class="preloader-spin"></div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState(['preLoader'])
    }
}
</script>
