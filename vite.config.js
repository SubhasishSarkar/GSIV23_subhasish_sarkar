import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
import { VitePWA } from "vite-plugin-pwa";
const manifestForPlugin  = {
    "name": "MovieApp",
    "short_name": "MovieApp",
    "dir": "ltr",
    "lang": "en-US",
    "orientation": "any",
    "start_url": "/",
    "background_color": "#fff",
    "theme_color": "#fff",
    "display": "standalone",
    "description": "A highly scalable & plug-able, Progressive Web Application foundation with the best Developer Experience.",
    "icons": [
        {
            "src": "/icon512.png",
            "sizes": "512x512",
            "type" : "image/png"
        },
    ]
}
const dotEnvReplacement = (env) => {
    const replacement = Object.entries(env).reduce((obj, [key, val]) => {
        obj[`process.env.${key}`] = `"${val}"`
        return obj
    }, {})
    return {
        name: 'movie-dotenv',
        config(obj) {
            obj.define = obj.define || {}
            Object.assign(obj.define, replacement)
        },
    }
}
export default defineConfig(() => {
    const env = dotenv.config({ path: './.env' }).parsed
    return {
        plugins: [react(), dotEnvReplacement(env), VitePWA(manifestForPlugin)],
        test: {
            globals: true,
            environment: 'jsdom',
            setupFiles: './tests/setup.js',
        },
    }
})
