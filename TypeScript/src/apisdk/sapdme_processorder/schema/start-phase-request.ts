/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Request object to start a phase.
 */
export type StartPhaseRequest =
  | {
      /**
       * Plant where the phase has to be started.
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
       * Work center to start the phase on.
       */
      workCenter: string;
      /**
       * Start date and time of the phase.
       * Format: "yyyy-MM-dd HH:mm:ss".
       */
      actualStartDateTime?: string;
    }
  | Record<string, any>;
