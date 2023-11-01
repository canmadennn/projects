/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { AssemblyDataField } from './assembly-data-field';
/**
 * A request to list the asssembled components
 */
export type AssembledComponents =
  | {
      /**
       * Assembly ID of the component.
       */
      assemblyId?: number;
      /**
       * Operation activity.
       */
      operationActivity?: string;
      /**
       * The plant for which this operation activity is defined.
       */
      plant?: string;
      /**
       * Component.
       */
      component?: string;
      /**
       * Version of the component.
       */
      componentVersion?: string;
      /**
       * Description of the component.
       */
      description?: string;
      /**
       * Assembled quantity for the BOM component.
       */
      assembledQuantity?: number;
      /**
       * Assembled date.
       */
      assembledDate?: string;
      /**
       * Unit of Measure.
       */
      unitOfMeasure?: string;
      /**
       * List of Assembly data fields for the component.
       */
      assemblyDataFields?: AssemblyDataField[];
      /**
       * Assembly data type of the component.
       */
      assemblyDataType?: string;
    }
  | Record<string, any>;
