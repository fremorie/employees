// @flow

import React from 'react';

type Props = {|
    nCols: number,
|};

const EmptyTable = ({nCols}: Props) => (
    <tr>
        {Array.from(Array(nCols).keys()).map((_, i) => <td key={i}>&nbsp;</td>)}
    </tr>
);

export default EmptyTable;
