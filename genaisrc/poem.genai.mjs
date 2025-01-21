script({
    files: "webapp/main.bicep"
})
const files = env.files
def("FILES", files, { endsWith: ".bicep"})
$`You are an expert at Azure Bicep.
Analyze the content of the file <FILES> 
and report errors and warnings.`

