import { GraphQLResolveInfo } from 'graphql';
import { AppContext } from '../types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CountriesInput = {
  filter?: InputMaybe<CountryFilter>;
};

export type CountriesPayload = {
  __typename?: 'CountriesPayload';
  countries: Array<Country>;
  totalCount: Scalars['Int'];
};

export type Country = {
  __typename?: 'Country';
  countryCode: Scalars['String'];
  iso2: Scalars['String'];
  iso3: Scalars['String'];
  name: Scalars['String'];
  region?: Maybe<Region>;
  subRegion?: Maybe<SubRegion>;
};

export type CountryAdditionalInfo = {
  __typename?: 'CountryAdditionalInfo';
  type?: Maybe<Scalars['String']>;
};

export type CountryFilter = {
  iso2?: InputMaybe<Scalars['String']>;
  iso3?: InputMaybe<Scalars['String']>;
  region?: InputMaybe<Region>;
  subRegion?: InputMaybe<SubRegion>;
};

export type CountryTemporaryEntry = {
  __typename?: 'CountryTemporaryEntry';
  type?: Maybe<Scalars['String']>;
};

export type CountryTransitEntry = {
  __typename?: 'CountryTransitEntry';
  type?: Maybe<Scalars['String']>;
};

export type EmbassyContacts = {
  __typename?: 'EmbassyContacts';
  type?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  countries: CountriesPayload;
};


export type QueryCountriesArgs = {
  input?: InputMaybe<CountriesInput>;
};

export enum Region {
  Africa = 'AFRICA',
  Americas = 'AMERICAS',
  Asia = 'ASIA',
  Europe = 'EUROPE',
  Oceania = 'OCEANIA'
}

export enum SubRegion {
  AustraliaAndNewZealand = 'AUSTRALIA_AND_NEW_ZEALAND',
  CentralAsia = 'CENTRAL_ASIA',
  EasternAsia = 'EASTERN_ASIA',
  EasternEurope = 'EASTERN_EUROPE',
  LatinAmericaAndTheCaribbean = 'LATIN_AMERICA_AND_THE_CARIBBEAN',
  Melanesia = 'MELANESIA',
  Micronesia = 'MICRONESIA',
  NorthernAfrica = 'NORTHERN_AFRICA',
  NorthernAmerica = 'NORTHERN_AMERICA',
  NorthernEurope = 'NORTHERN_EUROPE',
  Polynesia = 'POLYNESIA',
  SouthernAsia = 'SOUTHERN_ASIA',
  SouthernEurope = 'SOUTHERN_EUROPE',
  SouthEasternAsia = 'SOUTH_EASTERN_ASIA',
  SubSaharanAfrica = 'SUB_SAHARAN_AFRICA',
  WesternAsia = 'WESTERN_ASIA',
  WesternEurope = 'WESTERN_EUROPE'
}



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CountriesInput: CountriesInput;
  CountriesPayload: ResolverTypeWrapper<CountriesPayload>;
  Country: ResolverTypeWrapper<Country>;
  CountryAdditionalInfo: ResolverTypeWrapper<CountryAdditionalInfo>;
  CountryFilter: CountryFilter;
  CountryTemporaryEntry: ResolverTypeWrapper<CountryTemporaryEntry>;
  CountryTransitEntry: ResolverTypeWrapper<CountryTransitEntry>;
  EmbassyContacts: ResolverTypeWrapper<EmbassyContacts>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Query: ResolverTypeWrapper<{}>;
  Region: Region;
  String: ResolverTypeWrapper<Scalars['String']>;
  SubRegion: SubRegion;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  CountriesInput: CountriesInput;
  CountriesPayload: CountriesPayload;
  Country: Country;
  CountryAdditionalInfo: CountryAdditionalInfo;
  CountryFilter: CountryFilter;
  CountryTemporaryEntry: CountryTemporaryEntry;
  CountryTransitEntry: CountryTransitEntry;
  EmbassyContacts: EmbassyContacts;
  Int: Scalars['Int'];
  Query: {};
  String: Scalars['String'];
};

export type CountriesPayloadResolvers<ContextType = AppContext, ParentType extends ResolversParentTypes['CountriesPayload'] = ResolversParentTypes['CountriesPayload']> = {
  countries?: Resolver<Array<ResolversTypes['Country']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CountryResolvers<ContextType = AppContext, ParentType extends ResolversParentTypes['Country'] = ResolversParentTypes['Country']> = {
  countryCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  iso2?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  iso3?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['Region']>, ParentType, ContextType>;
  subRegion?: Resolver<Maybe<ResolversTypes['SubRegion']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CountryAdditionalInfoResolvers<ContextType = AppContext, ParentType extends ResolversParentTypes['CountryAdditionalInfo'] = ResolversParentTypes['CountryAdditionalInfo']> = {
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CountryTemporaryEntryResolvers<ContextType = AppContext, ParentType extends ResolversParentTypes['CountryTemporaryEntry'] = ResolversParentTypes['CountryTemporaryEntry']> = {
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CountryTransitEntryResolvers<ContextType = AppContext, ParentType extends ResolversParentTypes['CountryTransitEntry'] = ResolversParentTypes['CountryTransitEntry']> = {
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EmbassyContactsResolvers<ContextType = AppContext, ParentType extends ResolversParentTypes['EmbassyContacts'] = ResolversParentTypes['EmbassyContacts']> = {
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = AppContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  countries?: Resolver<ResolversTypes['CountriesPayload'], ParentType, ContextType, RequireFields<QueryCountriesArgs, never>>;
};

export type Resolvers<ContextType = AppContext> = {
  CountriesPayload?: CountriesPayloadResolvers<ContextType>;
  Country?: CountryResolvers<ContextType>;
  CountryAdditionalInfo?: CountryAdditionalInfoResolvers<ContextType>;
  CountryTemporaryEntry?: CountryTemporaryEntryResolvers<ContextType>;
  CountryTransitEntry?: CountryTransitEntryResolvers<ContextType>;
  EmbassyContacts?: EmbassyContactsResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};

