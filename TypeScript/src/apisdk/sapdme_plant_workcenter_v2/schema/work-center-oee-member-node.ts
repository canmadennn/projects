/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { ResourceId } from './resource-id';
/**
 * Defines resource memebers that are part of the OEE hierarchy.
 */
export type WorkCenterOeeMemberNode =
  | {
      /**
       * Represents a bottleneck multiplier.
       */
      bottleneckMultiplier?: number;
      /**
       * Indicates if this resource is a bottleneck.
       */
      isBottleneck?: boolean;
      resource?: ResourceId;
      /**
       * The status of the OEE work center member.
       */
      status?: 'DISABLED' | 'ENABLED';
    }
  | Record<string, any>;
