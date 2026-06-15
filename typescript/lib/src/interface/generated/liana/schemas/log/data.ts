
import * as p_i from 'pareto-core/dist/interface/__internal/Abort'

import * as i_imports_fountain_pen from "../fountain_pen/data"

export namespace Parameters_ {
    
    export type message = i_imports_fountain_pen.Paragraph
    
}

export type Parameters_ = {
    readonly 'message': Parameters_.message
}

export type Error_ = null

export { 
    Parameters_ as Parameters, 
    Error_ as Error, 
}
