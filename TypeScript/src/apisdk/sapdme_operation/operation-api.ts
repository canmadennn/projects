/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type { MasterOperationResponse } from './schema';
/**
 * Representation of the 'OperationApi'.
 * This API is part of the 'sapdme_operation' service.
 */
export const OperationApi = {
  /**
   * Retrieves master operation activity for the provided activityId, plant and order name or SFC name.
   * @param queryParameters - Object containing the following keys: activityId, order, plant, routing, routingType, routingVersion, sfc.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  findMasterOperationUsingGet1: (queryParameters: {
    activityId: string;
    order?: string;
    plant: string;
    routing: string;
    routingType: string;
    routingVersion: string;
    sfc?: string;
  }) =>
    new OpenApiRequestBuilder<MasterOperationResponse>(
      'get',
      '/masterOperation',
      {
        queryParameters
      }
    )
};
