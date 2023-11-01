/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'StagingRequestItemResponse' schema.
 */
export type StagingRequestItemResponse =
  | {
      /**
       * Staging request
       */
      stagingRequestNumber?: string;
      /**
       * The staging request item number in SAP Digital Manufacturing. There can be multiple staging request item numbers under a staging request number.
       */
      stagingRequestItemNumber?: string;
      /**
       * The material that's requested in the staging request
       */
      material?: string;
      /**
       * The description for the material that's requested in the staging request
       */
      materialDescription?: string;
      /**
       * The version for the material that's requested in the staging request
       */
      materialVersion?: string;
      /**
       * The production supply area where the staged material is delivered to
       */
      productionSupplyArea?: string;
      /**
       * The quantity which has already been fulfilled in the staging request. It's calculated using the unit of measure in the staging request.
       */
      receivedQuantity?: number;
      /**
       * The quantity that is requested in the staging request.
       */
      stagingQuantity?: number;
      /**
       * The unit of measure used in the staging request. It could be either base unit of measure, or alternate unit of measure of the material.
       */
      stagingUom?: string;
      /**
       * The order number for which the staging request is performed. It's only applicable to staging request with single-order staging method.
       */
      order?: string;
      /**
       * The operation for which the staging request is performed
       */
      operation?: string;
      /**
       * The staging method of the staging request. There are 2 possible staging method: 'MES_DRIVEN_CROSS_ORDER_STAGING' and 'MES_DRIVEN_SINGLE_ORDER_STAGING'.
       */
      stagingMethod?:
        | 'MES_DRIVEN_CROSS_ORDER_STAGING'
        | 'MES_DRIVEN_SINGLE_ORDER_STAGING';
      /**
       * The status of the staging request. There are 9 possible statuses: 1) 'NEW': Retrieve staging requests that are newly created; 2) 'IN_PROCESS': Retrieve staging requests that are still being processed; 3) 'DELIVERED': Retrieve staging requests that are delivered to Extended Warehouse Management; 4) 'DELIVERY_FAILED': Retrieve staging requests that failed to be delivered to Extended Warehouse Management due to technical reasons; 5) 'INITIALIZED': Retrieve staging requests that are initialized in Extended Warehouse Management; 6) 'NOT_STAGED': Retrieve staging requests where no component is staged; 7) 'PARTIALLY_STAGED': Retrieve staging requests where only part of the requested components are staged to production supply area; 8) 'STAGED': Retrieve staging requests where all requested components are successfully staged to production supply area; 9) 'OVER_STAGED': Retrieve staging requests where components staged exceed the requested quantity.
       */
      status?:
        | 'NEW'
        | 'IN_PROCESS'
        | 'DELIVERED'
        | 'DELIVERY_FAILED'
        | 'INITIALIZED'
        | 'NOT_STAGED'
        | 'PARTIALLY_STAGED'
        | 'STAGED'
        | 'OVER_STAGED';
      /**
       * The warehouse number from which the staged materials are delivered
       */
      warehouseNumber?: string;
      /**
       * The batch number of the staged material
       */
      batchNumber?: string;
      /**
       * The planned delivery date time of the staging request
       * Format: "date-time".
       */
      plannedDeliveryDateTime?: string;
      /**
       * The creation date time of the staging request
       * Format: "date-time".
       */
      createdDateTime?: string;
    }
  | Record<string, any>;
