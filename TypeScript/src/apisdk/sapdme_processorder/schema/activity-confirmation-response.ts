/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { ActivityResponse } from './activity-response';
/**
 * The activity confirmation response.
 */
export type ActivityConfirmationResponse =
  | {
      /**
       * Order for which activity confirmation has been performed.
       */
      order?: string;
      /**
       * Phase at which activity confirmation has been performed.
       */
      phase?: string;
      /**
       * Work center at which activity confirmation has been performed.
       */
      workCenter?: string;
      /**
       * Activity list for which activity confirmation has been performed.
       */
      activities?: ActivityResponse[];
    }
  | Record<string, any>;
