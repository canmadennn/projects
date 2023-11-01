/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { ResourceId } from './resource-id';
import type { WorkCenterOeeMemberNode } from './work-center-oee-member-node';
/**
 * Defines resource memebers that are part of the OEE hierarchy.
 */
export type WorkCenterOeeMember =
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
      /**
       * Members of this node.
       */
      members?: WorkCenterOeeMemberNode[];
    }
  | Record<string, any>;
