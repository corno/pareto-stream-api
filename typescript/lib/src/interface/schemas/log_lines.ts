import * as p_ from 'pareto-core/interface/schema'


export namespace Parameters_ {
    
    export type lines = p_.List<string>
    
}

export type Parameters_ = {
    readonly 'lines': Parameters_.lines
}

export type Error_ = null

export type { 
    Parameters_ as Parameters, 
    Error_ as Error, 
}
