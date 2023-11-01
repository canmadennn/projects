/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type {
  InspectionSingleResultRequest,
  InspectionSingleResultResponse
} from './schema';
/**
 * Representation of the 'SingleResultsRecordingApi'.
 * This API is part of the 'sapdme_qualityinspection' service.
 */
export const SingleResultsRecordingApi = {
  /**
   * Record single-value results for an inspection characteristic for a given inspection lot.
   * @param inspectionCharacteristic - The inspection characteristic for the operation
   * @param inspectionLot - The inspection lot for the operation
   * @param inspectionOperation - The operation/activity for which you want to record inspection results
   * @param body - request
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  updateSingleResultsUsingPost1: (
    inspectionCharacteristic: string,
    inspectionLot: string,
    inspectionOperation: string,
    body: InspectionSingleResultRequest
  ) =>
    new OpenApiRequestBuilder<InspectionSingleResultResponse>(
      'post',
      '/lots/{inspectionLot}/operations/{inspectionOperation}/characteristics/{inspectionCharacteristic}/results',
      {
        pathParameters: {
          inspectionCharacteristic,
          inspectionLot,
          inspectionOperation
        },
        body
      }
    )
};
