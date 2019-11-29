import React from 'react';
import Button from '@material-ui/core/Button';

function FilterButton({ currentFilter, filterName, children, changeFilter }) {
    return (
        <Button
            onClick={() => changeFilter(filterName)}
            variant={currentFilter === filterName ? 'contained' : null}
        >
            {children}
        </Button>
    );
}

export default FilterButton;
