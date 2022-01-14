import { CountryFilter } from "../generated/graphql";
import { Country } from "../generated/graphql";

export const filterCountries = (countries: Array<Country>, filter: CountryFilter): Array<Country> => {
  if (!filter) {
    return countries;
  }

  let filteredData = countries;
  const { iso2, iso3, region, subRegion } = filter;

  if (iso2) {
    filteredData = filteredData.filter((c: Country) => c.iso2 === iso2);
  }
  if (iso3) {
    filteredData = filteredData.filter((c: Country) => c.iso3 === iso3);
  }
  if (region) {
    filteredData = filteredData.filter((c: Country) => c.region === region);
  }
  if (subRegion) {
    filteredData = filteredData.filter((c: Country) => c.subRegion === subRegion);
  }

  return filteredData;
}