script({ files: "webapp/main.bicep"})
def("FILE", env.files)
$`you are an expert in Azure bicep. Find and report all the errors in the FILE.
Use the annotation format.
.`
