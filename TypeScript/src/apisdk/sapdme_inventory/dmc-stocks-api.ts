/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type {
  DmcStockDto,
  GetInventoryResponse,
  CreateInventoryRequest,
  CreateInventoryResponse,
  QueryInventoryRequest,
  QueryInventoryResponse,
  CreateBulkInventoriesRequest,
  CreateBulkInventoriesResponse,
  UpdateInventoryRequest,
  UpdateInventoryResponse,
  TransferInventoryRequest,
  TransferInventoryResponse
} from './schema';
/**
 * Representation of the 'DMCStocksApi'.
 * This API is part of the 'sapdme_inventory' service.
 */
export const DMCStocksApi = {
  /**
   * Get stock information such as status, quantity and handling unit, etc. for a given plant.  Be aware that the API is deprecated, and will be decommissioned and retired from production in a few releases. It's recommended to use the new successor API <a href=https://api.sap.com/api/sapdme_inventory/resource>/inventories</a>.
   * @param queryParameters - Object containing the following keys: inventoryId, batchNumber, handlingUnit, material, noZeroStockLine, plant, productionSupplyArea, psaBin, reservedOperation, reservedOrder, returnResultNumber, serialNumber, status, topHandlingUnit, type, version.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getDmcStockByRequestUsingGet1: (queryParameters: {
    inventoryId?: string;
    batchNumber?: string;
    handlingUnit?: string;
    material?: string;
    noZeroStockLine?: string;
    plant: string;
    productionSupplyArea?: string;
    psaBin?: string;
    reservedOperation?: string;
    reservedOrder?: string;
    returnResultNumber?: number;
    serialNumber?: string;
    status?: 'AVAILABLE' | 'HOLD' | 'QUARANTINE';
    topHandlingUnit?: string;
    type?: 'ERP' | 'EWM' | 'LOCAL';
    version?: string;
  }) =>
    new OpenApiRequestBuilder<DmcStockDto[]>('get', '/dmcStock', {
      queryParameters
    }),
  /**
   * Gets stocks that have been created in SAP Digital Manufacturing for a given plant. You can retrieve stocks of different statuses and types, as well as stocks with or without on-hand quantity.
   * @param queryParameters - Object containing the following keys: batchNumber, handlingUnit, inventoryId, inventoryIds, material, materialVersion, page, plant, productionSupplyArea, reservedOperation, reservedOrder, serialNumber, stockRetrieveScope, size, sort, status, storageBin, storageLocation.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getInventoriesUsingGet2: (queryParameters: {
    batchNumber?: string;
    handlingUnit?: string;
    inventoryId?: string;
    inventoryIds?: string[];
    material?: string;
    materialVersion?: string;
    page?: number;
    plant: string;
    productionSupplyArea?: string;
    reservedOperation?: string;
    reservedOrder?: string;
    serialNumber?: string;
    stockRetrieveScope?: 'ALL' | 'NO_ZERO_STOCK' | 'ZERO_STOCK';
    size?: number;
    sort?: string;
    status?: 'AVAILABLE' | 'HOLD' | 'QUARANTINE';
    storageBin?: string;
    storageLocation?: string;
  }) =>
    new OpenApiRequestBuilder<GetInventoryResponse>('get', '/inventories', {
      queryParameters
    }),
  /**
   * Creates a stock with either 'DMC', 'ERP' or 'EWM' origin for a specific material at a given plant. To create stock with 'ERP' or 'EWM' origins, you need to firstly enable External Inventory Management in the Manage Business Settings app.
   * @param body - request
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createInventoryPost2: (body: CreateInventoryRequest) =>
    new OpenApiRequestBuilder<CreateInventoryResponse>('post', '/inventories', {
      body
    }),
  /**
   * Retrieves stocks that have been created in SAP Digital Manufacturing for a given plant. You can retrieve stocks of different statuses and types, as well as stocks with or without on-hand quantity.
   * @param body - request
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  queryInventoriesUsingPost: (body: QueryInventoryRequest) =>
    new OpenApiRequestBuilder<QueryInventoryResponse>(
      'post',
      '/inventories/advancedQuery',
      {
        body
      }
    ),
  /**
   * Creates multiple stocks with either 'DMC', 'ERP' or 'EWM' origin for specific materials at a given plant. To create stock with 'ERP' or 'EWM' origins, you need to firstly enable External Inventory Management in the Manage Business Settings app.
   * @param body - request
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createInventoryPost3: (body: CreateBulkInventoriesRequest) =>
    new OpenApiRequestBuilder<CreateBulkInventoriesResponse>(
      'post',
      '/inventories/bulkCreate',
      {
        body
      }
    ),
  /**
   * Updates an existing stock for a given plant. You can update a stock with DMC, ERP or EWM origin. For DMC stock, you can increase the stock on-hand quantity, or change the stock information such as stock status and assembly data. For ERP or EWM stock, you can only change its assembly data.
   * @param inventoryId - The inventory ID of the stock that needs to be updated
   * @param body - request
   * @param queryParameters - Object containing the following keys: plant.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  updateInventoriesUsingPatch1: (
    inventoryId: string,
    body: UpdateInventoryRequest,
    queryParameters: { plant: string }
  ) =>
    new OpenApiRequestBuilder<UpdateInventoryResponse>(
      'patch',
      '/inventories/{inventoryId}',
      {
        pathParameters: { inventoryId },
        body,
        queryParameters
      }
    ),
  /**
   * Transfers the full or the partial quantity of a DMC stock to a different storage location. If the full quantity of the stock is transferred, an inventory ID is created for the new stock and the original stock is removed. If only the partial quantity of the stock is transferred, an inventory ID is created for the new stock and the original stock still exists, only with a decreased quantity. This API is only supported for stocks with DMC origin.
   * @param body - request
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  transferInventoryUsingPost: (body: TransferInventoryRequest) =>
    new OpenApiRequestBuilder<TransferInventoryResponse>(
      'post',
      '/inventories/transfer',
      {
        body
      }
    )
};
