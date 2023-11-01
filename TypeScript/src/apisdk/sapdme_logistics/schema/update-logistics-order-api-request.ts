/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { Timestamp } from './timestamp';
/**
 * Representation of the 'UpdateLogisticsOrderApiRequest' schema.
 */
export type UpdateLogisticsOrderApiRequest =
  | {
      /**
       * Specify the ID that is used to update the logistics order. There are 3 possible types of IDs. It could be carrier ID, logistics order number, or reference number of the logistics order.
       */
      id: string;
      /**
       * Specify the type of ID that is used for the operation. There are 3 possible types: CARRIER_ID, ORDER_NUMBER and REFERENCE_NUMBER.
       */
      keyType: 'CARRIER_ID' | 'ORDER_NUMBER' | 'REFERENCE_NUMBER';
      /**
       * The plant of the logistics order
       */
      plant: string;
      /**
       * The reference type of the logistics order. There are 3 possible reference types: PACKING_UNIT, SFC and CARRIER.
       */
      referenceType?: 'PACKING_UNIT' | 'SFC' | 'CARRIER';
      /**
       * The destination type of the shop floor control (SFC), packing unit or carrier. There are 3 possible destination types: RESOURCE, WORK_CENTER or STORAGE_LOCATION.
       */
      destinationType?: 'RESOURCE' | 'WORK_CENTER' | 'STORAGE_LOCATION';
      /**
       * The destination location where the shop floor control (SFC), packing unit or carrier will be transported to
       */
      destinationLocation?: string;
      dueDateTime?: Timestamp;
    }
  | Record<string, any>;
