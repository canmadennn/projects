/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { LineItem } from './line-item';
/**
 * Representation of the 'GoodsIssueExtendedSummaryResponseV2' schema.
 */
export type GoodsIssueExtendedSummaryResponseV2 =
  | {
      /**
       * Order for which goods issue summary has been retrieved.
       */
      order?: string;
      /**
       * Sfc for which goods issue summary has been retrieved.
       */
      sfc?: string;
      /**
       * Goods issue summary items.
       */
      lineItems?: LineItem[];
    }
  | Record<string, any>;
