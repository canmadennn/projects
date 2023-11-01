/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type { MaterialGroup } from './schema';
/**
 * Representation of the 'MaterialGroupApi'.
 * This API is part of the 'sapdme_materialgroup' service.
 */
export const MaterialGroupApi = {
  /**
   * Finds a material group by plant and name.
   * @param queryParameters - Object containing the following keys: plant, materialGroup.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  findMaterialGroupsByPlantAndNameUsingGet1: (queryParameters: {
    plant: string;
    materialGroup: string;
  }) =>
    new OpenApiRequestBuilder<MaterialGroup[]>('get', '/materialGroups', {
      queryParameters
    }),
  /**
   * Creates a list of material groups for the given plant.
   * @param body - The list of material groups to create.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createMaterialGroupUsingPost1: (body: MaterialGroup[] | undefined) =>
    new OpenApiRequestBuilder<MaterialGroup[]>('post', '/materialGroups', {
      body
    }),
  /**
   * Updates a list of material groups. Every material group that will be updated must have the material group and plant fields specified. Only the specified fields will be updated. Any unspecified fields will remain unchanged.
   * @param body - List of material groups to update
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  updateMaterialGroupUsingPatch1: (body: MaterialGroup[] | undefined) =>
    new OpenApiRequestBuilder<MaterialGroup[]>('patch', '/materialGroups', {
      body
    }),
  /**
   * Deletes a material group by plant and name.
   * @param queryParameters - Object containing the following keys: plant, materialGroup.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  deleteMaterialGroupUsingDelete1: (queryParameters: {
    plant: string;
    materialGroup: string;
  }) =>
    new OpenApiRequestBuilder<any>('delete', '/materialGroups', {
      queryParameters
    })
};
