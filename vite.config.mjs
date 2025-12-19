import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createHtmlPlugin } from 'vite-plugin-html'
import vueJsx from '@vitejs/plugin-vue-jsx'
import autoprefixer from 'autoprefixer'
import path from 'path'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig(({ mode }) => {
    const isProd = mode === 'production'
    const envPrefix = 'APP_'
    const { APP_TITLE = '' } = loadEnv(mode, process.cwd(), envPrefix)
    
    return {
        plugins: [
            vue(),
            vueJsx({
                // options are passed on to @vue/babel-plugin-jsx
            }),
            createHtmlPlugin({
                minify: isProd,
                inject: {
                    data: {
                        title: APP_TITLE,
                    },
                }
            })
        ],
        build: {
            target: 'esnext',
            outDir: path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'dist'),
            assetsDir: 'assets',
            assetsInlineLimit: 8192,
            sourcemap: !isProd,
            emptyOutDir: true,
            rollupOptions: {
                input: path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'index.html'),
                output: {
                    chunkFileNames: 'js/[name].[hash].js',
                    entryFileNames: 'js/[name].[hash].js',
                }
            }
        },
        envPrefix,
        resolve: {
            alias: [
                { find: /^@\//, replacement: path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'src') + '/' },
                { find: /^~/, replacement: '' }
            ],
            extensions: ['.js', '.jsx', '.mjs', '.vue', '.json', '.less', '.css']
        },
        assetsInclude: ['**/*.woff', '**/*.woff2', '**/*.ttf', '**/*.svg'],
        optimizeDeps: {
            include: ['view-ui-plus']
        },
        css: {
            postcss: {
                plugins: [
                    autoprefixer
                ],
            },
            preprocessorOptions: {
                less: {
                    javascriptEnabled: true,
                    additionalData: `@import "${path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'src/styles/variable.less')}";`,
                    modifyVars: {
                        'ionicons-font-path': '~view-ui-plus/src/styles/common/iconfont/fonts'
                    }
                }
            }
        },
        server: {
            open: true
        },
        preview: {
            port: 5000
        }
    }
})

