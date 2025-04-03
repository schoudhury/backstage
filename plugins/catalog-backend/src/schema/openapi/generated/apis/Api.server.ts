/*
 * Copyright 2024 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//

// ******************************************************************
// * THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY. *
// ******************************************************************
import { EntitiesBatchResponse } from '../models/EntitiesBatchResponse.model';
import { EntitiesQueryResponse } from '../models/EntitiesQueryResponse.model';
import { Entity } from '../models/Entity.model';
import { EntityAncestryResponse } from '../models/EntityAncestryResponse.model';
import { EntityFacetsResponse } from '../models/EntityFacetsResponse.model';
import { GetEntitiesByRefsRequest } from '../models/GetEntitiesByRefsRequest.model';
import { RefreshEntityRequest } from '../models/RefreshEntityRequest.model';
import { ValidateEntity400Response } from '../models/ValidateEntity400Response.model';
import { ValidateEntityRequest } from '../models/ValidateEntityRequest.model';

/**
 * @public
 */
export type DeleteEntityByUid = {
  path: {
    uid: string;
  };
  response: void | Error | Error;
};
/**
 * @public
 */
export type GetEntities = {
  query: {
    fields?: Array<string>;
    limit?: number;
    filter?: Array<string>;
    offset?: number;
    after?: string;
    order?: Array<string>;
  };
  response: Array<Entity> | Error | Error;
};
/**
 * @public
 */
export type GetEntitiesByQuery = {
  query: {
    fields?: Array<string>;
    limit?: number;
    offset?: number;
    orderField?: Array<string>;
    cursor?: string;
    filter?: Array<string>;
    fullTextFilterTerm?: string;
    fullTextFilterFields?: Array<string>;
  };
  response: EntitiesQueryResponse | Error | Error;
};
/**
 * @public
 */
export type GetEntitiesByRefs = {
  body: GetEntitiesByRefsRequest;
  query: {
    filter?: Array<string>;
  };
  response: EntitiesBatchResponse | Error | Error;
};
/**
 * @public
 */
export type GetEntityAncestryByName = {
  path: {
    kind: string;
    namespace: string;
    name: string;
  };
  response: EntityAncestryResponse | Error | Error;
};
/**
 * @public
 */
export type GetEntityByName = {
  path: {
    kind: string;
    namespace: string;
    name: string;
  };
  response: Entity | Error | Error;
};
/**
 * @public
 */
export type GetEntityByUid = {
  path: {
    uid: string;
  };
  response: Entity | Error | Error;
};
/**
 * @public
 */
export type GetEntityFacets = {
  query: {
    facet: Array<string>;
    filter?: Array<string>;
  };
  response: EntityFacetsResponse | Error | Error;
};
/**
 * @public
 */
export type RefreshEntity = {
  body: RefreshEntityRequest;
  response: void | Error | Error;
};
/**
 * @public
 */
export type ValidateEntity = {
  body: ValidateEntityRequest;
  response: void | ValidateEntity400Response;
};
import { AnalyzeLocationRequest } from '../models/AnalyzeLocationRequest.model';
import { AnalyzeLocationResponse } from '../models/AnalyzeLocationResponse.model';
import { CreateLocation201Response } from '../models/CreateLocation201Response.model';
import { CreateLocationRequest } from '../models/CreateLocationRequest.model';
import { GetLocations200ResponseInner } from '../models/GetLocations200ResponseInner.model';
import { Location } from '../models/Location.model';

/**
 * @public
 */
export type AnalyzeLocation = {
  body: AnalyzeLocationRequest;
  response: AnalyzeLocationResponse | Error | Error;
};
/**
 * @public
 */
export type CreateLocation = {
  body: CreateLocationRequest;
  query: {
    dryRun?: string;
  };
  response: CreateLocation201Response | Error | Error;
};
/**
 * @public
 */
export type DeleteLocation = {
  path: {
    id: string;
  };
  response: void | Error | Error;
};
/**
 * @public
 */
export type GetLocation = {
  path: {
    id: string;
  };
  response: Location | Error;
};
/**
 * @public
 */
export type GetLocationByEntity = {
  path: {
    kind: string;
    namespace: string;
    name: string;
  };
  response: Location | Error;
};
/**
 * @public
 */
export type GetLocations = {
  response: Array<GetLocations200ResponseInner> | Error;
};

export type EndpointMap = {
  '#_delete|/entities/by-uid/{uid}': DeleteEntityByUid;

  '#get|/entities': GetEntities;

  '#get|/entities/by-query': GetEntitiesByQuery;

  '#post|/entities/by-refs': GetEntitiesByRefs;

  '#get|/entities/by-name/{kind}/{namespace}/{name}/ancestry': GetEntityAncestryByName;

  '#get|/entities/by-name/{kind}/{namespace}/{name}': GetEntityByName;

  '#get|/entities/by-uid/{uid}': GetEntityByUid;

  '#get|/entity-facets': GetEntityFacets;

  '#post|/refresh': RefreshEntity;

  '#post|/validate-entity': ValidateEntity;

  '#post|/analyze-location': AnalyzeLocation;

  '#post|/locations': CreateLocation;

  '#_delete|/locations/{id}': DeleteLocation;

  '#get|/locations/{id}': GetLocation;

  '#get|/locations/by-entity/{kind}/{namespace}/{name}': GetLocationByEntity;

  '#get|/locations': GetLocations;
};
