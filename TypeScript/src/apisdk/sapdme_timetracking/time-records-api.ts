/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
/**
 * Representation of the 'TimeRecordsApi'.
 * This API is part of the 'sapdme_timetracking' service.
 */
export const TimeRecordsApi = {
  /**
   * Find all time records using various filter parameters. (Note: By default the service doesn't return any deleted time records. However, you can use the 'status' parameter to retrieve deleted records.)
   * @param queryParameters - Object containing the following keys: plant, type, userId, start, end, resource, workCenter, operation, operationVersion, stepId, shopOrder, sfc, status, routing, routingVersion, routingType, standardValue, activity, page, size, sort.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  findAllTimeRecords: (queryParameters: {
    plant: string;
    type?: 'ATTENDANCE' | 'DIRECT_LABOR';
    userId?: string;
    start?: string;
    end?: string;
    resource?: string;
    workCenter?: string;
    operation?: string;
    operationVersion?: string;
    stepId?: string;
    shopOrder?: string;
    sfc?: string;
    status?: 'NEW' | 'CHANGED' | 'DELETED' | 'APPROVED';
    routing?: string;
    routingVersion?: string;
    routingType?:
      | 'PRODUCTION'
      | 'NC'
      | 'SPECIAL'
      | 'DISPOSITION_FUNCTION'
      | 'SFC_SPECIFIC'
      | 'SHOPORDER_SPECIFIC'
      | 'CONFIGURABLE'
      | 'PRODUCTION_RECIPE'
      | 'SHOPORDER_SPECIFIC_RECIPE';
    standardValue?: string;
    activity?: string;
    page?: number;
    size?: number;
    sort?: string[];
  }) =>
    new OpenApiRequestBuilder<any>('get', '/v1/time-records', {
      queryParameters
    }),
  /**
   * Find a time record by providing its ID.
   * @param id - The ID of the time record
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  findById: (id: string) =>
    new OpenApiRequestBuilder<any>('get', '/v1/time-records/{id}', {
      pathParameters: { id }
    }),
  /**
   * Delete a defined time record for a user.
   * @param id - The ID of the time record
   * @param queryParameters - Object containing the following keys: note.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  timeRecordDelete: (id: string, queryParameters?: { note?: string }) =>
    new OpenApiRequestBuilder<any>('delete', '/v1/time-records/{id}', {
      pathParameters: { id },
      queryParameters
    }),
  /**
   * Approve a batch of time records.
   * @param body - List of time record IDs
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  approve: (body: string[]) =>
    new OpenApiRequestBuilder<any>('post', '/v1/time-records/approve', {
      body
    }),
  /**
   * Approve a defined time record for a user.
   * @param id - The ID of the time record
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  approveById: (id: string) =>
    new OpenApiRequestBuilder<any>('post', '/v1/time-records/approve/{id}', {
      pathParameters: { id }
    })
};
