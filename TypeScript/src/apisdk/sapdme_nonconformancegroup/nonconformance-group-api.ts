/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type {
  NonConformanceGroupV2,
  NonConformanceGroupDeleteRequest
} from './schema';
/**
 * Representation of the 'NonconformanceGroupApi'.
 * This API is part of the 'sapdme_nonconformancegroup' service.
 */
export const NonconformanceGroupApi = {
  /**
   * Reads nonconformance groups by plant and group
   * @param queryParameters - Object containing the following keys: group, plant.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  readUsingGet: (queryParameters: { group?: string; plant: string }) =>
    new OpenApiRequestBuilder<NonConformanceGroupV2[]>(
      'get',
      '/nonconformancegroups',
      {
        queryParameters
      }
    ),
  /**
   * Creates a nonconformance group for a given plant
   * @param body - The Nonconformance group to create
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createUsingPost1: (body: NonConformanceGroupV2) =>
    new OpenApiRequestBuilder<any>('post', '/nonconformancegroups', {
      body
    }),
  /**
   * Updates a nonconformance group for a given plant
   * @param body - The nonconformance group to update.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  updateUsingPatch1: (body: NonConformanceGroupV2) =>
    new OpenApiRequestBuilder<NonConformanceGroupV2>(
      'patch',
      '/nonconformancegroups',
      {
        body
      }
    ),
  /**
   * Deletes a nonconformance group for a given plant
   * @param body - request
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  deleteUsingDelete1: (body: NonConformanceGroupDeleteRequest) =>
    new OpenApiRequestBuilder<any>('delete', '/nonconformancegroups', {
      body
    })
};
