/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type { StandardValueResponse } from './schema';
/**
 * Representation of the 'StandardValuesApi'.
 * This API is part of the 'sapdme_standardvalue' service.
 */
export const StandardValuesApi = {
  /**
   * Retrieves standard values for recipes or routing associated with operation activities.
   * @param queryParameters - Object containing the following keys: plant, workCenter, operationActivity, operationActivityVersion, object, objectType, objectVersion, stepId.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getDetails: (queryParameters: {
    plant: string;
    workCenter: string;
    operationActivity: string;
    operationActivityVersion: string;
    object: string;
    objectType:
      | 'PRODUCTION'
      | 'SHOP_ORDER'
      | 'PRODUCTION_ROUTING'
      | 'SHOP_ORDER_ROUTING';
    objectVersion: string;
    stepId?: string;
  }) =>
    new OpenApiRequestBuilder<StandardValueResponse>('get', '/details', {
      queryParameters
    })
};
