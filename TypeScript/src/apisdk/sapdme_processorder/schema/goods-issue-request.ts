/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { Component } from './component';
import type { Bom } from './bom';
/**
 * Request object to perform goods issue.
 */
export type GoodsIssueRequest =
  | {
      /**
       * Plant where goods issue has to be performed.
       */
      plant: string;
      /**
       * Order at which goods issue has to be performed.
       */
      order: string;
      /**
       * Charge of the order at which goods issue has to be performed.
       */
      charge?: string;
      /**
       * Phase at which goods issue has to be performed.
       */
      phase: string;
      /**
       * Work center at which goods issue has to be performed.
       */
      workCenter: string;
      component: Component;
      /**
       * Bom component or non-bom component.
       */
      isBomComponent: boolean;
      bom?: Bom;
      /**
       * Inventory ID for goods issue.
       */
      inventoryId?: string;
      /**
       * Quantity for goods issue.
       */
      quantity: number;
      /**
       * Unit of measure of the quantity.
       */
      unitOfMeasure: string;
      /**
       * ID of the user who posted the goods issue.
       */
      postedBy: string;
      /**
       * Goods issue posting date and time.
       * Format: "yyyy-MM-dd HH:mm:ss".
       */
      postingDateTime: string;
      /**
       * Comments when posting goods issue.
       */
      comments?: string;
      /**
       * Handling unit number for goods issue.
       */
      handlingUnitNumber?: string;
    }
  | Record<string, any>;
