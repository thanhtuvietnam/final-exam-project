// types/globals.d.ts

// ESLint Plugin
declare module 'eslint-plugin-testing-library';

// CSS Modules
declare module '*.css' {
  const content: {
    [className: string]: string;
  };
  export default content;
}

declare module '*.scss' {
  const content: {
    [className: string]: string;
  };
  export default content;
}
