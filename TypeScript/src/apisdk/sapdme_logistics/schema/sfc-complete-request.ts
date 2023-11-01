/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'SfcCompleteRequest' schema.
 */
export type SfcCompleteRequest =
  | {
      /**
       * The plant of the shop floor control (SFC)
       */
      plant: string;
      /**
       * The operation selected in POD, and for which the logistics order status is updated.
       */
      operation: string;
      /**
       * The resource of the shop floor control (SFC). You must specify either resource or workcenter.
       */
      resource?: string;
      /**
       * The work center of the shop floor control (SFC). You must specify either resource or workcenter.
       */
      workcenter?: string;
      /**
       * Specify the shop floor control (SFC) or a list of shop floor controls (SFCs) with the same operation that is completed
       */
      sfcs: string[];
    }
  | Record<string, any>;
