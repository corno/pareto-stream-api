import type * as s_paragraph from "pareto-fountain-pen/modules/paragraph/schemas/paragraph/schema"


export namespace Parameters_ {
    
    export type paragraph = s_paragraph.Paragraph
    
}

export type Parameters_ = {
    readonly 'paragraph': Parameters_.paragraph
    readonly 'indentation': string
    readonly 'newline': string
}

export type Error_ = null

export type { 
    Parameters_ as Parameters, 
    Error_ as Error, 
}
