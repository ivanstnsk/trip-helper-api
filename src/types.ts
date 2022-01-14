import { FileDataSource } from "./datasources/FileDataSource";

export interface AppContext {
  dataSources: {
    lowDataAPI: FileDataSource
  }
}