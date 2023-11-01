/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * The SFC scrap request.
 */
export type ScrapSfcRequest =
  | {
      /**
       * The plant in which the SFC is being scrapped.
       * Max Length: 6.
       */
      plant: string;
      /**
       * The operation activity where the SFC is scrapped.
       * Max Length: 36.
       * Min Length: 1.
       */
      operation?: string;
      /**
       * The SFC quantity to be scrapped. Each SFC must have at least this quantity, otherwise an error will result. If the SFC is an assembly, then the scrapped quantity of assembled SFCs is the product of the assembled SFC quantity and the parent SFC quantity.
       */
      quantity: number;
      /**
       * The resource where the SFC is scrapped.
       * Max Length: 36.
       * Min Length: 1.
       */
      resource?: string;
      /**
       * The list of SFCs to be scrapped. An SFC can be no longer than 128 characters.
       * Max Items: 500.
       */
      sfcs: string[];
      /**
       * The resource reason code key. A resource reason code may optionally be provided with the SFC scrap. The reason code will be logged to the Activity Log and used in reports, such as Overall Equipment Efficiency (OEE).
       * Max Length: 38.
       * Min Length: 1.
       */
      reasonCodeKey?: string;
    }
  | Record<string, any>;
