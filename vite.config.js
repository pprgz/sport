import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

export default defineConfig( {
  globals: {
    onMounted: true, // 设置为 true 则再组件之中不需要引入 不会标记错误
  },
  plugins: [
    vue(),
    AutoImport( {
      resolvers: [ ElementPlusResolver() ],
      imports: [ "vue", "vue-router" ],
      dts: true,
      eslintrc: {
        enabled: false, // 默认false, true启用。生成一次就可以，避免每次工程启动都生成
        filepath: './.eslintrc-auto-import.json', // 生成json文件
        globalsPropValue: true,
      },
      // 生成自动导入的TS声明文件
    } ),
    Components( {
      // 指定自动导入的组件位置，默认是 src/components
      dirs: [ 'src/components', 'src/otherComponents' ],
      // 自动导入element相关组件
      resolvers: [
        // 自动注册图标
        IconsResolver( {
          // icon的前缀 组件使用{prefix}-{collection}-{icon} eg:i-ep-search
          prefix: 'i'
          // enabledCollections:['ep']  这是可选的，默认启用 Iconify 支持的所有集合，ep指的是element_ui的图标库
          // alias: { park: 'icon-park' } 集合的别名
        } ),
        ElementPlusResolver(),
      ],
    } ),
    Icons( {
      scale: 1, // 缩放比 相对1em
      autoInstall: true, // 自动安装
      compiler: 'vue3' // 编译方式
    } ),
  ],
  extends: [
    //....此处活力之前配置.
    "/.eslintrc-auto-import.json",
  ],
  // 本地开发服务器配置
  server: {
    host: '0.0.0.0',
    port: 81, // 这里可以设置你想要的端口号
    open: true
  },
} );
