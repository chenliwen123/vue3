import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import postcssPxToViewport from 'postcss-px-to-viewport';
const pathResolve = (dir) => resolve(__dirname, dir);

// https://vitejs.dev/config/

export default defineConfig((e) => {
  return {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': pathResolve('./src'),
      },
    },
    css: {
      // postcss: {
      //   plugins: [
      //     postcssPxToViewport({
      //       unitToConvert: 'px', // 需要转换的单位，默认为"px"
      //       viewportWidth: 1920, //  设计稿的视口宽度
      //       unitPrecision: 5, // 单位转换后保留的精度
      //       propList: ['*'], // 能转化为vw的属性列表
      //       viewportUnit: 'vw', //  希望使用的视口单位
      //       fontViewportUnit: 'vw', // 字体使用的视口单位
      //       selectorBlackList: [], // 需要忽略的CSS选择器
      //       minPixelValue: 1, // 最小的转换数值，如果为1的话，只有大于1的值会被转换
      //       mediaQuery: false, // 媒体查询里的单位是否需要转换单位
      //       replace: true, // 是否直接更换属性值，而不添加备用属性
      //       exclude: /node_modules/, // 忽略某些文件夹下的文件或特定文件
      //       include: undefined, // 如果设置了include，那将只有匹配到的文件才会被转换，例如只转换 'src/mobile' 下的文件 (include: /\/src\/mobile\//)
      //       landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
      //       landscapeUnit: 'vw', // 横屏时使用的单位
      //       landscapeWidth: 568, // 横屏时使用的视口宽度
      //     }),
      //   ],
      // },
    },
    server: {
      port: 3000,
      open: true, //自动打开
      base: './ ', //生产环境路径
      proxy: {
        // 本地开发环境通过代理实现跨域，生产环境使用 nginx 转发
        // 正则表达式写法
        '^/api-demo': {
          target: 'https://sit-dpmc.qm.cn', // 后端服务实际地址
          changeOrigin: true, //开启代理
          rewrite: (path) => path.replace(/^\/api-demo/, '/api-demo'),
        },
      },
    },
  };
});
