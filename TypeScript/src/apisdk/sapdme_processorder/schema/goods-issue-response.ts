/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * The goods issue response.
 */
export type GoodsIssueResponse =
  | {
      /**
       * Order at which goods issue has been performed.
       */
      order?: string;
      /**
       * Material for which goods issue has been performed.
       */
      material?: string;
      /**
       * Phase at which goods issue has been performed.
       */
      phase?: string;
      /**
       * Total consumed quantity.
       */
      totalConsumedQuantity?: number;
      /**
       * Unit of measure of the consumed quantity.
       */
      unitOfMeasure?: string;
    }
  | Record<string, any>;
