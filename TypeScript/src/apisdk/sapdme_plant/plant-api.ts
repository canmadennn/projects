/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type { Plant } from './schema';
/**
 * Representation of the 'PlantApi'.
 * This API is part of the 'sapdme_plant' service.
 */
export const PlantApi = {
  /**
   * Finds all plants or or specific plant by name.
   * @param queryParameters - Object containing the following keys: plant.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getPlantUsingGet: (queryParameters?: { plant?: string }) =>
    new OpenApiRequestBuilder<Plant[]>('get', '/plants', {
      queryParameters
    })
};
