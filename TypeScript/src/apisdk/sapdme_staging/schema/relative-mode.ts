/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'RelativeMode' schema.
 */
export type RelativeMode =
  | {
      /**
       * The benchmark operation based on which you can specify the exact operations for which you want to stage components. If not set, the operation on which the Shop Floor Control currently persists is used.
       */
      basePointOperation?: string;
      /**
       * You can choose one out of the 3 modes to specify operations for which the staging request is performed: 1) 'CURRENT_AND_NEXT_ALL': Indicates that the staging request is performed for the benchmark operation and all the remaining operations; 2) 'NEXT_ALL': Indicates that the staging request is performed for all the remaining operations after the benchmark operation; 3) 'RELATIVE_STEP': If you choose this mode, you need to addtionally specify the exact operation activity steps using the 'relativeSteps' field.
       */
      mode: 'CURRENT_AND_NEXT_ALL' | 'NEXT_ALL' | 'RELATIVE_STEP';
      /**
       * This field is only applicable if you've selected 'RELATIVE_STEP' mode. You can use a series of whole numbers (e.g. 0, 1, 2, 3, 4...) seperated by comma to specify the exact operations for which you want to stage materials. Use '0' to represent the current operation, and '1' the first operation after the current operation, and '2' the second operation after the current operation, and so on.
       */
      relativeSteps?: Set<number>;
    }
  | Record<string, any>;
