/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type { FindOrderResponse } from './schema';
/**
 * Representation of the 'OrderDetailsApi'.
 * This API is part of the 'sapdme_order' service.
 */
export const OrderDetailsApi = {
  /**
   * Finds the detailed data like order header, SFC list, associated custom data for the given plant and order.
   * @param queryParameters - Object containing the following keys: expand, order, plant, language.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getOrders: (queryParameters: {
    expand?: string;
    order: string;
    plant: string;
    language?: string;
  }) =>
    new OpenApiRequestBuilder<FindOrderResponse>('get', '/orders', {
      queryParameters
    })
};
