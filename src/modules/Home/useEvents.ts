import { useDispatch, useSelector } from 'react-redux';
import { fireClickAction } from './ducks';
import { fireClick } from '../selectors';
export const useEvents = () => {
    const dispatch = useDispatch();
    const response = useSelector(fireClick);
    if (response) {
        console.log(response);
    }
    const clickHandler = () => {
        dispatch(fireClickAction({
            message: 'Action Dispached'
        }))
    }
    return {
        clickHandler,
    }
}