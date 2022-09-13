import { defineStore } from 'pinia'

export const useSpeakerStore = defineStore('speaker', {
    state: () => ({
        found: [],
        speakers: [
            {
                name: "Kai Sassnowski",
                title: "Type Aficionado",
                twitter: "https://twitter.com/warsh33p",
                image: "kai-sassnowski.jpg",
            },
            {
                name: "Bosun Egberinde",
                title: "Developer @ Shopify",
                twitter: "https://twitter.com/bosunski",
                image: "bosun-egberinde.jpg",
            },
            {
                name: "Caleb Porzio",
                title: "Creator of Alpine & Livewire",
                twitter: "https://twitter.com/calebporzio",
                image: "caleb-porzio.jpg",
            },
            {
                name: "Marje Holmstrom-Sabo",
                title: "People Ops @ Tighten",
                twitter: "https://twitter.com/minn_finn",
                image: "marje-holmstrom-sabo.jpg",
            },
            {
                name: "Tim Martin",
                title: "Softw. Eng @ Curology",
                twitter: null,
                image: "tim-martin.jpg",
            },
            {
                name: "Ralph J. Smit",
                title: "Freelance Softw. Eng",
                twitter: "https://twitter.com/ralphjsmit",
                image: "ralph-j-smit.jpg",
            },
            {
                name: "Marcel Pociot",
                title: "CTO @ Beyond Code",
                twitter: "https://twitter.com/marcelpociot",
                image: "marcel-pociot.jpg",
            },
            {
                name: "Caneco",
                title: "Full-Stack Dev @ Medicare",
                twitter: "https://twitter.com/caneco",
                image: "caneco.jpg",
            },
            {
                name: "Matt Stauffer",
                title: "Partner @ Tighten",
                twitter: "https://twitter.com/stauffermatt",
                image: "matt-stauffer.jpg",
            },
            {
                name: "Taylor Otwell",
                title: "Creator of Laravel",
                twitter: "https://twitter.com/taylorotwell",
                image: "taylor-otwell.jpg",
            },
            {
                name: "Aaron Francis",
                title: "Marketing Eng @ Tuple",
                twitter: "https://twitter.com/aarondfrancis",
                image: "aaron-francis.jpg",
            },
            {
                name: "Christoph Rumpel",
                title: "Developer & Author",
                twitter: "https://twitter.com/christophrumpel",
                image: "christoph-rumpel.jpg",
            },
            {
                name: "Rissa Jackson",
                title: "Full-Stack Eng @ Loop",
                twitter: "https://twitter.com/rissa_bubbles",
                image: "rissa-jackson.jpg",
            },
            {
                name: "Alex Six",
                title: "Project Lead @ Kirschbaum",
                twitter: "https://twitter.com/alexandersix_",
                image: "alex-six.jpg",
            },
            {
                name: "Freek Van der Herten",
                title: "Developer @ Spatie",
                twitter: "https://twitter.com/freekmurze",
                image: "freek-van-der-herten.jpg",
            },
            {
                name: "Chris Fidao",
                title: "Laravel Specialist @ Fly.io",
                twitter: "https://twitter.com/fideloper",
                image: "chris-fidao.jpg",
            },
            {
                name: "Luke Downing",
                title: "Full-Stack Dev @ Worksome",
                twitter: "https://twitter.com/LukeDowning19",
                image: "luke-downing.jpg",
            },
            {
                name: "Stephen Rees-Carter",
                title: "Security Consultant",
                twitter: "https://twitter.com/valorin",
                image: "stephen-rees-carter.jpg",
            },
            {
                name: "Colin DeCarlo",
                title: "Developer @ Vehikl",
                twitter: "https://twitter.com/colindecarlo",
                image: "colin-decarlo.jpg",
            }
        ]
    }),
    getters: {
    },
    actions: {
        increment() {
            this.count++
        },
    },
})
