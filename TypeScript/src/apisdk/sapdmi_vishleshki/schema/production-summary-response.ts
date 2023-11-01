/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { Plant } from './plant';
import type { StartDateTime } from './start-date-time';
import type { EndDateTime } from './end-date-time';
import type { ProductionSummaryItem } from './production-summary-item';
/**
 * Representation of the 'ProductionSummaryResponse' schema.
 */
export type ProductionSummaryResponse =
  | {
      plant?: Plant;
      startDateTime?: StartDateTime;
      endDateTime?: EndDateTime;
      items?: ProductionSummaryItem[];
    }
  | Record<string, any>;
