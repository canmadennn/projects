/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type { PageQuantityConfirmationPostingHistoryResponse } from './schema';
/**
 * Representation of the 'QuantityConfirmationPostingHistoryApi'.
 * This API is part of the 'sapdme_quantityConfirmation' service.
 */
export const QuantityConfirmationPostingHistoryApi = {
  /**
   * Get a list of quantity confirmation posting history entries for a given order, plant, and SFC
   * @param queryParameters - Object containing the following keys: order, plant, sfc, page, size, sort.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getQuantityConfirmationV1PostingHistory: (queryParameters: {
    order: string;
    plant: string;
    sfc?: string[];
    page?: number;
    size?: number;
    sort?: string;
  }) =>
    new OpenApiRequestBuilder<PageQuantityConfirmationPostingHistoryResponse>(
      'get',
      '/quantityConfirmation/v1/postingHistory',
      {
        queryParameters
      }
    )
};
