/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { Timestamp } from './timestamp';
/**
 * Representation of the 'InspectionLogView' schema.
 */
export type InspectionLogView =
  | {
      fileId?: string;
      inspectionLogTime?: Timestamp;
      inspectionType?: string;
      inspectionViewName?: string;
      loggedAnnotation?: string;
      loggedNCCode?: string;
      material?: string;
      operation?: string;
      plant?: string;
      predictedAnnotation?: string;
      predictedClass?: string;
      predictedNCCode?: string;
      resource?: string;
      routing?: string;
      sfcId?: string;
      source?: string;
    }
  | Record<string, any>;
