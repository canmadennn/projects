/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type {
  QuantityConfirmationPublicAPIRequest,
  QuantityConfirmationPublicAPIResponse
} from './schema';
/**
 * Representation of the 'PostQuantityConfirmationApi'.
 * This API is part of the 'sapdme_quantityConfirmation' service.
 */
export const PostQuantityConfirmationApi = {
  /**
   * Post yield or scrap quantity confirmation for a given SFC of an order.
   * @param body - Request object to perform yield and scrap quantity confirmation.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createQuantityConfirmationV1Confirm: (
    body: QuantityConfirmationPublicAPIRequest
  ) =>
    new OpenApiRequestBuilder<QuantityConfirmationPublicAPIResponse>(
      'post',
      '/quantityConfirmation/v1/confirm',
      {
        body
      }
    )
};
