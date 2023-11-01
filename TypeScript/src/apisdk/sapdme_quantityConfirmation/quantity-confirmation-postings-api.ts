/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type { QuantityConfirmationPostingsResponse } from './schema';
/**
 * Representation of the 'QuantityConfirmationPostingsApi'.
 * This API is part of the 'sapdme_quantityConfirmation' service.
 */
export const QuantityConfirmationPostingsApi = {
  /**
   * Combine quantity confirmation details and summary for a given plant, SFC, and operation activity.
   * @param queryParameters - Object containing the following keys: plant, sfc, operationActivity.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getQuantityConfirmationV1Postings: (queryParameters: {
    plant: string;
    sfc: string;
    operationActivity: string;
  }) =>
    new OpenApiRequestBuilder<QuantityConfirmationPostingsResponse>(
      'get',
      '/quantityConfirmation/v1/postings',
      {
        queryParameters
      }
    )
};
