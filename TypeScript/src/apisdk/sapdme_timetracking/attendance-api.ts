/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type {
  AttendanceApiRequest,
  AttendanceCreateRequest,
  AttendanceEditRequest
} from './schema';
/**
 * Representation of the 'AttendanceApi'.
 * This API is part of the 'sapdme_timetracking' service.
 */
export const AttendanceApi = {
  /**
   * Create a start event for attendance to clock in a user.
   * @param body - Request body.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  attendanceStart: (body: AttendanceApiRequest) =>
    new OpenApiRequestBuilder<any>('post', '/v1/attendance/start', {
      body
    }),
  /**
   * Create a stop event for attendance to clock out a user.
   * @param body - Request body.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  attendanceStop: (body: AttendanceApiRequest) =>
    new OpenApiRequestBuilder<any>('post', '/v1/attendance/stop', {
      body
    }),
  /**
   * Create a time record for a user to record attendance.
   * @param body - Request body.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  attendanceCreate: (body: AttendanceCreateRequest) =>
    new OpenApiRequestBuilder<any>('post', '/v1/attendance', {
      body
    }),
  /**
   * Update a defined attendance time record for a user.
   * @param id - The ID of the time record
   * @param body - Request body.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  attendanceEdit: (id: string, body: AttendanceEditRequest) =>
    new OpenApiRequestBuilder<any>('patch', '/v1/attendance/{id}', {
      pathParameters: { id },
      body
    })
};
