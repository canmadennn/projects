/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * The primary nonconformance record for logging a secondary nonconformance code.
 */
export type CloseNonConformanceRequest =
  | {
      /**
       * The incident ID reference for closing a nonconformance incident.
       */
      id: string;
      /**
       * The plant in which state is changed.
       */
      plant: string;
    }
  | Record<string, any>;
