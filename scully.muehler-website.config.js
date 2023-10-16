"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
require("@scullyio/scully-plugin-puppeteer");
exports.config = {
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
    },
    puppeteerLaunchOptions: { args: ['--no-sandbox', '--disable-setuid--sandbox'] }
};
