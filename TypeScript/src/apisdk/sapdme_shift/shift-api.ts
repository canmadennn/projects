/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type { Shift, ShiftDeleteRequest } from './schema';
/**
 * Representation of the 'ShiftApi'.
 * This API is part of the 'sapdme_shift' service.
 */
export const ShiftApi = {
  /**
   * Searches for a shift for a given plant and returns the details for the same
   * @param queryParameters - Object containing the following keys: plant, shift.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  readUsingGet: (queryParameters: { plant: string; shift?: string }) =>
    new OpenApiRequestBuilder<Shift[]>('get', '/shifts', {
      queryParameters
    }),
  /**
   * Creates a shift for a given plant
   * @param body - The Shift to create
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createUsingPost: (body: Shift) =>
    new OpenApiRequestBuilder<Shift>('post', '/shifts', {
      body
    }),
  /**
   * Updates a shift for a given plant
   * @param body - The shift to update.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  updateUsingPatch: (body: Shift) =>
    new OpenApiRequestBuilder<Shift>('patch', '/shifts', {
      body
    }),
  /**
   * Removes a shift for a given plant
   * @param body - request
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  deleteUsingDelete: (body: ShiftDeleteRequest) =>
    new OpenApiRequestBuilder<any>('delete', '/shifts', {
      body
    })
};
