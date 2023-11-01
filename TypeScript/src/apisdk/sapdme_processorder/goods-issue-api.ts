/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type { GoodsIssueRequest, GoodsIssueResponse } from './schema';
/**
 * Representation of the 'GoodsIssueApi'.
 * This API is part of the 'sapdme_processorder' service.
 */
export const GoodsIssueApi = {
  /**
   * Performs goods issue for a BOM or non-BOM component.
   * @param body - Request object to perform goods issue.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createV1Goodsissue: (body: GoodsIssueRequest) =>
    new OpenApiRequestBuilder<GoodsIssueResponse>('post', '/v1/goodsissue', {
      body
    })
};
