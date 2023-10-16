import { ScullyConfig } from '@scullyio/scully';
import '@scullyio/scully-plugin-puppeteer'
export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "muehler-website",
  outDir: './dist/static',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      }
    },
  }
  ,
  puppeteerLaunchOptions: {args: ['--no-sandbox', '--disable-setuid--sandbox']}
};
