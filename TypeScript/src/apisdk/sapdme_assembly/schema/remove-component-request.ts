/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * A request to delete a component.
 */
export type RemoveComponentRequest =
  | {
      /**
       * Plant for assembly of component.
       */
      plant: string;
      /**
       * Operation activity for assembly of component.
       */
      operationActivity: string;
      /**
       * SFC for assembly of component.
       */
      sfc: string;
      /**
       * Component name for assembly of component.
       */
      component: string;
      /**
       * Component version for assembly of component.
       */
      componentVersion: string;
      /**
       * Resource name for assembly of component.
       */
      resource: string;
      /**
       * Sequence for assembly of component.
       */
      sequence?: number;
    }
  | Record<string, any>;
