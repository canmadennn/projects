/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type {
  LogNonConformanceRequest,
  NonConformanceLogResponse,
  CheckOpenNonConformancesRequest,
  CloseNonConformanceRequest,
  OpenNonConformanceRequest,
  NonConformance
} from './schema';
/**
 * Representation of the 'NonconformanceApi'.
 * This API is part of the 'sapdme_nonconformance' service.
 */
export const NonconformanceApi = {
  /**
   * Logs a nonconformance for SFCs at a given operation for a given plant.
   * @param body - request
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  logNonConformanceUsingPost1: (body: LogNonConformanceRequest) =>
    new OpenApiRequestBuilder<NonConformanceLogResponse>('post', '/log', {
      body
    }),
  /**
   * Check for open nonconformance by the given SFCs.
   * @param body - request
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  checkForOpenNonConformancesUsingPost: (
    body: CheckOpenNonConformancesRequest
  ) =>
    new OpenApiRequestBuilder<any>('post', '/checkForOpen', {
      body
    }),
  /**
   * Closes a nonconformance by the given incident ID.
   * @param body - request
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  closeNonConformanceUsingPost: (body: CloseNonConformanceRequest) =>
    new OpenApiRequestBuilder<any>('post', '/close', {
      body
    }),
  /**
   * Opens a nonconformance by the incident ID.
   * @param body - request
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  openNonconformanceUsingPost: (body: OpenNonConformanceRequest) =>
    new OpenApiRequestBuilder<any>('post', '/open', {
      body
    }),
  /**
   * Retrieves a nonconformance list for a given plant by various optional parameters.
   * @param queryParameters - Object containing the following keys: operationActivity, plant, resource, routing, routingStepId, sfc.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getNonConformancesUsingGet1: (queryParameters: {
    operationActivity?: string;
    plant: string;
    resource?: string;
    routing?: string;
    routingStepId?: string;
    sfc?: string;
  }) =>
    new OpenApiRequestBuilder<NonConformance[]>('get', '/nonconformances', {
      queryParameters
    })
};
