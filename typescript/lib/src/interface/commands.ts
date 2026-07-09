import * as p_ from 'pareto-core/interface/command_interface'

import type * as d_stream_log from "./generated/liana/schemas/log/data.js"
import type * as d_stream_log_error from "./generated/liana/schemas/log_error/data.js"
import type * as d_stream_write_to_stderr from "./generated/liana/schemas/write_to_stderr/data.js"
import type * as d_stream_write_to_stdout from "./generated/liana/schemas/write_to_stdout/data.js"

export type log = p_.Command_Interface<
    null,
    d_stream_log.Parameters
>
export type log_error = p_.Command_Interface<
    null,
    d_stream_log_error.Parameters
>
export type write_to_stderr = p_.Command_Interface<
    null,
    d_stream_write_to_stderr.Parameters
>
export type write_to_stdout = p_.Command_Interface<
    null,
    d_stream_write_to_stdout.Parameters
>
