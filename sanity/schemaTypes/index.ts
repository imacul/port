import { type SchemaTypeDefinition } from 'sanity';
import blogSchema from './blog.schema';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogSchema],
}
