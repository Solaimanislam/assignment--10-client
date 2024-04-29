

const FilterProduct = (props) => {

    const onFilterValueChanged = (e) => {
        // console.log(e.target.value);
        props.filterValueSelected(e.target.value);
    }

    return (
        <div className=" filter-area" onChange={onFilterValueChanged}>
            <select name="isTrue" className="p-3 rounded-lg border-2 border-emerald-400 " >
                <option value="custom">Customization</option>
                <option value="true">True</option>
                <option value="false">False</option>

            </select>
        </div>
    );
};

export default FilterProduct;