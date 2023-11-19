Skip to content
DEV Community
Search...

Log in
Create account

0
Jump to Comments
0
Save

Cover image for ESLint + Prettier (Vue 3)
Philip Gutierrez 🪐
Philip Gutierrez 🪐
Posted on 15 янв.


1
ESLint + Prettier (Vue 3)
#
vue
#
vscode
After creating a new Vue 3 application using either create-vue or vite do the following steps:

1. Install the following dev dependencies
yarn add -D @babel/eslint-parser eslint eslint-config-prettier eslint-loader eslint-plugin-prettier eslint-plugin-vue prettier
2. Add .eslintrc.js file in the project root
module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  extends: [
    "plugin:vue/recommended",
    "eslint:recommended",
    "plugin:prettier/recommended"
  ],
  rules: {
    "prettier/prettier": "error",
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },
  globals: {
    $nuxt: true
  },
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false
  }
};
3. Add .prettierrc.json in the project root
{
  "tabWidth": 4,
  "semi": false,
  "singleQuote": true
}
4. Optionally you can add a jsconfig.json file in the project root
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "~/*": [
        "./*"
      ],
      "@/*": [
        "./*"
      ],
      "~~/*": [
        "./*"
      ],
      "@@/*": [
        "./*"
      ]
    }
  },
  "exclude": [
    "node_modules",
    ".nuxt",
    "dist"
  ]
}
5. If you have installed the Prettier extension, check settings.json if the following is configured:
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[yaml]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  }
}
Top comments (0)

Subscribe
pic
Add to the discussion
Code of Conduct • Report abuse
DEV Community

Trending in Vue
The Vue community is currently discussing CSS encapsulation, sending data from components to parents, tree shaking in Vue.js, and TypeScript's limitations in catching certain bugs.

levchak0910 
~~New~~ Old way to write CSS
Levcsák Sándor ・ Nov 16
#vue #eslint #css
hi_iam_chris 
VueJS part 11: Sending data from component to parent
Kristijan Pajtasev ・ Nov 10
#vue #javascript #frontend #tutorial
rafaelogic 
Common Pitfalls: Code Practices That Disable Tree Shaking in Vue.js
Rafa Rafael ・ Nov 9
#vue #javascript #tutorial
Wimadev 
You Probably Know This Bug, but why does it Always Slip Through?
Lukas Mauser for Wimadev ・ Nov 14
#typescript #programming #webdev #learning
Wimadev 
You Probably Know This Bug, but why does it Always Slip Through?
Lukas Mauser for Wimadev ・ Nov 14
#typescript #programming #webdev #learning
Read next
psudo-dev profile image
My First Project: Nebula Oni Color Theme!
Renato Setoue - Aug 11

adamof profile image
How to assign TailwindCSS class names to arbitrary variable names while letting auto-completion work.
kay-adamof - Aug 11

aaronksaunders profile image
Drizzle ORM SQLite and Nuxt - Integrating Nuxt Auth, Part 1
Aaron K Saunders - Aug 10

razi91 profile image
Using v-model with custom setters
jkonieczny - Aug 9


Philip Gutierrez 🪐
Follow
20% of efforts are responsible for 80% of outcomes - Pareto Principle
LOCATION
The Great Saturn Empire
JOINED
15 янв. 2023 г.
Trending on DEV Community 
Michael Tharrington profile image
Music Monday — What are you listening to? (Synth Heroes Edition 🎹)
#watercooler #music #discuss
Dragos Nedelcu profile image
The Developer Job Market Is Insane 🤯 5 Tips On How To Survive
#career #productivity #coding #interview
Lev Nahar profile image
Javascript Proxy Magic: How I built a 2kB state manager with zero dependencies (and how it got me two different job offers)
#webdev #javascript #career
DEV Community

OpenAI

How will ChatGPT will affect the future of coding?
We're not sure either, but the DEV community is figuring this out together.

Create a DEV account. It only takes a minute and is 100% free.
New AI content every day.

module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  extends: [
    "plugin:vue/recommended",
    "eslint:recommended",
    "plugin:prettier/recommended"
  ],
  rules: {
    "prettier/prettier": "error",
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },
  globals: {
    $nuxt: true
  },
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false
  }
};
DEV Community — A constructive and inclusive social network for software developers. With you every step of your journey.

Home
Podcasts
Videos
Tags
FAQ
Forem Shop
Advertise on DEV
About
Contact
Guides
Software comparisons
Code of Conduct
Privacy Policy
Terms of use
Built on Forem — the open source software that powers DEV and other inclusive communities.

Made with love and Ruby on Rails. DEV Community © 2016 - 2023.