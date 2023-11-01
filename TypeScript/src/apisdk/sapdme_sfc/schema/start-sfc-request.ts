/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * The SFC start request.
 */
export type StartSfcRequest =
  | {
      /**
       * The plant in which the SFC is being started.
       * Max Length: 6.
       */
      plant: string;
      /**
       * The operation activity where the SFC is started.
       * Max Length: 36.
       * Min Length: 1.
       */
      operation: string;
      /**
       * The SFC quantity to be started. If not provided, the full SFC quantity is started.
       */
      quantity?: number;
      /**
       * The resource where the SFC is started.
       * Max Length: 36.
       * Min Length: 1.
       */
      resource: string;
      /**
       * The list of SFCs to be started. An SFC can be no longer than 128 characters.
       * Max Items: 500.
       */
      sfcs?: string[];
      /**
       * The process lot name is used to find SFCs and start them. A process lot name cannot be longer than 128 characters.
       * Max Length: 128.
       * Min Length: 1.
       */
      processLot?: string;
    }
  | Record<string, any>;
