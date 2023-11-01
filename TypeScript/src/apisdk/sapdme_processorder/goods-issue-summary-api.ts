/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type {
  GoodsIssueExtendedSummaryResponse,
  GoodsIssueExtendedSummaryResponseV2
} from './schema';
/**
 * Representation of the 'GoodsIssueSummaryApi'.
 * This API is part of the 'sapdme_processorder' service.
 */
export const GoodsIssueSummaryApi = {
  /**
   * Goods Issue summary results for an order and plant. Be aware that the API is deprecated, and will be decommissioned and retired from production in a few releases. It's recommended to use the new successor API <a href=https://api.sap.com/api/sapdme_processorder/resource/Goods_Issue_Summary>/v2/goodsIssue/summary</a>.
   * @param queryParameters - Object containing the following keys: plant, order, material, operationActivity, stepId.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  goodsSummary: (queryParameters: {
    plant: string;
    order: string;
    material: string;
    operationActivity: string;
    stepId: string;
  }) =>
    new OpenApiRequestBuilder<GoodsIssueExtendedSummaryResponse>(
      'get',
      '/v1/goodsIssue/summary',
      {
        queryParameters
      }
    ),
  /**
   * Goods Issue summary results for an order, sfc, operationActivity, stepId and plant.
   * @param queryParameters - Object containing the following keys: plant, order, sfc, operationActivity, stepId.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  goodsSummaryV2: (queryParameters: {
    plant: string;
    order: string;
    sfc: string;
    operationActivity: string;
    stepId: string;
  }) =>
    new OpenApiRequestBuilder<GoodsIssueExtendedSummaryResponseV2>(
      'get',
      '/v2/goodsIssue/summary',
      {
        queryParameters
      }
    )
};
