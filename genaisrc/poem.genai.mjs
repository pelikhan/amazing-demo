script({
    files: "webapp/main.bicep",
    system: ["system", "system.annotations"]
})

def("FILE", env.files, { endsWith: ".bicep"})

$`Generate errors and warnings about FILE 
using best practices of Azure Bicep.
- only report critical issues`
