/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Nonconformance group unique data.
 */
export type NonConformanceGroupId =
  | {
      /**
       * The nonconformance group value.
       * Pattern: "^(?! )[0-9A-Z_$!)(+~@^=\\-*. ]+(?<! )$".
       */
      group?: string;
      /**
       * The plant where a nonconformance code is defined.
       * Pattern: "^(?! )[0-9A-Z_$!)(+~@^=\\-*. ]+(?<! )$".
       */
      plant?: string;
    }
  | Record<string, any>;
