/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type {
  LogRequest,
  LogResponse,
  LoggedSfcDataResponse,
  DataCollectionGroupResponse,
  DataCollectionGroupUpdateRequest,
  DataCollectionGroupCreateRequest,
  GroupsListResponse,
  LoggedSfcMeasureResponse
} from './schema';
/**
 * Representation of the 'DataCollectionApi'.
 * This API is part of the 'sapdme_datacollection' service.
 */
export const DataCollectionApi = {
  /**
   * This endpoint can be called to log values for data collection parameters against an SFC at a given operation, resource and location.
   * @param body - request
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  logDataCollectionUsingPost: (body: LogRequest) =>
    new OpenApiRequestBuilder<LogResponse>('post', '/log', {
      body
    }),
  /**
   * Returns all the previously collected parameter data for given SFC(s) at the given operation and resource.
   * @param queryParameters - Object containing the following keys: dcGroup.name, dcGroup.version, operation.name, operation.version, parameterName, plant, resource, sfcs.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getLoggedSfcDataUsingGet: (queryParameters: {
    'dcGroup.name'?: string;
    'dcGroup.version'?: string;
    'operation.name': string;
    'operation.version': string;
    parameterName?: string;
    plant: string;
    resource: string;
    sfcs: string[];
  }) =>
    new OpenApiRequestBuilder<LoggedSfcDataResponse[]>('get', '/parameters', {
      queryParameters
    }),
  /**
   * Returns a data collection group for a given plant, and optionally for a given version. If no version is specified, then the endpoint returns the latest version of the data collection group.
   * @param queryParameters - Object containing the following keys: group, plant, version.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getDataCollectionGroupsUsingGet: (queryParameters: {
    group: string;
    plant: string;
    version?: string;
  }) =>
    new OpenApiRequestBuilder<DataCollectionGroupResponse[]>('get', '/groups', {
      queryParameters
    }),
  /**
   * Updates the data collection group. Before you call this endpoint, provide the value for “modifiedDataTime” parameter. The value is obtained from the get response.
   * @param body - Data Collection Group Update
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  updateDataCollectionGroup: (body: DataCollectionGroupUpdateRequest) =>
    new OpenApiRequestBuilder<DataCollectionGroupResponse>('put', '/groups', {
      body
    }),
  /**
   * Creates a new data collection group for processing product related data.
   * @param body - Data Collection Group Create
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createDataCollectionGroup: (body: DataCollectionGroupCreateRequest) =>
    new OpenApiRequestBuilder<DataCollectionGroupResponse>('post', '/groups', {
      body
    }),
  /**
   * Deletes a given data collection group for a given plant and version.
   * @param queryParameters - Object containing the following keys: group, plant, version.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  deleteDataCollectionGroup: (queryParameters: {
    group: string;
    plant: string;
    version: string;
  }) =>
    new OpenApiRequestBuilder<any>('delete', '/groups', {
      queryParameters
    }),
  /**
   * This endpoint can be called to obtain a list of data collection groups in effect for an SFC in order to collect data against.
   * @param queryParameters - Object containing the following keys: operation, plant, resource, sfc, stepId, workCenter.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  findDataCollectionGroupsUsingGet: (queryParameters: {
    operation?: string;
    plant: string;
    resource: string;
    sfc: string;
    stepId?: string;
    workCenter?: string;
  }) =>
    new OpenApiRequestBuilder<GroupsListResponse[] | GroupsListResponse[]>(
      'get',
      '/sfc/groups',
      {
        queryParameters
      }
    ),
  /**
   *  Retrieves parameters of SFCs based on the input filters. You can provide either SFCs or startDateTime and endDateTime.
   * @param queryParameters - Object containing the following keys: dcGroup.name, dcGroup.version, operation.name, operation.version, parameterName, plant, resource, sfcs, pageNumber, pageSize, startDateTime, endDateTime.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getLoggedMeasuresUsingGet: (queryParameters: {
    'dcGroup.name'?: string;
    'dcGroup.version'?: string;
    'operation.name'?: string;
    'operation.version'?: string;
    parameterName?: string;
    plant: string;
    resource?: string;
    sfcs?: string[];
    pageNumber?: number;
    pageSize?: number;
    startDateTime?: string;
    endDateTime?: string;
  }) =>
    new OpenApiRequestBuilder<LoggedSfcMeasureResponse>(
      'get',
      '/measurements',
      {
        queryParameters
      }
    )
};
