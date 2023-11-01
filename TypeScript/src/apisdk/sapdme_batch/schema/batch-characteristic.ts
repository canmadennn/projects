/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { BatchCharcValue } from './batch-charc-value';
/**
 * Representation of the 'BatchCharacteristic' schema.
 */
export type BatchCharacteristic =
  | {
      /**
       * Characteristic name
       */
      charcName?: string;
      /**
       * Characteristic description
       */
      charcDesc?: string;
      /**
       * Characteristic type
       */
      dataType?: 'CHAR' | 'NUM' | 'DATE' | 'TIME';
      /**
       * Characteristic unit
       */
      uom?: string;
      /**
       * Characteristic decimal places, if any.
       */
      decimalPlaces?: number;
      /**
       * Characteristic values
       */
      batchCharcValues?: BatchCharcValue[];
    }
  | Record<string, any>;
