/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type {
  FinalQuantityConfirmationPublicAPIRequest,
  QuantityConfirmationPublicAPIResponse
} from './schema';
/**
 * Representation of the 'FinalQuantityConfirmationApi'.
 * This API is part of the 'sapdme_quantityConfirmation' service.
 */
export const FinalQuantityConfirmationApi = {
  /**
   * Post final quantity confirmation without updating the quantity for a given SFC of an order. When the API call succeeds, the operation/phase status will be set to 'CNF' in the integrated ERP system.
   * @param body - Request object to perform final quantity confirmation without updating the quantity.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createQuantityConfirmationV1ReportOperationActivityFinalConfirmation: (
    body: FinalQuantityConfirmationPublicAPIRequest
  ) =>
    new OpenApiRequestBuilder<QuantityConfirmationPublicAPIResponse>(
      'post',
      '/quantityConfirmation/v1/reportOperationActivityFinalConfirmation',
      {
        body
      }
    )
};
