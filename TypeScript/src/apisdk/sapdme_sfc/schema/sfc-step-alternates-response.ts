/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Response object for alternate resource mapping of an SFC and Phase.
 */
export type SfcStepAlternatesResponse =
  | {
      /**
       * Operation Activity for which the alternate resource mapping has been updated
       * Pattern: "^(?! )[0-9A-Z_$!)(+~@^=\\-*. ]+(?<! )$".
       */
      operationActivity?: string;
      /**
       * Updated alternate resource for the Sfc and Phase
       * Pattern: "^(?! )[0-9A-Z_$!)(+~@^=\\-*. ]+(?<! )$".
       */
      resource?: string;
      /**
       * Sfc for which the alternate resource mapping has been updated
       * Pattern: "^(?! )[0-9A-Z_$!)(+~@^=\\-*. ]+(?<! )$".
       */
      sfc?: string;
    }
  | Record<string, any>;
