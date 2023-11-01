/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type {
  AutoStagingRequest,
  AutoStagingResponse,
  PageStagingRequestItemResponse
} from './schema';
/**
 * Representation of the 'MaterialStagingApi'.
 * This API is part of the 'sapdme_staging' service.
 */
export const MaterialStagingApi = {
  /**
   * Initiates a staging request to EWM for a given plant. You can post the staging request at order level, or at Shop Floor Control (SFC) level. You can use this API call only if you've enabled MES-driven staging in Extended Warehouse Management integration.
   * @param body - Request paramters to initiate the staging request to Extended Warehouse Management
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  sendStaingRequestUsingPost: (body: AutoStagingRequest) =>
    new OpenApiRequestBuilder<AutoStagingResponse>(
      'post',
      '/staging/stagingRequest',
      {
        body
      }
    ),
  /**
   * Retrieves all staging requests to Extended Warehouse Management for a given plant. You can fill various parameters to narrow down the results.
   * @param queryParameters - Object containing the following keys: plant, stagingRequestNumber, productionSupplyAreas, stagingRequestItemStatuses, orders, components, operations, maxCreationTime, minCreationTime, maxPlannedDeliveryTime, minPlannedDeliveryTime, page, size, sort.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  findStagingRequestsUsingGet: (queryParameters: {
    plant: string;
    stagingRequestNumber?: string;
    productionSupplyAreas?: string[];
    stagingRequestItemStatuses?:
      | 'NEW'
      | 'IN_PROCESS'
      | 'DELIVERED'
      | 'DELIVERY_FAILED'
      | 'INITIALIZED'
      | 'NOT_STAGED'
      | 'PARTIALLY_STAGED'
      | 'STAGED'
      | 'OVER_STAGED'[];
    orders?: string[];
    components?: string[];
    operations?: string[];
    maxCreationTime?: string;
    minCreationTime?: string;
    maxPlannedDeliveryTime?: string;
    minPlannedDeliveryTime?: string;
    page?: number;
    size?: number;
    sort?: string;
  }) =>
    new OpenApiRequestBuilder<PageStagingRequestItemResponse>(
      'get',
      '/staging/stagingRequests',
      {
        queryParameters
      }
    )
};
