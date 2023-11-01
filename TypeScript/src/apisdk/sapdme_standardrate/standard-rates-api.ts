/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type {
  StandardRateResponse,
  CreateStandardRateRequest,
  UpdateStandardRateRequest,
  DeleteStandardRateRequest
} from './schema';
/**
 * Representation of the 'StandardRatesApi'.
 * This API is part of the 'sapdme_standardrate' service.
 */
export const StandardRatesApi = {
  /**
   * Retrieves Standard Rates for a given plant based on a Resource or Workcenter.
   * @param queryParameters - Object containing the following keys: plant, resource, workcenter.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getV1StandardRatesByResourceOrWorkCenter: (queryParameters: {
    plant: string;
    resource?: string;
    workcenter?: string;
  }) =>
    new OpenApiRequestBuilder<StandardRateResponse[]>(
      'get',
      '/v1/standardRatesByResourceOrWorkCenter',
      {
        queryParameters
      }
    ),
  /**
   * Creates standard rates provided in the request.
   * @param body - The request for creating standard rates
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createV1StandardRates: (body: CreateStandardRateRequest) =>
    new OpenApiRequestBuilder<StandardRateResponse[]>(
      'post',
      '/v1/standardRates',
      {
        body
      }
    ),
  /**
   * The request to update the standard rate.
   * @param body - The request for updating standard rates
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  updateV1StandardRates: (body: UpdateStandardRateRequest) =>
    new OpenApiRequestBuilder<StandardRateResponse[]>(
      'patch',
      '/v1/standardRates',
      {
        body
      }
    ),
  /**
   * The request to delete the standard rate.
   * @param body - The request for deleting standard rates
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  deleteV1StandardRates: (body: DeleteStandardRateRequest) =>
    new OpenApiRequestBuilder<any>('delete', '/v1/standardRates', {
      body
    })
};
