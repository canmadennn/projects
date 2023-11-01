/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { ActivityRequestPublicApi } from './activity-request-public-api';
/**
 * Request object to confirm activities.
 */
export type ActivityConfirmationPublicAPIRequest =
  | {
      /**
       * Plant where activity confirmation has to be performed.
       */
      plant: string;
      /**
       * Shop order for which activity confirmation has to be performed.
       */
      shopOrder: string;
      /**
       * Sfc of the order for which activity confirmation has to be performed. If the shop order has only one Sfc, this attribute is optional. Else, provide the Sfc.
       */
      sfc?: string;
      /**
       * Operation activity at which activity confirmation has to be performed.
       */
      operationActivity: string;
      /**
       * Step Identifier at which activity confirmation has to be performed.
       */
      stepId: string;
      /**
       * Work center at which activity confirmation has to be performed.
       */
      workCenter: string;
      /**
       * Final confirmation flag for reporting final activity confirmation and completing an operation activity.
       */
      finalConfirmation?: boolean;
      /**
       * Allows activity confirmation even when the operation activity is completed in SAP Digital Manufacturing. By default, the value is false. If the value is explicitly set to true, then the activities will be posted even though the operation activity is completed.
       */
      allowPostingsAfterOperationActivityComplete?: boolean;
      /**
       * Activity list for which activity confirmation has to be performed.
       */
      activities: ActivityRequestPublicApi[];
    }
  | Record<string, any>;
