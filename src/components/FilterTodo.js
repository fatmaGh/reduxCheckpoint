import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const FilterTodo = ({setDone, setUnDone}) => {
    return (
        <div className='checkbox__container'>
            <FormControlLabel 
            control={
                    <Checkbox
                        onChange={(e)=>setDone(e.target.checked)}
                        name="checkedF"
                        color="primary"                    
                    />
                    }
            label="Done"
            />
            <FormControlLabel 
            control={
                    <Checkbox
                        onChange={(e)=>setUnDone(e.target.checked)}
                        name="checkedF"
                        color="primary"
                    />
                    }
            label="UnDone"
            />
        </div>
    )
}

export default FilterTodo
