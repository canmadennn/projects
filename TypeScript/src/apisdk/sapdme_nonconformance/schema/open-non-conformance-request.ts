/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * The request to change state to open for nonconformance.
 */
export type OpenNonConformanceRequest =
  | {
      /**
       * The incident ID reference for reopening a nonconformance incident.
       */
      id: string;
      /**
       * The plant in which state is changed.
       */
      plant: string;
    }
  | Record<string, any>;
