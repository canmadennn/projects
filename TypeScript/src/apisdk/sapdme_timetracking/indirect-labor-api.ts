/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type {
  IndirectLaborApiRequest,
  IndirectLaborCreateRequest,
  IndirectLaborEditRequest
} from './schema';
/**
 * Representation of the 'IndirectLaborApi'.
 * This API is part of the 'sapdme_timetracking' service.
 */
export const IndirectLaborApi = {
  /**
   * Create an indirect labor event to start tracking an indirect labor activity for users on the shop floor.
   * @param body - Request body.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  indirectLaborStart: (body: IndirectLaborApiRequest) =>
    new OpenApiRequestBuilder<any>('post', '/v1/indirect-labor/start', {
      body
    }),
  /**
   * Create an indirect labor event to stop tracking an indirect labor activity for users on the shop floor.
   * @param body - Request body.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  indirectLaborStop: (body: IndirectLaborApiRequest) =>
    new OpenApiRequestBuilder<any>('post', '/v1/indirect-labor/stop', {
      body
    }),
  /**
   * Create a time record to track indirect labor for a user.
   * @param body - Request body.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  indirectLaborCreate: (body: IndirectLaborCreateRequest) =>
    new OpenApiRequestBuilder<any>('post', '/v1/indirect-labor', {
      body
    }),
  /**
   * Update a defined indirect labor time record for a user.
   * @param id - The ID of the time record
   * @param body - Request body.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  indirectLaborEdit: (id: string, body: IndirectLaborEditRequest) =>
    new OpenApiRequestBuilder<any>('patch', '/v1/indirect-labor/{id}', {
      pathParameters: { id },
      body
    })
};
