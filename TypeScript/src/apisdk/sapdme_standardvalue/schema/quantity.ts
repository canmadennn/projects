/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { UnitOfMeasure } from './unit-of-measure';
/**
 * Object defining quantity and unit of measure.
 */
export type Quantity =
  | {
      /**
       * Quantity
       */
      value?: number;
      unitOfMeasure?: UnitOfMeasure;
    }
  | Record<string, any>;
