script({
  files: "nested-vms-in-virtual-network/*",
  flexTokens: 1000,
});

def("BICEP", env.files, {
  endsWith: ".bicep",
});
def("README", env.files, { endsWith: "README.md" });
def("METADATA", env.files, { endsWith: "metadata.json" });

$`Explain bicep for somene who does not understand Azure/Cloud development.
Use information from <README>.
Make sure that the <METEDATA> is correct
and consistent with <BICEP>.`;
