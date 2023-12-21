import { RightIconProperties } from '../../interfaces/icons/right-icon-properties';
import { ClearIcon } from '../icons/clear-icon';

export const RightIconContent = ({ value, onClear }: RightIconProperties) => {
    if (value.length > 0) {
        return <ClearIcon onClear={onClear} />;
    }

    return;
};
