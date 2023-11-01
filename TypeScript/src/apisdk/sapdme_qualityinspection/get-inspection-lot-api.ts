/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type { InspectionLotResponse } from './schema';
/**
 * Representation of the 'GetInspectionLotApi'.
 * This API is part of the 'sapdme_qualityinspection' service.
 */
export const GetInspectionLotApi = {
  /**
   * Get inspection lot information for a given inspection lot.
   * @param inspectionLot - The inspection lot for which you want to retrieve inspection information
   * @param queryParameters - Object containing the following keys: plant.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getInspectionLotUsingGet1: (
    inspectionLot: string,
    queryParameters: { plant: string }
  ) =>
    new OpenApiRequestBuilder<InspectionLotResponse>(
      'get',
      '/lots/{inspectionLot}',
      {
        pathParameters: { inspectionLot },
        queryParameters
      }
    )
};
