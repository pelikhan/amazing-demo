script({
    logprobs: true,
    topLogprobs: 3,
    choices: ["FUN", "DULL"],
})
def("joke", "Why don't scientists trust atoms? Because they make up everything!")
$`Evaluate if <joke> is funny or not.

Respond with FUN or DULL.
`
