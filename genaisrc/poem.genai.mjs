script({
    files: "bicep/main.bicep"
})
const file = def("FILE", env.files)
$`Analyze ${file} and report errors.

- generate a diagram of all resources using mermaid
- validate best practices for Azure Bicep files
`
