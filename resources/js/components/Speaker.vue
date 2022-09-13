<template>
    <div class="flex flex-col flex-wrap items-center justify-center">
        <figure class="speaker-picture items-center flex justify-center text-8xl font-nanum">
            <img
                v-if="speakerFound"
                :src="`/2022-summer/speakers/${speaker.image}`">
            <span v-else>?</span>
        </figure>
        <h3 class="speaker-name"><a :href="speaker.twitter" target="_blank" rel="external"><span class="whitespace-nowrap">{{ speakerName }}</span></a></h3>
        <p class="speaker-title">{{ speaker.title }}</p>
    </div>
</template>

<script setup>
import { useSpeakerStore } from "./../stores/speakerStore";
import {computed, watch, defineEmits} from "vue";
const store = useSpeakerStore()

const emit = defineEmits(['speakerFound'])

const props = defineProps({
    speaker: {
        type: Object,
        required: true
    }
})

const speakerFound = computed(() => {
    return store.found.includes(props.speaker.name);
});

const speakerName = computed(() => {
    if (speakerFound.value) {
        return props.speaker.name;
    }
    const reversed = props.speaker.name
            .split(' ')
            .map((n) => n.split('')
            .reverse()
            .map((n) => n.toLowerCase())
            .join(''))
            .map(word => word.charAt(0).toUpperCase() + word.slice(1));

    return reversed.join(' ');
})

</script>
