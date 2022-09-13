<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>Laragone | UI and Component testing with Cypress</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Find all the speakers and learn about UI and Component testing with Cypress.">
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:title" content="Laragone | UI and Component testing with Cypress" />
    <meta property="og:description" content="Find all the speakers and learn about UI and Component testing with Cypress." />
{{--    <meta property="og:image" content="https://laracon.net/2022-summer/socialcard.png" />--}}
    <meta property="og:site_name" content="Laragone | UI and Component testing with Cypress" />
    <meta property="og:url" content="https://laragone.net" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="Laragone | UI and Component testing with Cypress" />
    <meta name="twitter:description" content="Find all the speakers and learn about UI and Component testing with Cypress." />

    <meta name="twitter:image:alt" content="Laragone | UI and Component testing with Cypress" />
    <meta name="twitter:site" content="@beyondcode" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap">

    @vite('resources/js/app.js')
</head>
<body class="h-screen w-full overflow-x-hidden" id="app">

<header id="hero" class="relative w-screen">
    <nav id="navigation" class="menu z-30"
         x-data="{ scroll:null }"
         x-on:scroll.window.debounce.50="scroll=window.scrollY>0"
         x-bind:class="{ 'shadow-lg':scroll }">
        <a href="#speakers">Speakers</a>
        <a href="#swag">Digital Swag</a>
    </nav>
    <div class="clip-hero sm:mt-36 relative z-10 w-screen mt-12"
         data-test="hero-map"
         x-data="follow"
         @click="findSpeaker"
         x-on:mousemove.window.debounce.5="window.innerWidth>767&&movement">
        <div class="sm:block hidden text-center pointer-events-none">
            <img x-show="!live" src="/2022-summer/hero-bw.jpg?v=2" alt="" class="mx-auto">
            <img x-cloak hidden src="/2022-summer/hero-co.jpg?v=1" alt="" class="speakerImage md:block absolute top-0 inset-x hidden mx-auto pointer-events-none"
                 onload="window.innerWidth>767 && this.classList.add('clip') , this.hidden=false" />
            <img x-cloak x-show="live" src="/2022-summer/hero-co.jpg?v=1" alt="">
        </div>
        <div class="sm:hidden px-3 text-center">
            <img x-show="!live" src="/2022-summer/hero-xs.jpg?v=1" alt="" class="mx-auto">
            <img x-cloak x-show="live" src="/2022-summer/hero-xs-co.jpg?v=1" alt="" class="mx-auto">
        </div>
    </div>
    <div class="inset-x sm:mt-14 absolute top-0 z-10 ">
        <span class="title">Laragone</span>
        <svg class="fill-black -mt-[90px]" viewBox="0 0 850 360">
            <path d="M431.1,359.4c-3.5,1.2-8.2,0.1-11.9-0.1c-1.8-0.1-3.4-1.5-3.4-3.4c0.1-13.5,0-26.9,1.2-40.3c0.2-2,2.9-2,3.1,0 c1.5,12.3,1.8,24.6,2.3,36.9c3.2,0,6.6,0,9.4,1.2C434.5,355,433.4,358.6,431.1,359.4z M380.7,325.6c0.8,5.4,0.8,10.9,0,16.3 c-0.9,6.2-3.9,21.7-13.7,17.3c-3.9-1.8-5.6-6.4-6.9-10.2c-1.7-4.9-2.5-10.2-2.4-15.4c0-3,0.5-6.9,1.6-10.3c0.5-2.9,1.6-5.7,4-7.9 c3.5-3.1,8.7-3.8,12.4-0.7C379,317.4,380.2,321.6,380.7,325.6z M374.3,325.2c-0.6-2.8-2.2-7.7-5.9-5.5c-3.6,2.1-3.5,7.6-3.7,11.2 c-0.1,1.4-0.9,2.2-1.8,2.5c0.1,2.2,0.3,4.2,0.6,5.8c0.6,4,1.8,8.1,3.7,11.7c0.6,1.1,1.5,3.1,3,2.8c1.2-0.3,2-2.4,2.3-3.4 C375.3,342.6,375.9,333.2,374.3,325.2z M409.3,323.7c-0.2-3.3-0.1-6.8-0.9-10c-0.7-2.7-5.5-3.1-5.9,0c-0.9,6.3,0.2,13.3,0.5,19.7 c0.1,1.6,0.2,3.3,0.2,4.9c-1.2-2.3-2.4-4.5-3.7-6.8c-1.7-3.2-3.5-6.3-5.4-9.5c-1.7-3-3.4-6.1-6.2-8.2c-0.3-0.2-0.6-0.2-1-0.1 c-0.7-0.1-1.4,0.3-1.5,1.1c-1.1,6.7-0.4,13.8-0.2,20.5c0.2,6.6,0.2,13.3,0.7,20c-0.1,0.4-0.1,0.8,0,1.2c0.1,0.4,0.2,0.7,0.2,1.1 c0.7,3.5,6.4,2.7,6.2-0.8c-0.2-7.1-1-14.3-1.6-21.4c-0.2-2.8-0.4-5.6-0.6-8.4c1.2,2.6,2.4,5.2,3.7,7.8c3.5,6.9,6.9,13.8,10.4,20.6 c1.6,3,6.7,1.7,6.5-1.8c-0.4-6.7-0.7-13.5-1.1-20.2C409.7,330.2,409.5,327,409.3,323.7z M507.9,353.1c-2.1-0.2-4.3,0.9-6.4,0.1 c-2.1-0.8-2.3-3.6-2.7-5.5c-0.7-3.1-1.1-6.3-1.4-9.5c1.4,0,2.8-0.1,4.2-0.2c2.2-0.2,4.3-0.1,5.9-1.7c1.2-1.2,1-3.4-0.5-4.2 c-2.1-1.1-3.9-0.4-6.1,0.1c-1.3,0.3-2.5,0.5-3.7,0.9c0-0.1,0-0.2,0-0.4c-0.1-4.1-0.4-9,1.1-13c0.8-2,2.3-3.9,4.3-4.7 c1.5-0.6,3.2-0.5,4.7-1c0.1,0,0.2-0.1,0.2-0.2c-0.3-5.3-8.2-3.3-10.7-1.2c-5.2,4.3-5.5,12.1-5.6,18.3c-0.1,7.3,0.2,15.8,2.7,22.7 c2.2,6.1,10,8.2,15.5,5C512,356.9,510.6,353.4,507.9,353.1z M481.1,312.2c-0.8-4.2-7.2-2.4-6.4,1.8c1.5,7.7,2.7,15.8,3.2,23.8 c-0.8-1.6-1.6-3.2-2.4-4.7c-3.4-6.6-7-13.6-12.1-19c-1.5-1.6-4.8,0.1-3.9,2.3c0,0,0,0.1,0.1,0.1c-0.5,2.5-0.4,5.1-0.5,7.7 c-0.1,3.7-0.1,7.5,0,11.2c0.2,7.2,0.5,14.4,0.9,21.5c-0.5,3.6,6.4,4.7,6.2,0.2c-0.3-7.5-0.8-15-1.5-22.4c-0.3-3.2-0.6-6.3-1-9.5 c1.8,3.4,3.7,6.8,5.4,10.2c3.2,6.7,5.8,13.6,8.7,20.5c1.3,3.2,6.8,3.3,6.6-0.9c-0.2-7.2,0-14.4-0.6-21.7 C483.4,326.2,482.4,319.2,481.1,312.2z M452.4,354.9c-1.1-0.8-2.5-1-3.8-0.9c0.2-1.7-0.1-3.4-0.2-5.3c-0.3-3.9-0.5-7.7-0.8-11.6 c-0.2-3.6-0.4-7.3-0.7-10.9c-0.1-1.8-0.1-3.9-0.3-5.9c0.9,0,1.8,0,2.7,0c4.1,0.1,4-6.6,0-6.3c-4.3,0.4-9.9,0-13.8,2.1 c-1,0.5-1.1,2.3,0,2.8c1.6,0.7,3.4,1.1,5.3,1.2c-0.1,1.8,0.1,3.7,0.2,5.3c0.1,3.9,0.3,7.7,0.4,11.6c0.1,3.6,0.3,7.3,0.4,10.9 c0.1,2.2-0.2,4.6,0.4,6.6c-1.3,0.2-2.6,0.5-3.9,0.9c-1.2,0.3-1.1,2,0,2.3c2.4,0.8,4.6,1.3,7.1,1.6c2.4,0.3,4.9,1.1,7.1-0.3 C454,358.1,453.9,356,452.4,354.9z"></path>
        </svg>
    </div>
