/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { CustomData } from './custom-data';
/**
 * Response component
 */
export type ComponentListResponse =
  | {
      /**
       * Component
       */
      component?: string;
      /**
       * Version of the component
       */
      componentVersion?: string;
      /**
       * Description of the component
       */
      componentDescription?: string;
      /**
       * Operation activity
       */
      operationActivity?: string;
      /**
       * The plant for which this operation activity is defined
       */
      plant?: string;
      /**
       * Required quantity to assemble for the BOM component
       */
      requiredQuantity?: number;
      /**
       * Assembled quantity for the BOM component
       */
      assembledQuantity?: number;
      /**
       * Remaining quantity to assemble for the BOM component
       */
      remainingQuantity?: number;
      /**
       * Indicates whether the BOM component can be assembled with custom quantity
       */
      assembleQuantityAsRequired?: boolean;
      /**
       * Step ID
       */
      stepId?: string;
      /**
       * Sequence of the BOM component
       */
      componentSequence?: number;
      /**
       * Assembly data type
       */
      assemblyDataType?: string;
      /**
       * Set of bom component custom data.
       */
      bomComponentCustomData?: CustomData[];
    }
  | Record<string, any>;
