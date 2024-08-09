script({
    files: "bicep/main.bicep"
})
const file = def("FILE", env.files)
$`Analyze ${file} and report errors.

- validate best practices for Azure Bicep files
`
