
import * as p_i from 'pareto-core/interface/__internal/Abort'

import * as i_imports_fountain_pen from "./fountain_pen.js"

export namespace Parameters_ {
    
    export type message = i_imports_fountain_pen.Paragraph
    
}

export type Parameters_ = {
    readonly 'message': Parameters_.message
}

export type Error_ = null

export type { 
    Parameters_ as Parameters, 
    Error_ as Error, 
}
