// @flow

import React from 'react';

type Props = {|
    nCols: number,
|};

const EmptyTable = ({nCols}: Props) => (
    <tr>
        <td colSpan={nCols}>
            Здесь пока ничего нет
        </td>
    </tr>
);

export default EmptyTable;
