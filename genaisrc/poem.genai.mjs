script({
    files: "webapp/main.bicep",
    system: ["system", "system.annotations"]
})
const file = def("FILE", env.files, { endsWith: ".bicep" })

$`Find errors and warnings in ${file} using best practices.
- only report critical issues
- ignore naming issues
- use emojis
`