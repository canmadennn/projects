/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { SFC } from './sfc';
/**
 * Representation of the 'UnloadPackingUnitRequest' schema.
 */
export type UnloadPackingUnitRequest =
  | {
      /**
       * The plant of the packing unit
       */
      plant: string;
      /**
       * The carrier number from which the packing unit will be unloaded. You can fill either carrierNumber or packingUnitNumber to specify the packing unit that needs to be unloaded. If you fill both properties, the relevant values need to match.
       */
      carrierNumber?: string;
      /**
       * The ID of the packing unit that is unloaded. You can fill either carrierNumber or packingUnitNumber to specify the packing unit that needs to be unloaded. If you fill both properties, the relevant values need to match.
       */
      packingUnitNumber?: string;
      /**
       * This field can be optionally filled to specify the exact items that are unloaded from the packing unit. If you want to unload the whole packing unit, you can leave this field empty.
       */
      content?:
        | {
            /**
             * The packing unit which is the content of a packing unit.
             */
            packingUnit?:
              | {
                  /**
                   * The unique number of the packing unit.
                   */
                  number: string;
                  /**
                   * The plant where the packing unit is used.
                   */
                  plant: string;
                }
              | Record<string, any>;
            /**
             * If the packing unit content is SFC, specify here the quantity you want to unload from the SFC. When left empty, the whole SFC is unloaded.
             */
            quantity?: number;
            sfc?: SFC;
            /**
             * The unit of measure which qualifies the content's quantity
             */
            unitOfMeasure?: string;
          }
        | Record<string, any>[];
    }
  | Record<string, any>;
