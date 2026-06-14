import * as _pci from 'pareto-core/dist/command_interface'
import * as _pqi from 'pareto-core/dist/query_interface'


import * as d_stream_log from "./generated/liana/schemas/log/data"
import * as d_stream_log_error from "./generated/liana/schemas/log_error/data"
import * as d_stream_write_to_stderr from "./generated/liana/schemas/write_to_stderr/data"
import * as d_stream_write_to_stdout from "./generated/liana/schemas/write_to_stdout/data"
import * as d_stream_get_instream_data from "./generated/liana/schemas/get_indata/data"

export namespace commands {

    export type log = _pci.Command<null, d_stream_log.Parameters>
    export type log_error = _pci.Command<null, d_stream_log_error.Parameters>
    export type write_to_stderr = _pci.Command<null, d_stream_write_to_stderr.Parameters>
    export type write_to_stdout = _pci.Command<null, d_stream_write_to_stdout.Parameters>

}

export namespace queries {

    export type get_instream_data = _pqi.Query<d_stream_get_instream_data.Result, null, d_stream_get_instream_data.Parameters>

}