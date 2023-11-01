/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'HoldLogisticsOrderApiRequest' schema.
 */
export type HoldLogisticsOrderApiRequest =
  | {
      /**
       * The plant of the logistics order
       */
      plant: string;
      /**
       * The order number of the logistics order
       */
      orderNumber: string;
    }
  | Record<string, any>;
