import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

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
        plugins: [react(), dotEnvReplacement(env)],
    }
})
