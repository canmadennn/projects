/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { Timestamp } from './timestamp';
/**
 * Response object for retrieving logistic order.
 */
export type ReadLogisticsOrderInstance =
  | {
      /**
       * The ID of the logistics order
       */
      id?: string;
      /**
       * The plant of the logistics order
       */
      plant?: string;
      /**
       * The number of the logistics order
       */
      orderNumber?: string;
      /**
       * The priority of the logistics order
       */
      priority?: number;
      /**
       * The status of the logistics order. There are the following possible statuses: 'NEW', 'OPEN', 'ACCEPTED', 'READY_FOR_PICK', 'REJECTED', 'PICKED','CONFIRMED', 'CANCELLED', 'HOLD'.
       */
      status?:
        | 'NEW'
        | 'OPEN'
        | 'ACCEPTED'
        | 'READY_FOR_PICK'
        | 'REJECTED'
        | 'PICKED'
        | 'CONFIRMED'
        | 'CANCELLED'
        | 'HOLD';
      /**
       * The third-party transport system that handles the execution of the logistics order. If the returned value is 'Manual', it indicates that operators need to manually execute the logistics order in the Execute Logistics Orders app in SAP Digital Manufacturing.
       */
      transportSystem?: string;
      /**
       * The reference type of the logistics order. There are 3 possible reference types: PACKING_UNIT, SFC and CARRIER.
       */
      referenceType?: 'PACKING_UNIT' | 'SFC' | 'CARRIER';
      /**
       * The reference number of the shop floor control (SFC), packing unit or carrier
       */
      referenceNumber?: string;
      /**
       * The carrier number of the logistics order. Only logistics orders created for shop floor control (SFC) don't have carrier numbers.
       */
      carrierNumber?: string;
      /**
       * The source type of the shop floor control (SFC), packing unit or carrier. It can be one of the following: resource, work center or storage location
       */
      sourceType?: 'RESOURCE' | 'WORK_CENTER' | 'STORAGE_LOCATION';
      /**
       * The destination type of the shop floor control (SFC), packing unit or carrier. It can be one of the following: resource, work center or storage location
       */
      destinationType?: 'RESOURCE' | 'WORK_CENTER' | 'STORAGE_LOCATION';
      /**
       * The source location where the shop floor control (SFC), packing unit or carrier is transported from
       */
      sourceLocation?: string;
      /**
       * The destination location where the shop floor control (SFC), packing unit or carrier will be transported to
       */
      destinationLocation?: string;
      plannedStartDateTime?: Timestamp;
      plannedCompleteDateTime?: Timestamp;
      dueDateTime?: Timestamp;
      /**
       * The operator who executing logistics order
       */
      processorUserId?: string;
      /**
       * This field takes effect only when there's an integrated third-party transport system. The field can be empty, if the field with value, during logistics order execution, the value must be keep consistent in the lifecycle.
       */
      transactionId?: string;
      createdOn?: Timestamp;
      modifiedOn?: Timestamp;
    }
  | Record<string, any>;
