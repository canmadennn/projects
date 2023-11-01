/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'SfcQuantity' schema.
 */
export type SfcQuantity =
  | {
      /**
       * The name of the new SFC.
       */
      sfc?: string;
      /**
       * The default batch ID of the new SFC.
       */
      defaultBatchId?: string;
      /**
       * The quantity of the new SFC. If parameter "sfc" is empty, the name for the new SFC will be generated.
       */
      quantity: number;
    }
  | Record<string, any>;
