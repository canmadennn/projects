/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type { SpeedLossCreateRequest } from './schema';
/**
 * Representation of the 'SpeedLossApi'.
 * This API is part of the 'sapdme_oee' service.
 */
export const SpeedLossApi = {
  /**
   * Create a new speed loss with Reason Code tagged. You can tag the existing un-tagged speed loss with a reason code for a given duration.
   * @param body - Request object to create speed loss.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createV1SpeedLoss: (body: SpeedLossCreateRequest) =>
    new OpenApiRequestBuilder<any>('post', '/v1/speedLoss', {
      body
    })
};
