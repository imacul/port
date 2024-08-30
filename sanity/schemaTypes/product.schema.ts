import { SanityDocument } from "@sanity/types";
import  categorySchema  from './category.schema';

export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "videoFile",
      type: "file",
      title: "Video File",
      options: {
        accept: "video/*", //Restrict the file input to video files only
      },
    },
    {
      name: "thumbnail",
      title: "Thumbnail",
      type: "image", //You can upload a thumbnail image for the video
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      required: true,
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      required: true,
    },
    {
      name: "featuresTitle",
      type: "string",
      title: "Features title",
      required: true,
    },
    {
      name: "featuresDescription",
      type: "array",
      title: "Feautures Description",
      required: true,
      of: [{ type: "block" }]
    },
    {
      name: "category",
      type: "reference",
      title: "Category",
      to: [categorySchema],
      options: {
        type: "array",
        of: {
          type: "object",
        },
      },
    },
    {
      name: "premiumMode",
      type: "boolean",
      computed: ({ document }: { document: SanityDocument }) =>
        document.category === "premium",
    },
    {
      name: "price",
      type: "number",
      hidden: ({ document }: { document: SanityDocument }) =>
        !document.premiumMode,
      required: () => false,
    },
    {
      name: "sale",
      type: "number",
      hidden: ({ document }: { document: SanityDocument }) =>
        !document.premiumMode,
      required: () => false,
    },
    {
      name: "discount",
      type: "number",
      hidden: ({ document }: { document: SanityDocument }) =>
        !document.premiumMode,
      required: () => false,
    },
  ],
} as const;