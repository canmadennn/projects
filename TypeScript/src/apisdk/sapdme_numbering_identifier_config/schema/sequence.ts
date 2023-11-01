/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Response object for sequence.
 */
export type Sequence =
  | {
      /**
       * The number base of the sequence portion of the numbering pattern.
       */
      base?: number;
      /**
       * The number of characters for the sequence portion of the numbering pattern.
       */
      length?: number;
      /**
       * The lower limit for the sequence portion of the numbering pattern.
       */
      minimumValue?: number;
      /**
       * The upper limit for the sequence portion of the numbering pattern.
       */
      maximumValue?: number;
      /**
       * The next number of the sequence portion of the numbering pattern.
       */
      currentValue?: number;
      /**
       * The value by which you want to increment the current sequence number after a new number is generated.
       */
      increment?: number;
    }
  | Record<string, any>;
