<template>
    <footer un-text="neutral-7 dark:neutral-3" class="px5 py2">
        <div bg="neutral-1 dark:neutral-9" un-border="~ neutral-2 dark:neutral-8" class="max-w-7xl mx-auto px6 py4 md-py3 flex flex-col md-flex-row items-center md-justify-between gap-8 md-gap-14 rd-lg">
            <div class="md-flex-1">
                <nuxt-link to="#">
                    <span
                        class="text-transparent bg-clip-text bg-gradient-to-tr from-indigo-8 to-purple-4 font-bold text-2xl">U</span>
                    Unify-Ui
                </nuxt-link>
            </div>
            <nav>
                <ul class="flex flex-wrap items-center justify-center gap-6">
                    <li v-for="footerItem in footerItems" :key="footerItem.id">
                        <nuxt-link :to="footerItem.link" un-text="hover:purple-6 dark:hover:purple-5" class="duration-200">
                            {{ footerItem.text }}
                        </nuxt-link>
                    </li>
                </ul>
            </nav>
            <div class="md-flex-1 flex justify-center md-justify-end gap-3">
                <nuxt-link v-for="socialLink in socialLinks" :key="socialLink.id" :to="socialLink.link" aria-label="social link">
                    <span  text-2xl flex :class="socialLink.icon"/>
                </nuxt-link>
            </div>
        </div>
    </footer>
</template>

<script lang="ts" setup>
const footerItems = [
    {
        id:1,
        text:"Home",
        link:"#"
    },
    {
        id:1,
        text:"About",
        link:"#"
    },
    {
        id:1,
        text:"Services",
        link:"#"
    },
]

const socialLinks = [
    {
        id:1,
        link:"#",
        icon:"i-carbon-logo-twitter"
    },
    {
        id:2,
        link:"#",
        icon:"i-carbon-logo-linkedin"
    },
    {
        id:3,
        link:"#",
        icon:"i-carbon-logo-instagram"
    },
    {
        id:4,
        link:"#",
        icon:"i-carbon-logo-facebook"
    },
]
</script>