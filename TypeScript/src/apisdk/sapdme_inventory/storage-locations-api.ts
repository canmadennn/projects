/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type { PageGetStorageLocationResponse } from './schema';
/**
 * Representation of the 'StorageLocationsApi'.
 * This API is part of the 'sapdme_inventory' service.
 */
export const StorageLocationsApi = {
  /**
   * Retrieves various types of storage locations for a given plant. You can retrieve storage locations of a particular type, or a specific storage location by its name.
   * @param queryParameters - Object containing the following keys: isCentralStorageLocation, isEWMManagedStorageLocation, isProductionStorageLocation, page, plant, size, sort, storageLocation.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getStorageLocationsUsingGet2: (queryParameters: {
    isCentralStorageLocation?: boolean;
    isEWMManagedStorageLocation?: boolean;
    isProductionStorageLocation?: boolean;
    page?: number;
    plant: string;
    size?: number;
    sort?: string;
    storageLocation?: string;
  }) =>
    new OpenApiRequestBuilder<PageGetStorageLocationResponse>(
      'get',
      '/storageLocations',
      {
        queryParameters
      }
    )
};
