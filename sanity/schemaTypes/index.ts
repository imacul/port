import { type SchemaTypeDefinition } from 'sanity';
import blogSchema from './blog.schema';
import productSchema from './product.schema';
import  categorySchema  from './category.schema';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blogSchema,
    productSchema,
    categorySchema,
  ],
}
