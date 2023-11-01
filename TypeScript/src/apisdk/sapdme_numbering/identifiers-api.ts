/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type {
  CreateIdentifiersRequest,
  CreateIdentifiersResponse
} from './schema';
/**
 * Representation of the 'IdentifiersApi'.
 * This API is part of the 'sapdme_numbering' service.
 */
export const IdentifiersApi = {
  /**
   * Create identifiers for business objects upon specified events at a plant.
   * @param body - Request object to create identifiers.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createIdentifiers: (body: CreateIdentifiersRequest) =>
    new OpenApiRequestBuilder<CreateIdentifiersResponse>(
      'post',
      '/identifiers',
      {
        body
      }
    )
};
