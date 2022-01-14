import { countries } from './countries';

export const resolvers: any = {
  Query: {
    ...countries.Query,
  }
};
