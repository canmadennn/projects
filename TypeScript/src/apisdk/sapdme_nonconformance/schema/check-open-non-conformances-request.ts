/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * The request to check for open nonconformances.
 */
export type CheckOpenNonConformancesRequest =
  | {
      /**
       * The SFC to check for open nonconformances.
       */
      sfcs: string[];
      /**
       * Bom level to search for open nonconformances.
       */
      bomLevel: number;
      /**
       * The plant in which nonconformances are checked.
       */
      plant: string;
    }
  | Record<string, any>;
