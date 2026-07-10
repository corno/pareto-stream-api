import * as p_ from 'pareto-core/interface/command_interface'

import type * as d_stream_log from "./data/log.js"
import type * as d_stream_log_error from "./data/log_error.js"
import type * as d_stream_write_to_stderr from "./data/write_to_stderr.js"
import type * as d_stream_write_to_stdout from "./data/write_to_stdout.js"

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
