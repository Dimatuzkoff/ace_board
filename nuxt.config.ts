export default defineNuxtConfig({
    devtools: { enabled: false },
    modules: ['@nuxt/image', '@nuxtjs/tailwindcss', 'shadcn-nuxt', '@nuxtjs/color-mode'],
    shadcn: {
        prefix: 'Ui',
        componentDir: './components/ui'
    },
    compatibilityDate: '2025-01-30'
})