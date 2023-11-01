/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type { OrderCustomValueRequest } from './schema';
/**
 * Representation of the 'CustomValuesUpdateApi'.
 * This API is part of the 'sapdme_order' service.
 */
export const CustomValuesUpdateApi = {
  /**
   * Updates custom values for the given order
   * @param body - Request to update custom values
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  updateOrdersCustomValues: (body: OrderCustomValueRequest) =>
    new OpenApiRequestBuilder<any>('patch', '/orders/customValues', {
      body
    })
};
