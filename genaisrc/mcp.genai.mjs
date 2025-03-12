defTool({
  filesystem: {
    command: "npx",
    args: ["-y", "@modelcontextprotocol/server-filesystem", path.resolve(".")],
  },
});
$`Summarize the contents of README.md (only the top level one).`;
