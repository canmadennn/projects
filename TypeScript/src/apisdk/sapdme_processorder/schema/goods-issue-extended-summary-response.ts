/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { LineItem } from './line-item';
/**
 * Representation of the 'GoodsIssueExtendedSummaryResponse' schema.
 */
export type GoodsIssueExtendedSummaryResponse =
  | {
      'Order of the phase.'?: string;
      'Material for which goods issue has been performed.'?: string;
      'Line items of goods issue summary.'?: LineItem[];
    }
  | Record<string, any>;
