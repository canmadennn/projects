/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type {
  ChangeProductionRequest,
  ChangeProductionResponse
} from './schema';
/**
 * Representation of the 'ProductionChangeApi'.
 * This API is part of the 'sapdme_production' service.
 */
export const ProductionChangeApi = {
  /**
   * Assigns a new routing or a new Bill of Materials (BOM), or both to given Shop Floor Controls (SFCs). If the relevant order is SFC-based, changes are made at SFC level which means only the specified Shop Floor Controls will be changed. If the relevant order is order-based, then changes are made not only at SFC level, but at order level as well.
   * @param body - Request object to change production.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createChangeProduction: (body: ChangeProductionRequest) =>
    new OpenApiRequestBuilder<ChangeProductionResponse>(
      'post',
      '/changeProduction',
      {
        body
      }
    )
};
