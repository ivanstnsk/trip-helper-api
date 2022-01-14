import { CountriesInput, CountriesPayload } from '../generated/graphql';
import { filterCountries } from '../helpers/filterCountries';

export const countries = {
  Query: {
    async countries(parent: any, args: { input: CountriesInput }, context: any): Promise<CountriesPayload> {
      const { input } = args;
      const { dataAPI } = context.dataSources;

      const countries = await dataAPI.getAllCountries();

      if (!input || !input?.filter) {
        return {
          totalCount: countries.length,
          countries,
        };
      }

      const filteredData = filterCountries(countries, input.filter);

      return {
        totalCount: filteredData.length,
        countries: filteredData,
      };
    },
  },
};