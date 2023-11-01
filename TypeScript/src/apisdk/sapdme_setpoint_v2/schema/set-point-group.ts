/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { SetPointGroupContext } from './set-point-group-context';
import type { Timestamp } from './timestamp';
import type { CustomValue } from './custom-value';
import type { SetPointParam } from './set-point-param';
/**
 * This object represents a full Setpoint Group that includes the context and custom values.
 */
export type SetPointGroup =
  | {
      /**
       * A set of other objects that act as contexts for the Setpoint Group.
       */
      contexts?: SetPointGroupContext[];
      /**
       * If true, this version of the Setpoint Group is used in production.
       */
      currentVersion?: boolean;
      createdDatetime?: Timestamp;
      /**
       * Any custom values that may be attached to the Setpoint Group.
       */
      customValues?: CustomValue[];
      /**
       * Setpoint Group description.
       */
      description?: string;
      modifiedDatetime?: Timestamp;
      /**
       * A list of the Setpoint parameters/indicators and their values.
       */
      parameters?: SetPointParam[];
      /**
       * The plant that the Setpoint Group is assigned to.
       */
      plant: string;
      /**
       * Setpoint Group name.
       */
      setPointGroup: string;
      /**
       * Setpoint Group status.
       */
      status?: 'NEW' | 'RELEASABLE' | 'HOLD' | 'OBSOLETE';
      /**
       * Indicates whether or not this Setpoint Group is used in production.
       */
      usedInProduction?: boolean;
      /**
       * Setpoint Group version.
       */
      version: string;
    }
  | Record<string, any>;
