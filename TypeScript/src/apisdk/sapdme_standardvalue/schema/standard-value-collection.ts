/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { Quantity } from './quantity';
import type { StandardValueTexts } from './standard-value-texts';
/**
 * Standard Value Collection
 */
export type StandardValueCollection =
  | {
      /**
       * Standard Value
       */
      standardVal?: string;
      /**
       * Sequence
       */
      sequence?: number;
      standardValueQuantity?: Quantity;
      /**
       * Languages
       */
      standardValueTexts?: StandardValueTexts[];
    }
  | Record<string, any>;
