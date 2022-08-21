interface Props {
    title: string;
    active: boolean;
}

function Tab({ title, active }: Props) {
    return (
        <div className={`${active && 'active-tab'} cursor-pointer`}>
            <h2
                className={`text-white text-2xl font-semibold py-3 ${
                    active && 'primary-color'
                }`}
            >
                {title}
            </h2>
        </div>
    );
}

export default Tab;
