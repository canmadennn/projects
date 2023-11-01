/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Request object to complete a phase.
 */
export type CompletePhaseRequest =
  | {
      /**
       * Plant where the phase has to be completed.
       */
      plant: string;
      /**
       * Order of the phase.
       */
      order: string;
      /**
       * Charge of the order.
       */
      charge?: string;
      /**
       * Phase to be started.
       */
      phase: string;
      /**
       * Work center to complete the phase on.
       */
      workCenter: string;
      /**
       * Completion date and time of the phase.
       * Format: "yyyy-MM-dd HH:mm:ss".
       */
      actualCompleteDateTime?: string;
      /**
       * Send final confirmation when completing a phase. This is true by default.
       */
      finalConfirmation?: string;
    }
  | Record<string, any>;
