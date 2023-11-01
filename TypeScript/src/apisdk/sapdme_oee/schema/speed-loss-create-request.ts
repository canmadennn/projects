/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * A request to report speed loss
 */
export type SpeedLossCreateRequest =
  | {
      /**
       * Plant for reporting speed loss.
       */
      plant: string;
      /**
       * Order for reporting speed loss.
       */
      order: string;
      /**
       * Operation Activity for reporting speed loss.
       * @example "1015301-0-0020"
       */
      operationActivity: string;
      /**
       * Resource name for reporting speed loss.
       */
      resource: string;
      /**
       * Reason code Id(Key Id) for reporting speed loss.
       */
      resourceReasonCodeId: string;
      /**
       * Date on which speed loss is reported in yyyy-MM-dd format.
       * @example "2022-02-01"
       */
      date: string;
      /**
       * Shift Name for reporting speed loss.
       */
      shift?: string;
      /**
       * Duration of speed loss in milliseconds.
       */
      duration: number;
    }
  | Record<string, any>;
