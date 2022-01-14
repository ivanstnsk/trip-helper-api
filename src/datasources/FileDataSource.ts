import { DataSource } from "apollo-datasource";
import fs from 'fs';

import { validateCountryData } from "../helpers/countries.helpers";

export class FileDataSource extends DataSource {
  constructor() {
    super();
  }

  async getAllCountries(): Promise<any> {
    return new Promise((resolve) => {
      fs.readFile(`${__dirname}/../data/countries.json`, 'utf8', (err, data) => {
        if (err) {
          console.log('ERROR no data (need to add more logging here');
          resolve([]);
        } else {
          try {
            const parsedData = JSON.parse(data);
            const validatedData = validateCountryData(parsedData);

            resolve(validatedData);
          } catch (err) {
            console.log(err);
            resolve([]);
          }
        }
      })
    });
  }
}