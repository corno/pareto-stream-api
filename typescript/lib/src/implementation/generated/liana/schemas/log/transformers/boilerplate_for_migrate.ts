
import * as p_ from 'pareto-core/implementation/transformer'

import p_change_context from 'pareto-core/implementation/refiner/specials/change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/log/signatures/transformers/boilerplate_for_migrate.js"

import * as t_out from "../../../../../../interface/generated/liana/schemas/log/data.js"

import * as v_fountain_pen from "../../fountain_pen/transformers/boilerplate_for_migrate.js"

export const Parameters: t_signatures.Parameters = ($) => ({
    'message': p_change_context(
        $['message'],
        ($) => v_fountain_pen.Paragraph(
            $,
        ),
    ),
})

export const Error: t_signatures.Error = ($) => null
