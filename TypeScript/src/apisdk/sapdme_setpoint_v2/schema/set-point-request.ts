/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { Material } from './material';
import type { Operation } from './operation';
/**
 * This object represents the data that is used to retrieve or write Setpoint Group parameters/indicators values to a machine.
 */
export type SetPointRequest =
  | {
      material?: Material;
      operation?: Operation;
      /**
       * A parameter or indicator name that can be used to narrow down the Setpoint Groups that are returned.
       */
      parameter?: string;
      /**
       * The plant that the Setpoint Group is assigned to.
       */
      plant: string;
      /**
       * The resource that the Setpoint Groups are associated with.
       */
      resource: string;
      /**
       * A Setpoint name that can be used to narrow down the Setpoint Groups that are returned.
       */
      setPointGroup?: string;
      /**
       * A set of SFCs that can be used to provide additional context for the Setpoint Groups.
       */
      sfcs?: string[];
    }
  | Record<string, any>;
