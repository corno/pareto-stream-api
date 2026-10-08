# Pareto Stream API

## Paragraph output

`log_paragraph` and `log_error_paragraph` accept:

```typescript
{
    paragraph: Paragraph,
    indentation: string,
    newline: string,
}
```

`Paragraph` is from `pareto-fountain-pen/modules/paragraph/schemas/paragraph/schema`.
Resources serialize it directly to stdout or stderr with a newline after each
serialized sentence. Indentation and newline are explicit, typically `"    "`
and `"\n"`. Redirected output can use `"\r\n"` without changing the paragraph.

These replace `log_lines` and `log_error_lines`; resource command keys are
`log paragraph` and `log error paragraph`. Callers must pass paragraphs rather
than lists of serialized strings.

The single-string `log_error_line` and raw character `write_to_stdout` /
`write_to_stderr` interfaces are unchanged.
