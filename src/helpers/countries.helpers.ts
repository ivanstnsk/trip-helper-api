import { Country } from "../generated/graphql";

const prepareCountryData = (data: any): Country => {
  return {
    name: data?.name ?? '',
    countryCode: data?.countryCode ?? '',
    iso2: data?.iso2 ?? '',
    iso3: data?.iso3 ?? '',
    region: data?.region ? data.region : null,
    subRegion: data?.subRegion ? data.subRegion : null,
  }
}

export const validateCountryData = (data: any): Array<Country> => {
  if (!data || !Array.isArray(data) || !data.length) {
    return [];
  }

  return data.map(prepareCountryData);
}