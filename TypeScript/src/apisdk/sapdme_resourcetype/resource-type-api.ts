/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type { ResourceType, ResourceTypeId } from './schema';
/**
 * Representation of the 'ResourceTypeApi'.
 * This API is part of the 'sapdme_resourcetype' service.
 */
export const ResourceTypeApi = {
  /**
   * Finds a resource type containing resources by plant and name
   * @param queryParameters - Object containing the following keys: plant, resourceType.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  readUsingGet: (queryParameters: { plant: string; resourceType?: string }) =>
    new OpenApiRequestBuilder<ResourceType[]>('get', '/resourcetypes', {
      queryParameters
    }),
  /**
   * Creates a resource type with associated resources
   * @param body - resourceType
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createUsingPost: (body: ResourceType) =>
    new OpenApiRequestBuilder<ResourceType>('post', '/resourcetypes', {
      body
    }),
  /**
   * Updates a resource type for a given plant
   * @param body - resourceType
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  updateUsingPatch: (body: ResourceType) =>
    new OpenApiRequestBuilder<ResourceType>('patch', '/resourcetypes', {
      body
    }),
  /**
   * Removes the resource type for a given plant.
   * @param body - resourceType
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  deleteUsingDelete: (body: ResourceTypeId) =>
    new OpenApiRequestBuilder<any>('delete', '/resourcetypes', {
      body
    })
};
