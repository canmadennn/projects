/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * This object represents a target SFC in the release order request.
 */
export type ReleaseOrderTargetSfc =
  | {
      /**
       * The identifier that new SFC will be generated with. If it's not provided, the system will generate one according to the  numbering configuration.
       */
      identifier?: string;
      /**
       * The quantity that the new SFC will be generated with. If it's not provided, the system will calculate it by material lot size (if lot size is not ignored explicitly), or raise an exception accordingly.
       */
      quantity?: number;
      /**
       * Internal code of the unit of measure of the SFC to be released. It will be converted to the material base unit of measure if an alternative unit is provided.
       */
      unitOfMeasure?: string;
    }
  | Record<string, any>;
