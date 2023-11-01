/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { SetPointParam } from './set-point-param';
/**
 * This object represents a partial Setpoint Group that does not include all of the children collections.
 */
export type SetPoint =
  | {
      /**
       * If true, this version of the Setpoint Group is used in production.
       */
      currentVersion?: boolean;
      /**
       * The description of the Setpoint Group.
       */
      description?: string;
      /**
       * A list of the Setpoint parameters/indicators and their values.
       */
      parameters?: SetPointParam[];
      /**
       * The plant that the Setpoint Group is assigned to.
       */
      plant: string;
      /**
       * Setpoint name.
       */
      setPoint: string;
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
