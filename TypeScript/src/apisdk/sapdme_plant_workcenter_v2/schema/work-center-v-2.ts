/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { WorkCenterOeeMember } from './work-center-oee-member';
import type { WorkCenterMemberV2 } from './work-center-member-v-2';
import type { UserAssignmentId } from './user-assignment-id';
import type { CustomValue } from './custom-value';
/**
 * Work center
 */
export type WorkCenterV2 =
  | {
      /**
       * The plant where a work center is defined.
       * Pattern: "^(?! )[0-9A-Z_$!)(+~@^=\\-*. ]+(?<! )$".
       */
      plant: string;
      /**
       * The work center value.
       * Pattern: "^(?! )[0-9A-Z_$!)(+~@^=\\-*. ]+(?<! )$".
       */
      workCenter: string;
      /**
       * The work center status.
       */
      status: 'DISABLED' | 'ENABLED';
      /**
       * Indicates if this work center can be released.
       */
      canBeReleasedTo?: boolean;
      /**
       * Defines the category of the work center.
       */
      category?:
        | 'BUILDING'
        | 'CELL'
        | 'CELL_GROUP'
        | 'LINE'
        | 'LINE_GROUP'
        | 'NONE';
      /**
       * The work center description.
       */
      description?: string;
      /**
       * Indicates if a work center was transferred from SAP ERP.
       */
      isErp?: boolean;
      /**
       * Defines a maximum number of people for this work center.
       * Format: "int32".
       */
      maxNumberPeople?: number;
      /**
       * Defines a minimum number of people for this work center.
       * Format: "int32".
       */
      minNumberPeople?: number;
      /**
       * Defines a production supply area.
       */
      productionSupplyArea?: string;
      /**
       * Work center OEE members
       */
      oeeMembers?: WorkCenterOeeMember[];
      /**
       * Work center members
       */
      members?: WorkCenterMemberV2[];
      /**
       * The users who are assigned to this work center.
       */
      userAssignments?: UserAssignmentId[];
      /**
       * Work center custom values
       */
      customValues?: CustomValue[];
      /**
       * The date and time when the work center was created. Format (ISO-8601): yyyy-MM-dd'T'HH:mm:ss'Z'
       * @example "2021-07-29T03:53:33Z"
       */
      createdOn?: string;
      /**
       * The date and time when the the work center was updated. Format (ISO-8601): yyyy-MM-dd'T'HH:mm:ss'Z'
       * @example "2021-07-29T03:53:33Z"
       */
      modifiedOn?: string;
    }
  | Record<string, any>;
