/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * The SFCs hold request.
 */
export type PlaceHoldRequest =
  | {
      /**
       * The plant in which the SFC is placed on hold.
       * Max Length: 6.
       */
      plant: string;
      /**
       * The list of SFCs to be placed on hold. An SFC cannot be longer than 128 characters.
       * Max Items: 500.
       */
      sfcs: string[];
      /**
       * A explanatory text given while placing the SFCs on hold. A comment cannot be more than 2048 characters.
       * Max Length: 2048.
       * Min Length: 1.
       */
      comments?: string;
      /**
       * The expected released date time after which the hold on the SFCs will be released.
       * @example "2023-05-20T05:29:47.000Z"
       * Format: "date-time".
       */
      expectedReleaseDateTime?: string;
    }
  | Record<string, any>;
