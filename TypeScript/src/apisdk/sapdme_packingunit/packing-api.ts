/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type {
  PackingUnitCarrierApiModel,
  PackingUnitApiModel,
  PackingUnitCreateApiModel,
  PackPackingUnitRequest,
  UnpackPackingUnitRequest,
  PackingUnitContentRequestAdd,
  PackingUnitContentRequestRemove,
  UpdatePackingUnitCarrierRequest,
  UnloadPackingUnitRequest,
  CarrierPackingUnitApiModel
} from './schema';
/**
 * Representation of the 'PackingApi'.
 * This API is part of the 'sapdme_packingunit' service.
 */
export const PackingApi = {
  /**
   * This endpoint can be called to obtain a single packing unit. As a search parameters it uses plant and packing unit number.
   * @param queryParameters - Object containing the following keys: number, plant.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  findPackingUnitByPlantAndNumberUsingGet: (queryParameters: {
    number: string;
    plant: string;
  }) =>
    new OpenApiRequestBuilder<PackingUnitCarrierApiModel>(
      'get',
      '/packingUnits',
      {
        queryParameters
      }
    ),
  /**
   * This endpoint can be called to edit an existing packing unit.
   * @param body - Packing Unit body
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  updatePackingUnitUsingPut: (body: PackingUnitApiModel) =>
    new OpenApiRequestBuilder<PackingUnitApiModel>('put', '/packingUnits', {
      body
    }),
  /**
   * This endpoint can be called to create a new packing unit.
   * @param body - Packing Unit body
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createPackingUnitUsingPost: (body: PackingUnitCreateApiModel) =>
    new OpenApiRequestBuilder<PackingUnitCreateApiModel>(
      'post',
      '/packingUnits',
      {
        body
      }
    ),
  /**
   * This endpoint can be called to change the status of the Packing Unit to Closed. The required parameters for this endpoint are plant and packing unit number.
   * @param body - Pack Request
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  packPackingUnitUsingPost: (body: PackPackingUnitRequest) =>
    new OpenApiRequestBuilder<PackingUnitApiModel>(
      'post',
      '/packingUnits/pack',
      {
        body
      }
    ),
  /**
   * This endpoint can be called to change the status of the Packing Unit to Opened. The required parameters are Plant and Packing Unit Number.
   * @param body - Unpack Request
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  unpackPackingUnitUsingPost: (body: UnpackPackingUnitRequest) =>
    new OpenApiRequestBuilder<PackingUnitApiModel>(
      'post',
      '/packingUnits/unpack',
      {
        body
      }
    ),
  /**
   * This endpoint can be called to add content to the Packing Unit.
   * @param body - Adds content to the packing unit. You must specify either the packing unit number or SFC.
   * @param queryParameters - Object containing the following keys: packingUnit, plant, allowedSfcStatuses, allowMixedOperations, allowMixedOrders, allowAddConformantSfcToNonConformantPackingUnit.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  addContentUsingPost: (
    body: PackingUnitContentRequestAdd[],
    queryParameters: {
      packingUnit: string;
      plant: string;
      allowedSfcStatuses?: 'NEW' | 'IN_QUEUE' | 'ACTIVE' | 'DONE' | 'HOLD'[];
      allowMixedOperations?: boolean;
      allowMixedOrders?: boolean;
      allowAddConformantSfcToNonConformantPackingUnit?: boolean;
    }
  ) =>
    new OpenApiRequestBuilder<PackingUnitApiModel>(
      'post',
      '/packingUnits/content',
      {
        body,
        queryParameters
      }
    ),
  /**
   * This endpoint can be called to remove content from the Packing Unit. The required parameters are SFC, Packing Unit Number, and Quantity.
   * @param body - Removes content from the packing unit. You must specify either the packing unit number or SFC.
   * @param queryParameters - Object containing the following keys: packingUnit, plant.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  removeContentUsingDelete: (
    body: PackingUnitContentRequestRemove[],
    queryParameters: { packingUnit: string; plant: string }
  ) =>
    new OpenApiRequestBuilder<PackingUnitApiModel>(
      'delete',
      '/packingUnits/content',
      {
        body,
        queryParameters
      }
    ),
  /**
   * Updates an existing packing unit with a new carrier. You can call this API endpoint when the carrier of the packing unit is broken or unusable. All the items in the packing unit will be moved to the new carrier you specify here.
   * @param body - Update carrier request body
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  updateCarrierUsingPost: (body: UpdatePackingUnitCarrierRequest) =>
    new OpenApiRequestBuilder<PackingUnitCarrierApiModel>(
      'post',
      '/changeCarrier',
      {
        body
      }
    ),
  /**
   * Unloads the whole packing unit, or unloads some of the items for a given packing unit.
   * @param body - Packing Unit body
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  unloadPackingUnitUsingPut: (body: UnloadPackingUnitRequest) =>
    new OpenApiRequestBuilder<PackingUnitApiModel>(
      'put',
      '/unloadPackingUnit',
      {
        body
      }
    ),
  /**
   * Retrieves packing units that are loaded on a specific carrier for a given plant. You can also retrieve orders and shop floor controls (SFCs) associated with the packing units.
   * @param queryParameters - Object containing the following keys: carrierNumber, plant.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  carrierPackingUnitUsingGet: (queryParameters: {
    carrierNumber: string;
    plant: string;
  }) =>
    new OpenApiRequestBuilder<CarrierPackingUnitApiModel>(
      'get',
      '/carrier/packingUnit',
      {
        queryParameters
      }
    )
};
