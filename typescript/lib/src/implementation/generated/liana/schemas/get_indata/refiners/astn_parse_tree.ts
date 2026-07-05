
import * as p_ from 'pareto-core/implementation/refiner'

import p_change_context from 'pareto-core/implementation/refiner/specials/change_context'

import p_list_from_text from 'pareto-core/implementation/refiner/specials/list_from_text'

import p_variables from 'pareto-core/implementation/refiner/specials/variables'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/get_indata/signatures/refiners/astn_parse_tree.js"

import * as t_out from "../../../../../../interface/generated/liana/schemas/get_indata/data.js"

import * as v_unmarshalled_from_parse_tree from "liana-core/implementation/manual/refiners/unmarshalled/astn_parse_tree"

import * as v_parse_tree_to_location from "liana-core/implementation/manual/transformers/parse_tree/start_token_range"

export const Parameters: t_signatures.Parameters = ($, abort) => v_unmarshalled_from_parse_tree.Nothing(
    $,
    ($) => abort(
        $,
    ),
)

export const Result: t_signatures.Result = ($, abort) => v_unmarshalled_from_parse_tree.Text(
    $,
    ($) => abort(
        $,
    ),
)
