/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type { BOM } from './schema';
/**
 * Representation of the 'BOMApi'.
 * This API is part of the 'sapdme_bom' service.
 */
export const BOMApi = {
  /**
   * Finds a BOM by plant, name and type.
   * @param queryParameters - Object containing the following keys: bom, plant, type, version.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  findBomByPlantAndNameAndTypeUsingGet: (queryParameters: {
    bom: string;
    plant: string;
    type: 'MASTER' | 'SHOP_ORDER' | 'SFC';
    version?: string;
  }) =>
    new OpenApiRequestBuilder<BOM[]>('get', '/boms', {
      queryParameters
    }),
  /**
   * Creates a list of BOMs.
   * @param body - List of components to create
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createUsingPost: (body: BOM[]) =>
    new OpenApiRequestBuilder<BOM[]>('post', '/boms', {
      body
    }),
  /**
   * Updates a list of objects. Every material to update must have bom, plant, version, type fields specified. Only fields to update can be specified. Every unspecified field will remain unchanged.
   * @param body - List of BOMs to update.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  updateUsingPatch: (body: BOM[]) =>
    new OpenApiRequestBuilder<BOM[]>('patch', '/boms', {
      body
    }),
  /**
   * Deletes a BOM by plant, name, version, and type.
   * @param queryParameters - Object containing the following keys: bom, bomType, plant, version.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  deleteUsingDelete: (queryParameters: {
    bom: string;
    bomType: 'MASTER' | 'SHOP_ORDER' | 'SFC';
    plant: string;
    version: string;
  }) =>
    new OpenApiRequestBuilder<any>('delete', '/boms', {
      queryParameters
    })
};
