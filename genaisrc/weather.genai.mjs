defTool(
    "weather",
    "gets real time weather information about a city",
    {
        type: "object",
        properties: {
            city: {
                type: "string",
                description: "The city to get the weather information for",
            },
        },
        required: ["city"],
    },
    async ({ city }) => {
        if(/seattle/i.test(city)) return "snowy"
        return "unknown"
    }
)

$`What is the weather in Paris?`
