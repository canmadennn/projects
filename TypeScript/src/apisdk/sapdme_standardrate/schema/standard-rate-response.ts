/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { ResourceId } from './resource-id';
import type { WorkcenterId } from './workcenter-id';
import type { MaterialId } from './material-id';
import type { RoutingId } from './routing-id';
import type { OperationId } from './operation-id';
/**
 * This business object defines the basic standard rate by resource object.
 */
export type StandardRateResponse =
  | {
      /**
       * The reference of the standard rate.
       */
      ref?: string;
      /**
       * The plant number or ID.
       */
      plant?: string;
      /**
       * The value of keyId.
       */
      keyId?: string;
      resourceId?: ResourceId;
      workCenterId?: WorkcenterId;
      /**
       * operatorsQuantity
       */
      operatorsQuantity?: string;
      materialId?: MaterialId;
      routingId?: RoutingId;
      operationId?: OperationId;
      /**
       * The time unit type.
       */
      timeUnitsType?: string;
      /**
       * Quantity.
       */
      quantity?: number;
      /**
       * Time duration.
       */
      time?: number;
      /**
       * Pace number.
       */
      pace?: number;
      /**
       * Creation date and time of the standard rate.
       * @example "2019-01-03T11:13:13.000Z"
       * Format: "date-time".
       */
      createdDateTime?: string;
      /**
       * Modification date and time of the standard rate.
       * @example "2019-01-03T11:13:13.000Z"
       * Format: "date-time".
       */
      modifiedDateTime?: string;
    }
  | Record<string, any>;
