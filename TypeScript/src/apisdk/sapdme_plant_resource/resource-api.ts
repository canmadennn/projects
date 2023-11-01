/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type {
  ChangeResourceStatusRequest,
  LoadResourceBinRequest,
  Resource,
  ResourceCuRequest,
  ResourceDeleteRequest,
  UnloadResourceBinRequest
} from './schema';
/**
 * Representation of the 'ResourceApi'.
 * This API is part of the 'sapdme_plant_resource' service.
 */
export const ResourceApi = {
  /**
   * Changes the status of the provided resource based on the provided parameters.
   * @param body - request
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  changeResourceStatusUsingPost1: (body: ChangeResourceStatusRequest) =>
    new OpenApiRequestBuilder<any>('post', '/changestatus', {
      body
    }),
  /**
   * Requires a material or inventory that is in the assembly data fields (INVENTORY_ID, INVENTORY_ID_SFC, or SFC). If there is an inventory in the assembly data fields its size will be decreased by the loaded bin quantity. If the Bin is already loaded new loading will be added to the queue.
   * @param body - request
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  loadResourceBinUsingPost2: (body: LoadResourceBinRequest) =>
    new OpenApiRequestBuilder<any>('post', '/loadbin', {
      body
    }),
  /**
   * Retrieves a list of resources by plant or by resource name and plant.
   * @param queryParameters - Object containing the following keys: plant, resource.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getResourcesUsingGet1: (queryParameters: {
    plant: string;
    resource?: string;
  }) =>
    new OpenApiRequestBuilder<Resource[]>('get', '/resources', {
      queryParameters
    }),
  /**
   * Creates a resource by the given request.
   * @param body - request
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createResourceUsingPost1: (body: ResourceCuRequest) =>
    new OpenApiRequestBuilder<Resource[]>('post', '/resources', {
      body
    }),
  /**
   * Updates the existing resource by the given request.
   * @param body - request
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  updateResourceUsingPatch1: (body: ResourceCuRequest) =>
    new OpenApiRequestBuilder<Resource[]>('patch', '/resources', {
      body
    }),
  /**
   * Deletes the existing resource by the given request.
   * @param body - request
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  deleteResourceUsingDelete1: (body: ResourceDeleteRequest) =>
    new OpenApiRequestBuilder<any>('delete', '/resources', {
      body
    }),
  /**
   * When you unload a resource bin that has been loaded from the inventory, the quantity in the bin is returned to the inventory.
   * @param body - request
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  unloadResourceBinUsingPost2: (body: UnloadResourceBinRequest) =>
    new OpenApiRequestBuilder<any>('post', '/unloadbin', {
      body
    })
};
