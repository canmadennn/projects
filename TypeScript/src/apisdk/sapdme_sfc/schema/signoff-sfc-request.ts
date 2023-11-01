/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * SFC Signoff Request object.
 */
export type SignoffSfcRequest =
  | {
      /**
       * The plant where the SFC is currently active.
       * Max Length: 6.
       */
      plant: string;
      /**
       * The list of SFCs to Signoff. An SFC can be no longer than 128 characters.
       * Max Items: 500.
       */
      sfcs?: string[];
      /**
       * The process lot name is used to find SFCs and sign them off. A process lot cannot be longer than 128 characters.
       * Max Length: 128.
       * Min Length: 1.
       */
      processLot?: string;
      /**
       * The operation activity where the SFC is currently Active.
       * Max Length: 36.
       * Min Length: 1.
       */
      operation?: string;
      /**
       * The resource where the SFC is currently Active.
       * Max Length: 36.
       * Min Length: 1.
       */
      resource?: string;
      /**
       * The SFC Signoff Date time in UTC, ISO-8601 extended format example = "2022-03-30T10:08:07.304Z"
       */
      dateTime?: string;
    }
  | Record<string, any>;
