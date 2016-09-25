import React from 'react';

const Checkbox = ({value, title, onChange}) => {

    return (
      <div class='filter'>
        <a class="checkbox">
          <label>
            <input type="checkbox"
                   checked={value}
                   onChange={e => onChange(!value)} />
                   {title}
          </label>
        </a>
      </div>
    );

};

Checkbox.propTypes = {
  value: React.PropTypes.bool.isRequired,
  title: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func
};

export default Checkbox;
