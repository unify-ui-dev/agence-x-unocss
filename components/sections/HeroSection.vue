
<template> 
    <section relative pt-32 lg-pt-36>
        <div px="5 sm:10 md:12 lg:5" mx-auto max-w-7xl w-full flex flex-col lg-flex-row gap-10 lg-gap-12>
            <div class="absolute w-full lg-w-1/2 inset-y-0 lg-right-0 hidden lg-block">
                <span absolute un--left-6 md-left-4 top-24 lg-top-28 w24 h24 rotate-90 skew-x-12 rd-3xl bg-green-4
                    blur-xl op-60 lg-op-95 lg-block hidden></span>
                <span absolute right-4 bottom-12 w24 h24 rd-3xl bg-blue-6 blur-xl op-80></span>
            </div>
            <span  class="w-4/12 lg-w-2/12 aspect-square bg-gradient-to-tr from-blue-6 to-green-4 absolute -top-5 lg-left-0 rd-full skew-y-12 blur-2xl op-40 skew-x-12 rotate-90"></span>
            <div relative flex flex-col items-center text-center lg-text-left lg-py-7 xl-py-8 lg-items-start
                lg-max-w-none max-w-3xl mx-auto lg-mx-0 lg-flex-1 class="lg-w-1/2">
 
                <h1 text="3xl/tight sm:4xl/tight md:5xl/tight xl:6xl/tight neutral-8 dark:white" font-bold>
                    Social Media <span class="text-transparent bg-clip-text bg-gradient-to-br from-indigo-6 from-20% via-blue-600 via-30% to-green-6">Marketing</span>
                    is the Best Ever.
                </h1>
                <p mt-8 text="neutral-7 dark:neutral-3">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores repellat perspiciatis aspernatur
                    quis voluptatum porro incidunt,
                    libero sequi quos eos velit
                </p>
                <div mt-10 w-full flex max-w-md mx-auto lg-mx-0>
                    <div flex sm-flex-row flex-col gap-5 w-full>
                        <form action="#" py-1 pl-6 w-full pr-1 flex gap-3 items-center 
                            text="neutral-6 dark:neutral-4"
                            shadow="lg shadow-neutral-2/60 dark:none"
                            bg="neutral-1 dark:neutral-8 focus-within:white dark:focus-within:neutral-950"
                            border="~ neutral-2 dark:neutral-8  focus-within:blue-600" rd-full ease-linear>
                            <span min-w-max pr-2 border-r="~ border-neutral-2 dark:neutral-7">
                                <span i-carbon-email flex text-xl bg="neutral-8 dark:neutral-2"></span>
                            </span>
                            <input type="email" placeholder="johndoe@gmail.com" w-full py-3 outline-none bg-transparent>
                            <button aria-label="Get Started" border="~ transparent hover:#172554"
                                un-after="absolute content-empty inset-x-0 aspect-square scale-0 op-70 origin-center duration-300 ease-linear rd-full top-0 left-0 bg-#172554 hover:op-100 hover:scale-[2.5]"
                                class="outline-none flex justify-center items-center sm-w-max min-w-max px6 h12 bg-blue-6 rd-full relative
                                overflow-hidden duration-300 ease-linear">
                                <span class="hidden sm-flex relative z20 text-white">
                                    Get Started
                                </span>
                                <span flex sm-hidden relative z20>
                                    <span i-carbon-send flex text-xl bg-white></span>
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
 
            <div flex flex-1 lg-h-auto relative lg-max-w-none mx-auto max-w-3xl class="lg-w-1/2">
                <img src="/images/image1.webp" alt="Hero image" width="2350" height="2359" rd-3xl object-cover
                    lg="absolute w-full lg-h-full" class="lg-max-h-none max-h-96">
            </div>
        </div>
    </section>
</template>