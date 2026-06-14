import * as pci from 'pareto-core/dist/command_interface'
import * as pqi from 'pareto-core/dist/query_interface'


import * as d_stream_log from "./generated/liana/schemas/log/data"
import * as d_stream_log_error from "./generated/liana/schemas/log_error/data"
import * as d_stream_write_to_stderr from "./generated/liana/schemas/write_to_stderr/data"
import * as d_stream_write_to_stdout from "./generated/liana/schemas/write_to_stdout/data"
import * as d_stream_get_instream_data from "./generated/liana/schemas/get_indata/data"

export namespace commands {

    export type log = pci.Command<null, d_stream_log.Parameters>
    export type log_error = pci.Command<null, d_stream_log_error.Parameters>
    export type write_to_stderr = pci.Command<null, d_stream_write_to_stderr.Parameters>
    export type write_to_stdout = pci.Command<null, d_stream_write_to_stdout.Parameters>

}

export namespace queries {

    export type get_instream_data = pqi.Query<d_stream_get_instream_data.Result, null, d_stream_get_instream_data.Parameters>

}