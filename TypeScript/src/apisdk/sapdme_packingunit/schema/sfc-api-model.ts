/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'SfcApiModel' schema.
 */
export type SfcApiModel =
  | {
      /**
       * The name of the shop floor control (SFC).
       */
      sfc?: string;
      /**
       * The shop floor control (SFC) quantity that is loaded in the packing unit.
       */
      quantity?: number;
      /**
       * The unit of measure which qualifies the quantity.
       */
      unitOfMeasure?: string;
      /**
       * The status of the shop floor control (SFC). There are 11 possible statuses: NEW, IN_QUEUE, ACTIVE, HOLD, DONE, DONE_HOLD, SCRAPPED, INVALID, DELETED, RETURNED and GOLDEN_UNIT.
       */
      status?:
        | 'NEW'
        | 'IN_QUEUE'
        | 'ACTIVE'
        | 'HOLD'
        | 'DONE'
        | 'DONE_HOLD'
        | 'SCRAPPED'
        | 'INVALID'
        | 'DELETED'
        | 'RETURNED'
        | 'GOLDEN_UNIT';
    }
  | Record<string, any>;
