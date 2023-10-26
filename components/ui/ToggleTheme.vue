<template>
    <button @click="toggleTheme()" aria-label="toggle theme"
        class="flex p3 rd-lg ease-linear duration-300 text-fg active-children-rotate-90 dark-active-children-rotate-90 hover-bg-neutral1 dark-hover-bg-neutral8">
        <span class="transition-all duration-300 ease-linear flex aspect-square flex justify-center items-center text-neutral9 dark-text-neutral3">
            <span class="i-carbon-moon text-2xl flex dark-hidden" />
            <span class="i-carbon-sun text-2xl hidden dark-flex" />
        </span>
    </button>
</template>
<script setup lang="ts">
const colorMode = useColorMode()
const toggleTheme = () => {
    if (colorMode.preference === "dark") {
        colorMode.preference = "light"
    } else {
        colorMode.preference = "dark"
    }
}
</script>