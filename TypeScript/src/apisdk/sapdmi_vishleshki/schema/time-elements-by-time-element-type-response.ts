/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { Plant } from './plant';
import type { StartDateTime } from './start-date-time';
import type { EndDateTime } from './end-date-time';
import type { TimeElementType } from './time-element-type';
import type { TimeElementsByTimeElementTypeItem } from './time-elements-by-time-element-type-item';
/**
 * Representation of the 'TimeElementsByTimeElementTypeResponse' schema.
 */
export type TimeElementsByTimeElementTypeResponse =
  | {
      plant?: Plant;
      startDateTime?: StartDateTime;
      endDateTime?: EndDateTime;
      timeElementType?: TimeElementType;
      items?: TimeElementsByTimeElementTypeItem[];
    }
  | Record<string, any>;
