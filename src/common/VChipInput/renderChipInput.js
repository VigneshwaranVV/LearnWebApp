import React from 'react';
import ChipInput from 'material-ui-chip-input';

const RenderChipInput = ({ input, label, meta: { touched, error } }) => (
    <ChipInput {...input}
        label={label}
        style={{width: '100%'}}
        value={input.value || []}
        onAdd={(addedChip) => {
            let values = input.value || [];
            values = values.slice();
            values.push(addedChip);
            input.onChange(values);
        }}
        onDelete={(deletedChip) => {
            let values = input.value || [];
            values = values.filter(v => v !== deletedChip);
            input.onChange(values);
        }}
        onBlur={() => input.onBlur()}
    />
);

export default RenderChipInput;