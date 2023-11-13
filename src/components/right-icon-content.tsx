import { RightIconProperties } from '../interfaces/right-icon-properties';
import { ClearIcon } from './clear-icon';

export const RightIconContent = ({ value, onClear }: RightIconProperties) => {
    if (value.length > 0) {
        return <ClearIcon onClear={onClear} />;
    }

    return;
};
