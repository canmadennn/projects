/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'BomRefDes' schema.
 */
export type BomRefDes =
  | {
      /**
       * The reference designator where a BOM component should be assembled.
       */
      refDes?: string;
      /**
       * The reference designator sequence number.
       * Format: "int64".
       */
      sequence?: number;
      /**
       * The number of pieces to assemble at this reference designator.
       */
      quantity?: number;
      /**
       * The reference designator sequence number in ERP.
       * Format: "int32".
       */
      erpRefDesSequence?: number;
      /**
       * The description of the BOM's reference designator.
       */
      description?: string;
    }
  | Record<string, any>;
