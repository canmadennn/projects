/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { Quantity } from './quantity';
import type { Detail } from './detail';
/**
 * Quantity confirmation postings response
 */
export type QuantityConfirmationPostingsResponse =
  | {
      /**
       * Shop order for quantity confirmation postings retrieval
       */
      shopOrder?: string;
      /**
       * SFC for quantity confirmation postings retrieval
       */
      sfc?: string;
      /**
       * OperationActivity for quantity confirmation postings retrieval
       */
      operationActivity?: string;
      /**
       * Material for quantity confirmation postings retrieval
       */
      material?: string;
      /**
       * Material version for quantity confirmation postings retrieval
       */
      materialVersion?: string;
      totalYieldQuantity?: Quantity;
      totalScrapQuantity?: Quantity;
      /**
       * Details of quantity confirmations
       */
      details?: Detail[];
    }
  | Record<string, any>;
