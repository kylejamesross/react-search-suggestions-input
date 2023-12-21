import { RightIconProperties } from '../../interfaces/icons/right-icon-properties';
import { RightIconContent } from '../search/right-icon-content';
import { StyledRightIcon } from './styled/styled-right-icon';

export const RightIcon = ({ value, onClear }: RightIconProperties) => {
    return (
        <StyledRightIcon>
            <RightIconContent value={value} onClear={onClear} />
        </StyledRightIcon>
    );
};
