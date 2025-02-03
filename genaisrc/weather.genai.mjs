script({
    model: "ollama:llama3.2:1b",
    parameters: {
        city: {
            type: "string",
            default: "seattle"
        }
    }
})

defTool(
    "weather",
    "gets the live weather information about a city",
    {
        type: "object",
        properties: {
            city: {
                type: "string",
                description: "The city name"
            }
        },
        required: ["city"]
    },
    async({city}) => {
        console.debug(`asking weather for ${city}`)
        if (/seattle/i.test(city)) return 'rainy'
        else return 'unknown'
    }
)

$`What is the weather in ${env.vars.city}?`
