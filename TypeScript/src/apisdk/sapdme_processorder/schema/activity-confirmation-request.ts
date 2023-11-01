/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { ActivityRequest } from './activity-request';
/**
 * Request object to confirm activities.
 */
export type ActivityConfirmationRequest =
  | {
      /**
       * Plant where activity confirmation has to be performed.
       */
      plant: string;
      /**
       * Order for which activity confirmation has to be performed.
       */
      order: string;
      /**
       * Charge of the order for which activity confirmation has to be performed.
       */
      charge?: string;
      /**
       * Phase at which activity confirmation has to be performed.
       */
      phase: string;
      /**
       * Work center at which activity confirmation has to be performed.
       */
      workCenter: string;
      /**
       * Final confirmation flag for reporting final activity confirmation and completing a phase
       */
      finalConfirmation?: boolean;
      /**
       * Activity list for which activity confirmation has to be performed.
       */
      activities: ActivityRequest[];
    }
  | Record<string, any>;
