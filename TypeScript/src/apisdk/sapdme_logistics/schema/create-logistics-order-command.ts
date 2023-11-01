/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'CreateLogisticsOrderCommand' schema.
 */
export type CreateLogisticsOrderCommand =
  | {
      /**
       * The plant of the shop floor control (SFC), packing unit or carrier
       */
      plant: string;
      /**
       * Indicates if the logistics order is created for shop floor control (SFC), packing unit or carrier
       */
      referenceType: 'SFC' | 'PACKING_UNIT' | 'CARRIER';
      /**
       * The reference number of the shop floor control (SFC), packing unit or carrier. If reference number refers to a carrier with packing unit, then reference type must be PACKING_UNIT. If reference number refers to an empty carrier, then reference type must be CARRIER.
       */
      referenceNumber: string;
      /**
       * The source type of the shop floor control (SFC), packing unit or carrier. It can be one of the following:  resource, work center or storage location.
       */
      sourceType: 'RESOURCE' | 'WORK_CENTER' | 'STORAGE_LOCATION';
      /**
       * The destination type of the shop floor control (SFC), packing unit or carrier. It can be one of the following:  resource, work center or storage location.
       */
      destinationType: 'RESOURCE' | 'WORK_CENTER' | 'STORAGE_LOCATION';
      /**
       * The source location where the shop floor control (SFC), packing unit or carrier is transported from
       */
      sourceLocation: string;
      /**
       * The destination location where the shop floor control (SFC), packing unit or carrier will be transported to
       */
      destinationLocation: string;
      /**
       * Specify the status of the logistics order. It could be either 'New' or 'Open'. If you leave this field empty, then 'Open' status is applied by default.
       */
      status?: 'NEW' | 'OPEN';
    }
  | Record<string, any>;
