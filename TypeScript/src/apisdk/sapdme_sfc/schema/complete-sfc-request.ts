/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * The SFC complete request.
 */
export type CompleteSfcRequest =
  | {
      /**
       * The plant in which the SFC is being completed.
       * Max Length: 6.
       */
      plant: string;
      /**
       * The operation activity where the SFC is completed.
       * Max Length: 36.
       * Min Length: 1.
       */
      operation: string;
      /**
       * The SFC quantity to be completed. If not provided, the full SFC quantity is completed.
       */
      quantity?: number;
      /**
       * The resource where the SFC is completed.
       * Max Length: 36.
       * Min Length: 1.
       */
      resource: string;
      /**
       * The list of SFCs to be completed. An SFC can be no longer than 128 characters.
       * Max Items: 500.
       */
      sfcs?: string[];
      /**
       * The process lot name is used to find SFCs and complete them. A process lot cannot be longer than 128 characters.
       * Max Length: 128.
       * Min Length: 1.
       */
      processLot?: string;
    }
  | Record<string, any>;
