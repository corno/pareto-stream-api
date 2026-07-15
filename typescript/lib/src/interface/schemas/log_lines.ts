import * as p_ from 'pareto-core/interface/schema'


export namespace Parameters_ {
    
    export type messages = p_.List<string>
    
}

export type Parameters_ = {
    readonly 'messages': Parameters_.messages
}

export type Error_ = null

export type { 
    Parameters_ as Parameters, 
    Error_ as Error, 
}
