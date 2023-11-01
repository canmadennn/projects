/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type { InspectionOperationResponse } from './schema';
/**
 * Representation of the 'GetInspectionOperationApi'.
 * This API is part of the 'sapdme_qualityinspection' service.
 */
export const GetInspectionOperationApi = {
  /**
   * Get inspection operation information for a specific inspection operation of an inspection lot.
   * @param inspectionLot - The inspection lot for which you want to retrieve inspection operation information
   * @param inspectionOperation - The inspection operation/activity number
   * @param queryParameters - Object containing the following keys: plant.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getInspectionOperationUsingGet1: (
    inspectionLot: string,
    inspectionOperation: string,
    queryParameters: { plant: string }
  ) =>
    new OpenApiRequestBuilder<InspectionOperationResponse>(
      'get',
      '/lots/{inspectionLot}/operations/{inspectionOperation}',
      {
        pathParameters: { inspectionLot, inspectionOperation },
        queryParameters
      }
    )
};
