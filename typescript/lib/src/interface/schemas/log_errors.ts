
import * as i_imports_fountain_pen from "pareto-fountain-pen/interface/schemas/prose"

export namespace Parameters_ {
    
    export type messages = i_imports_fountain_pen.Paragraph
    
}

export type Parameters_ = {
    readonly 'messages': Parameters_.messages
}

export type Error_ = null

export type { 
    Parameters_ as Parameters, 
    Error_ as Error, 
}
