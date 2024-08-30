export default {
    name: "blog",
    type: "document",
    title: "Blog",
    fields: [
        {
            name: "image",
            type: "image",
            title: "Blog Image",
            required: true,
        },
        {
            name: "title",
            type: "string",
            title: "Blog title",
            required: true,
        },
        {
            name: "description",
            type: "text",
            title: "Blog description",
            required: true,
        },
        {
            name: "slug",
            type: "slug",
            title: "Slug",
            options: {
                source: "title"
            }
        },
        {
            name: "content",
            type: "array",
            title: "Blog content",
            of: [
                {
                    type: "block"
                }
            ],
            required: true,
        },
    ],
} as const;