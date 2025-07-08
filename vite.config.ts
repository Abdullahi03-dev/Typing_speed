import { defineConfig } from 'vite'
import {VitePWA} from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType:'autoUpdate',
      includeAssets:[
        'favicon.svg',
        'robots.txt',
        'apple-touch-icon.png'
      ],
      manifest:{
        name:'Typing Speed App',
        short_name:'TypingAPP',
        description:'Test and 11improve your typing speed!',
        theme_color:'#2196f3',
        background_color:'#ffffff',
        display:'standalone',
        start_url:'/',
        icons:[
          {
            src:'/icon/file_000000006e986246b004400cb3d487df.png',
            sizes:'192*192',
            type:'image/png'
          },
          {
            src:'/icon/file_000000006e986246b004400cb3d487df.png',
            sizes:'512*512',
            type:'image/png'
          }
        ]
      }
    })
  ],
})
