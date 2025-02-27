export default defineNuxtConfig({
    devtools: { enabled: false },
    modules: ['@nuxt/ui', '@nuxt/image', 'shadcn-nuxt', '@nuxtjs/color-mode',
        ['@nuxtjs/google-fonts', {
            families: {
                Lato: {
                    wght: [300, 400, 700],
                    ital: [300],
                },
            }
        }], '@pinia/nuxt', ['@vee-validate/nuxt',
            {
                autoImports: true
            }]],
    shadcn: {
        prefix: 'Ui',
        componentDir: './components/ui'
    },
    pinia: {
        storesDirs: ['./stores/**'],
    },
    compatibilityDate: '2025-01-30'
})