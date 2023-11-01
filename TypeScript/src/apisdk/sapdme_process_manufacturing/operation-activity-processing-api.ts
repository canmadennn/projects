/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type {
  StartOperationActivityPublicApiRequest,
  StartOperationActivityPublicApiResponse,
  CompleteOperationActivityPublicApiRequest,
  CompleteOperationActivityPublicApiResponse
} from './schema';
/**
 * Representation of the 'OperationActivityProcessingApi'.
 * This API is part of the 'sapdme_process_manufacturing' service.
 */
export const OperationActivityProcessingApi = {
  /**
   * Starts an Operation activity at the default or alternate resource of a work center at user-specified time or in real time.
   * @param body - Request object to start an Operation activity.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createOperationActivityStart: (
    body: StartOperationActivityPublicApiRequest
  ) =>
    new OpenApiRequestBuilder<StartOperationActivityPublicApiResponse>(
      'post',
      '/operationActivity/start',
      {
        body
      }
    ),
  /**
   * Completes an operation activity at the default or alternate resource of a work center at user-specified time or in real time.
   * @param body - Request object to complete an Operation activity.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createOperationActivityComplete: (
    body: CompleteOperationActivityPublicApiRequest
  ) =>
    new OpenApiRequestBuilder<CompleteOperationActivityPublicApiResponse>(
      'post',
      '/operationActivity/complete',
      {
        body
      }
    )
};
