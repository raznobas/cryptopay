export default defineNuxtConfig({
    app: {
        baseURL: '/cryptopay_host/',
        buildAssetsDir: 'assets'
    },
    ssr: false,
    devtools: {enabled: true},
    target: 'static',
    static: true,
    head: {
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1.0'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },
    css: [
        'bootstrap/dist/css/bootstrap.css',
        '/static/styles/style.css'
    ]
})
