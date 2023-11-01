/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type { PageFindOrderResponse } from './schema';
/**
 * Representation of the 'OrderListApi'.
 * This API is part of the 'sapdme_order' service.
 */
export const OrderListApi = {
  /**
   * Finds a list of orders for a given plant.
   * @param queryParameters - Object containing the following keys: plant, material, materialVersion, releaseStatuses, executionStatuses, workCenters, order, customerOrder, customer, plannedStartDate, plannedCompletionDate, scheduledStartDate, scheduledCompletionDate, page, size.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getOrdersList: (queryParameters: {
    plant: string;
    material?: string;
    materialVersion?: string;
    releaseStatuses?: Set<
      | 'RELEASED'
      | 'RELEASABLE'
      | 'UNDEFINED'
      | 'PARTIALLY_CREATED'
      | 'PARTIALLY_RELEASED'
      | 'HOLD'
    >;
    executionStatuses?: Set<
      | 'NOT_IN_EXECUTION'
      | 'ACTIVE'
      | 'HOLD'
      | 'CLOSED'
      | 'COMPLETED'
      | 'DISCARDED'
    >;
    workCenters?: Set<string>;
    order?: string;
    customerOrder?: string;
    customer?: string;
    plannedStartDate?: string;
    plannedCompletionDate?: string;
    scheduledStartDate?: string;
    scheduledCompletionDate?: string;
    page?: string;
    size?: string;
  }) =>
    new OpenApiRequestBuilder<PageFindOrderResponse>('get', '/orders/list', {
      queryParameters
    })
};
