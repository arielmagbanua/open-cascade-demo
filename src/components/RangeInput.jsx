import classNames from 'classnames';

export default function RangeInput({ value, onChange, className }) {
  const classes = classNames('range-input-controls', className)
  return (
    <div className={classes}>
      <label htmlFor="sphere-size">{`Sphere Size (${value}): `}</label>
      <input
        value={value}
        type="range"
        id="sphere-size"
        name="sphere-size"
        max="1"
        step="0.01"
        onChange={onChange}
      />
    </div>
  );
}