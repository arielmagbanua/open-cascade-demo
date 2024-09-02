import classNames from 'classnames';

export default function RangeInput({ label, id, value, onChange, className, ...restProps }) {
  const classes = classNames('range-input-controls', className)
  return (
    <div className={classes}>
      <label htmlFor={id}>{`${label} (${value}): `}</label>
      <input
        value={value}
        type="range"
        id={id}
        onChange={onChange}
        {...restProps}
      />
    </div>
  );
}