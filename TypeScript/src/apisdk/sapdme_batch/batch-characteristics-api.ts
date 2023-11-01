/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type {
  GetBatchCharacteristicsApiResponse,
  PostBatchCharacteristicsRequest
} from './schema';
/**
 * Representation of the 'BatchCharacteristicsApi'.
 * This API is part of the 'sapdme_batch' service.
 */
export const BatchCharacteristicsApi = {
  /**
   * Gets batch characteristics for a given batch number and material. If the batch number is created in SAP Digital Manufacturing, it must be validated in ERP first, otherwise 404 response will be returned. To use this API, make sure the collaboration link 'COLLABORATION_BATCH_CHARACTERISTICS' is mapped to the directive 'BATCH_CHARACTERISTICS' in the Manage Collaboration Links app.
   * @param queryParameters - Object containing the following keys: batchNumber, material, plant.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getBatchCharacteristicsUsingGet1: (queryParameters: {
    batchNumber: string;
    material: string;
    plant: string;
  }) =>
    new OpenApiRequestBuilder<GetBatchCharacteristicsApiResponse>(
      'get',
      '/batchCharacteristics',
      {
        queryParameters
      }
    ),
  /**
   * Create or update batch characteristics for a given batch number, material and plant. If the batch number is created in SAP Digital Manufacturing, it must be validated in ERP first, otherwise 404 response will be returned.
   * @param body - Create/Update request payload
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  postBatchCharacteristicsUsingPost2: (body: PostBatchCharacteristicsRequest) =>
    new OpenApiRequestBuilder<any>('post', '/batchCharacteristics', {
      body
    })
};
