import * as p_ from 'pareto-core/interface/command_interface'

import type * as s_stream_log from "./schemas/log.js"
import type * as s_stream_log_errors from "./schemas/log_error.js"
import type * as s_stream_log_error from "./schemas/log_error.js"
import type * as s_stream_write_to_stderr from "./schemas/write_to_stderr.js"
import type * as s_stream_write_to_stdout from "./schemas/write_to_stdout.js"

export type log = p_.Command_Interface<
    null,
    s_stream_log.Parameters
>
export type log_error = p_.Command_Interface<
    null,
    s_stream_log_error.Parameters
>
export type log_errors = p_.Command_Interface<
    null,
    s_stream_log_errors.Parameters
>
export type write_to_stderr = p_.Command_Interface<
    null,
    s_stream_write_to_stderr.Parameters
>
export type write_to_stdout = p_.Command_Interface<
    null,
    s_stream_write_to_stdout.Parameters
>
