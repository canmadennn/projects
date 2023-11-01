/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type {
  PageInspectionApiSingleResultResponse,
  PageInspectionApiResultHistoryResponse
} from './schema';
/**
 * Representation of the 'GetInspectionSingleResultsApi'.
 * This API is part of the 'sapdme_qualityinspection' service.
 */
export const GetInspectionSingleResultsApi = {
  /**
   * Retrieves single value results for an inspection characteristic of a given inspection lot.
   * @param inspectionCharacteristic - The inspection characteristic for which you want to retrieve inspection single results
   * @param inspectionLot - The inspection lot for which you want to retrieve inspection single results
   * @param inspectionOperation - The inspection operation/activity for which you want to retrieve inspection single results
   * @param queryParameters - Object containing the following keys: plant, sfc, inspectionPoint, pageNumber, pageSize, sort.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getSingleResultsUsingGet1: (
    inspectionCharacteristic: string,
    inspectionLot: string,
    inspectionOperation: string,
    queryParameters: {
      plant: string;
      sfc: string;
      inspectionPoint: string;
      pageNumber?: number;
      pageSize?: number;
      sort?: string;
    }
  ) =>
    new OpenApiRequestBuilder<PageInspectionApiSingleResultResponse>(
      'get',
      '/lots/{inspectionLot}/operations/{inspectionOperation}/characteristics/{inspectionCharacteristic}/results',
      {
        pathParameters: {
          inspectionCharacteristic,
          inspectionLot,
          inspectionOperation
        },
        queryParameters
      }
    ),
  /**
   * Get recorded single results for an inspection operation for a given inspection lot for given multiple SFCs.
   * @param inspectionLot - The inspection lot number.
   * @param inspectionOperation - The inspection operation/activity number
   * @param queryParameters - Object containing the following keys: plant, sfcs.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getSingleResultsHistoryGet1: (
    inspectionLot: string,
    inspectionOperation: string,
    queryParameters: { plant: string; sfcs: string[] }
  ) =>
    new OpenApiRequestBuilder<PageInspectionApiResultHistoryResponse>(
      'get',
      '/lots/{inspectionLot}/operations/{inspectionOperation}/results',
      {
        pathParameters: { inspectionLot, inspectionOperation },
        queryParameters
      }
    )
};
