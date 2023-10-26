<template>
    <header fixed left-0 top-0 py4 h20 flex items-center wfull>
        <UiContainer class="wfull">
            <nav class="flex items-center justify-between">
                <div class="flex">
                    <NuxtLink to="/" class="p3 rd-lg bg-gradient-to-tr from-neutral2 to-purple-1 dark-from-neutral9 dark-from-70% dark-to-purple950">
                        <NuxtImg src="/logo-dark.svg" width="100" height="200" alt="Unify Logo dark" class="w6 hauto hidden dark-flex"/>
                        <NuxtImg src="/logo-light.svg" width="100" height="200" alt="Unify Logo" class="w6 hauto flex dark-hidden"/>
                    </NuxtLink>
                </div>
                <div class="flex items-center gap-x4 pl5">
                    <NuxtLink to="#" target="_blank" aria-label="Go to GIthub" class="rd-lg p3 hover-bg-neutral-1 dark-hover-bg-neutral-8">
                        <span aria-hidden="true" i-carbon-logo-github text-2xl text-neutral-8 dark-text-neutral2 flex></span>
                    </NuxtLink>
                    <UiToggleTheme/>
                </div>
            </nav>
        </UiContainer>
    </header>
</template>