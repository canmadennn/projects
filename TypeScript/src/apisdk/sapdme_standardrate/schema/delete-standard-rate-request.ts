/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * The request to delete the standard rate.
 */
export type DeleteStandardRateRequest =
  | {
      /**
       * The plant the standard rate belongs to.
       * Max Length: 6.
       * Min Length: 1.
       * Pattern: "^(?! )[0-9A-Z_$!)(+~@^=\\-*. ]+(?<! )$".
       */
      plant: string;
      /**
       * The standard rate identifier.
       */
      keyId: string;
    }
  | Record<string, any>;
