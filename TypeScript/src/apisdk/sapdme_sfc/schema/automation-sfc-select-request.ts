/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Object represents a SFC selection with either a resource, operation or workcenter.
 */
export type AutomationSfcSelectRequest =
  | {
      /**
       * The operation of a selected SFC.
       */
      operation?: string;
      /**
       * The plant for the selected SFC
       */
      plant: string;
      /**
       * The resource of a selected SFC.
       */
      resource?: string;
      /**
       * The selected SFC.
       */
      sfc: string;
      /**
       * The workcenter of a selected SFC.
       */
      workCenter?: string;
    }
  | Record<string, any>;
