import './bootstrap';
import './../css/app.css';
import Alpine from "alpinejs";
import { createApp } from "vue/dist/vue.esm-bundler";
import { createPinia } from 'pinia'
import { useSpeakerStore } from "./stores/speakerStore";
import Speaker from "./components/Speaker.vue";
import confetti from 'canvas-confetti';

const pinia = createPinia()

let speakerPositions = [
    {x: 584, y: 883, name: "Kai Sassnowski"},
    {x: 496, y: 83, name: "Bosun Egberinde"},
    {x: 322, y: 827, name: "Caleb Porzio"},
    {x: 60, y: 571, name: "Marje Holmstrom-Sabo"},
    {x: 846, y: 152, name: "Tim Martin"},
    {x: 1080, y: 843, name: "Ralph J. Smit"},
    {x: 772, y: 1060, name: "Marcel Pociot"},
    {x: 1780, y: 730, name: "Caneco"},
    {x: 1082, y: 734, name: "Matt Stauffer"},
    {x: 1517, y: 563, name: "Taylor Otwell"},
    {x: 1793, y: 151, name: "Aaron Francis"},
    {x: 618, y: 285, name: "Christoph Rumpel"},
    {x: 411, y: 450, name: "Rissa Jackson"},
    {x: 1833, y: 923, name: "Alex Six"},
    {x: 963, y: 848, name: "Freek Van der Herten"},
    {x: 288, y: 217, name: "Chris Fidao"},
    {x: 1460, y: 82, name: "Luke Downing"},
    {x: 1060, y: 46, name: "Stephen Rees-Carter"},
    {x: 256, y: 370, name: "Colin DeCarlo"},
];

createApp({
    components: {
        Speaker,
    },
    setup() {
        const store = useSpeakerStore()

        const speakers = store.speakers;

        const playAudio = () => {
            const audio = new Audio(`/audio/horn_${Math.floor(Math.random() * 4) + 1}.mp3`);
            audio.play();
        };

        const launchConfetti = () => {
            // do this for 30 seconds
            var duration = 1 * 1000;
            var end = Date.now() + duration;

            (function frame() {
                // launch a few confetti from the left edge
                confetti({
                    particleCount: 7,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 }
                });
                // and launch a few from the right edge
                confetti({
                    particleCount: 7,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 }
                });

                // keep going until we are out of time
                if (Date.now() < end) {
                    requestAnimationFrame(frame);
                }
            }());
        }

        const findSpeaker = (e) => {
            // Find speaker that is near the mouse position inside of the speakerPositions array
            let widthRatio = speakerImage.naturalWidth / speakerImage.width;
            let heightRatio = speakerImage.naturalHeight / speakerImage.height;

            let speaker = speakerPositions.find(speaker => {
                let padding = 0;
                if (e.view.innerWidth > 1920) {
                    padding = (e.view.innerWidth - 1920) / 2;
                }
                let mouseX = Math.max(0, e.layerX) * widthRatio - padding;
                let mouseY = Math.max(0, e.layerY) * heightRatio;

                return Math.abs(mouseX - speaker.x) < (20 * widthRatio) && Math.abs(mouseY - speaker.y) < (20 * heightRatio);
            });

            if (speaker) {
                // Add to speakersFound array if not already in there
                if (!store.found.includes(speaker.name)) {
                    launchConfetti();

                    playAudio();

                    store.found.push(speaker.name);
                }
            }
        }

        const speakerFound = (speaker) => {
            return store.found.includes(speaker);
        }

        return { store, findSpeaker, speakerFound, speakers }
    },
})
    .use(pinia)
    .mount('#app');

Alpine.data('schedule', () => ({
    list: [],
    zone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'EDT',
    init() {
    },
}))

const speakerImage = document.querySelector('.speakerImage');

Alpine.data('follow', () => ({
    live: false,
    movement(e) {
        let padding = 0;
        if (e.view?.innerWidth > 1920) {
            padding = (e.view?.innerWidth - 1920) / 2;
        }

        let bound = e.target.getBoundingClientRect()
        if (! e.target.classList.contains('clip-hero')) {
            document.documentElement.style.setProperty('--clip-x', `-500px`)
            document.documentElement.style.setProperty('--clip-y', `-500px`)
            return;
        }
        document.documentElement.style.setProperty('--clip-x', `${e.clientX - bound.left - padding}px`)
        document.documentElement.style.setProperty('--clip-y', `${e.clientY - bound.top}px`)
    },
}))

Alpine.start()
