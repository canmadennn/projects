/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type { ShopOrderScheduleRequest, ShopOrderSchedule } from './schema';
/**
 * Representation of the 'OrderSchedulesApi'.
 * This API is part of the 'sapdme_reo' service.
 */
export const OrderSchedulesApi = {
  /**
   * Retrieve all operations scheduled on a shop floor for a date range.
   * @param body - request
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getShopOrderScheduleUsingPost: (body: ShopOrderScheduleRequest) =>
    new OpenApiRequestBuilder<ShopOrderSchedule[]>(
      'post',
      '/shoporderschedules',
      {
        body
      }
    )
};
