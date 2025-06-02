script({ files: "webapp/main.bicep"})
const file = def("FILE", env.files)
$`You are a Azure Bicep expert and an amazing software architect.

Analyze the bicep code in ${file} and report errors, warnings, and suggestions for improvement.`
