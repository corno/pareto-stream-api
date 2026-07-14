
import * as p_i from 'pareto-core/interface/__internal/Abort'

import * as i_imports_fountain_pen from "pareto-fountain-pen/interface/schemas/prose"

export namespace Parameters_ {
    
    export type message = i_imports_fountain_pen.Phrase
    
}

export type Parameters_ = {
    readonly 'message': Parameters_.message
}

export type Error_ = null

export type { 
    Parameters_ as Parameters, 
    Error_ as Error, 
}
