import * as p_ from 'pareto-core/interface/query_interface'

import type * as s_stream_get_instream_data from "./schemas/get_indata.js"


export type get_instream_data = p_.Query_Interface<
    s_stream_get_instream_data.Result,
    null,
    s_stream_get_instream_data.Parameters
>
