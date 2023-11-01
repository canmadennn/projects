/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type { InspectionFieldCombinationResponse } from './schema';
/**
 * Representation of the 'GetInspectionPointFieldCombinationApi'.
 * This API is part of the 'sapdme_qualityinspection' service.
 */
export const GetInspectionPointFieldCombinationApi = {
  /**
   * Get inspection point field combination information for a given field combination ID. The prerequisites of using the API is that you have configured inspection points in the Configure Inspection Points app in SAP Digital Manufacturing. This service is applicable to process orders and order-based production orders in integration with SAP S/4HANA.
   * @param combinationId - Inspection point field combination ID
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getInspectionFieldCombinationByCombinationIdUsingGet1: (
    combinationId: string
  ) =>
    new OpenApiRequestBuilder<InspectionFieldCombinationResponse>(
      'get',
      '/inspectionPointCombinations/{combinationId}/userFields',
      {
        pathParameters: { combinationId }
      }
    )
};
