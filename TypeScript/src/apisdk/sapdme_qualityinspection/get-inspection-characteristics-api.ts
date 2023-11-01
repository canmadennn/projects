/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type { InspectionCharacteristicsResponse } from './schema';
/**
 * Representation of the 'GetInspectionCharacteristicsApi'.
 * This API is part of the 'sapdme_qualityinspection' service.
 */
export const GetInspectionCharacteristicsApi = {
  /**
   * Get all the inspection characteristics for a specific inspection operation of an inspection lot.
   * @param inspectionLot - The inspection lot for which you want to retrieve inspection characteristics.
   * @param inspectionOperation - The inspection operation/activity number
   * @param queryParameters - Object containing the following keys: plant.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getInspectionCharacteristicsUsingGet1: (
    inspectionLot: string,
    inspectionOperation: string,
    queryParameters: { plant: string }
  ) =>
    new OpenApiRequestBuilder<InspectionCharacteristicsResponse>(
      'get',
      '/lots/{inspectionLot}/operations/{inspectionOperation}/characteristics',
      {
        pathParameters: { inspectionLot, inspectionOperation },
        queryParameters
      }
    )
};
