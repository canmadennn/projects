/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { BomComponent } from './bom-component';
import type { CustomValue } from './custom-value';
/**
 * Representation of the 'BOM' schema.
 */
export type BOM =
  | {
      /**
       * Base quantity of the BOM.
       */
      baseQuantity?: number;
      /**
       * Base unit of measure of the BOM.
       */
      baseUnitOfMeasure?: string;
      /**
       * The name of the BOM.
       */
      bom?: string;
      /**
       * The type of the BOM.
       */
      bomType?: 'MASTER' | 'SHOP_ORDER' | 'SFC';
      /**
       * Set of BOM components.
       */
      components?: BomComponent[];
      /**
       * Set of BOM custom values.
       */
      customValues?: CustomValue[];
      /**
       * The description of the BOM.
       */
      description?: string;
      /**
       * The plant for which the BOM is defined.
       */
      plant?: string;
      /**
       * The status of the BOM.
       */
      status?:
        | 'NEW'
        | 'RELEASABLE'
        | 'FROZEN'
        | 'OBSOLETE'
        | 'HOLD'
        | 'HOLD_YIELD_RATE'
        | 'HOLD_CONSEC_NC'
        | 'HOLD_SPC_VIOL'
        | 'HOLD_SPC_WARN';
      /**
       * The version of the BOM.
       */
      version?: string;
    }
  | Record<string, any>;
