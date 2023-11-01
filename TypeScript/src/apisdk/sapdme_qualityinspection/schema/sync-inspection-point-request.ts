/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * This object represents a request to create a inspection point in integrated ERP system.
 */
export type SyncInspectionPointRequest =
  | {
      /**
       * The inspection point number
       */
      inspectionPoint?: string;
      /**
       * The plant for which the inspection point is created in integrated ERP system
       * Pattern: "^(?! )[0-9A-Z_$!)(+~@^=\\-*. ]+(?<! )$".
       */
      plant: string;
      /**
       * The SFC for which the inspection point is created in integrated ERP system
       */
      sfc: string;
    }
  | Record<string, any>;
