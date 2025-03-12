script({
  files: "webapp/main.bicep",
});

const { text: summary } = await runPrompt(
  (ctx) => {
    ctx.def("FILE", env.files, { endsWith: ".bicep" });
    ctx.$`Sumarize FILE`;
  },
  { model: "small" }
);

// analyze
const res = await runPrompt(
  (ctx) => {
    ctx.def("FILE", env.files, { endsWith: ".bicep" });
    ctx.$`You are a Azure Bicep expert following best practices.
Analyze and report errors in <FILE>.
${summary}
Use annotation format. Fix the errors in the files.`;
  },
  { applyEdits: true, model: "large" }
);

// push branch
