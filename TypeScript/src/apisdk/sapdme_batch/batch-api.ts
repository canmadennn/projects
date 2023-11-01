/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type {
  CreateBatchByMaterialRequest,
  CreateBatchByMaterialResponse,
  PageGetBatchesResponse,
  SyncBatchResponse,
  UpdateBatchRequest,
  UpdateBatchResponse
} from './schema';
/**
 * Representation of the 'BatchApi'.
 * This API is part of the 'sapdme_batch' service.
 */
export const BatchApi = {
  /**
   * There are synchronous and asynchronous types of batch creation. The type of batch creation used is determined by the numbering configuration (in the Manage Next Numbers app) for batch number. If the Source is "ERP", batch number is created in ERP system and synchronously transferred to SAP Digital Manufacturing. If the Source is "Local", batch number is firstly created in SAP Digital Manufacturing and then synchronized to ERP system.
   * @param body - request
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createBatchByMaterialUsingPost1: (body: CreateBatchByMaterialRequest) =>
    new OpenApiRequestBuilder<
      CreateBatchByMaterialResponse | CreateBatchByMaterialResponse
    >('post', '/batch', {
      body
    }),
  /**
   * Use this API service to get batches and batch characteristic values for a specific material of a given plant from the local batch information downloaded from ERP. You can use the following fields to sort the retrieved batch numbers: 'batchNumber', 'manufacturingDateTime' and 'shelfLifeExpirationDate'.
   * @param queryParameters - Object containing the following keys: batchNumber, includeCharacteristics, material, page, plant, size, sort.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getBatchesUsingGet2: (queryParameters: {
    batchNumber?: string;
    includeCharacteristics?: boolean;
    material?: string;
    page?: number;
    plant: string;
    size?: number;
    sort?: string;
  }) =>
    new OpenApiRequestBuilder<PageGetBatchesResponse>('get', '/batches', {
      queryParameters
    }),
  /**
   * Retrieves batch basic data and characteristics from the integrated ERP system, and synchronizes the information to SAP DMC for a given batch number, material and plant. <br>There are 4 possible use cases: <br>1) If the specified batch exists in both DMC and ERP, the batch information is retrieved and synchronized, and the batch status is set to 'VALIDATED' in DMC; <br>2) If the specified batch exists in DMC but not in ERP, the batch status is updated to 'INVALIDATED' in DMC; <br>3) If the specified batch exists in ERP but not in DMC, a batch is created in DMC in correspondence to the batch that exists in ERP, and its status is set to 'VALIDATED' directly; <br>4) If the specified batch doesn't exist in either DMC or ERP, this API returns an error with HTTP status code '404'.
   * @param batchNumber - The batch number you want to retrieve
   * @param queryParameters - Object containing the following keys: material, plant.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  syncBatchUsingPost: (
    batchNumber: string,
    queryParameters: { material: string; plant: string }
  ) =>
    new OpenApiRequestBuilder<SyncBatchResponse>(
      'post',
      '/batches/{batchNumber}/synchronization',
      {
        pathParameters: { batchNumber },
        queryParameters
      }
    ),
  /**
   * Updates batch basic data and characteristic values for a given plant, material and batch number, and synchronizes the updated information to the integrated ERP system.
   * @param batchNumber - The batch number you want to update
   * @param body - request
   * @param queryParameters - Object containing the following keys: plant, material.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  patchBatchesUsingPatch: (
    batchNumber: string,
    body: UpdateBatchRequest,
    queryParameters: { plant: string; material: string }
  ) =>
    new OpenApiRequestBuilder<UpdateBatchResponse>(
      'patch',
      '/batches/{batchNumber}',
      {
        pathParameters: { batchNumber },
        body,
        queryParameters
      }
    )
};
