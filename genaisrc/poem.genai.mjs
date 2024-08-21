script({
    files: "webapp/main.bicep"
})

const file = def("FILE", env.files, { endsWith: ".bicep"})

$`Analyze ${file}.

- Generate a diagram of resources using mermaid.
- Report errors following best practices of Azure Bicep.
`
