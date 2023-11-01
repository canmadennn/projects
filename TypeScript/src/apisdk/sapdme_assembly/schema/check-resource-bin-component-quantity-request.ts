/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * The request for checking the component quantity in the Resource Bin is enough to make time based auto assembly.
 */
export type CheckResourceBinComponentQuantityRequest =
  | {
      /**
       * The Operation for checking the components
       */
      operation: string;
      /**
       * Version of the Operation.
       */
      operationVersion: string;
      /**
       * The plant containing an SFC.
       */
      plant: string;
      /**
       * The Resource with Bin which is needed to be checked
       */
      resource: string;
      /**
       * The list of SFCs for checking the component quantity
       */
      sfcs: string[];
    }
  | Record<string, any>;
