/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Output class for model
 */
export type AiMlModelOutputClass =
  | {
      /**
       * Class name
       */
      classDisplayName?: string;
      /**
       * Class index
       * Format: "int32".
       */
      classIndex?: number;
      /**
       * Is it a nonconformance class?
       */
      nc?: boolean;
      /**
       * Nonconformance code ID mapped to the class
       */
      ncCodeId?: string;
      /**
       * Nonconformance code name mapped to the class
       */
      ncCodeName?: string;
      /**
       * Threshold
       */
      threshold?: string;
    }
  | Record<string, any>;
