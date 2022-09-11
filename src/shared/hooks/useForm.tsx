import { ChangeEvent, useEffect, useState } from 'react';

export const useForm = <T extends Object>( initState: T ) => {
  
    const [ formState, setFormState ] = useState(initState);

    useEffect(() => {
        setFormState(initState);
    }, [initState]);

    const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initState );
    }


    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}