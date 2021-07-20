// import "./timeout.js";
// import "./peopleInSpace.js";
// import "./githubApi.js";
// import "./classes.js";

// [Import Syntax]
// import defaultExport from "module-name";
// import * as name from "module-name";
// import { export } from "module-name";
// import { export as alias } from "module-name";
// import { export1 , export2 } from "module-name";
// import { foo , bar } from "module-name/path/to/specific/un-exported/file";
// import { export1 , export2 as alias2 , [...] } from "module-name";
// import defaultExport, { export [ , [...] ] } from "module-name";
// import defaultExport, * as name from "module-name";
// import "module-name";
// var promise = import("module-name"); // This is a stage 3 proposal.

// [Export Syntax]
// export { name1, name2, …, nameN };
// export { variable1 as name1, variable2 as name2, …, nameN };
// export let name1, name2, …, nameN; // also var, const
// export let name1 = …, name2 = …, …, nameN; // also var, const
// export function FunctionName(){...}
// export class ClassName {...}
// export default expression;
// export default function (…) { … } // also class, function*
// export default function name1(…) { … } // also class, function*
// export { name1 as default, … };
// export * from …;
// export { name1, name2, …, nameN } from …;
// export { import1 as name1, import2 as name2, …, nameN } from …;
// export { default } from …;
