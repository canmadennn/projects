/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { Plant } from './plant';
import type { Order } from './order';
import type { OperationActivity } from './operation-activity';
import type { Resource } from './resource';
import type { StartDateTime } from './start-date-time';
import type { EndDateTime } from './end-date-time';
import type { SpeedLossesItem } from './speed-losses-item';
/**
 * Representation of the 'SpeedLossResponse' schema.
 */
export type SpeedLossResponse =
  | {
      plant?: Plant;
      order?: Order;
      operationActivity?: OperationActivity;
      resource?: Resource;
      startDateTime?: StartDateTime;
      endDateTime?: EndDateTime;
      items?: SpeedLossesItem[];
    }
  | Record<string, any>;
