/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'Timestamp' schema.
 */
export type Timestamp =
  | {
      /**
       * Format: "int32".
       */
      date?: number;
      /**
       * Format: "int32".
       */
      day?: number;
      /**
       * Format: "int32".
       */
      hours?: number;
      /**
       * Format: "int32".
       */
      minutes?: number;
      /**
       * Format: "int32".
       */
      month?: number;
      /**
       * Format: "int32".
       */
      nanos?: number;
      /**
       * Format: "int32".
       */
      seconds?: number;
      /**
       * Format: "int64".
       */
      time?: number;
      /**
       * Format: "int32".
       */
      timezoneOffset?: number;
      /**
       * Format: "int32".
       */
      year?: number;
    }
  | Record<string, any>;
