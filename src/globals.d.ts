// For CSS
declare module '*.module.css' {
  const classes: Record<string, string>
  export default classes
}

// For LESS
declare module '*.module.less' {
  const classes: Record<string, string>
  export default classes
}

// For SCSS
declare module '*.module.scss' {
  const classes: Record<string, string>
  export default classes
}

// Import dotenv variables to import.meta.env via snowpack plugin
interface ImportMeta {
  env: {
    BACKEND_API: string;
  };
}
