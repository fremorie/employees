/* @flow */

const Mocks = {
    get BaseComponent() {
        let currentProps = {};

        const render = <P>(nextProps: P) => {
            currentProps = nextProps;

            return null;
        };

        /**
         * $FlowIgnore<no Object.defineProperty in flow>
         * @see https://github.com/facebook/flow/issues/5380
         */
        Object.defineProperty(render, 'props', {
            get: () => currentProps,
        });

        return render;
    },
};

export default Mocks;
