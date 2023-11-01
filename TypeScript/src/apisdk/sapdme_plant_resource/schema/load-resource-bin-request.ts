/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { AssemblyDataField } from './assembly-data-field';
/**
 * The request to load a resource bin.
 */
export type LoadResourceBinRequest =
  | {
      /**
       * Data fields to be populated on the component assembly.
       */
      assemblyDataFields: AssemblyDataField[];
      /**
       * The name of a resource bin to be loaded.
       * Max Length: 36.
       * Min Length: 1.
       */
      bin: string;
      /**
       * The quantity of a material to be loaded into a resource bin. If not specified, the material is considered infinite.
       */
      loadQuantity?: number;
      /**
       * The material that will be loaded into a resource bin.
       * Max Length: 128.
       * Min Length: 1.
       */
      material?: string;
      /**
       * The plant containing the resource.
       * Max Length: 6.
       * Min Length: 1.
       */
      plant: string;
      /**
       * The resource whose bin needs to be loaded.
       * Max Length: 36.
       * Min Length: 1.
       */
      resource: string;
    }
  | Record<string, any>;
