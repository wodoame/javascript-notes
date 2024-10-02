To let TypeScript know that a function is defined in another file, you can use the `declare` keyword. This tells TypeScript that the function exists, even though its implementation is not in the current file. Here's how you can do it:

1. **Declare the function in a `.d.ts` file**:
   Create a declaration file (e.g., `globals.d.ts`) and declare the function there.

   ```typescript
   // globals.d.ts
   declare function myFunction(): void;
   ```

2. **Include the declaration file in your project**:
   Make sure the declaration file is included in your `tsconfig.json` so TypeScript knows about it.

   ```json
   {
     "compilerOptions": {
       "typeRoots": ["./node_modules/@types", "./path/to/declarations"]
     }
   }
   ```

3. **Use the function in your TypeScript file**:
   Now you can use `myFunction` in your TypeScript files without any errors.

   ```typescript
   // main.ts
   myFunction();
   ```

This approach ensures that TypeScript is aware of the function's existence, even though its implementation is in another file.
