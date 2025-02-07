script({
  files: "images/*.jpg",
  model: "small",
});

for (const file of env.files.slice(0, 2)) {
  const res = await runPrompt(
    async (ctx) => {
      ctx.defImages(file, { detail: "low" });
      ctx.$`Describe image.`;
    },
    {
      label: `Summarize ${file.filename}`,
      cache: true,
      temperature: 0.4,
      model: "vision",
    }
  );

  def("IMAGE", {
    filename: file.filename,
    content: res.text,
  });
}

$`Describe in one sentence the entire set of
images in <IMAGE>.`;
