/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { BaseUnitOfMeasure } from './base-unit-of-measure';
import type { Material } from './material';
import type { OperationActivity } from './operation-activity';
import type { Order } from './order';
import type { EventType } from './event-type';
import type { Quantity } from './quantity';
import type { SFC } from './sfc';
import type { StandardRateQuantity } from './standard-rate-quantity';
import type { StandardRateDurationInSeconds } from './standard-rate-duration-in-seconds';
/**
 * Representation of the 'ProductionSummaryShiftItem' schema.
 */
export type ProductionSummaryShiftItem =
  | {
      baseUnitOfMeasure?: BaseUnitOfMeasure;
      material?: Material;
      operationActivity?: OperationActivity;
      order?: Order;
      productionEventType?: EventType;
      quantity?: Quantity;
      sfc?: SFC;
      standardRateQuantity?: StandardRateQuantity;
      standardRateDurationInSeconds?: StandardRateDurationInSeconds;
    }
  | Record<string, any>;
