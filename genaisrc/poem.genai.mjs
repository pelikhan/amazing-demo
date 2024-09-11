script({
    files: "webapp/main.bicep",
    system: ["system", "system.annotations"]
})
def("FILE", env.files, { endsWith: ".bicep" })

$`Find errors and warnings in FILE using best practices.
- only report critical issues
- ignore naming issues
- use emojis
`
