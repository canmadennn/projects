/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type {
  NonConformanceCodeV2,
  NonConformanceCodeDeleteRequest
} from './schema';
/**
 * Representation of the 'NonconformanceCodeApi'.
 * This API is part of the 'sapdme_nonconformancecode' service.
 */
export const NonconformanceCodeApi = {
  /**
   * Reads a nonconformance code for a given plant and returns the details for the same
   * @param queryParameters - Object containing the following keys: code, plant.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  readNonConformanceCodesUsingGet: (queryParameters: {
    code?: string;
    plant: string;
  }) =>
    new OpenApiRequestBuilder<NonConformanceCodeV2[]>(
      'get',
      '/nonconformancecodes',
      {
        queryParameters
      }
    ),
  /**
   * Creates a nonconformance code for a given plant
   * @param body - nonConformanceCode
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createUsingPost: (body: NonConformanceCodeV2) =>
    new OpenApiRequestBuilder<any>('post', '/nonconformancecodes', {
      body
    }),
  /**
   * Updates a nonconformance code for a given plant
   * @param body - The nonconformance code to update.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  updateUsingPatch: (body: NonConformanceCodeV2) =>
    new OpenApiRequestBuilder<NonConformanceCodeV2>(
      'patch',
      '/nonconformancecodes',
      {
        body
      }
    ),
  /**
   * Deletes a nonconformance code for a given plant
   * @param body - request
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  deleteUsingDelete: (body: NonConformanceCodeDeleteRequest) =>
    new OpenApiRequestBuilder<any>('delete', '/nonconformancecodes', {
      body
    })
};
