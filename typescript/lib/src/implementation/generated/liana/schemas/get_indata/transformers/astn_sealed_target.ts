
import * as p_ from 'pareto-core/implementation/transformer'

import p_change_context from 'pareto-core/implementation/refiner/specials/change_context'

import _p_text_from_list from 'pareto-core/implementation/transformer/specials/text_from_list'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/get_indata/signatures/transformers/astn_sealed_target.js"

import * as t_out from "astn-core/interface/generated/liana/schemas/sealed_target/data"

import * as v_primitives_to_text from "liana-core/implementation/manual/transformers/primitives/text"

export const Parameters: t_signatures.Parameters = ($) => ['nothing', null]

export const Result: t_signatures.Result = ($) => ['text', {
    'delimiter': ['quote', null],
    'value': $,
}]
