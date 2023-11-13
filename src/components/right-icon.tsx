import { RightIconProperties } from '../interfaces/right-icon-properties';
import { RightIconContent } from './right-icon-content';
import { StyledRightIcon } from './styled-right-icon';

export const RightIcon = ({ value, onClear }: RightIconProperties) => {
    return (
        <StyledRightIcon>
            <RightIconContent value={value} onClear={onClear} />
        </StyledRightIcon>
    );
};
