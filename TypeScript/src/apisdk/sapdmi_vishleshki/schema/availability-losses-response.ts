/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { Plant } from './plant';
import type { StartDateTime } from './start-date-time';
import type { EndDateTime } from './end-date-time';
import type { TimeElementType } from './time-element-type';
import type { AvailabilityLossesItem } from './availability-losses-item';
/**
 * Representation of the 'AvailabilityLossesResponse' schema.
 */
export type AvailabilityLossesResponse =
  | {
      plant?: Plant;
      startDateTime?: StartDateTime;
      endDateTime?: EndDateTime;
      timeElementType?: TimeElementType;
      items?: AvailabilityLossesItem[];
    }
  | Record<string, any>;
