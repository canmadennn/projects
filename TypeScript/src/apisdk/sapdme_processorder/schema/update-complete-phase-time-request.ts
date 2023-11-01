/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Request object to update complete time of a phase.
 */
export type UpdateCompletePhaseTimeRequest =
  | {
      /**
       * Plant where the phase has been completed.
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
       * Phase that has been completed.
       */
      phase: string;
      /**
       * Work center on which the phase was completed.
       */
      workCenter: string;
      /**
       * New complete date and time of the phase. It cannot be before any yield confirmation or in the future.
       * Format: "yyyy-MM-dd HH:mm:ss".
       */
      updatedCompleteDateTime: string;
    }
  | Record<string, any>;
