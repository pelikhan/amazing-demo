script({
    files: "images/apollo11.jpg"
})
defImages(env.files[0], { detail: "low", autoCrop: true })
$`Generate an alt-text description for the image.`