</header>






@auth
    <section
        data-test="auth-section"
        class="sm:block from-white to-gray-50 bg-gradient-to-br shadow-gray-100 hidden shadow-xl"
             style="z-index:6">
        <div class="segment">
            <h2 class="title">Hey, {{ auth()->user()->name }}!</h2>
            <p class="subtitle">You are logged in.</p>
        </div>
    </section>
@endauth










<section x-data
    id="speakers" class="sm:block from-white to-gray-50 bg-gradient-to-br shadow-gray-100 hidden shadow-xl"
         style="z-index:6">
    <div class="segment">
        <h2 class="title">SPEAKERS (@{{ store.found.length }} / @{{ store.speakers.length }})</h2>
        <p class="subtitle">Please help us find our speakers. Looks like they went to a different conference?</p>
        <ul class="speakers sm:mt-6 mt-3">
            <li v-for="speaker in speakers" :key="speaker.name">
                <Speaker :speaker="speaker" />
            </li>
        </ul>
    </div>
</section>

<section class="bg-gray-200" v-if="store.found.length === store.speakers.length">
    <div class="segment">
        <p class="title">Yay</p>
        <p class="subtitle">You Found Them All! 🎉</p>
        <a href="https://twitter.com/intent/tweet?text={{ '.@marcelpociot I found all the speakers at Laragone! 🎉' }}&hashtags=laragone%2Claracon" rel="external" class="cta my-6">
            Share your success on Twitter
        </a>
    </div>
