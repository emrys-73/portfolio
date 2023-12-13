import { writable } from "svelte/store";

export let navItem = writable(0)

export const animate = writable("transition-all duration-300 ease-in-out")