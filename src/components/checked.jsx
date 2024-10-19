import "../style/checked.css"

const Checked = ({checked, handleOnChange}) => {

    return (
        <label for="checkbox" style={{ backgroundColor: `${checked ? "#32de84" : "#FEBE10"}` }} htmlFor="">
            <input id='checkbox' onChange={handleOnChange} checked={checked} type="checkbox" />
        </label>
    );
}

export default Checked;