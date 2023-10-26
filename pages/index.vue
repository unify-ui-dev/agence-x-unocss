<template>
    <main class="flex-1">
        <section py32 h-full flex items-center>
            <UiContainer class="text-center space-y-10">
                <div class="relative wmax mxauto px0.5 pt1 text-neutral9 dark-text-neutral1"
                    un-before="absolute content-empty inset-0 rd-md bg-gradient-to-br from-neutral3 dark:from-neutral8">
                    <span
                        class="relative rd-md px4 py1 bg-gradient-to-t from-neutral2 to-white dark-from-neutral8 dark-to-neutral-950">Under
                        development</span>
                </div>
                <h1 un-text="4xl md:5xl lg:6xl xl:7xl transparent"
                    un-bg="clip-text gradient-to-tr gradient-from-neutral950 gradient-to-neutral5 dark:gradient-from-neutral-4 dark:gradient-to-neutral-2"
                    un-font="extrabold" class="max-w-4xl mx-auto">
                    Design faster your website with all ease
                </h1>
                <p un-text="neutral7 dark:neutral3" class="mx-auto max-w-xl">
                    Collection of modern and elegant blocks and components for creating beautifull website with UnoCss
                </p>
                <div class="w-full flex flex-col items-center justify-center">
                    <form class="flex w-full max-w-lg relative items-center gap-x-3">
                        <input type="email" placeholder="johndoe@gmail.com" un-text="neutral-6 dark:neutral4"
                            un-bg="neutral1 dark:neutral9" un-border="~ neutral2 dark:neutral8"
                            class="outline-none flex-1 rd-md py-3 px-5" />
                        <button bg-gradient-to-tr from-40% from-neutral8 to-purple950
                            un-rounded="md" un-border="~ neutral8" un-text="neutral-100 sm"
                            un-p="x-5 y-3"
                            un-ring="offset-2 offset-neutral-950 focus:2 neutral-9 dark:white">
                            Get Started
                        </button>
                    </form>
                </div>
            </UiContainer>
        </section>
    </main>
</template>

<script lang="ts" setup>
useHead({
  title: 'Unify-UI BoilerPlate',
  meta: [
    {
      name: 'description',
      content: 'My page description',
    },
  ],
  link:[
    {
        href:"https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap",
        rel:"stylesheet"
    }
  ]
})
</script>