</section>

<section id="about" class="md:w-2/3 lg:w-1/2 segment"
         style="z-index:7">
    <p class="title">ABOUT</p>
    <h2 class="subtitle mb-6 leading-none">
        The empty Laravel event – because all speakers are at the actual <a href="https://laracon.net" class="underline font-semibold">Laracon</a>. 🥲<br>
    </h2>
    <p class="subtitle">
        This website is used as an example for UI and Component testing with Cypress.<br>
        Do you want to learn more about testing your frontend?
    </p>
</section>

<section id="swag" class="from-gray-200 to-white bg-gradient-to-br shadow-gray-100 relative shadow-xl"
         style="z-index:1;">
    <div class="segment">
        <h2 class="title">DIGITAL SWAG</h2>
        <p class="subtitle">
            Beyond Code is once again happy to sponsor this year's Laracon Online.<br>
            Check out our <a href="https://beyondco.de/laracon" class="font-semibold">Laracon Online Deals</a>.
        </p>
        <figure class="rounded-xl sm:w-2/3 lg:w-1/2 sm:mx-auto table mx-6 my-6 overflow-hidden shadow-xl">
            <a href="https://beyondco.de/laracon" rel="external" class="flex items-center justify-center">
                <img class="lazy" src="https://tinkerwell.app/images/card-v3.png" alt="all the official swag for your closet" />
            </a>
        </figure>

        <a href="https://beyondco.de/laracon" rel="external" class="cta mt-12">
            Get your Digital Swag!
        </a>
    </div>
</section>

</body>
</html>
