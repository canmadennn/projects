/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * The SFCs release request.
 */
export type ReleaseHoldRequest =
  | {
      /**
       * The plant in which the SFC is released from hold.
       * Max Length: 6.
       */
      plant: string;
      /**
       * The list of SFCs to be released from hold. An SFC cannot be longer than 128 characters.
       * Max Items: 500.
       */
      sfcs: string[];
      /**
       * A explanatory text given while releasing the SFCs from hold. A comment cannot be more than 2048 characters.
       * Max Length: 2048.
       * Min Length: 1.
       */
      releaseComments?: string;
    }
  | Record<string, any>;
