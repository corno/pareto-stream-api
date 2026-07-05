import * as p_ from 'pareto-core/interface/query'

import * as d_stream_get_instream_data from "./generated/liana/schemas/get_indata/data.js"

export namespace queries {

    export type get_instream_data = p_.Query<d_stream_get_instream_data.Result, null, d_stream_get_instream_data.Parameters>

}