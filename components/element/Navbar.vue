<template>
    <header absolute inset-x-0 top-0 z50 py6>
        <div w-full px="5 sm:10 md:12 lg:5" mx-auto max-w-7xl>
            <nav w-full flex justify-between gap-6 relative>
                <div min-w-max inline-flex relative>
                    <nuxt-link to="/" relative flex items-center gap-3>
                        <span class="flex">
                            <span w3 h6 rd-l-full flex bg-emerald-6></span>
                            <span w3 h6 rd-r-full flex bg-teal-4 mt1.5></span>
                        </span>
                        <div inline-flex text="lg neutral-8 dark:white" font-semibold>
                            Estavis
                        </div>
                    </nuxt-link>
                </div>

                <div aria-hidden="true" fixed bg="border-neutral-7/50" inset-0 backdrop-filter backdrop-blur-xl
                    class="bg-neutral-8/40" :class="navIsOpen ? 'flex lg-hidden' : 'hidden lg:!hidden'">
                </div>
                <div absolute lg-relative w-full flex overflow-hidden duration-300 ease-linear lg="full lg:0"
                    top="full lg:0" border="~ neutral-2 dark:neutral-7 lg:0" flex-col lg-flex-row gap-y-6 gap-x-4
                    lg-justify-between lg-items-center bg="white dark:neutral-950 lg:!transparent"
                    :class="navIsOpen ? 'translate-y-0 visible op-100' : 'translate-y-10 invisible op-0 lg-op-100 lg-visible lg-translate-y-0'">
                    <ul px="6 lg:0" pt="6 lg:0" flex flex-col lg-flex-row gap-y-4 gap-x-3 text="lg neutral-7 dark:neutral-3"
                        w-full lg-justify-center lg-items-center>
                        <li v-for="navItem in navItems" :key="navItem.id">
                            <nuxt-link to="#" duration-300 font-medium ease-linear hover-text-emerald-6 py3>
                                {{ navItem.text }}
                            </nuxt-link>
                        </li>
                    </ul>

                    <div lg-min-w-max flex items-center sm-w-max w-full pb="6 lg:0" px="6 lg:0">
                        <nuxt-link to="#" flex justify-center items-center w-full sm-w-max px6 h12 bg-emerald-600 rd-full
                            relative overflow-hidden border="~ transparent hover:[emerald7]" duration-300 ease-linear
                            un-after="absolute content-empty inset-x-0 aspect-square scale-0 op-70 origin-center duration-300 ease-linear rd-full top-0 left-0 bg-[emerald7]">
                            <span relative z-10 text-white>
                                Get Started
                            </span>
                        </nuxt-link>
                    </div>
                </div>

                <div min-w-max flex items-center gap-x-3>
                    <ui-toggle-theme />
                    <button aria-label="toggle navbar" @click="toggleNavBar()" lg-hidden lg-invisible outline-none w7 hauto
                        flex flex-col relative bg-transparent>
                        <span bg="neutral-7 dark:neutral-300" w6 h0.5 rd-full transition-all duration-300 ease-linear
                            :class="navIsOpen ? 'translate-y-1.5 rotate-40' : ''"></span>
                        <span bg="neutral-7 dark:neutral-3" w6 origin-center mt1 h0.5 rd-ful transition-all duration-300
                            ease-linear :class="navIsOpen ? 'op-0 scale-x-0' : ''"></span>
                        <span bg="neutral-7 dark:neutral-3" w6 mt1 h0.5 rd-ful transition-all duration-300 ease-linear
                            :class="navIsOpen ? '-translate-y-1.5 -rotate-40' : ''"></span>
                    </button>
                </div>
            </nav>
        </div>
    </header>
</template>
<script setup>
const navIsOpen = useState('navIsOpen', () => false)
const navItems = [
    {
        id: 1,
        text: "Home",
        href: "/",
    },
    {
        id: 2,
        text: "Services",
        href: "/",
    },
    {
        id: 3,
        text: "About us",
        href: "/",
    },
    {
        id: 4,
        text: "Features",
        href: "/",
    }
]

function toggleNavBar() {
    navIsOpen.value = !navIsOpen.value
    document.body.classList.toggle("overflow-y-auto")
}
function closeNavBar() {
    navIsOpen.value = false
    ocument.body.classList.add("overflow-y-auto")
}
</script>