import * as p_ci from 'pareto-core/dist/interface/command'


import * as d_stream_log from "./generated/liana/schemas/log/data"
import * as d_stream_log_error from "./generated/liana/schemas/log_error/data"
import * as d_stream_write_to_stderr from "./generated/liana/schemas/write_to_stderr/data"
import * as d_stream_write_to_stdout from "./generated/liana/schemas/write_to_stdout/data"

export namespace commands {

    export type log = p_ci.Command<null, d_stream_log.Parameters>
    export type log_error = p_ci.Command<null, d_stream_log_error.Parameters>
    export type write_to_stderr = p_ci.Command<null, d_stream_write_to_stderr.Parameters>
    export type write_to_stdout = p_ci.Command<null, d_stream_write_to_stdout.Parameters>

}