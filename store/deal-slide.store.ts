import type { ICard } from "~/components/kanban/kanban.types";

const defaultValue: { card: ICard | null, isOpen: boolean } = {
    card: null,
    isOpen: false
}

export const useDealSlideStore = defineStore('dea-slide', {
    state: () => defaultValue,
    actions: {
        clear() {
            this.$patch(defaultValue)
        },
        set(card: ICard) {
            this.card = card
            this.isOpen = true
        },
        toggle() {
            this.isOpen = !this.isOpen
        }
    }
})
