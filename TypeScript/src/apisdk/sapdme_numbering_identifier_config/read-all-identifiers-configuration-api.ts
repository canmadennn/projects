/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type { EventBasedIdentifierConfigurationResponse } from './schema';
/**
 * Representation of the 'ReadAllIdentifiersConfigurationApi'.
 * This API is part of the 'sapdme_numbering_identifier_config' service.
 */
export const ReadAllIdentifiersConfigurationApi = {
  /**
   * With this operation, you can retrieve all identifiers configurations for the specified event at a plant. You can define the event types like SFC Release, SFC Serialize etc.
   * @param queryParameters - Object containing the following keys: plant, event.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getMaterialIdentifierConfigurations: (queryParameters: {
    plant: string;
    event: string;
  }) =>
    new OpenApiRequestBuilder<EventBasedIdentifierConfigurationResponse>(
      'get',
      '/materialIdentifierConfigurations',
      {
        queryParameters
      }
    )
};
