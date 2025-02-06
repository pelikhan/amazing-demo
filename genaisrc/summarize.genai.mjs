script({
    parameters: {
        language: "french",
        paragraphs: 1,
    }
})
const files = env.files
const { language, paragraphs } = env.vars

def("FILES", files)
$`Summarize the content of <FILES> to ${language} in ${paragraphs} paragraphs.`
