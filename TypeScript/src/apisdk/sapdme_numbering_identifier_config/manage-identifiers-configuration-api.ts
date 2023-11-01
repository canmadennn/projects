/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type {
  IdentifierConfigurationResponse,
  UpdateIdentifierConfigurationRequest,
  CreateIdentifierConfigurationRequest
} from './schema';
/**
 * Representation of the 'ManageIdentifiersConfigurationApi'.
 * This API is part of the 'sapdme_numbering_identifier_config' service.
 */
export const ManageIdentifiersConfigurationApi = {
  /**
   * With this operation, identifiers configuration for business objects upon specified events at a plant can be retrieved.
   * @param queryParameters - Object containing the following keys: plant, id.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getConfig: (queryParameters: { plant: string; id: string }) =>
    new OpenApiRequestBuilder<IdentifierConfigurationResponse>(
      'get',
      '/config',
      {
        queryParameters
      }
    ),
  /**
   * With this operation, identifiers configuration for business objects upon specified events at a plant can be updated.
   * @param body - Request object to update an identifier configuration.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  updateConfig: (body: UpdateIdentifierConfigurationRequest) =>
    new OpenApiRequestBuilder<IdentifierConfigurationResponse>(
      'put',
      '/config',
      {
        body
      }
    ),
  /**
   * With this operation, identifiers configuration for business objects upon specified events at a plant can be created.
   * @param body - Request object to create an identifier configuration.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createConfig: (body: CreateIdentifierConfigurationRequest) =>
    new OpenApiRequestBuilder<IdentifierConfigurationResponse>(
      'post',
      '/config',
      {
        body
      }
    ),
  /**
   * With this operation, identifiers configuration for business objects upon specified events at a plant can be deleted.
   * @param queryParameters - Object containing the following keys: plant, id.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  deleteConfig: (queryParameters: { plant: string; id: string }) =>
    new OpenApiRequestBuilder<any>('delete', '/config', {
      queryParameters
    })
};
