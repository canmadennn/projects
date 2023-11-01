/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { ActivityResponsePublicApi } from './activity-response-public-api';
/**
 * The activity confirmation response.
 */
export type ActivityConfirmationPublicAPIResponse =
  | {
      /**
       * Shop order for which activity confirmation has been performed.
       */
      shopOrder?: string;
      /**
       * Operation activity at which activity confirmation has been performed.
       */
      operationActivity?: string;
      /**
       * Work center at which activity confirmation has been performed.
       */
      workCenter?: string;
      /**
       * Activity list for which activity confirmation has been performed.
       */
      activities?: ActivityResponsePublicApi[];
    }
  | Record<string, any>;
