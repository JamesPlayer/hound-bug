import foo from 'Shared/foo';

// HOUND SHOULD SHOW THE FOLLOWING MESSAGE (as it does in my IDE):
// Caution: `foo` also has a named export `bar`.
// Check if you meant to write `import {bar} from './foo.js'` instead.
const blah = foo.bar;

export default blah;
