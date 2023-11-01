/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { UnitOfMeasure } from './unit-of-measure';
/**
 * Representation of the 'GetInventoryResponseItemQuantity' schema.
 */
export type GetInventoryResponseItemQuantity =
  | {
      unitOfMeasure: UnitOfMeasure;
      /**
       * The on-hand quantity of the stock
       */
      value: number;
    }
  | Record<string, any>;
