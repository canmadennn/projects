/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type {
  ReleaseOrderRequest,
  ReleaseOrderResponse,
  ReleaseOrderInBackgroundRequest,
  ReleaseOrderInBackgroundResponse
} from './schema';
/**
 * Representation of the 'OrderProcessingApi'.
 * This API is part of the 'sapdme_order' service.
 */
export const OrderProcessingApi = {
  /**
   * Complete the order for a given plant
   * @param queryParameters - Object containing the following keys: order, plant.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  completeUsingPost2: (queryParameters: { order: string; plant: string }) =>
    new OpenApiRequestBuilder<any>('post', '/orders/complete', {
      queryParameters
    }),
  /**
   * Discard the order for a given plant
   * @param queryParameters - Object containing the following keys: order, plant.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  discardUsingPost2: (queryParameters: { order: string; plant: string }) =>
    new OpenApiRequestBuilder<any>('post', '/orders/discard', {
      queryParameters
    }),
  /**
   * Releases the order by given plant, order and quantity for further manufacturing activities. This endpoint is being deprecated and please use successor <a href=https://api.sap.com/api/sapdme_order/resource>/v1/orders/releaseinBackground</a>
   * @param body - Request to release the given order
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createOrdersRelease: (body: ReleaseOrderRequest) =>
    new OpenApiRequestBuilder<ReleaseOrderResponse>('post', '/orders/release', {
      body
    }),
  /**
   * Releases the order in background by given plant, order and quantity for further manufacturing activities.
   * @param body - Request to release the given order
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createOrdersReleaseInBackground: (body: ReleaseOrderInBackgroundRequest) =>
    new OpenApiRequestBuilder<ReleaseOrderInBackgroundResponse>(
      'post',
      '/orders/releaseInBackground',
      {
        body
      }
    )
};
