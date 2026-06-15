import * as p_qi from 'pareto-core/dist/interface/query'

import * as d_stream_get_instream_data from "./generated/liana/schemas/get_indata/data"

export namespace queries {

    export type get_instream_data = p_qi.Query<d_stream_get_instream_data.Result, null, d_stream_get_instream_data.Parameters>

}