import * as p_ from 'pareto-core/command_interface'

import type * as s_stream_log_lines from "../schemas/log_lines/schema.js"
import type * as s_stream_log_error_lines from "../schemas/log_error_lines/schema.js"
import type * as s_stream_log_error_line from "../schemas/log_error_line/schema.js"
import type * as s_stream_write_to_stderr from "../schemas/write_to_stderr/schema.js"
import type * as s_stream_write_to_stdout from "../schemas/write_to_stdout/schema.js"

export type log_lines = p_.Command_Interface<
    null,
    s_stream_log_lines.Parameters
>
export type log_error_line = p_.Command_Interface<
    null,
    s_stream_log_error_line.Parameters
>
export type log_error_lines = p_.Command_Interface<
    null,
    s_stream_log_error_lines.Parameters
>
export type write_to_stderr = p_.Command_Interface<
    null,
    s_stream_write_to_stderr.Parameters
>
export type write_to_stdout = p_.Command_Interface<
    null,
    s_stream_write_to_stdout.Parameters
>
