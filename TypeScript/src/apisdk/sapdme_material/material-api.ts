/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type {
  MaterialResponse,
  MaterialRequest,
  PageMaterialResponse
} from './schema';
/**
 * Representation of the 'MaterialApi'.
 * This API is part of the 'sapdme_material' service.
 */
export const MaterialApi = {
  /**
   * Finds a material by plant, name, and version.
   * @param queryParameters - Object containing the following keys: material, plant, version.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  findMaterialByPlantAndNameUsingGet1: (queryParameters: {
    material: string;
    plant: string;
    version?: string;
  }) =>
    new OpenApiRequestBuilder<MaterialResponse[]>('get', '/v1/materials', {
      queryParameters
    }),
  /**
   * Creates a list of materials for given plants.
   * @param body - List of materials to create.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createUsingPost4: (body: MaterialRequest[] | undefined) =>
    new OpenApiRequestBuilder<MaterialResponse[]>('post', '/v1/materials', {
      body
    }),
  /**
   * Every material that will be updated must have the material, plant, and version fields specified. Only the specified fields will be updated. Any unspecified fields will remain unchanged.
   * @param body - List of materials to update
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  updateUsingPatch4: (body: MaterialRequest[] | undefined) =>
    new OpenApiRequestBuilder<MaterialResponse[]>('patch', '/v1/materials', {
      body
    }),
  /**
   * Deletes a material by plant, name, and version.
   * @param queryParameters - Object containing the following keys: material, plant, version.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  deleteUsingDelete4: (queryParameters: {
    material: string;
    plant: string;
    version?: string;
  }) =>
    new OpenApiRequestBuilder<any>('delete', '/v1/materials', {
      queryParameters
    }),
  /**
   * Searches materials by plant; or by plant and material; or by plant, material, and version.
   * @param queryParameters - Object containing the following keys: plant, material, version, page, size.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  findMaterialsByPlantUsingGet2: (queryParameters: {
    plant: string;
    material?: string;
    version?: string;
    page?: string;
    size?: string;
  }) =>
    new OpenApiRequestBuilder<PageMaterialResponse>('get', '/v2/materials', {
      queryParameters
    })
};
