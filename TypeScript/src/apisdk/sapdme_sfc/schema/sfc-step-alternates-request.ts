/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Request object to update the alternate resource mapping for an SFC and Phase.
 */
export type SfcStepAlternatesRequest =
  | {
      /**
       * Operation Activity for which the alternate resource mapping has to be updated
       * Pattern: "^(?! )[0-9A-Z_$!)(+~@^=\\-*. ]+(?<! )$".
       */
      operationActivity?: string;
      /**
       * Resource which is to be added as an alternate resource
       * Pattern: "^(?! )[0-9A-Z_$!)(+~@^=\\-*. ]+(?<! )$".
       */
      resource?: string;
      /**
       * Sfc for which the alternate resource mapping has to be updated
       * Pattern: "^(?! )[0-9A-Z_$!)(+~@^=\\-*. ]+(?<! )$".
       */
      sfc?: string;
      /**
       * Work Center on which the order has been scheduled
       * Pattern: "^(?! )[0-9A-Z_$!)(+~@^=\\-*. ]+(?<! )$".
       */
      workCenter?: string;
    }
  | Record<string, any>;
