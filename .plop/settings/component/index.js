// module.exports = {
//   actions: [
//     // index.ts
//     {
//       path: '../src/components/{{componentType}}/{{pascalCase name}}/index.ts',
//       templateFile: 'templates/component/index.ts.hbs',
//       type: 'add',
//     },
//     // component
//     {
//       path: '../src/components/{{componentType}}/{{pascalCase name}}/{{pascalCase name}}.tsx',
//       templateFile: 'templates/component/component.tsx.hbs',
//       type: 'add',
//     },
//     // storybook
//     {
//       path: '../src/components/{{componentType}}/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
//       templateFile: 'templates/component/stories.tsx.hbs',
//       type: 'add',
//     },
//     // tests
//     {
//       path: '../src/components/{{componentType}}/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
//       templateFile: 'templates/component/test.tsx.hbs',
//       type: 'add',
//     },
//     {
//       path: '../src/components/{{componentType}}/index.ts',
//       pattern: `/* PLOP_INJECT_EXPORT */`,
//       template: `export { default as {{pascalCase name}} } from './{{pascalCase name}}/{{pascalCase name}}';`,
//       type: 'append',
//     },
//   ],
//   description: 'Creates a new component',
//   prompts: [
//     {
//       name: 'componentType',
//       choices: ['atoms', 'molecules', 'organisms', 'templates'],
//       message: 'What component do you want to create?',
//       type: 'list',
//     },
//     {
//       name: 'name',
//       message: 'What is the name of the component?',
//       type: 'input',
//     },
//   ],
// };
export const component = {
  actions: [
    // index.ts
    {
      path: '../src/components/{{componentType}}/{{pascalCase name}}/index.ts',
      templateFile: 'templates/component/index.ts.hbs',
      type: 'add',
    },
    // component
    {
      path: '../src/components/{{componentType}}/{{pascalCase name}}/{{pascalCase name}}.tsx',
      templateFile: 'templates/component/component.tsx.hbs',
      type: 'add',
    },
    // storybook
    {
      path: '../src/components/{{componentType}}/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
      templateFile: 'templates/component/stories.tsx.hbs',
      type: 'add',
    },
    // tests
    {
      path: '../src/components/{{componentType}}/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
      templateFile: 'templates/component/test.tsx.hbs',
      type: 'add',
    },
    {
      path: '../src/components/{{componentType}}/index.ts',
      pattern: `/* PLOP_INJECT_EXPORT */`,
      template: `export { default as {{pascalCase name}} } from './{{pascalCase name}}/{{pascalCase name}}';`,
      type: 'append',
    },
  ],
  description: 'Creates a new component',
  prompts: [
    {
      name: 'componentType',
      choices: ['atoms', 'molecules', 'organisms', 'templates'],
      message: 'What component do you want to create?',
      type: 'list',
    },
    {
      name: 'name',
      message: 'What is the name of the component?',
      type: 'input',
    },
  ],
};
