import { Plugin } from 'esbuild';
import { defineConfig } from 'tsup';




const addJsExtensionPlugin: Plugin = {
  name: 'add-js-extension',
  setup(build) {
    build.onEnd((result) => {
      if (result.outputFiles) {
        result.outputFiles.forEach((file) => {
          let contents = file.text;
          contents = contents.replace(/require\("(\..*?)"\)/g, 'require("$1.js")');
          file.contents = Buffer.from(contents);
        });
      }
    });
  },
};


export default defineConfig({
  format: ['cjs'],
  entry: [
    './server.ts',
    './_configs.ts',
    './_super_express/*.ts',
    './db/**/*.ts',
    './routes/**/*.ts',
    './utils/**/*.ts',
  ],
  dts: false,
  shims: false,
  skipNodeModulesBundle: true,
  clean: true,
  outDir: 'dist',
  target: 'es2021',
  splitting: false,
  sourcemap: false,
  minify: false,
  metafile: false,
  bundle:false,
  cjsInterop:true,
  esbuildPlugins:[addJsExtensionPlugin],
})
