/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Request object to update start time of a phase.
 */
export type UpdateStartPhaseTimeRequest =
  | {
      /**
       * Plant where the phase has been started.
       */
      plant: string;
      /**
       * Order for the respective phase.
       */
      order: string;
      /**
       * Sfc of the order. Sfc is not required if the order has one Sfc. Sfc is required if the order has more than one Sfc. An error will result if an Sfc is not given and the order has more than one Sfc.
       */
      sfc?: string;
      /**
       * Phase that has been started.
       */
      phase: string;
      /**
       * Work center on which the phase was started.
       */
      workCenter: string;
      /**
       * New start date and time of the phase. It may not be before the order was released, nor in the future. It cannot be after any yield confirmation or complete of the phase.
       * Format: "yyyy-MM-dd HH:mm:ss".
       */
      updatedStartDateTime: string;
    }
  | Record<string, any>;
