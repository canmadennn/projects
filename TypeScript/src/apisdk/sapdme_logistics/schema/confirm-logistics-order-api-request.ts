/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'ConfirmLogisticsOrderApiRequest' schema.
 */
export type ConfirmLogisticsOrderApiRequest =
  | {
      /**
       * The destination location of the logistics order
       */
      destinationLocation: string;
      /**
       * The ID is used for confirming logistics order. There are 3 possible types of ID: CARRIER_ID, ORDER_NUMBER and REFERENCE_NUMBER
       */
      id: string;
      /**
       * Specify the type of ID that is used for the operation. There are 3 possible types: CARRIER_ID, ORDER_NUMBER and REFERENCE_NUMBER.
       */
      keyType: 'CARRIER_ID' | 'ORDER_NUMBER' | 'REFERENCE_NUMBER';
      /**
       * The plant of the logistics order.
       */
      plant: string;
      /**
       * The reference type of the logistics order. There are 3 possible reference types: PACKING_UNIT, SFC and CARRIER.
       */
      referenceType?: 'PACKING_UNIT' | 'SFC' | 'CARRIER';
      /**
       * This field takes effect only when there's an integrated third-party transport system. The field can be empty, if the field with value, during logistics order execution, the value must be keep consistent in the lifecycle.
       */
      transactionId?: string;
    }
  | Record<string, any>;
