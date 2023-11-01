/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * The object describing a successful SFC disposition.
 */
export type SfcDisposition =
  | {
      /**
       * The operation activity at which the SFC was queued.
       */
      operation?: string;
      /**
       * Indicates whether the remaining quantity was only partially scrapped.
       */
      partialSfc?: boolean;
      /**
       * The quantity of the dispositioned SFC.
       */
      qty?: number;
      /**
       * The dispositioned SFC.
       */
      sfc?: string;
      /**
       * The type of the SFC disposition: DONE - SFC completed all routing steps, NO_DISPOSITION - SFC remains at the current operation, PARTIAL_COMPLETE - Partial quantity of the SFC completes the current operation, QUEUE - SFC placed in queue at the current operation, RETURN - SFC returns to the selected operation, SCRAP - SFC is scrapped.
       */
      type?:
        | 'DONE'
        | 'NO_DISPOSITION'
        | 'PARTIAL_COMPLETE'
        | 'QUEUE'
        | 'RETURN'
        | 'SCRAP';
    }
  | Record<string, any>;
