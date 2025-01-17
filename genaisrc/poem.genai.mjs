script({
    files: "webapp/main.bicep"
})
def("FILE", env.files)
$`You are an export at Azure Bicep.
Analyze <FILE> and report all errors.`
