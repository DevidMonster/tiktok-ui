import { memo } from 'react';

import AccountItem from '~/components/AccountItem/AccountItem';
import PropTypes from 'prop-types';

function SearhResult({ value }) {
    const searchResult = value;
    return searchResult.map((result) => <AccountItem key={result.id} data={result} />);
}

SearhResult.propTypes = {
    value: PropTypes.array,
};

export default memo(SearhResult);
