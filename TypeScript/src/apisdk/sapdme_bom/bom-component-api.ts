/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type { BomComponent } from './schema';
/**
 * Representation of the 'BOMComponentApi'.
 * This API is part of the 'sapdme_bom' service.
 */
export const BOMComponentApi = {
  /**
   * Creates a list of components for a paeticular BOM and BOM version.
   * @param bom - bom
   * @param version - version
   * @param body - Components to create.
   * @param queryParameters - Object containing the following keys: bomType, plant.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createBomComponentsUsingPost: (
    bom: string,
    version: string,
    body: BomComponent[],
    queryParameters: { bomType: 'MASTER' | 'SHOP_ORDER' | 'SFC'; plant: string }
  ) =>
    new OpenApiRequestBuilder<BomComponent[]>(
      'post',
      '/boms/{bom}/{version}/components',
      {
        pathParameters: { bom, version },
        body,
        queryParameters
      }
    ),
  /**
   * Updates a list of objects. Every component to update must have sequence field specified. Only fields to update can be specified. Every unspecified field will remain unchanged.
   * @param bom - bom
   * @param sequence - sequence
   * @param version - version
   * @param body - List of components to update
   * @param queryParameters - Object containing the following keys: bomType, plant.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  updateComponentUsingPatch: (
    bom: string,
    sequence: string,
    version: string,
    body: BomComponent,
    queryParameters: { bomType: 'MASTER' | 'SHOP_ORDER' | 'SFC'; plant: string }
  ) =>
    new OpenApiRequestBuilder<BomComponent>(
      'patch',
      '/boms/{bom}/{version}/components/{sequence}',
      {
        pathParameters: { bom, sequence, version },
        body,
        queryParameters
      }
    ),
  /**
   * Deletes a component by sequence.
   * @param bom - bom
   * @param sequence - sequence
   * @param version - version
   * @param queryParameters - Object containing the following keys: bomType, plant.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  deleteComponentUsingDelete: (
    bom: string,
    sequence: string,
    version: string,
    queryParameters: { bomType: 'MASTER' | 'SHOP_ORDER' | 'SFC'; plant: string }
  ) =>
    new OpenApiRequestBuilder<any>(
      'delete',
      '/boms/{bom}/{version}/components/{sequence}',
      {
        pathParameters: { bom, sequence, version },
        queryParameters
      }
    )
};
