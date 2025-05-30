script({
    model: "small",
    temperature: 1,
})

defSchema("RECIPE_SCHEMA", {
    type: "object",
    properties: {
        name: { type: "string" },
        ingredients: {
            type: "array",
            items: { type: "string" }
        },
        instructions: {
            type: "array",
            items: { type: "string" }
        }
    },
})
defSchema("CITY_SCHEMA", {
    type: "array",
    items: {
        type: "object",
        properties: {
            city: { type: "string" },
            population: { type: "number" },
            url: { type: "string", description: "url with information" },
            area: { type: "number" }
        },
        required: ["city", "population", "url", "area"]
    }
})

$`Generate data about 5 cities in JSON validating CITY_SHEMA.
Generate a recipe in JSON validating RECIPE_SCHEMA.`
